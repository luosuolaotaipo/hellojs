var socketIO = require('socket.io');
var IO;
var guestNumber = 1;
var nickNames = {};
var nameUsed = [];
var currentRoom = {};
// ??全局的？
exports.listen=function(server){
    IO=socketIO.listen(server);//启动socketIO服务器，搭载http服务器上
    IO.set('log level',1);//??
    IO.sockets.on('connection',(socket)=>{
        guestNumber = assignGuestName(socket,guestNumber,nickNames,nameUsed);
        joinRoom(socket,'Lobby');
        handleNameChangeAttempts(socket,nickNames,nameUsed);
        handleRoomJoin(socket);
        handleMessageBroadcasting(socket);
        handleClientDisconnection(socket);
        socket.on('rooms',()=>{
            socket.emit('rooms',IO.sockets.manager.rooms);
        })
    })
}
/**
 * 
 * @param {listener} socket 
 * @param {用户数} guestNumber 
 * @param {用socket.id作为key的键值对} nickNames 
 * @param {已经用过的name的数组} nameUsed 
 */
function assignGuestName(socket,guestNumber,nickNames,nameUsed){
    var guestName = 'Guest'+guestNumber;
    nickNames[socket.id] = guestName;
    socket.emit('nameResult',{success:true,name:guestName});//让用户知道他们的昵称
    nameUsed.push(guestName);
    return guestNumber++;
}

/**
 * 
 * @param {listener} socket 
 * @param {*} room 
 */
function joinRoom(socket,room){
    socket.join(room);//让用户进入房间
    currentRoom[socket.id]=room;//记录当前房间
    socket.emit('joinResult',{success:true,room:room});//发送加入成功信息
    socket.broadcast.to(room).emit('message',{
        text:nickNames[socket.id]+'has joined'+room
    });//广播
    var usersInRoom = IO.of('/').in(room).clients;
    if(usersInRoom.length>1){
        var usersInRoomMsg = 'Users currently in room are:';
        usersInRoom.map((item)=>{
            var tempUserSocketId = usersInRoom[item].id;
            if(tempUserSocketId != socket.id){
                if(item>0){
                    usersInRoomMsg+=',';
                }
                usersInRoomMsg += nickNames[tempUserSocketId];
            }
        });
    }
    usersInRoomMsg += '.';
    socket.emit('message',{text:usersInRoomMsg});
}

function handleNameChangeAttempts(socket,nickname,nameused){
    socket.on('nameAttempt',(name)=>{ // 添加nameAttempt事件监听？？
        if(name.indexOf('Guest')==0){ //昵称不能以guest开头
            socket.emit('ChangeNameResult',{success:false,message:'Names cannot begin with "Guest"'});
        }else{
            if(nameused.indexOf(name)==-1){
                var previousName = nickname[socket.id];
                var preNameIndex = nameused.indexOf(previousName);
                delete nameused(preNameIndex);//删除原来的昵称
                nickname[socket.id]=name;
                nameused.push(name);
                socket.emit('ChangeNameResult',{success:true,name:name});
                socket.broadcast.to(currentRoom[socket.id]).emit('message',{text:previousName+' is now change to '+name});
            }else{
                socket.emit('ChangeNameResult',{success:false,message:'That name is already in use'});
            }
        }
    })
}

function handleMessageBroadcasting(socket){
    socket.on('message',(message)=>{
        socket.broadcast.to(message.room).emit('message',{text:nickNames[socket.id]+': '+message.text})//这里是一个message事件还是两个不同的？
    })
}
/**
 * 
 * @param {*} socket 
 * 加入已有房间，如果没有就创建一个
 */
function handleRoomJoin(socket){
    socket.on('join',(room)=>{
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket,room.newRoom);//new room???
    })
}

function handleClientDisconnection(socket){
    socket.on('disconnect',()=>{
        var nameIndex = nameUsed.indexOf(nickNames[socket.id]);
        delete nameUsed[nameIndex];
        delete nickNames[socket.id];
    })
}



function divEscapedContentElement(message){
    return $('<div></div>').text(message);
}

function divSystemContentElement(message){
    return $('<div></div>').html('<li>'+message+'</li>');
}

function processUserInput(chatApp,socket){
    var message = $('#send-message').val();
    var sysMessage;
    if(message.charAt(0)=='/'){
        sysMessage=chatApp.processCommand(message);
        if(sysMessage){
            $('#messages').append(divSystemContentElement(sysMessage));
        }
    }else{
            chatApp.sendMessage($('#room').text(),message);
            $('#messages').append(divEscapedContentElement(message));
            $('#messages').scrollTop($('#messages').prop('scrollHeight'));
        }
    $('#send-message').val(' ');
}

var socket = io.connect();
$(document).ready(()=>{
    var chatApp = new chat(socket);
    socket.on('nameResult',(result)=>{
        // server端assignGuestName 发送的nameResult事件
        var message;
        if(result.success){
            message = `You're know as ${result.name} .`;
        }else{
            message = result.message;
        }
        $('#messages').append(divSystemContentElement(message))
    });

    socket.on('joinResult',(result)=>{
        $('#room').text(result.room);
        $('#messages').append(divSystemContentElement('Room changed'));
    });

    socket.on('message',(message)=>{
        var newElement = $('<div></div>').text(message.text);
        $('#messages').append(newElement);
    });

    socket.on('rooms',(rooms)=>{
        $('#room-list').empty();
        for(var room in rooms){
            room = room.substring(1,room.length);
            if(room !== ''){
                $('#room-list').append(divEscapedContentElement(room));
            }
        }

        $('#room-list div').click(()=>{
            chatApp.processCommand('/join'+$(this).text());
            $('#send-message').focus();
        });

        setInterval(() => {
            socket.emit('rooms');
        }, 1000);

        $('#send-message').focus();

        $('#send-form').submit(()=>{
            processUserInput(chatApp,socket);
            return false;
        })
    })
})
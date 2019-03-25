class chat{
    constructor(socket){
        this.socket = socket;
    }
    sendMessage(room,text){
        var message={
            "room":room,
            "text":text
        }
        this.socket.emit('message',message);
    }

    changeRoom(room){
        this.socket.emit('join',{"newRoom":room});
    }

    processCommand(command){
        var words=command.splict(' ');
        //substring(a,b) 提取下标之间的字符
        var command = words[0].substring(1,words[0].length).toLowerCase();// "用第一个单词解析命令"
        var message = false;
        switch(command){
            case 'join':{
                //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
                words.shift();
                //arrayObject.join(separator) 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
                var room = words.join(' ');
                this.changeRoom(room);
                break;
            }
            case 'nick':{
                words.shift();
                var name = words.join(' ');
                this.socket.emit('nameAttempt',name);
                break;
            }
            default:{
                message='Unrecognized command';
                break;
            }
        }
        return message;
    }

    
}
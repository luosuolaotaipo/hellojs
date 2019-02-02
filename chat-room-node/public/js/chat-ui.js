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

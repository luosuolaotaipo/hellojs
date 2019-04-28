// function Race(ctrlHandler,...playerBtnHandler){
//     this.raceBtnStatus = true;
//     var playersPromise = [];
//     playerBtnHandler.forEach(btnHandler=>btnHandler.then(res=>{
//         playersPromise.push(Promise.resolve(res));
//     }));
//     var ctrlPromise = Promise.resolve(this.raceBtnStatus);
//     this.controlBtn = function(){
//         console.log('ctrl')
//         // setTimeout(() => {
//         //     raceBtnStatus = !raceBtnStatus;
//         //     return Promise.rej()
//         // }, 3000);
//         ctrlPromise.resolve(this.raceBtnStatus);
//     }
//     this.raceRes = ctrlPromise.then((btnStatus)=>{
//         console.log('ctrl btn clicked'+ btnStatus);
//         Promise.race(playersPromise).then((player)=>{
//             console.log(player);
//         })
//     },(btnRej)=>{
    
//     });
// }
var player1Pro = new Promise((val)=>{console.log('1:'+val)},(rej)=>{console.error('1:'+rej)});
var player2Pro = new Promise((val)=>{console.log('2:'+val)},(rej)=>{console.error('2:'+rej)});
// var ctrlPro =Promise.reject('not start');
var btnStatus = false;
function player1(){
    player1Pro.resolve('player1');
}
function player2(){
    player2Pro = Promise.resolve('player2');
}
// var raceGroup1 = new Race([player1(),player2()]);

// 点击内3s抢答,3s重置
function controlBtn(){
    btnStatus = !btnStatus;
    let ctrlPro;
    if(btnStatus){
        ctrlPro = Promise.resolve('ctrl started');
        setTimeout(() => {
            btnStatus = false;
        }, 3000);
    }else{
        ctrlPro = Promise.reject('not start');
    }

    ctrlPro.then((started)=>{
        console.log(started);
        Promise.race([player1Pro,player2Pro]).then((playerRes)=>{
            console.log(playerRes);
        })
    })
}


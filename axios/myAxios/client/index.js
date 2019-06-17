import myAxios from './myaxios.js';

var myaxios = new myAxios({
    'method':'get',
    'headers':{
        a:1
    }
});
myaxios.request({
    'url':'http://localhost:3000/data',
    'data':{
        x:1
    },
    'headers':{
        b:2
    }
}).then(res=>{
    console.log(res);
})

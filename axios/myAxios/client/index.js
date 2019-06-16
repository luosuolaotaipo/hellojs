import myAxios from './myaxios.js';

var myaxios = new myAxios({
    'method':'get'
});
myaxios.request({
    'url':'http://localhost:3000/data'
})

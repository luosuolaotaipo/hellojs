import utils from './util.js'

/**
 * @description: myAxios:请求调度，处理配置，管理请求
 * config:默认配置
 * util:工具类
 * interceptorManager:拦截器管理类，管理请求和响应拦截器的注册和销毁
 * adapter:适配器类，适配浏览器<=>node的请求和响应
 * 
 * @param config:初始化配置
 */
function myAxios(config) {

    this.config = config;
}

/**
 * @param 具体config配置
 */
myAxios.prototype.request = function(config){
    // 把传入config和this.config进行必要的合并
    var config = utils.mergeConfig(this.config,config);
    console.log(config);
    // return new Promise(function(res,rej){
    //     var xhr = new XMLHttpRequest();
    //     xhr.onload = function(){
    //        res(this.responseText);
    //     }
    //     xhr.open(config.method,config.url,true);
    //     xhr.send();
        
    // })
    return new Promise((res,rej)=>{
        var xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
        //    res(this.responseText); //指向myAxios
            res(xhr.responseText);
        }
        xhr.open(config.method,config.url,true);
        xhr.send();
    })
   
}
export default myAxios;
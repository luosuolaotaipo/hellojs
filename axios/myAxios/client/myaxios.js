/**
 * myAxios:请求调度，处理配置，管理请求
 * config:默认配置
 * util:工具类
 * interceptorManager:拦截器管理类，管理请求和响应拦截器的注册和销毁
 * adapter:适配器类，适配浏览器<=>node的请求和响应
 */
function myAxios(config) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(this.responseText);
    }
    xhr.open(config.method,config.url);
    xhr.send();
}
export default myAxios;
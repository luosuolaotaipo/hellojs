/**
 * only support chrome & fiefox
 */

class XHR{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
}

class Ajax extends Promise{
    constructor(method,url,isAsync,successCallback,failCallback,body=null){
        // super();
        this.xhr = new XMLHttpRequest();
        this.success = successCallback;
        this.reject = failCallback;
        this.result = new Promise((successCallback,failCallback)=>{});
        this.xhr.onreadystatechange = ()=>{
            if(this.xhr.readyState == 4){
                if(this.xhr.status == 304 || this.xhr.status>=200 && this.xhr.status <300){
                    // this.result.successCallback(this.xhr.responseText);
                    this.result = Promise.resolve(this.xhr.responseText)
                }else{
                    // this.result.failCallback(this.xhr.status);
                    this.result = Promise.reject(this.xhr.status);

                }
            }
        } 
        this.xhr.open(method,url,isAsync);
        this.xhr.send(body);
    }
}

function successCallback(res){
    console.log('resolve:'+res);
}

function failCallback(rej){
    console.log('rej:'+rej)
}

let text = new Ajax('get','http://localhost:3000/a',true,successCallback(),failCallback())
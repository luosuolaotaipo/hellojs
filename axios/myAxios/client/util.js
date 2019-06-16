function isObject(val){
    return typeof val === 'object' && val!==null;
}

function isArray(val){
    return Object.prototype.toString.call(val) === '[object Array]'
}


function deepCopy(objSrc){
    var objRes = isArray(objSrc)?[]:{};
    for(var property in objSrc){
        if(isObject(objSrc[property])){
            objRes[property] = deepCopy(objSrc[property]);
        }else{
            objRes[property] = objSrc[property];
        }
    }
    return objRes;

}

function mergeConfig(defaultConfig,newConfig){
    // 不能直接修改defaultConfig,用深拷贝
     var config = deepCopy(defaultConfig);

     //把new的合并到default当中
     //并有部分可以直接替换掉default
     var replacableConfig = ['url','method','params','data'];
     for(var property in newConfig){
         if(replacableConfig.indexOf(property)!==-1){
             config[property] = newConfig[property];
         }else{
             if(isObject(newConfig[property])){
                 config[property] = mergeConfig(config[property],newConfig[property]);
             }else{
                 config[property] = newConfig[property];
             }
         }
     }
     return config;

}

export default {
    mergeConfig,
    deepCopy

};
const fs=require('fs');

fs.writeFile('a.txt', 'sdfasfsadf', err=>{
  if(err){
    console.log('有错');
  }else{
    console.log('成功');
  }
});

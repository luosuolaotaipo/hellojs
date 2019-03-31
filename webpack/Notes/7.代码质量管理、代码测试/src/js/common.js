import $ from 'jquery';

export async function sum(a, b){
  let res=await $.ajax({
    url: 'http://localhost:8081/',
    data: {a, b},
    method: 'get',
    dataType: 'json'
  });

  return res;
}

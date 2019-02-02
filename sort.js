var arr1 = [5,1,8,7,6,9];
function sortOdd(arr){
    if(arr &&arr.length){
        let i = arr.length-1;
        let j = arr.length-1;
        while(i>0){
            if(arr[i]%2===1){
                i--
            }else{
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i--;
                j--
            }
        }
    }
}

sortOdd(arr1);
console.log(arr1);
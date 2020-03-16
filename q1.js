`use strict`

var conuter=0;
function graterThan(num , nm1 ){
    
   for (let index = 0; index < num.length; index++) {

    if(num[index] > nm1){
           conuter+=1;
       }
       
   }
return conuter;
}

console.log(graterThan([1,2,3,4,5],3));
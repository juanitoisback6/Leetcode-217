let nume = [1,2,3,2];
let otro = [2,3,1,5];

console.log(nume[1]);

function verif (nums){
  
  for(let i=0; i<nums.length; i++ ){
  var global=false;
  
  for(let sisas= 0; sisas < nums.length; sisas++){

    if(i === sisas){
      global=false;
    }else if(nums[i]===nums[sisas]){
       global=true;
    }
  }
  return global
}
  
}

console.log(verif(nume))
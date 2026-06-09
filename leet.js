let nume = [1,2,3,3];


console.log(nume[1]);

function verif (nums){
  
  for(let i=0; i<nums.length; i++ ){
    
  var global=false;
  
  for(let sisas= 0; sisas < nums.length; sisas++){

    if(i != sisas && nums[i] === nums[sisas]){
      global=true;
    }else{
      global=false
    }
  }
  return global
}
  
}

console.log(verif(nume))

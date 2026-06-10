let nume = [1,2,3,3];

function verif (nums){
  
  var global=false;
  
  for(let i=0; i<nums.length; i++ ){
    
  
  for(let sisas= 0; sisas < nums.length; sisas++){

    if(i != sisas && nums[i] === nums[sisas]){
      global=true;
      console.log(nums[sisas]);
    }
  }

}
    return global
}

console.log(verif(nume))

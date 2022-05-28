var digits = function(value){
    if(value == 0){
        return 1;
    }
    let count = 0;
    while(value != 0){
         value =  Math.floor( value / 10 );
        count++;
    }
    return count;
}

var findNumbers = function(nums) {
    let count = 0;
   for(let i = 0 ; i< nums.length ; i++){
       if(digits(nums[i]) % 2 == 0){
           count++;
       }
   }
    return count
};



const answer = findNumbers([201])
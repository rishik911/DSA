var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0 ;
    for(let i= 0 ; i< nums.length ; i++){
        if(nums[i] == 0 ){
            count = 0;
        }
         else{
             count++;
         }
      max = count > max ? count : max
    }
    return max;
}

const answer = findMaxConsecutiveOnes([1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1])

console.log(answer)

//input is a binary array consisting only 1 and 0
//print max consecutive 1

//time complexity =  o(n)
//space complexity = o(n)
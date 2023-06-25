var moveZeroes = function(nums) {
    let l = 0
    let r =  0
    while(l < nums.length){
        if(nums[l] !== 0){
           [ nums[l] , nums[r]] = [ nums[r] , nums[l]]
           r++
        }
        l++
    }
};
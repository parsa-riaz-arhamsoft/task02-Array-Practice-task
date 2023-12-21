const nums=[1,2,5,6,3,4,4,7,5,0,8,6,5,2,1,7,31]
const repeatingNums=[]
const nonRepeatingNums=[]
let isNonRepeating=true

for(let i=0;i<nums.length;i++){
    isNonRepeating=true
    for(j=0;j<nums.length;j++){
        if(i!==j){
            if(nums[i]===nums[j] ){
                if(!repeatingNums.includes(nums[i]))
                repeatingNums.push(nums[i])
                isNonRepeating=false
                break
            }
        }
    }
    if(isNonRepeating){
        if(!nonRepeatingNums.includes(nums[i]))
          nonRepeatingNums.push(nums[i])
    }
}


console.log(`repeating numbers : ${repeatingNums} \n non repeating numbers : ${nonRepeatingNums}`)
//sorting in assending order
nums.sort((a,b)=>a-b)
console.log(" sorting array in assending order ")
console.log(nums)

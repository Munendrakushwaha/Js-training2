// Write a program to remove dupliacte elements from an array

let arr=[1,2,1,4,5,64,3,5,4,8,9,5,3,4,89,0];
let noDuplicate=[];
for(let index in arr)
{
    if(!noDuplicate.includes(arr[index]))
    {
        noDuplicate.push(arr[index]);
    }
}
console.log(noDuplicate);
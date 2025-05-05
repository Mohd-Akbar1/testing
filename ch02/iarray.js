
// const arr=[1,3,6,2]
// console.log(arr)

// arr.push(45)
// console.log(arr)

// arr.pop()
// arr.pop()
// console.log(arr)
// arr.shift()
// arr[23]=34
// // console.log("length",arr.length,arr)

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// const array=['test','test1','test2','test3']

// for (let index in array){
//     console.log(array[index],index)
// }

// array.forEach((value,idx)=>{
//     if(idx==2) return
//     console.log(value)

// })

// const array=[23,45,67,89,34,54,21],array1=array
// let arr=array.slice()
// array1.push(99)
// console.log(arr,array)
// console.log('test',array1)

// const array=[23,45,67,89,34,54,21]
// // const array1=[...array]
// const array1=Array.from(array)
// array1.push(99)
// console.log(array,array1)

// const arr=[2,3,1,4,5]
// // arr.splice(2,1,333)
// arr.splice()
// console.log(arr)

// arr.concat([1,2,3,4,5])
// console.log(arr)


// const arr=[1,2,3,4,5]
// console.log(...arr)

function AddUp(arr,val){
    
    let result=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==val){
                result.push([])

    }

}
    }}

let result=AddUp([1,2,3,4,5],5)
console.log(result)
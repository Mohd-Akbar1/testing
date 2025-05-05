
function counter(n){
    let sum=0
    let count=0
    for (let i=1;i<=n;i++){
        sum+=i
        count+=1
    }
    return {sum,count}
}

let {sum,count}=counter(100)
console.log(sum,count)

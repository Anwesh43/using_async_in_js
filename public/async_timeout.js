const asyncTimeoutBlock = new AsyncBlock(200,200)
function sendAfterTwoSeconds(n) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(n)
        },2000)
    })
}
async function addNumbers(a,b) {
    const newA =  await sendAfterTwoSeconds(a)
    const newB =  await sendAfterTwoSeconds(b)
    console.log(newA)
    return newA + newB
}
asyncTimeoutBlock.startLoading()
addNumbers(10,20).then((v)=>{
    console.log(v)
    asyncTimeoutBlock.setValue(v)
})
//console.log(a)

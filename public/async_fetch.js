const asyncFetchBlock = new AsyncBlock(200,200)
async function getResponse(url){
    try {
        const res = await fetch(url)
        const text = await res.text()
        return text
    }
    catch(err) {
        //console.log(err)
        return err
    }

}
asyncFetchBlock.startLoading()
getResponse("http://localhost:8000/app/test").then((data)=>{

    console.log(data)
    asyncFetchBlock.setValue(data)
})

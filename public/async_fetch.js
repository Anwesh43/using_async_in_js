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
getResponse("http://localhost:8000/app/tes").then((data)=>{
    console.log(data)
})

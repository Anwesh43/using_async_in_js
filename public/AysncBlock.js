class AsyncBlock {
    constructor(w,h){
        this.w = w
        this.h = h
        this.img = document.createElement('img')
        document.body.appendChild(this.img)

        //this.text = ""
    }
    render() {
        const canvas = document.createElement('canvas')
        canvas.width = this.w
        canvas.height = this.h
        const context = canvas.getContext('2d')
        context.clearRect(0,0,this.w,this.h)
        if(!this.deg) {
            this.deg = 0
        }
        if(this.isLoading) {
            context.strokeStyle = 'black'
            context.save()
            context.beginPath()
            for(var i=0;i<120;i++) {
                const r = Math.min(this.w,this.h)/3,x = r*Math.cos((deg+i)*Math.PI/180),y = r*Math.sin((deg+i)*Math.PI/180)
                if(i == 0) {
                    context.moveTo(x,y)
                }
                else {
                    context.lineTo(x,y)
                }
            }
            context.restore()
            this.deg+=10
        }
        else {
            context.fillStyle = 'black'
            context.font = context.font.replace(/\d{2}/,'30')
            context.fillText(this.text,w/2-context.measureText(this.text).width/2,h/2)
        }
    }
    startLoading() {
        this.loading = true
        this.interval = setInterval(()=>{
            this.render()
        },50)
    }
    setValue(text) {
        this.loading = false
        this.text = text
        this.render()
        this.clearInterval(this.interval)
    }
}

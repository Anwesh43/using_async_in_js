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
        if(this.loading == true) {
            console.log(this.deg)

            context.strokeStyle = 'black'
            context.save()
            context.beginPath()
            context.lineWidth = this.w/15
            for(var i=0;i<120;i++) {
                const r = Math.min(this.w,this.h)/6,x = this.w/2+r*Math.cos((this.deg+i)*Math.PI/180),y = this.h/2+r*Math.sin((this.deg+i)*Math.PI/180)
                if(i == 0) {
                    context.moveTo(x,y)
                }
                else {
                    context.lineTo(x,y)
                }
            }
            context.stroke()
            context.restore()
            this.deg+=10
        }
        else {
            context.fillStyle = 'black'
            context.font = context.font.replace(/\d{2}/,'30')
            context.fillText(this.text,this.w/2-context.measureText(this.text).width/2,this.h/2)
        }
        this.img.src = canvas.toDataURL()
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
        clearInterval(this.interval)
    }
}

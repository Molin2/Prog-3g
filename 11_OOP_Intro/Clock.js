console.log('clock is here')

class Clock{
    //constructor er classenns "setup" funktion og den kaldes når der kommer nye objekter i klassen
    constructor(div, style){
        this.div = div
        this.style = style
        //hours minutes and seconds
        this.hDiv = createDiv()
        this.mDiv = createDiv()
        this.sDiv = createDiv()
        this.div.child(this.hDiv)
        this.div.child(this.mDiv)
        this.div.child(this.sDiv)
        //interval til at sætte tiden ind
        this.interval
        //styles
        this.div.style('width', '10rem')
        this.div.style('height', '5rem')
        this.div.style('border', '4px dotted gray')
        this.div.style('display', 'grid')
        this.div.style('place-items', 'center')
        this.div.style('padding', '1rem')
        this.div.style('border-radius', '2rem')
        //reager på argumentet style fra constructor 
         switch(style){
            case 'pink': this.div.style('background', 'hotpink')
            return
            case 'black':
                this.div.style('background', 'black')
                this.div.style('color', 'white')

         }


       
    }
    start(){
        this.interval = setInterval( ()=>{
            this.hDiv.html( hour() < 10 ? '0' + hour() : hour() )
            this.mDiv.html( minute() < 10 ? '0' + minute() : minute() )
            this.sDiv.html( second() < 10 ? '0' + second() : second() )
        }, 1000)
    }
    stop(){
        clearInterval(this.interval)
    }
}
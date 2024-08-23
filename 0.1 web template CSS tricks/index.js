let currentPage = 1
let menuNumber = 1
let pages //array med akke class og page
let menuitem //array med alle menuitems
let colors =['red', 'green', 'blue', 'hotpink','lightblue', 'lightgreen', 'darkblue' ]


function setup(){
    select("#page" + currentPage).addClass("visible")
    select('#menu' + menuNumber).addClass('active')
    pages = selectAll('.page')
    menuitem = selectAll('.menuitem')

    for( m of menuitem ){
        m.mousePressed(function(e){
            console.log(e.target.id)
            //slice er -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            ShiftPage(nr)
        })
    }
    console.log(pages.length)

    for(c of colors){
        console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
    
}

function ShiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass("visible")
    currentPage = num
    select("#page" + currentPage).addClass("visible")
  
    select("#menu" + menuNumber).removeClass("active")
    menuNumber = num
    select("#menu" + menuNumber).addClass("active")
  

}

function keyPressed(){
    console.log(key)
    ShiftPage(key)
    
}


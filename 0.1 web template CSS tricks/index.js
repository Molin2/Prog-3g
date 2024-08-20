let currentPage = 3
let pages //array med akke class og page
let colors =['red', 'green', 'blue', 'hotpink','lightblue', 'lightgreen', 'darkblue' ]


function setup(){
    select('#page' + currentPage).addClass('visible')
    pages = selectAll('.page')
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
  

}

function keyPressed(){
    console.log(key)
    ShiftPage(key)
    
}

let currentPage = 1
let pages //array med akke class og page


function setup(){
    console.log("Grim")
    select('#page' + currentPage).addClass('visible')
    pages = selectAll('.page')
    console.log(pages.length)
    
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
console.log("hej")
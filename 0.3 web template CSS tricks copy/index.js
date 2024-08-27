let currentPage = 1


let pages //array med akke class og page
let menuitem //array med alle menuitems



function setup(){
    // shiftPage er function der tager et tal fra en side

   
    
    pages = selectAll('.page')
    menuitem = selectAll('.menuitem')

    //menuitem skal reagewre med at skifte side

    for( m of menuitem ){
        m.mousePressed(function(e){
            console.log(e.target.id)
            //slice er -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //nu kalder jeg shiftPage og skifter side
            ShiftPage(nr)
        })
    }
    console.log(pages.length)

    
    ShiftPage(currentPage)
    
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
    select("#menu" + currentPage).removeClass("active")
    currentPage = num
    
  
    select("#page" + currentPage).addClass("visible")
    select("#menu" + currentPage).addClass("active")
  

}

function keyPressed(){
    console.log(key)
    ShiftPage(key)
    
}


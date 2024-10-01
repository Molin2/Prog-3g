function setup(){
    hentTopPosts("Slipknot");
    // Kalder funktionen 'hentTopPosts' med argumentet "cats" ved programmets start.
}

//async betyder at funktionen kan vente på at ting er blevet hentet 
async function hentTopPosts(subreddit) {
   const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=8`)
    const json = await response.json()
    console.log(json.data.children)
    //posts er et array med posts fra json objektet
    let posts = json.data.children
    // vi kigger gennem arrayet og logger egenskaber i det 
    for( p of posts ){
        console.log(p.data.ups)
        console.log(p.data.thumpnail)
        console.log(p.data.name)
        console.log(p.data.author)
        console.log(p.data.url)
        console.log(p.data.title)
        createPost(p.data)
    }
    
}

function createPost(post){
    //laver først en refferance til html som vi vil sætte post in i 
    let rightDiv = select('#page .right')
    //giv posten en container
    let container = createDiv().addClass('post')
    // giv den en title
    let title = createElement(h1, post.title)
    container.





    rightDiv.child(container)

}
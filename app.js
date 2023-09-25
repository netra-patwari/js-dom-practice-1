const body = document.body
const button = document.querySelectorAll("button");
const h2 = document.h2

button.forEach(button => {
    button.addEventListener('click', ()=>{
        body.classList = button.classList;
        
        
    })

    button.addEventListener('dblclick', ()=>{
        body.classList = body
        
    })


})


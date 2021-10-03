//random quote generator (initialize an array to quotes and render using math.random)

const quotes = [
    "one and a;ofkgh",
    "two a;lghao;",
    "three a;sodbgao",
    "four a;oihg",
    "five a;oidsg",
    "six a;oirg",
    "7 ;asdgh",
    "8 ;oasidhf",
    "9 ;aosudgb",
    "10 afs'pd",
    "11 'aigh"
]



let quoteEl = document.getElementById("quote-el")
function getQuote() {
    let idx = Math.floor(Math.random() * 11)
    
    quoteEl.textContent = quotes[idx]
}

let list=document.querySelectorAll("a")

list.forEach(em =>{
    em.addEventListener("click",function(){
        list.forEach(mi=>{
            mi.classList.remove('active')
            this.classList.add("active")
        })
    })
})
// !SyntaxError: Unexpected token '<'

//implement the button: active feature on nav-btn and <button> element
import references from "./references.js"

const {colors} = references
console.log(colors)
const  arrOfColors= ['#2d2926','#707372','#003057','#d0006f','#00a3e0','#fed141','#e87722','#ef3340']

const createDiv = () =>{
    const newDiv = document.createElement("div")
    return function(color){
        newDiv.style.backgroundColor=color
        // console.log(newDiv)
       colors.appendChild(newDiv.cloneNode(true))
       console.log(colors)
    }
}

const createNewDiv = createDiv()

arrOfColors.forEach(color=>{
    createNewDiv(color)
})

console.log(colors)



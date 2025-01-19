const iconPesq = document.querySelector("i#pesq")
const inputPesq = document.getElementById("pesquisar")
const titleHeader = document.getElementById("tHeader")

const search = () => {
    inputPesq.style.display = 'none'
    iconPesq.addEventListener("click", (event) => {
        event.preventDefault()
        if(inputPesq.style.display == 'none'){
            console.log('esta off')
            inputPesq.style.display = 'block'
            titleHeader.style.marginLeft = '-100px'
        } else {
            inputPesq.style.display = 'none'
            titleHeader.style.marginLeft = '150px'

            // 
            
            if(inputPesq.value <= 0 ){
                alert('Caixa de pesquisa vazia')
            } else {
                console.log(inputPesq.value)
                window.location.href = "comprar.html"
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", search)


let count = 4;
let count2 = 8;
document.getElementById("radio4").checked = true;
document.getElementById("radi8").checked = true;


setInterval(nextImg, 8000)



function nextImg(){
    count--;
    count2--;


    if(count < 1 || count2 < 4){
        count = 4;
        count2 = 8
    } else {
        document.getElementById("radio"+count).checked = true;
        document.getElementById("radi"+count2).checked = true;
    }

}
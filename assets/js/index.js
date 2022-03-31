

function contador () {


    let printContent = document.querySelector('.print-content')

    let inicio = 1
    let fim = 10

    for(let i = inicio; i <= fim; i++) {
        console.log(i)
        printContent.innerHTML += `<p>${i}</p>`
    }
}

contador()
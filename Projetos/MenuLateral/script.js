//Esse primeiro comando Está clicando e fixando o background do menu
//Ao clicar ele ficar selecionado !

let menu = document.querySelectorAll(".item-menu")

function selectLink(){
    menu.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menu.forEach((item) =>
    item.addEventListener('click',selectLink)
)
// Exapandir o menu

let Exp = document.querySelector('#btn-exp')
let menuSide = document.querySelector('.menu-lateral')

Exp.addEventListener('click', function(){ //toggle = Ao clicar ser existir a classe expandir eu quero que remova , se não tiver eu quero que adicione
    menuSide.classList.toggle('expandir')      
})

//Essa configuração serviu para que o menu só expanda quando clicar no icone MENU




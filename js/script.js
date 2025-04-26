const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const item = document.querySelectorAll('.list-item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.number');
const list = document.querySelector('.list');

/* [items1, items2, items3] */

let active = 0
const total = item.length;
let timer;

/* Criação de uma Função em Javascript */
function update(direction) /* O direction vai identificar dos sentidos estou clicando */ {
    /* 
    Nessa primeira linha de código, fara o seguinte: vai procurar na class item do o elemento que tem a class active e vai remover 
    */
    document.querySelector('.list-item.active').classList.remove('active') /* Remove a classe active do item ativo */
    document.querySelector('.dot.active').classList.remove('active') /* Remove a classe active do item ativo */


    /* Para fazer aparecer */
    if (direction > 0) {
        active = active + 1 /* O active vai aumentar um */

        if (active === total) { /* Se o active for igual ao total, então ele vai voltar para 0 */
            active = 0 /* O active vai voltar para 0 */
        }
    } else if (direction < 0) {
        /* Se o valor for menor que 0, então ele vai voltar uma casa */
        active = active - 1 /* O active vai diminuir um */
        if (active < 0) { /* Se o active for menor que 0, então ele vai voltar para o total - 1 */
            active = total - 1 /* O active vai voltar para o total - 1 */
        }
    }

    [item[active].classList.add('active') /* Adiciona a classe active ao item ativo */]
    [dots[active].classList.add('active') /* Adiciona a classe active ao item ativo */]

    numberIndicator.textContent = String(active + 1).padStart(2,'0') /* Adiciona o número do item ativo ao número total */
    /* Nessa ultima linha de cádigo o nosso programa vai mudando de numero de página, usando o padStart que serve para adicionar alguma coisa antes do nosso String */
}
/* Adicionar um timer */
/* O setInterval vai executar a função a cada 3 segundos */
clearInterval(timer) /* Limpa o timer para não ficar acumulando */
timer = setInterval(() => {
    update(1) /* O update vai aumentar um */
}, 3000);

/* Para adicionarmos uma ação ou um evento precisamos saber a quem atribuir o mesmo usando o addEventListener*/
prevButton.addEventListener('click', () => {
    update(-1) /* Dentro da nossa função o updade ao ser clicado ele vai volta uma casa */
});

nextButton.addEventListener('click', () => {
    update(1) /* Dentro da nossa função o updade ao ser clicado ele vai avança uma casa */
});
let contagem = 0

function abrirEFechar() {
 let sidebar = document.querySelector('.sidebar');
 console.log (contagem)


if (contagem == 0) {
sidebar.style.transform = 'translate(0%)';
contagem++
}
else {sidebar.style.transform = 'translate(-100%)';
contagem--
}
}
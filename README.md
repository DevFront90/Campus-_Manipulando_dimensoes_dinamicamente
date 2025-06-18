📐 Manipulação e Medição de Dimensões com jQuery
Este script jQuery é responsável por definir dinamicamente as dimensões de um elemento com a classe .box e exibir no console as diferentes formas de calcular largura e altura com base no modelo de caixa (box model do CSS).

✅ Funcionalidades implementadas:
Define largura e altura do elemento .box usando css().

Exibe no console as medidas reais da caixa em três diferentes formas:

width() / height(): mede apenas o conteúdo.

innerWidth() / innerHeight(): mede o conteúdo + padding.

outerWidth(true) / outerHeight(true): mede o conteúdo + padding + border + margin.

🧪 Exemplo prático:
javascript
Copiar
Editar
// Define largura para 900px e altura para 700px
$('.box').css('width','900px');
$('.box').css('height','700px');

// Mostra diferentes formas de calcular a largura
console.log("width:" + $('.box').width());
console.log("innerWidth:" + $('.box').innerWidth());
console.log("outerWidth:" + $('.box').outerWidth(true));

// Mostra diferentes formas de calcular a altura
console.log("height:" + $('.box').height());
console.log("innerHeight:" + $('.box').innerHeight());
console.log("outerHeight:" + $('.box').outerHeight(true));
📌 Observações:
O método outerWidth(true) e outerHeight(true) inclui as margens externas, além do conteúdo, padding e bordas.

Ideal para projetos que precisam ajustar dinamicamente elementos na tela respeitando o espaçamento interno e externo.

// Arquivo principal de JavaScript da Padaria Pão Nosso

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site da Padaria Pão Nosso carregado e pronto!");

    // Exemplo de interatividade simples: alerta ao clicar no botão de pedido (opcional)
    const botoesPedido = document.querySelectorAll(".btn");

    botoesPedido.forEach(botao => {
        botao.addEventListener("click", (e) => {
            // Se quiser que o link siga normalmente para a página de contato, remova o preventDefault abaixo.
            // Por enquanto, ele apenas exibe um console log interativo.
            console.log("Usuário clicou para fazer um pedido.");
        });
    });
});

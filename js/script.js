/**
 * BLOCO 1: Menu Mobile (Responsivo)
 * Controla a abertura e o fechamento do menu em telas de smartphones.
 */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Verifica se os elementos existem na página antes de aplicar os eventos
if (menuBtn && mobileMenu) {
    // Evento de clique no botão de hambúrguer para alternar a visibilidade do menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fecha automaticamente o menu mobile quando o usuário clica em qualquer link interno
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * BLOCO 2: Simulador de Orçamento via WhatsApp
 * Coleta os dados preenchidos no formulário, valida se estão corretos,
 * formata uma mensagem bonita e redireciona direto para o WhatsApp da assistência.
 */
function enviarOrcamento() {
    // Obtém os valores digitados/selecionados pelo usuário nos inputs e selects
    const marca = document.getElementById('marca').value;
    const servico = document.getElementById('servico').value;
    const modelo = document.getElementById('modelo').value.trim();
    const nomeCliente = document.getElementById('nome-cliente').value.trim();

    // Validação básica: se faltar algum campo, exibe um alerta na tela e para a execução
    if (!marca || !servico || !modelo || !nomeCliente) {
        alert('Por favor, preencha todos os campos do formulário de orçamento antes de enviar.');
        return;
    }

    // Número de telefone do WhatsApp da assistência (com DDI e DDD)
    const numeroWhatsApp = '5591999999999';

    // Cria a mensagem formatada em Markdown do WhatsApp com os dados do cliente
    const mensagem = `Olá, GabrielTech! Meu nome é *${nomeCliente}*. Gostaria de solicitar um orçamento para:\n\n*Marca:* ${marca}\n*Modelo:* ${modelo}\n*Serviço:* ${servico}\n\nPoderia me passar mais informações e valores?`;

    // Codifica a mensagem para que caracteres especiais e quebras de linha funcionem na URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Monta a URL oficial do WhatsApp Web/App com o número e a mensagem pronta
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    // Abre o link do WhatsApp em uma nova aba do navegador
    window.open(urlWhatsApp, '_blank');
}
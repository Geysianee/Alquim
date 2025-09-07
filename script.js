// script.js

// ----------------------------------------------------
// Controle de Exibição das Páginas (SPA)
// ----------------------------------------------------
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');
const mainHeader = document.getElementById('main-header');
const backToHomeLinkContainer = document.querySelectorAll('.back-link-container');


// Função para mostrar a seção correta e gerenciar o menu/link de volta
function showSection(targetId) {
    // Esconde todas as seções de conteúdo
    pageSections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Esconde todos os links de "Voltar para Home" em todas as seções
    backToHomeLinkContainer.forEach(linkContainer => {
        linkContainer.classList.add('hidden');
    });

    // Gerencia a visibilidade do cabeçalho e a exibição da seção de conteúdo
    if (targetId === 'home') {
        // Na Home, mostra o cabeçalho e a sua classe de estilo
        mainHeader.classList.remove('header-hidden');
        mainHeader.classList.add('home-active-style');
        // Certifica que a seção 'home' (que agora está no header) não é tratada como uma section oculta
        // Não precisamos fazer nada aqui, pois o 'home' está no header
    } else {
        // Nas outras páginas:
        // 1. Esconde o cabeçalho completamente
        mainHeader.classList.add('header-hidden');
        mainHeader.classList.remove('home-active-style');

        // 2. Mostra a seção de destino
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active');

            // 3. Mostra o link "Voltar para Home" DENTRO da seção que acabou de aparecer
            // Precisamos encontrar o .back-link-container específico desta seção
            const sectionBackLinkContainer = targetSection.querySelector('.back-link-container');
            if (sectionBackLinkContainer) {
                sectionBackLinkContainer.classList.remove('hidden');
            }
        }
    }

    // Rola a página para o topo, se necessário
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Oculta todas as seções e mostra o menu inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// Adiciona o event listener a todos os links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        showSection(targetId);
    });
});

// ----------------------------------------------------
// Manutenção das funcionalidades existentes
// ----------------------------------------------------

// Manipulação do formulário de inscrição e pagamento
const inscricaoForm = document.getElementById('inscricaoForm');
const areaFormulario = document.getElementById('formulario-cadastro');
const areaPagamento = document.getElementById('area-pagamento');

if (inscricaoForm) {
    inscricaoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        areaFormulario.classList.add('hidden');
        areaPagamento.classList.remove('hidden');
    });
}

// Função para finalizar a inscrição (simulada)
function finalizarInscricao(formaPagamento) {
    alert(`Inscrição realizada com sucesso via ${formaPagamento}! Em breve você receberá os detalhes por email. Agradecemos sua confiança!`);
    // Opcional: Voltar para a página inicial após 3 segundos
    setTimeout(() => {
        location.reload(); // Recarrega a página para voltar ao estado inicial
    }, 3000);
}

// Torna a função `finalizarInscricao` globalmente acessível
window.finalizarInscricao = finalizarInscricao;
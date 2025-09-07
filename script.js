// script.js

// ----------------------------------------------------
// Controle de Exibição das Páginas (SPA)
// ----------------------------------------------------
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');
const mainHeader = document.getElementById('main-header');


// Função para mostrar a seção correta e gerenciar o menu
function showSection(targetId) {
    // Esconde todas as seções de conteúdo
    pageSections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Gerencia a visibilidade do cabeçalho
    if (targetId === 'home') {
        // Na Home, mostra o cabeçalho no estilo lista e esconde as seções
        mainHeader.classList.remove('header-hidden');
        mainHeader.classList.add('home-active-style');
    } else {
        // Nas outras páginas, esconde o cabeçalho e mostra a seção de destino
        mainHeader.classList.add('header-hidden');
        mainHeader.classList.remove('home-active-style');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active');
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
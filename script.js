// script.js

// ----------------------------------------------------
// Controle de Exibição das Páginas (SPA)
// ----------------------------------------------------
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');
const mainHeader = document.getElementById('main-header');
const nav = document.getElementById('main-nav');
const logo = document.querySelector('.logo');


// Função para mostrar a seção correta e esconder as outras
function showSection(targetId) {
    // Esconde todas as seções de conteúdo
    pageSections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção de destino
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Gerencia a visibilidade e o estilo do menu
    if (targetId === 'home') {
        // Na Home, mostra o logo e o menu completo em estilo lista
        mainHeader.classList.remove('hidden');
        nav.classList.remove('menu-only-home');
        mainHeader.classList.add('home-menu-active');
    } else {
        // Nas outras páginas, esconde o logo e mostra apenas o link de Home
        mainHeader.classList.remove('home-menu-active');
        nav.classList.add('menu-only-home');
        mainHeader.classList.add('hidden'); // Ajuste para esconder o header completo
    }
}

// Oculta todas as seções ao carregar, exceto o menu inicial
document.addEventListener('DOMContentLoaded', () => {
    // Oculta todas as seções ao carregar
    pageSections.forEach(section => section.classList.add('hidden'));

    // Estiliza o header para a página inicial
    mainHeader.classList.add('home-menu-active');
});

// Adiciona o event listener a todos os links de navegação
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        
        // Se o link clicado for o de 'home', exibe o conteúdo dela
        if (targetId === 'home') {
            document.getElementById('home').classList.remove('hidden');
        } else {
            // Se for outro link, esconde a seção de 'home' e mostra a seção de destino
            document.getElementById('home').classList.add('hidden');
            showSection(targetId);
        }
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
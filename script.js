// script.js

// ----------------------------------------------------
// Controle de Exibição das Páginas (SPA)
// ----------------------------------------------------
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');

// Função para mostrar a seção correta e esconder as outras
function showSection(targetId) {
    // Esconde todas as seções
    pageSections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Mostra a seção de destino
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo da página
    }
}

// Oculta todas as seções ao carregar, exceto a de 'Sobre Mim'
document.addEventListener('DOMContentLoaded', () => {
    showSection('sobre');
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
// Controle do Menu Responsivo
// ----------------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
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
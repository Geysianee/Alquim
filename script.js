// script.js

// ----------------------------------------------------
// Novo: Controle do Menu Responsivo
// ----------------------------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// ----------------------------------------------------
// Navegação suave para links de âncora
// ----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Fecha o menu móvel ao clicar em um link
        nav.classList.remove('active');
        menuToggle.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
}

// Script para o efeito de scroll no header (removido para manter a cor sólida)
/*
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(212, 175, 55, 0.9)'; // Dourado translúcido
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'; // Branco translúcido
    }
});
*/

// Torna a função `finalizarInscricao` globalmente acessível
window.finalizarInscricao = finalizarInscricao;
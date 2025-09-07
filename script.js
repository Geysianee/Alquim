// script.js

document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o menu de hambúrguer
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.getElementById('site-nav');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            siteNav.classList.toggle('active');
        });
    }

    // Lógica para o formulário de inscrição
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

    function finalizarInscricao(formaPagamento) {
        alert(`Inscrição realizada com sucesso via ${formaPagamento}! Em breve você receberá os detalhes por email. Agradecemos sua confiança!`);
        
        setTimeout(() => {
            areaPagamento.classList.add('hidden');
            areaFormulario.classList.remove('hidden');
            if (inscricaoForm) inscricaoForm.reset();
        }, 3000);
    }

    window.finalizarInscricao = finalizarInscricao;
});
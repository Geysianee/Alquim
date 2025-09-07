// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link[data-target]');
    const pageSections = document.querySelectorAll('.page-section');
    const cursoPageLink = document.querySelector('a[href="#curso"]');

    // Função para mostrar a seção com o ID correspondente e esconder as outras
    function showSection(targetId) {
        pageSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
                section.classList.add('active');
            } else {
                section.classList.add('hidden');
                section.classList.remove('active');
            }
        });
    }

    // Adiciona o evento de clique aos links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Se a página for carregada com a âncora #curso, exibe a seção de curso.
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (document.getElementById(hash)) {
            showSection(hash);
        }
    } else if (cursoPageLink) {
        // Por padrão, se não tiver âncora, exibe a seção "Sobre Mim"
        showSection('sobre');
    }

    // ----------------------------------------------------
    // Manutenção das funcionalidades existentes (Formulário)
    // ----------------------------------------------------

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
        setTimeout(() => {
            areaPagamento.classList.add('hidden');
            areaFormulario.classList.remove('hidden');
            if (inscricaoForm) inscricaoForm.reset();
        }, 3000);
    }

    window.finalizarInscricao = finalizarInscricao;
});
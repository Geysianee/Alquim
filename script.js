// script.js

// O script agora só vai lidar com o formulário de inscrição simulado,
// sem interferir na navegação do menu, que é tratada pelo HTML e CSS.

document.addEventListener('DOMContentLoaded', () => {

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
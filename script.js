// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    // Verifica se a tela é considerada desktop (largura maior que 767px)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Função para alternar seções no modo Desktop (SPA)
    function showSectionDesktop(targetId) {
        pageSections.forEach(section => {
            // Esconde todas as seções que não são as de 'inscricao' ou 'area-pagamento'
            if (section.id !== 'inscricao' && section.id !== 'area-pagamento') {
                section.style.display = 'none';
            }
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            // Rola suavemente para o topo da seção, se necessário
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Função para rolar para a seção no modo Mobile
    function scrollToSectionMobile(targetHref) {
        const targetElement = document.querySelector(targetHref);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão do link para que não haja scroll automático extra
            e.preventDefault();

            const targetHref = link.getAttribute('href');
            
            if (targetHref.startsWith('#')) { // É um link interno para uma seção na mesma página
                if (isDesktop) {
                    // No desktop, usamos a lógica SPA para exibir a seção
                    const targetId = targetHref.substring(1); // Remove o '#'
                    showSectionDesktop(targetId);
                } else {
                    // No mobile, apenas rolamos para a seção
                    scrollToSectionMobile(targetHref);
                }
            } else {
                // Se for um link externo (como para 'inscricao.html'), deixe o navegador lidar com ele
                window.location.href = targetHref;
            }
        });
    });

    // ----- Lógica do Formulário de Inscrição -----
    const inscricaoForm = document.getElementById('inscricaoForm');
    const areaFormulario = document.getElementById('formulario-cadastro');
    const areaPagamento = document.getElementById('area-pagamento');

    if (inscricaoForm) {
        inscricaoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (areaFormulario && areaPagamento) {
                areaFormulario.style.display = 'none';
                areaPagamento.style.display = 'block';
            }
        });
    }

    // Função para finalizar a inscrição (simulada)
    function finalizarInscricao(formaPagamento) {
        alert(`Inscrição realizada com sucesso via ${formaPagamento}! Em breve você receberá os detalhes por email. Agradecemos sua confiança!`);
        
        // Opcional: Resetar o formulário e voltar para a página inicial após 3 segundos
        setTimeout(() => {
            if (areaPagamento) areaPagamento.style.display = 'none';
            if (areaFormulario) areaFormulario.style.display = 'block';
            if (inscricaoForm) inscricaoForm.reset();

            // Volta para o topo da página, como se estivesse na "Home"
            if (isDesktop) {
                // Se for desktop, reexibe a seção 'sobre' como a principal (ou você pode definir outra)
                showSectionDesktop('sobre'); 
            } else {
                // No mobile, rola para o topo da página
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }
        }, 3000);
    }

    // Torna a função `finalizarInscricao` globalmente acessível para ser chamada pelos botões de pagamento
    window.finalizarInscricao = finalizarInscricao;

    // ----- Inicialização -----
    // Define o estado inicial das seções ao carregar a página
    if (isDesktop) {
        // No desktop, mostra apenas a primeira seção (ou a que você definir como inicial)
        // Por exemplo, para começar mostrando a seção 'sobre'
        // Se quiser que comece no topo, pode usar showSectionDesktop('sobre') ou uma seção inicial.
        // Se não quiser nada inicial, pode deixar assim e o scroll do navegador cuida.
        // Por padrão, vamos exibir a primeira seção definida no HTML.
        const initialSectionId = 'sobre'; // Ou qualquer outra seção que deva aparecer primeiro
        showSectionDesktop(initialSectionId);
    } else {
        // No mobile, garante que todas as seções sejam visíveis (o CSS já ajuda nisso)
        pageSections.forEach(section => {
            section.style.display = 'block'; // Garante que estejam visíveis
        });
        // Rola para o topo da página no mobile ao carregar
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

});
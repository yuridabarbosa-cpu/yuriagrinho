document.addEventListener('DOMContentLoaded', () => {
    // 1. DADOS DOS COMPONENTES (Array de Objetos para Manutenção)
    const artigosTendencias = [
        {
            tag: "Futuro",
            titulo: "O papel do 5G Autónomo na Telemetria de Lavouras Isoladas",
            conteudo: "Como a conectividade de ultravelocidade permite que colheitadeiras tomem decisões de desvio de rota milimétricas em tempo real."
        },
        {
            tag: "Energia",
            titulo: "Fazendas Autossuficientes: Painéis Solares Flutuantes em Canais",
            conteudo: "A nova tendência de otimização de espaço que reduz a evaporação hídrica e gera 100% da eletricidade operacional da propriedade."
        },
        {
            tag: "Certificação",
            titulo: "Selo Blockchain Verde: Rastreabilidade Total de Carbono",
            conteudo: "Consumidores internacionais já exigem validação criptográfica de que o alimento consumido não gerou impacto ecológico."
        }
    ];

    const faqItens = [
        {
            pergunta: "Como os sensores ajudam a economizar recursos?",
            resposta: "Eles medem com precisão a condutividade elétrica e a umidade do solo, enviando dados para a central que libera apenas a quantidade exata de água e nutrientes necessários para aquela área específica."
        },
        {
            pergunta: "A implementação da tecnologia EcoAgro demora quanto tempo?",
            resposta: "O setup inicial de mapeamento via satélite e configuração dos módulos em nuvem leva em média 14 dias operacionais."
        },
        {
            pergunta: "É preciso internet de alta velocidade em toda a fazenda?",
            resposta: "Não necessariamente. Nossos sensores utilizam redes de rádio de longo alcance (LoRaWAN) que cobrem quilômetros com uma única antena receptora central."
        }
    ];

    // 2. RENDERIZAÇÃO DOS COMPONENTES
    const carouselContainer = document.getElementById('carousel-container');
    if (carouselContainer) {
        artigosTendencias.forEach(artigo => {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            card.innerHTML = `
                <span class="tag">${artigo.tag}</span>
                <h3>${artigo.titulo}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${artigo.conteudo}</p>
            `;
            carouselContainer.appendChild(card);
        });
    }

    const accordionContainer = document.getElementById('accordion-container');
    if (accordionContainer) {
        faqItens.forEach((item, index) => {
            const accItem = document.createElement('div');
            accItem.className = 'accordion-item';
            accItem.innerHTML = `
                <button class="accordion-header" aria-expanded="false" data-index="${index}">
                    ${item.pergunta}
                    <span class="arrow">▼</span>
                </button>
                <div class="accordion-content">
                    <p style="padding: 1.5rem 0;">${item.resposta}</p>
                </div>
            `;
            accordionContainer.appendChild(accItem);
        });

        // Lógica do Acordeão
        accordionContainer.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header');
            if (!header) return;

            const content = header.nextElementSibling;
            const isOpened = header.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros antes de abrir o atual
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                h.nextElementSibling.style.maxHeight = null;
            });

            if (!isOpened) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // 3. CONTROLE DE ACESSIBILIDADE (FONTE E CONTRASTE)
    let currentFontSize = 16;
    const htmlElement = document.documentElement;

    document.getElementById('btn-font-increase').addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            htmlElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    document.getElementById('btn-font-decrease').addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            htmlElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    document.getElementById('btn-contrast').addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // 4. SUBMIT VALIDATION (Auto-Debug do Formulário)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Conexão estabelecida! Nossos engenheiros entrarão em contato em até 24 horas.');
            form.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    console.log('Site carregado!');

    // Interação com o formulário de contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });

    // Adicionar efeito de scroll suave para links de navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Carregar artigos recentes na barra lateral
    const artigosRecentes = [
        { title: "Shampoo Ideal para Cabelos Cacheados", link: "#" },
        { title: "5 Dicas para Hidratar o Cabelo", link: "#" },
        { title: "Como Escolher o Corte Certo para o Seu Rosto", link: "#" }
    ];

    const artigosRecentesList = document.getElementById('artigos-recentes');
    artigosRecentes.forEach(artigo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = artigo.link;
        a.textContent = artigo.title;
        li.appendChild(a);
        artigosRecentesList.appendChild(li);
    });

    // Função para adicionar novos artigos
    const novosArtigosContainer = document.getElementById('novos-artigos');
    function adicionarArtigo(titulo, imagem, descricao) {
        const artigo = document.createElement('article');
        artigo.innerHTML = `
            <h2>${titulo}</h2>
            <img src="${imagem}" alt="${titulo}">
            <p>${descricao}</p>
        `;
        novosArtigosContainer.appendChild(artigo);
    }

    // Exemplo de adição de um novo artigo
    adicionarArtigo(
        "Novo Artigo: Cuidados com Cabelos Coloridos",
        "https://exemplo.com/imagem.jpg",
        "Aprenda a manter a cor do seu cabelo vibrante por mais tempo."
    );
});
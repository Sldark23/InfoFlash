document.addEventListener("DOMContentLoaded", function() {
    fetch('noticias/')
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let links = doc.querySelectorAll('a');

        let newsContainer = document.getElementById('news-container');
        links.forEach(link => {
            let fileName = link.getAttribute('href');
            if (fileName.endsWith('.html')) {
                let title = fileName.replace('.html', '').replace(/-/g, ' ');
                let newsItem = `
                    <div class="news-item">
                        <div class="news-title">${title}</div>
                        <a class="read-more" href="notícias/${fileName}">Ler mais</a>
                    </div>
                `;
                newsContainer.innerHTML += newsItem;
            }
        });
    })
    .catch(error => console.log('Erro ao carregar as notícias:', error));
});
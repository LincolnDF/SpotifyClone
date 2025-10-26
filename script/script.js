document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
    { name: 'Henrique & Juliano', image: "img/artista-henrique-juliano.jpg"},
    { name: 'Jorge & Matheus', image: "img/artista-jorge-mateus.jpg"},
    { name: 'Zé Neto & Cristiano', image: "img/artista-ze-neto.jpg"},
    { name: 'Gustavo Lima', image: "img/artista-gustavo-limma.jpg"},
    { name: 'Luan Santana', image: "img/artista-luan-santana.jpg"},
    { name: 'Mateus & Kauan', image: "img/artista-mateus-kauan.jpg"}
    
]

    const albumsDate = [
        {name: 'White Noise (Sleep & Relaxation Sonds)', artist: 'Sleep John', image: 'img/album-white-noise.jpg' },
        {name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: 'img/album-ceu-explica.jpg' },
        {name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'img/album-racionais.jpg' },
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'img/album-hit-me.jpg' },
        {name: 'CAJU', artist: 'Liniker', image: 'img/album-caju.jpg' },
        {name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: 'img/album-escandalo.jpg' }
    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsDate.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card') 

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            
        `

        albumsGrid.appendChild(albumCard)
    })

})



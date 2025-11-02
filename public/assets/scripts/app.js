const gallery = [ 
    {
      id: 2,
      titulo: "Grafite Político",
      descricao: "Desenho de grafite com temática política.",
      conteudo: "Ilustração detalhada de graffiti político, mostrando arte urbana engajada.",
      categoria: "Arte de Rua",
      autor: "Leonardo AI",
      data: "2025-03-30",
      imagem: "https://cdn.leonardo.ai/users/62103611-9796-4122-8589-b5731d68e6bd/generations/eabb72be-a801-4378-a78e-5202b6ac5d51/Ilustration_V2_political_graffiti_drawing_0.jpg",
      price: 200.00
    },
    {
      id: 3,
      titulo: "Paisagem do Rio de Janeiro",
      descricao: "Imagem mostrando a beleza natural da cidade do Rio de Janeiro.",
      conteudo: "Fotografia de paisagem urbana e natureza integrada em harmonia.",
      categoria: "Paisagem Urbana",
      autor: "Pixabay",
      data: "2025-03-30",
      imagem: "https://cdn.pixabay.com/photo/2018/07/20/01/42/rio-de-janeiro-3549798_1280.jpg",
      price: 180.00
    },
    {
      id: 4,
      titulo: "Grafite Indiano",
      descricao: "Arte urbana inspirada na cultura indiana.",
      conteudo: "Ilustração detalhada de graffiti com elementos culturais da Índia.",
      categoria: "Arte de Rua",
      autor: "Leonardo AI",
      data: "2025-03-30",
      imagem: "https://cdn.leonardo.ai/users/62103611-9796-4122-8589-b5731d68e6bd/generations/f5906da8-87e4-451f-a69d-128fc2704212/Ilustration_V2_indian_graffiti_0.jpg",
      price: 220.00
    },
    {
      id: 5,
      titulo: "Grafite em Cidade Urbana",
      descricao: "Arte urbana detalhando grafites nas paredes da cidade.",
      conteudo: "Ilustração mostrando a combinação de cores e formas de graffiti urbano.",
      categoria: "Arte de Rua",
      autor: "Leonardo AI",
      data: "2025-03-30",
      imagem: "https://cdn.leonardo.ai/users/62103611-9796-4122-8589-b5731d68e6bd/generations/eb233b7e-c529-4ea9-aa6d-27ae9d16eca7/Ilustration_V2_city_graffiti_0.jpg",
      price: 210.00
    },
    {
      id: 6,
      titulo: "Grafite Festivo",
      descricao: "Grafite colorido com temática festiva e alegre.",
      conteudo: "Fotografia mostrando cores vibrantes em mural urbano.",
      categoria: "Arte de Rua",
      autor: "Pixabay",
      data: "2025-03-30",
      imagem: "https://cdn.pixabay.com/photo/2019/12/25/19/57/grafitti-4719165_1280.jpg",
      price: 190.00
    },
    {
      id: 7,
      titulo: "Grafite McDonald's",
      descricao: "Arte urbana retratando marca famosa em estilo grafite.",
      conteudo: "Fotografia urbana mostrando publicidade e arte de rua combinadas.",
      categoria: "Arte de Rua",
      autor: "Pixabay",
      data: "2025-03-30",
      imagem: "https://cdn.pixabay.com/photo/2017/04/13/14/15/mcdonalds-2227657_1280.jpg",
      price: 170.00
    },
    {
      id: 8,
      titulo: "Grafite Político Pintado",
      descricao: "Obra de grafite política com cores vibrantes e formas impactantes.",
      conteudo: "Ilustração de graffiti político mostrando a força da mensagem urbana.",
      categoria: "Arte de Rua",
      autor: "Leonardo AI",
      data: "2025-03-30",
      imagem: "https://cdn.leonardo.ai/users/62103611-9796-4122-8589-b5731d68e6bd/generations/cb3254d5-5e90-4b27-95b4-344936b6913e/Ilustration_V2_political_graffiti_painting_0.jpg",
      price: 230.00
    },
    {
      id: 9,
      titulo: "História do Grafite",
      descricao: "Fotografia histórica de grafite representando diversas eras da arte urbana.",
      conteudo: "Imagem de grafite mostrando evolução da arte de rua.",
      categoria: "Arte de Rua",
      autor: "Leonardo AI",
      data: "2025-03-30",
      imagem: "https://cdn.leonardo.ai/users/62103611-9796-4122-8589-b5731d68e6bd/generations/3bab1f5b-ad39-452e-ab04-bc6dafc2c9b9/Absolute_Reality_v16_photograph_history_graffiti_0.jpg",
      price: 240.00
    },
    {
      id: 10,
      titulo: "Grafite Contemporâneo",
      descricao: "Arte urbana contemporânea em mural público.",
      conteudo: "Fotografia mostrando detalhes e cores de grafite moderno.",
      categoria: "Arte de Rua",
      autor: "Pixabay",
      data: "2025-03-30",
      imagem: "https://cdn.pixabay.com/photo/2018/05/22/00/43/graffiti-3420171_1280.jpg",
      price: 200.00
    }
  ];
  
const carouselContainer = document.querySelector('#carouselExampleAutoplaying .carousel-inner');
if(carouselContainer){
  gallery.forEach((item, index) => {
    const activeClass = index === 0 ? 'active' : '';
    const carouselItem = `
      <div class="carousel-item detalhescarousel ${activeClass}">
        <a href="detalhes.html?id=${item.id}">
          <img src="${item.imagem}" class="d-block w-100" alt="${item.titulo}" style="height:80vh; object-fit:cover;">
        </a>
      </div>
    `;
    carouselContainer.insertAdjacentHTML('beforeend', carouselItem);
  });
}

const cardsContainer = document.getElementById('cards-container');
if(cardsContainer){
  gallery.forEach(item => {
    const card = `
      <div class="col-md-4 mb-4">
        <a href="detalhes.html?id=${item.id}" class="text-decoration-none">
          <div class="card h-500 bg-transparent border-light text-white">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" style="object-fit: cover; height:500px;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title itenstitle">${item.titulo}</h5>
              <p class="card-text">${item.descricao}</p>
              <p class="mt-auto fw-bold">R$ ${item.price.toFixed(2)}</p>
            </div>
          </div>
        </a>
      </div>
    `;
    cardsContainer.insertAdjacentHTML('beforeend', card);
  });
}

const itemDetalhes = document.getElementById('item-detalhes');

if (itemDetalhes) {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get('id'));
  const item = gallery.find(i => i.id === itemId);

  if (item) {
    itemDetalhes.innerHTML = `
      <div class="col-12 mb-3">
        <div class="item-image" style="
          width: 100%;
          height: 70vh;
          background-image: url('${item.imagem}');
          background-position: center;
          background-size: cover;
          border-radius: 0.5rem;
        "></div>
      </div>
      <div class="col-12 col-md-8 offset-md-2 text-start mt-4">
        <h3>${item.titulo}</h3>
        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p><strong>Conteúdo:</strong> ${item.conteudo}</p>
        <p><strong>Categoria:</strong> ${item.categoria}</p>
        <p><strong>Autor:</strong> ${item.autor}</p>
        <p><strong>Data:</strong> ${item.data}</p>
        <p><strong>Preço:</strong> R$ ${item.price.toFixed(2)}</p>
      </div>
    `;
  } else {
    itemDetalhes.innerHTML = '<p class="text-danger text-center">Item não encontrado!</p>';
  }
}



const fotosCarouselInner = document.getElementById('fotos-carousel-inner');
if(fotosCarouselInner){
  const cardsPerSlide = 3;
  for(let i = 0; i < gallery.length; i += cardsPerSlide){
    const slice = gallery.slice(i, i + cardsPerSlide);
    const activeClass = i === 0 ? 'active' : '';
    
    let slideCards = '';
    slice.forEach(item => {
      slideCards += `
        <div class="col">
          <a href="detalhes.html?id=${item.id}" class="text-decoration-none text-white">
            <div class="card bg-dark border-light text-white" style="width: 18rem; margin: 0 5px;">
              <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" style="height:180px; object-fit:cover;">
              <div class="card-body text-center">
                <h6 class="card-title mb-0">${item.titulo}</h6>
              </div>
            </div>
          </a>
        </div>
      `;
    });

    const carouselItem = `
      <div class="carousel-item ${activeClass}">
        <div class="row justify-content-center">
          ${slideCards}
        </div>
      </div>
    `;
    fotosCarouselInner.insertAdjacentHTML('beforeend', carouselItem);
  }
}



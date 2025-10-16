// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("product-grid");

  // Função para criar o HTML do card de produto
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-content">
        <h3>${product.title}</h3>
        <p class="category">${product.category}</p>
        <p class="description">${product.description}</p>
        <p class="price"><strong>${product.price}</strong></p>
        <a href="https://wa.me/5575991396865?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto:%20${encodeURIComponent(product.title)}" target="_blank" class="btn btn-small">
          Pedir no WhatsApp
        </a>
      </div>
    `;

    return card;
  }

  // Função principal: carregar JSON e renderizar
  async function loadProducts() {
    try {
      const response = await fetch("data/products.json");
      if (!response.ok) {
        throw new Error("Erro ao carregar o catálogo.");
      }

      const products = await response.json();

      // Limpa o grid antes de renderizar
      grid.innerHTML = "";

      // Cria cada card de produto
      products.forEach((product) => {
        const card = createProductCard(product);
        grid.appendChild(card);
      });

    } catch (error) {
      console.error(error);
      grid.innerHTML = `
        <p style="color:#822fa8; font-weight:600; text-align:center;">
          Não foi possível carregar o catálogo no momento 😢<br>
          Tente novamente mais tarde.
        </p>`;
    }
  }

  // Chama a função ao carregar a página
  loadProducts();
});

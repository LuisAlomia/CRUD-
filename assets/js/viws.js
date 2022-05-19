const content = document.getElementById("content");
let print = "";

function printProduct(product) {
  product.forEach((p) => {
    print += `
      <div class="col">
        <div class="card h-100">
          <img src="${p.image}" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Price: ${p.price}</small>
          </div>
          <div class="card-footer">
            <small class="text-muted">
              <button type="button" class="btn btn-danger" onclick ="deleteProduct(${p.id})">Delete</button>
            </small>
            <small class="text-muted">
              <button type="button" class="btn btn-warning" onclick ="editProduct(${p.id})">Edict</button>
            </small>
          </div>
        </div>
      </div>`;
  });
  content.innerHTML = print;
}

export { printProduct };

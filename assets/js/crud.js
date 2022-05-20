import { printProduct } from "./viws.js";

const globalURL = "https://e-commerce-api-academlo.herokuapp.com/api/products";
let idEdit = null;

/* --------PRINT PRODUCTS---------- */
function getProducts() {
  axios
    .get(`${globalURL}`)
    .then((result) => {
      printProduct(result.data);
    })
    .catch((err) => console.log(err));
}

/* --------ADD PRODUCTS---------- */

function addProduct() {
  const formAdd = document.getElementById("formAdd");
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;

  const newProduct = {
    name,
    price,
    image,
  };
  axios
    .post(`${globalURL}`, newProduct)
    .then((result) => {
      console.log(result);
      alert("Se agrego el producto");
      getProducts();
    })
    .catch((err) => {
      console.log(err);
      alert("Error al subir producto");
    });

  formAdd.reset();
}

/* --------DELETE PRODUCTS---------- */

function deleteProduct(id) {
  const confirmation = confirm("¿Estas se guro de eliminar el producto?");
  if (!confirmation) return;

  axios
    .delete(`${globalURL}/${id}`)
    .then((result) => {
      console.log(result);
      alert("Producto eliminado");
      getProducts();
    })
    .catch((err) => {
      console.log(err);
      alert("No se pudo eliminar el producto");
    });
}

/* --------EDIT/UPDATE PRODUCTS---------- */

/* Edit */

function editProduct(id) {
  const confirmation = confirm(
    "¿Estas se guro de querer actualizar el producto?"
  );
  if (!confirmation) return;

  axios
    .get(`${globalURL}/${id}`)
    .then((result) => {
      idEdit = id;
      document.getElementById("updatename").value = result.data.name;
      document.getElementById("updateprice").value = result.data.price;
      document.getElementById("updateimage").value = result.data.image;
    })
    .catch((err) => {
      console.log(err);
      alert("No se pudo actualizar");
    });
}

/* Update */

function updateProduct() {
  const formUpdate = document.getElementById("formUpdate");
  let name = document.getElementById("updatename").value;
  let price = document.getElementById("updateprice").value;
  let image = document.getElementById("updateimage").value;

  const update = {
    name,
    price: Math.round(price),
    image,
  };

  axios
    .put(`${globalURL}/${idEdit}`, update)
    .then((result) => {
      console.log(result);
      alert("Producto Actualizado");
      getProducts();
    })
    .catch((err) => {
      console.log(err);
    });

  formUpdate.reset();
}

export { getProducts, addProduct, deleteProduct, editProduct, updateProduct };

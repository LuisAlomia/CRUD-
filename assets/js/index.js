import {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  updateProduct,
} from "./crud.js";

getProducts();

window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct;

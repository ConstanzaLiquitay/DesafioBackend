class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      if (!title || !description || !price || !code || stock === undefined) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some((product) => product.code === code)) {
        console.error("Ya existe un producto con el mismo código.");
        return;
      }
  
      const product = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        code,
        stock,
      };
  
      this.products.push(product);
      return product;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado.");
        return null;
      }
    }
  }
  
  // Ejemplo de uso
  const manager = new ProductManager();
  
  manager.addProduct({
    title: "Vino Tinto",
    description: "vino tinto de la bodega trapiche",
    price: 15.000,
    code: "1",
    stock: 50,
  });
  
  manager.addProduct({
    title: "Vino Blanco",
    description: "vino blanco",
    price: 10.000,
    code: "2",
    stock: 10,
  });
  
  const products = manager.getProducts();
  console.log(products);
  
  const productById = manager.getProductById(2);
  console.log(productById);
  
  const productNotFound = manager.getProductById(3);
  
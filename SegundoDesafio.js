const { promises: fs } = require('fs')

class Productos {
  constructor({ id, title , description , price , code , stock  }) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.code = code
    this. stock = stock
  }
}

class ProductosManager {
  #productos

  constructor({ ruta }) {
    this.ruta = ruta
    this.#productos = []
  }


  async reset() {
    this.#productos = []
    await this.#escribirProductos()
  }

  async #leerProductos() {
    const usuariosEnJson = await fs.readFile(this.ruta, 'utf-8')
    const datosProductosArray = JSON.parse(productosEnJson)
    this.#productos = datosProductosArray.map(j => new Productos(j))
  }

  async #escribirProductos() {
    const productosJson = JSON.stringify(this.#productos, null, 2)
    await fs.writeFile(this.ruta, productosJson)
  }

  async addUser({ }) {
    await this.#leerProductos()
    const usuario = new Usuario({ id, nombre, apellido, edad, curso })
    this.#productos.push(usuario)
    await this.#escribirProductos()
    return usuario
  }

  async getUsers() {
    await this.#leerProductos()
    return this.#productos
  }

  async updateUser(id, userData) {
    await this.#leerProductos()
    const index = this.#productos.findIndex(u => u.id === id)
    if (index !== -1) {
      const nuevoUsu = new Usuario({ id, ...this.#productos[index], ...userData })
      this.#productos[index] = nuevoUsu
      await this.#escribirProductos()
      return nuevoUsu
    } else {
      throw new Error('error al actualizar: usuario no encontrado')
    }
  }

  async deleteUser(id) {
    await this.#leerProductos()
    const index = this.#productos.findIndex(u => u.id === id)
    if (index !== -1) {
      const arrayConLosBorrados = this.#productos.splice(index, 1)
      await this.#escribirProductos()
      return arrayConLosBorrados[0]
    } else {
      throw new Error('error')
    }
  }
}

async function main() {
  const um = new ProductosManager({ ruta: 'productos.json' })
  um.reset()

  console.log('agregado: ', await um.addUser({
    title: "Vino Tinto",
    description: "vino tinto de la bodega trapiche",
    price: 15.000,
    code: "1",
    stock: 50,
  }))
}

  console.log('obtenidos: ', await um.getUsers())

  console.log('actualizado: ', await um.updateUser(1, { edad: 38 }))
  console.log('borrado: ', await um.deleteUser(2))

  console.log('obtenidos: ', await um.getUsers())


main()
import fs from 'fs/promises'

export class ProductManager{
    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(query = {}){
        const json = await fs.readFile(this.ruta, 'utf8')
        return JSON.parse(json)
    }

    async getAll(query = {}){
        const json = await fs.readFile(this.ruta, 'utf8')
        if(query.title){
            return JSON.parse(json).filter(p => p.title === query.title)
        }
        return JSON.parse(json)
    }

    async getById(id){
        const json = await fs.readFile(this.ruta, 'utf8')
        const productos = JSON.parse(json)
        const buscada = productos.find(p => p.id === id)
        if (!buscada) throw new Error(`no se encontró la persona con id ${id}`)
        return buscada
    }

}

import fs from 'fs/promises'

export class ProductManager{
    constructor(ruta){
        this.ruta = ruta
    }

    async getAll(query = {}){
        const json = await fs.readFile(this.ruta, 'utf8')
        return JSON.parse(json)
    }
}


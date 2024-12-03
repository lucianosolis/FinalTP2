import VentaFactory from "../models/ventaFactory.js"

class VentaService{

    constructor(){

        this.model=VentaFactory.get("")
    }

    getVentas=async()=>{
        const ventas=await this.model.getVentas()
        return ventas
    }

    postVentas=async(data)=>{

        const newVenta=await this.model.postVentas(data)
        return newVenta
    }
}

export default VentaService
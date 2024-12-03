class VentaMemModel{

    constructor(){

        this.ventas=[]
    }

    getVentas=async()=>{

        return this.ventas
    }

    postVentas=async(data)=>{
        if(!data.idJuego || !data.cantidadVendida){
            return "los datos ingresados no son validos"
        }
        this.ventas.push(data)
        return data
    }
}

export default VentaMemModel
import VentaService from "../services/venta.service.js";

class VentaController{

    constructor(){

        this.ventaService=new VentaService()
    }

    getVentas=async(req,res)=>{

        const ventas=await this.ventaService.getVentas()
        res.send(ventas)
    }

    postVentas=async(req,res)=>{

        const data=req.body
        if(JSON.stringify(data)=="{}"){
            res.send("los datos ingresados no son validos")
        }else{
            const newVenta=await this.ventaService.postVentas(data)
            res.send(newVenta)
        }
    }
}

export default VentaController
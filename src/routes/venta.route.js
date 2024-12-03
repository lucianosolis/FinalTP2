import VentaController from "../controllers/venta.controller.js";
import express from "express"

class VentaRoute{

    constructor(){

        this.router=express.Router()
        this.ventaController=new VentaController()

    }

    start(){

        this.router.get("/ventas",this.ventaController.getVentas)
        this.router.post("/ventas",this.ventaController.postVentas)

        return this.router
    }
}

export default VentaRoute
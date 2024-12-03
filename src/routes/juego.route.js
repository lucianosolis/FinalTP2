import JuegoController from "../controllers/juego.controller.js";
import express from "express"

class JuegoRoute{

    constructor(){

        this.juegoController=new JuegoController()
        this.router=express.Router()
    }

    start(){

        this.router.get("/juegos",this.juegoController.getJuegos)
        this.router.post("/juegos",this.juegoController.postJuegos)
        this.router.patch("/juegos/patch/:id",this.juegoController.patchJuegos)
        return this.router
    }
}

export default JuegoRoute
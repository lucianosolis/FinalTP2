import JuegoFactory from "../models/juegoFactory.js";

class JuegoService{

    constructor(){

        this.model= JuegoFactory.get("")
    }

    getJuegos=async()=>{
        const juegos=await this.model.getJuegos()
        return juegos
    }

    postJuegos=async(data)=>{

        const newJuego=await this.model.postJuegos(data)
        return newJuego
    }

    patchJuegos=async(id,data)=>{

        const newJuego=await this.model.patchJuegos(id,data)
        return newJuego
    }
}

export default JuegoService
import JuegoService from "../services/juego.services.js";

class JuegoController{

    constructor(){
        this.service=new JuegoService()
    }

    getJuegos=async(req,res)=>{
        const juegos=await this.service.getJuegos()
        res.send(juegos)
    }

    postJuegos=async(req,res)=>{
        const data=req.body
        if(JSON.stringify(data)=="{}"){
            res.send("Los datos ingresados no son validos")
        }else{
            const newJuego=await this.service.postJuegos(data)
            res.send(newJuego)
        }
        
    }

    patchJuegos=async(req,res)=>{
        const {id}=req.params
        const data=req.body
        const newJuego=await this.service.patchJuegos(id,data)
        res.send(newJuego)
    }
}

export default JuegoController
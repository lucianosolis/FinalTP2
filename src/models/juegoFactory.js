import JuegoMemModel from "./DAO/juego.model.mem.js";

class JuegoFactory{

    static get(persistencia){
        switch(persistencia){

            case "MEM":
                console.log("persistiendo en la memoria del servidor")
                return new JuegoMemModel()
            default:
                console.log("persistiendo en la memoria por default")
                return new JuegoMemModel()
        }
    }
}

export default JuegoFactory
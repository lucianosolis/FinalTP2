import VentaMemModel from "./DAO/venta.model.mem.js"

class VentaFactory{

    static get(persistencia){
        switch(persistencia){

            case "MEM":
                console.log("persistiendo en la memoria del servidor")
                return new VentaMemModel()
            default:
                console.log("persistiendo en la memoria por default")
                return new VentaMemModel()
        }
    }
}

export default VentaFactory
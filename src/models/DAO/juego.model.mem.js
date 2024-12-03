class JuegoMemModel{

    constructor(){

        this.juegos=[]
    }

    getJuegos=async()=>{

        return this.juegos
    }

    postJuegos=async(data)=>{

        if(!data.nombre || !data.categoria|| !data.precio || !data.cantidadEnStock){
            return "Los datos ingresados no son validos"
        }

        if(this.juegos.length==0){
            data.id=1
        }else{
            data.id=this.juegos[this.juegos.length -1].id +1
        }
        this.juegos.push(data)
        return data
    }

    patchJuegos=async(id,data)=>{

        const posJuego=this.juegos.findIndex(j=>j.id==id)
        if(posJuego!=-1){
            const obj={...this.juegos[posJuego],...data}
            this.juegos.splice(posJuego,1,obj)
            return obj
        }else{
            return " no se ha encontrado el id"
        }
    }

}

export default JuegoMemModel
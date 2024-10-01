 
import   * as rsl from "readline-sync"
import { Vehiculo } from "./Vehiculo"
export 
class RegistroAutomotor {
    private registrarVehiculo: Vehiculo[];

    constructor (registrarVehiculo:Vehiculo[]){
        this.registrarVehiculo=registrarVehiculo;
    }

    getregistrarVehiculo():Vehiculo[]{
        return this.registrarVehiculo;
    }

    setregistrarVehiculo(registrarVehiculo:Vehiculo[]):void{
        this.registrarVehiculo=registrarVehiculo;
    }

    nuevoVehiculo(tipoVehiculo:string, marca:string, modelo:string, patente:string, nroMotor:string, nroChasis:string, cilindrada:number):void{
        let agregarVehiculo:Vehiculo=new Vehiculo (tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cilindrada);
        if(!this.registrarVehiculo.some (
            lib=> lib.getnroChasis()==nroChasis && lib.getnroMotor()==nroMotor )){// miro si el chasis o motor estan repetidos.
            this.registrarVehiculo.push(agregarVehiculo);
        }else{
            console.log("el vehiculo ya esta en la lista");
        }
    }

    eliminarVehiculo(patenteAEliminar:string):void{
        this.registrarVehiculo = this.registrarVehiculo.filter(vehiculo => vehiculo.getpatente() !== patenteAEliminar);
    }
    
    ModificarVehiculo(vehiculoAModificar:Vehiculo):void{// Elijo el Motor Pq el resto me parece dificil de Modificar :)
        console.log("Del siguiente vehiculo solo podra modificar el Motor");
        console.log(vehiculoAModificar);
        let nuevoMotor:string= rsl.question("Ingrese nuevo numero de motor :");
        console.log(nuevoMotor)
        vehiculoAModificar.setnroMotor(nuevoMotor);
        console.log(vehiculoAModificar);
    }

}


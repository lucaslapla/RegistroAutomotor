 

import { Vehiculo } from "./Vehiculo"
import   * as rsl from "readline-sync"

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

// Crear Vehiculos
const vehiculo1 = new Vehiculo("Auto","Fiat","Duna","ADR 700","MOT2344B234","CH234688" );
const vehiculo2 = new Vehiculo("Auto","Renaul","Sandero","AA 345 DR","MOT67T903","CH67890",1600 );
const vehiculo3 = new Vehiculo("Camioneta","Chevrolet","S-10","OLP 345","MOT345R67","CH35678");
const vehiculo4 = new Vehiculo("Camioneta","Nissan","Frontier","RDT 367" ,"MOT27T349","CH237640",3000);
const vehiculo5 = new Vehiculo("MOTO","Yamaha","FZ-16","AC 987 RE" ,"MOT1234J239","CH928672",250);
const vehiculo6 = new Vehiculo("MOTO","Honda","BR","AD 789 DE" ,"MOT12J2345","CH723672",250);

//Carga registro
const registrarVehiculo= new RegistroAutomotor ([vehiculo1, vehiculo2,vehiculo3,vehiculo4,vehiculo5,vehiculo6]);


//Ver lista de Vehiculos
console.log(registrarVehiculo);
console.log("=======================Lista Original===============================");

//Agrego Vehiculo y lo muestro
registrarVehiculo.nuevoVehiculo("Camion","Volvo","Standart","OPL 234","mot75933y924","ch37429j829347",5000);
console.log(registrarVehiculo);
console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");

//Modificar Vehiculo
registrarVehiculo.ModificarVehiculo(vehiculo1);
console.log("==========================Se Modifico numero de motor del Segundo ============================");

//Eliminar Vehiculo y lo muestro
registrarVehiculo.eliminarVehiculo("OPL 234");//elimino el camnion agegado por metodo
console.log(registrarVehiculo);
console.log("==========================Se elimina el Camion ============================");

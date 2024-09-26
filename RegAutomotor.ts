import { Vehiculo } from "./Vehiculo";

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
        if(!this.registrarVehiculo.some (lib=> lib.getnroChasis()==nroChasis && lib.getnroMotor()==nroMotor )){// miro si el chasis o motor estan repetidos.
            this.registrarVehiculo.push(agregarVehiculo);
        }else{
            console.log("el vehiculo ya esta en la lista");
        }
    }

   /* eliminarVehiculo(vehiculoAEliminar:Vehiculo):void{
        if(vehiculoAEliminar!=undefined&&this.registrarVehiculo.includes(vehiculoAEliminar)){//veo que no sea indefinido y que este en la lista
            let posVehiculo:number =this.registrarVehiculo.indexOf(vehiculoAEliminar);//busco la posicion
            this.registrarVehiculo.slice(posVehiculo,1);// se retira de la lista
        }
    }*/
    /*
    modificarVehiculo(vehiculoAModificar:Vehiculo):void{
        if(vehiculoAModificar!=undefined&&this.registrarVehiculo.includes(vehiculoAModificar)){//veo que no sea indefinido y que este en la lista
            let posVehiculo:number =this.registrarVehiculo.indexOf(vehiculoAModificar);//busco la posicion

            
        }
    }*/


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

//Agrego Vehiculo y lo muestro
registrarVehiculo.nuevoVehiculo("Camoin","Volvo","Standart","OPL 234","mot75933y924","ch37429j829347",5000);
console.log(registrarVehiculo);

//Modificar Vehiculo
//registrarVehiculo.modificarVehiculo()

//Eliminar Vehiculo y lo muestro
//registrarVehiculo.eliminarVehiculo("Camoin","Volvo","Standart","OPL 234","mot75933y924","ch37429j829347",5000);
//console.log(registrarVehiculo);


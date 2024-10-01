import { Vehiculo } from "./Vehiculo"
import { RegistroAutomotor } from "./RegAutomotor"
import   * as rsl from "readline-sync"


    

function menuverLista (registrarVehiculo):void{
        //Ver lista de Vehiculos
        console.log(registrarVehiculo);
        console.log("=======================Lista Original===============================");
}

function menuAgregarVehiculo(registrarVehiculo):void{
        //Agrego Vehiculo y lo muestro
        registrarVehiculo.nuevoVehiculo("Camion","Volvo","Standart","OPL 234","mot75933y924","ch37429j829347",5000);
        console.log(registrarVehiculo);
        console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");
}

function menuModificarVehiculo(registrarVehiculo):void{
        //Modificar Vehiculo
        registrarVehiculo.ModificarVehiculo(vehiculo1);
        console.log("==========================Se Modifico numero de motor del Segundo ============================");
}

function menuEliminarVehiculo(registrarVehiculo):void{
        //Eliminar Vehiculo y lo muestro
        registrarVehiculo.eliminarVehiculo("OPL 234");//elimino el camnion agegado por metodo
        console.log(registrarVehiculo);
        console.log("==========================Se elimina el Camion ============================");
}

function menuPrincipal(registrarVehiculo):void{ // armo menu para que sea menos engorroso :)
    let selector:number=2;
    while(selector!=0){
        console.log("*******************************************************")
        console.log("**  Ingrese 0 si deseasalir del menu                 **");
        console.log("**  Ingrese 1 si desea ver la lista de vehiculos     **");
        console.log("**  Ingrese 2 si desea agregar un Vehiculo           ** ");
        console.log("**  Ingrese 3 si desea modificar motor de vehiculo   **");
        console.log("**  Ingrese 4 si desea eliminar vehiculo             **");
        console.log("*******************************************************")
        let aux:number = rsl.question("Seleccione la opcion deseada : ");
        selector=aux;
        if (selector==1){
            menuverLista(registrarVehiculo);
        }else if (selector==2){
            menuAgregarVehiculo(registrarVehiculo);
        }else if(selector==3){
            menuModificarVehiculo(registrarVehiculo);
        }else if(selector==4){
            menuEliminarVehiculo(registrarVehiculo);
        }else{
            console.log("El numero ingresado no estaen el menu, prueve nuevamente")
        }
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



menuPrincipal(registrarVehiculo);
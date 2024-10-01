import { Vehiculo } from "./Vehiculo"
import { RegistroAutomotor } from "./RegAutomotor"


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

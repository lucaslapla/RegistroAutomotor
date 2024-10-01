"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegAutomotor_1 = require("./RegAutomotor");
// Crear Vehiculos
var vehiculo1 = new Vehiculo_1.Vehiculo("Auto", "Fiat", "Duna", "ADR 700", "MOT2344B234", "CH234688");
var vehiculo2 = new Vehiculo_1.Vehiculo("Auto", "Renaul", "Sandero", "AA 345 DR", "MOT67T903", "CH67890", 1600);
var vehiculo3 = new Vehiculo_1.Vehiculo("Camioneta", "Chevrolet", "S-10", "OLP 345", "MOT345R67", "CH35678");
var vehiculo4 = new Vehiculo_1.Vehiculo("Camioneta", "Nissan", "Frontier", "RDT 367", "MOT27T349", "CH237640", 3000);
var vehiculo5 = new Vehiculo_1.Vehiculo("MOTO", "Yamaha", "FZ-16", "AC 987 RE", "MOT1234J239", "CH928672", 250);
var vehiculo6 = new Vehiculo_1.Vehiculo("MOTO", "Honda", "BR", "AD 789 DE", "MOT12J2345", "CH723672", 250);
//Carga registro
var registrarVehiculo = new RegAutomotor_1.RegistroAutomotor([vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6]);
//Ver lista de Vehiculos
console.log(registrarVehiculo);
console.log("=======================Lista Original===============================");
//Agrego Vehiculo y lo muestro
registrarVehiculo.nuevoVehiculo("Camion", "Volvo", "Standart", "OPL 234", "mot75933y924", "ch37429j829347", 5000);
console.log(registrarVehiculo);
console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");
//Modificar Vehiculo
registrarVehiculo.ModificarVehiculo(vehiculo1);
console.log("==========================Se Modifico numero de motor del Segundo ============================");
//Eliminar Vehiculo y lo muestro
registrarVehiculo.eliminarVehiculo("OPL 234"); //elimino el camnion agegado por metodo
console.log(registrarVehiculo);
console.log("==========================Se elimina el Camion ============================");

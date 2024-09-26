"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(registrarVehiculo) {
        this.registrarVehiculo = registrarVehiculo;
    }
    RegistroAutomotor.prototype.getregistrarVehiculo = function () {
        return this.registrarVehiculo;
    };
    return RegistroAutomotor;
}());
// Crear Vehiculos
var vehiculo1 = new Vehiculo_1.Vehiculo("Auto", "Fiat", "Duna", "ADR 700", "MOT2344B234", "CH234688");
var vehiculo2 = new Vehiculo_1.Vehiculo("Auto", "Renaul", "Sandero", "AA 345 DR", "MOT67T903", "CH67890", 1600);
var vehiculo3 = new Vehiculo_1.Vehiculo("Camioneta", "Chevrolet", "S-10", "OLP 345", "MOT345R67", "CH35678");
var vehiculo4 = new Vehiculo_1.Vehiculo("Camioneta", "Nissan", "Frontier", "RDT 367", "MOT27T349", "CH237640", 3000);
var vehiculo5 = new Vehiculo_1.Vehiculo("MOTO", "Yamaha", "FZ-16", "AC 987 RE", "MOT1234J239", "CH928672", 250);
var vehiculo6 = new Vehiculo_1.Vehiculo("MOTO", "Honda", "BR", "AD 789 DE", "MOT12J2345", "CH723672", 250);
//Carga registro
var registrarVehiculo = new RegistroAutomotor([vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5, vehiculo6]);
//Ver lista de Vehiculos
console.log(registrarVehiculo);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var rsl = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(registrarVehiculo) {
        this.registrarVehiculo = registrarVehiculo;
    }
    RegistroAutomotor.prototype.getregistrarVehiculo = function () {
        return this.registrarVehiculo;
    };
    RegistroAutomotor.prototype.setregistrarVehiculo = function (registrarVehiculo) {
        this.registrarVehiculo = registrarVehiculo;
    };
    RegistroAutomotor.prototype.nuevoVehiculo = function (tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cilindrada) {
        var agregarVehiculo = new Vehiculo_1.Vehiculo(tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cilindrada);
        if (!this.registrarVehiculo.some(function (lib) { return lib.getnroChasis() == nroChasis && lib.getnroMotor() == nroMotor; })) { // miro si el chasis o motor estan repetidos.
            this.registrarVehiculo.push(agregarVehiculo);
        }
        else {
            console.log("el vehiculo ya esta en la lista");
        }
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patenteAEliminar) {
        this.registrarVehiculo = this.registrarVehiculo.filter(function (vehiculo) { return vehiculo.getpatente() !== patenteAEliminar; });
    };
    RegistroAutomotor.prototype.ModificarVehiculo = function (vehiculoAModificar) {
        console.log("Del siguiente vehiculo solo podra modificar el Motor");
        console.log(vehiculoAModificar);
        var nuevoMotor = rsl.question("Ingrese nuevo numero de motor :");
        console.log(nuevoMotor);
        vehiculoAModificar.setnroMotor(nuevoMotor);
        console.log(vehiculoAModificar);
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
console.log("=======================Lista Original===============================");
//Agrego Vehiculo y lo muestro
registrarVehiculo.nuevoVehiculo("Camion", "Volvo", "Standart", "OPL 234", "mot75933y924", "ch37429j829347", 5000);
console.log(registrarVehiculo);
console.log("==========================Se Agrega Nuevo Camion En ultimo Lugar ============================");
//Modificar Vehiculo
registrarVehiculo.ModificarVehiculo(vehiculo1);
console.log(registrarVehiculo);
console.log("==========================Se Modifico numero de motor del Segundo ============================");
//Eliminar Vehiculo y lo muestro
registrarVehiculo.eliminarVehiculo("OPL 234"); //elimino el camnion agegado por metodo
console.log(registrarVehiculo);
console.log("==========================Se elimina el Camion ============================");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var rsl = require("readline-sync");
var Vehiculo_1 = require("./Vehiculo");
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
exports.RegistroAutomotor = RegistroAutomotor;

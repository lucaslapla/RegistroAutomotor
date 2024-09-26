"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipoVehiculo, marca, modelo, patente, nroMotor, nroChasis, cilindrada) {
        this.tipoVehiculo = tipoVehiculo;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
        this.nroMotor = nroMotor;
        this.nroChasis = nroChasis;
        if (cilindrada == undefined) {
            this.cilindrada = 0;
        }
        else {
            this.cilindrada = cilindrada;
        }
    }
    //aqui los GET
    Vehiculo.prototype.gettipoVehiculo = function () {
        return this.tipoVehiculo;
    };
    Vehiculo.prototype.getmarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getmodelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getpatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getnroMotor = function () {
        return this.nroMotor;
    };
    Vehiculo.prototype.getnroChasis = function () {
        return this.nroChasis;
    };
    Vehiculo.prototype.getcilindrada = function () {
        return this.cilindrada;
    };
    //Aqui los SET
    Vehiculo.prototype.settipoVehiculo = function (tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    };
    Vehiculo.prototype.setmarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setmodelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setpatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setnroMotor = function (nroMotor) {
        this.nroMotor = nroMotor;
    };
    Vehiculo.prototype.setnroChasis = function (nroChasis) {
        this.nroChasis = nroChasis;
    };
    Vehiculo.prototype.setcilindrada = function (cilindrada) {
        this.cilindrada = cilindrada;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;

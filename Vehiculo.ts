export class Vehiculo {
    private tipoVehiculo: string;
    private marca: string;
    private modelo: string;
    private patente: string;
    private nroMotor: string;
    private nroChasis: string;
    private cilindrada: number;

    constructor(tipoVehiculo : string , marca: string, modelo:string, patente: string , nroMotor: string, nroChasis: string, cilindrada?:number) {
        this.tipoVehiculo = tipoVehiculo;
        this.marca = marca;
        this.modelo = modelo;
        this.patente= patente;
        this.nroMotor = nroMotor;        
        this.nroChasis = nroChasis;
        if (cilindrada==undefined){
            this.cilindrada=0;
        }else{  this.cilindrada = cilindrada;
        }
    }
    gettipoVehiculo(): string {
        return this.tipoVehiculo;
    }
    
    getmarca(): string {
        return this.marca;
    }

    getmodelo(): string {
        return this.modelo;
    }

    getpatente(): string {
        return this.patente;
    }

    getnroMotor(): string {
        return this.nroMotor;
    }

    getnroChasis(): string {
        return this.nroChasis;
    }    

    getcilindrada(): number {
        return this.cilindrada;
    }

    vajaVehiculo():void{

    }

    modificarVehiculo():void{
        
    }

}


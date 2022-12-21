export class Organizacion {
    id_organizacion: number;
    codigo: String;
    nombre: String;
    direccion: String;
    Ini_vigencia: String;
    Fin_vigencia: String;

    constructor(){
        this.codigo = '';
        this.nombre = '';
        this.direccion= '';
        this.Ini_vigencia = '';
        this.Fin_vigencia = '';
    }
}
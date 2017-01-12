////////////////////////////////////////////////////////////////////////////
//
// DENO : Tipado typescript delObjeto CIP para el la validación del código 
//        de identificación de paciente del Servicio de Salud Castilla-la Mancha,
//
// LICENCIA : MIT
//
// AUTOR : Ricardo Ortega Galiana (ricortegal@gmail.com)
//
// version 1.0.5
//
// https://github.com/ricortegal/jscip 
// git clone https://github.com/ricortegal/jscip.git
//
///////////////////////////////////////////////////////////////////////////

declare module "jscip" {

        export class CIP {
        
        public cip:string;
        public apellido1:string;
        public apellido2:string;
        public fechaNacimiento:Date;
        public sexo:string;
        public sexo:string;
        public error:number;
        public numErrores:number;

        constructor(cip: string, 
                    apellido1: string, 
                    apellido2: string, 
                    fecha: Date, 
                    sexo: string);
                    
        getErrores(): Array<string>;
        
    }

}
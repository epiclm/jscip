# jscip
Validador de Código de Identificador de Paciente del Servicio de Salud de Castilla-La Mancha SESCAM

#uso
```javascript
var jscip = require('jscip');
var micip = new jscip.CIP('FRGR790112909028','Fernandez','Garcia','1979-02-23',6);
var errores = micip.getErrores();
var numErrores = micip.numErrores;
console.log('Número de errores: '+numErrores);
errores.forEach(function (val) {
    console.log('Error num:' + val.numError + ' - ' + val.deno);
});
```



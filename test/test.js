const jscip = require("../CIP");
const assert = require('assert');

cipTests = [
    { cip: "RTGR661212911014", apellido1: "", apellido2: "", sexo: 1, fecNac: "", numErrores: 6, it: "Sin datos de paciente pero cip pre-vállido" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 1, fecNac: "1966-12-12", numErrores: 0, it: "cip vállido" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 6, fecNac: "1966-12-12", numErrores: 1, it: "cip vállido pero sexo mal indicado" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 1, fecNac: "1966-12-13", numErrores: 1, it: "cip válido pero el dia de nacimiento no es correcto" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 1, fecNac: "1966-10-13", numErrores: 2, it: "cip válido pero el dia y mes de nacimiento no son correctos" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 1, fecNac: "1967-10-13", numErrores: 3, it: "cip válido pero el dia, mes y año de nacimiento no son correctos" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Garcia", sexo: 1, fecNac: "19671234023413", numErrores: 4, it: "cip válido pero la fecha de nacimiento no es válida" },
    { cip: "RTGR661212911014", apellido1: "Otega", apellido2: "Garcia", sexo: 1, fecNac: "1966-12-12", numErrores: 1, it: "primer apellido incorrecto" },
    { cip: "RTGR661212911014", apellido1: "Ortega", apellido2: "Gacia", sexo: 1, fecNac: "1966-12-12", numErrores: 1, it: "segundo apellido incorrecto" },
    { cip: "RTGR661212911014", apellido1: "Otega", apellido2: "Gacia", sexo: 1, fecNac: "1966-12-12", numErrores: 2, it: "primer y segundo apellidos incorrectos" },
    { cip: "RTGR661212911014", apellido1: "Otega", apellido2: "Gacia", sexo: 1, fecNac: "1966-12-13", numErrores: 3, it: "primer y segundo apellidos y dia de nacimiento incorrectos" },
    { cip: "BBCJ871242901025", apellido1: "Otega", apellido2: "Gacia", sexo: 6, fecNac: "1987-12-13", numErrores: 3, it: "primer y segundo apellidos y dia, mes de nacimiento incorrectos" },
    { cip: "BBCJ871242901025", apellido1: "Otega", apellido2: "Gacia", sexo: 1, fecNac: "1987-12-13", numErrores: 4, it: "primer y segundo apellidos y dia, mes, sexo de nacimiento incorrectos" },
    { cip: "BBCJ871242901025", apellido1: "Bebete", apellido2: "Cojata", sexo: 1, fecNac: "1987-1-02", numErrores: 2, it: "mes y sexo incorrecto" },
    { cip: "BBCJ871242X01025", apellido1: "Bebete", apellido2: "Cojata", sexo: 1, fecNac: "1987-1-02", numErrores: 8, it: "cip erroneo" }
]

cipTests.forEach(function(cipTest) {
    it(cipTest.cip + " " + cipTest.it, function() {
        var cip = new jscip.CIP(cipTest.cip,
            cipTest.apellido1,
            cipTest.apellido2,
            cipTest.fecNac,
            cipTest.sexo
        );
        assert.equal(cipTest.numErrores, cip.numErrores);
    })
    it(cipTest.cip + " (param. call) " + cipTest.it, function() {
        var cip = new jscip.CIP({
            fecha: cipTest.fecNac,
            cip: cipTest.cip,
            apellido1: cipTest.apellido1,
            apellido2: cipTest.apellido2,
            sexo: cipTest.sexo
        });
        assert.equal(cipTest.numErrores, cip.numErrores);
    })
});
module.exports = {
    historia: function(personaje, lugar, edad) {
        if(edad > 18 && edad < 30) {
            return `Había una vez un niña de ${edad} que se llamaba ${personaje}  y vivia en ${lugar}.`
        } else if(edad > 30) {
            return `una vez un niña de ${edad} que se llamaba ${personaje}  y vivia en ${lugar}.`
        } else{
            return `niña de ${edad} que se llamaba ${personaje}  y vivia en ${lugar}.`
        }
    }
}
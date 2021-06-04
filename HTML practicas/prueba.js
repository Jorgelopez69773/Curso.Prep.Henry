
var nombre = "Jorge";
var email = "jorgelopez.trabajo@gmail.com";
var password = "jorgelomas1996";
var Usuarionuevo = {}
function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    Usuarionuevo.nombre= nombre
    Usuarionuevo.email = email
    Usuarionuevo.password = password
    console.log(Usuarionuevo)
}
nuevoUsuario(nombre,email,password);

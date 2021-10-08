const centuryFromYear = (year) => Math.ceil(year / 100)

// const correos = ["correo1@hotmail.com", "correo2@hotmail.com", "correo3@gmail.com"]

// correos.forEach(correo => {
//     if (correo.includes("@hotmail.com")) {
//         console.log(correo)
//     }
// })


const palindromo = (palabra) => {
    palabra.replace(" ", "");
    palabra.toLowerCase();
    // forma de darle la vuelta a un string
    let palabraInvertida = palabra.split("").reverse().join("");
    if( palabra === palabraInvertida) {
        console.log("Es un palindromo")
    } else {
        console.log("no es un palindromo")
    }
}

palindromo("aabaa")

console.log(centuryFromYear(1905))
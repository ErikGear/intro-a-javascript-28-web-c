
//Objetos Literales

let erik = {
    nombre : "Erik",
    apellido : "Galindo",
    edad: 2023 - 1997,
    amigos: ["Isamel", "Luis", "Julio"]
}

console.log(erik);


console.log(`${erik.nombre} tiene ${erik.amigos.length} amigos y su mejor amigo es ${erik.amigos[0]}`);


const artistas = [

    {
        nombre : "Alex Turner",
        banda : "Artic Monkys",
        albums : ["AM", "The Car"],
        nacionalidad : "Britanico",
        edad: 36,
    },
    {
        nombre : "Julian Casablancas",
        banda : "The Strokes",
        albums : ["Room on fire", "The new abnormal"],
        nacionalidad : "estadounidense",
        edad : 45,
    }

];

console.log(`${artistas[1].nombre} es el mejor con su albun ${artistas[1].albums[1]}`);



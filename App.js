//Se obtiene el texto de entrada de los argumentos
let args = process.argv.slice(2);
let characters = [];
let characterscontrol = [];
let string = "";

//Función de validación de cierre de signos
function validateclosing(characters, item) {
    if (characters[characters.length - 1].closingchar == item) {
        return characters.length - 1
    }
    else
    {
        characters.pop();
    }
}

//Se concatenan todos los chars ingresados en un string 
for (let i = 0; i < args.length; i++) {
    string = string.concat(args[i]);
}

//Se analiza la cadena
for (let i = 0; i < string.length; i++) {
    item = string.charAt(i);
    switch (item) {
        case '[':
        case '{':
        case '(':
            const object = { char: item, closed: false, type: item, index: i, closingchar: item === "[" ? "]" : (item === "(" ? ")" : (item === "{" ? "}" : ""))};
            characters.push(object);
            characterscontrol.push(object);
            break;
        case ']':
        case ')':
        case '}':
            const index = validateclosing(characters, item);
            if (index != null && index != undefined)
                characters[index].closed = true;
                characters.pop();
                
    }
}

let answer = ""
characterscontrol.reverse().forEach(item => { !item.closed ? answer += `Existe un error en la cadena, el signo ${item.char} en la posición ${item.index} de la cadena no ha sido cerrado \n` : "" })
console.log(answer.length === 0 ? "La cadena no contiene ningún error" : answer.split("\n")[0]);




let esPalindromo = (str) => {
    let frase = quitarAcentos(str);
    frase = frase.toLowerCase().replaceAll(' ','') ;
    let frase2 = '';
    for(char in frase){
        frase2 = frase[char] + frase2;
    }
    return (frase===frase2)?`La frase  "${str}" es un palindromo`:`La frase "${str}" claramente, no es un palíndromo`;
    
};

let quitarAcentos = (str) =>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let palabra = prompt('Introduce una frase: ');

console.log(esPalindromo(palabra));

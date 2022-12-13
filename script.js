
function removeAccents(string){
    var str = string.toLowerCase();
    str = str.replace(new RegExp(/[àáâãäå]/g),"a");
    str = str.replace(new RegExp(/ç/g),"c");
    str = str.replace(new RegExp(/[èéêë]/g),"e");
    str = str.replace(new RegExp(/[ìíîï]/g),"i");
    str = str.replace(new RegExp(/ñ/g),"n");                
    str = str.replace(new RegExp(/[òóôõö]/g),"o");
    str = str.replace(new RegExp(/[ùúûü]/g),"u");
    return str;
};
function changeConsoant(letter, decode){

    if(letter === 'b'){return decode ? "z" : "c"}
    if(letter === 'c'){return decode ? "b" : "d"}
    if(letter === 'd'){return decode ? "c" : "f"}
    if(letter === 'f'){return decode ? "d" : "g"}
    if(letter === 'g'){return decode ? "f" : "j"}
    if(letter === 'h'){return "r"}
    if(letter === 'j'){return decode ? "g" : "k"}
    if(letter === 'k'){return decode ? "j" : "l"}
    if(letter === 'l'){return decode ? "k" : "m"}
    if(letter === 'm'){return decode ? "l" : "p"}
    if(letter === 'p'){return decode ? "m" : "q"}
    if(letter === 'q'){return decode ? "p" : "s"}
    if(letter === 'r'){return "h"}
    if(letter === 's'){return decode ? "q" : "t"}
    if(letter === 't'){return decode ? "s" : "v"}
    if(letter === 'v'){return decode ? "t" : "w"}
    if(letter === 'w'){return decode ? "v" : "x"}
    if(letter === 'x'){return decode ? "w" : "y"}
    if(letter === 'y'){return decode ? "x" : "z"}
    if(letter === 'z'){return decode ? "y" : "b"}
    if(letter === 'a'){return "o"}
    if(letter === 'e'){return"i"}
    if(letter === 'i'){return "e"}
    if(letter === 'o'){return "a"}
    if(letter === 'u'){return "u"}
    if(letter === 'n'){return "n"}
    if(letter === ' '){return " "}
    if(letter === ':'){return ":"}
    if(letter === ','){return ","}
    if(letter === '.'){return "."}
    if(letter === '?'){return "?"}
    if(letter === '!'){return "!"}
    if(letter === '-'){return "-"}
    if(letter === '1'){return "1"}
    if(letter === '2'){return "2"}
    if(letter === '3'){return "3"}
    if(letter === '4'){return "4"}
    if(letter === '5'){return "5"}
    if(letter === '6'){return "6"}
    if(letter === '7'){return "7"}
    if(letter === '8'){return "8"}
    if(letter === '9'){return "9"}
    if(letter === '0'){return "0"}
}

function changeString(str, decode){
    const string = removeAccents(str)
    var i = string.length;
    var concating = ''
    for (var i = 0; i < string.length; i++) {
        const letter = string[i]
        const changedletter = changeConsoant(letter, decode);
        concating = concating.concat('', changedletter)
    }
    const newString = concating
    return newString
}
function codificar(decode){
    const input = document.getElementById( decode ? "decodeInput" : "codeInput").value;
    const final = changeString(input, decode)
    decode ? document.getElementById("decodeOutput").innerHTML = `${final}` : document.getElementById("codeOutput").innerHTML = `${final}`;
    
}


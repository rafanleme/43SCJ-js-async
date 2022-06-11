function printConsole(){
    console.log("Executou a primeira função");
}

function primeiraFuncao(){
    setTimeout(printConsole, 500);
}

function segundaFuncao(){
    console.log("Executou a segunda função");
}

primeiraFuncao();
segundaFuncao();
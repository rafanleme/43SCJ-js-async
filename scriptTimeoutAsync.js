function printConsole(){
    console.log("Executou a primeira função");
}

function primeiraFuncao(){
    setTimeout(printConsole, 0);
}

function segundaFuncao(){
    for(let i = 0; i < 5000 ; i++ ){

        console.log("Executou a segunda função");
    }
}

primeiraFuncao();
segundaFuncao();

function teste(cb){
    const teste = "Rafael";
    cb(teste);
}

function meuCallBack(param)
 {
    alert("olá" + param);

}

teste(meuCallBack);

teste(() => alert('ola'));
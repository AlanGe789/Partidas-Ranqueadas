let vitorias = 1
let derrotas = 10
let nivel = "Ferro"
let saldoVitorias = calculoPartidas

function calculoPartidas(vitorias;derrotas){
let = saldoVitorias = vitorias-derrotas   
}
switch(saldoVitorias) {
    case "<=10":
        nivel = "Ferro"
            break
    case ">= 11" && "<=20" :
        nivel = "Bronze"
            break
    case ">= 21" && "<=50" :
        nivel = "Prata"
            break
    case ">= 51" && "<=80" :
        nivel = "Ouro"
            break
    case ">= 81" && "<=90" :
        nivel = "Diamante"
            break
    case ">= 91" && "<=100" :
        nivel = "Lendario"
            break
    case ">=101" :
        nivel = "Imortal"
            break

 }
console.log ("O Herói tem de saldo de **"+ saldoVitorias "** e está no nível de **"+nivel"**" )
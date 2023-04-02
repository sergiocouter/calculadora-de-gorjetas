let comissaoTotal = document.querySelector("#preco-total");
let comissaoPessoa = document.querySelector("#preco-pessoa");

let botao5 = document.querySelector("#botao5");
let botao10 = document.querySelector("#botao10");
let botao15 = document.querySelector("#botao15");
let botao25 = document.querySelector("#botao25");
let botao50 = document.querySelector("#botao50");
let botao75 = document.querySelector("#botao75");

function calculaGorjeta5() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 5) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value/pessoas.value) + valorGorjetaPessoa;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao5.addEventListener('click', () =>{
    calculaGorjeta5();
})

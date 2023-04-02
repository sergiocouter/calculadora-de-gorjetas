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
        let valorGorjetaTotal = (valor.value * 5) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" antes de continuar.')
    }
}

botao5.addEventListener('click', () =>{
    calculaGorjeta5();
})

function calculaGorjeta10() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 10) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value * 10) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao10.addEventListener('click', () =>{
    calculaGorjeta10();
})

function calculaGorjeta15() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 15) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value * 15) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao15.addEventListener('click', () =>{
    calculaGorjeta15();
})

function calculaGorjeta25() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 25) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value * 25) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao25.addEventListener('click', () =>{
    calculaGorjeta25();
})

function calculaGorjeta50() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 50) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value * 50) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao50.addEventListener('click', () =>{
    calculaGorjeta50();
})

function calculaGorjeta75() {
    let valor = document.querySelector("#valor-pagamento");
    let pessoas = document.querySelector("#numero-pessoas");

    if (valor.value !=="" && pessoas.value !==""){

        let valorGorjetaPessoa =((valor.value * 75) /100)/pessoas.value;
        let valorGorjetaTotal = (valor.value * 75) / 100;

        comissaoPessoa.innerHTML=`\$ ${valorGorjetaPessoa.toFixed(2)}`;
        comissaoTotal.innerHTML= `\$ ${valorGorjetaTotal.toFixed(2)}`;
        console.log(valor.value)
    }else{
        alert('Preencha os campos "Pagamento" e "Número de pessoas" primeiro.')
    }
}

botao75.addEventListener('click', () =>{
    calculaGorjeta75();
})

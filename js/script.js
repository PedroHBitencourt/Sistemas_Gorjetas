let valorPorcentagem = 0;

function calcular(){
    const valor = document.getElementById('valor').value;
    const pessoas = document.getElementById('pessoas').value;
    const gorjetaPessoa = document.getElementById('gorjetaPessoa');
    const totalPessoa = document.getElementById('totalPessoa');
    const valorTotal = document.getElementById('valorTotal');
    const gorjetaTotal = document.getElementById('gorjetaTotal');

    if(valor === null || valor === undefined || valor === 0 || valor === ''){
        alert('Valor da conta indefinido.');
    }else if(valorPorcentagem === null || valorPorcentagem === undefined || valorPorcentagem === 0){
        alert('Valor da porcentagem indefinido.');
    }else if(pessoas === null || pessoas === undefined || pessoas === 0 || pessoas === ''){
        alert('Número de pessoas indefinido.');
    }

    valorGorjeta = (valor * valorPorcentagem) / 100;

    valorTotal.innerHTML = (parseInt(valor) + valorPorcentagem).toFixed(2);
    gorjetaTotal.innerHTML = valorGorjeta.toFixed(2);
    gorjetaPessoa.innerHTML = (valorGorjeta / pessoas).toFixed(2);
    totalPessoa.innerHTML = ((parseInt(valor) + valorGorjeta) / pessoas).toFixed(2);
}

function pegarValor(porcentagem){
    valorPorcentagem = parseInt(porcentagem);
    console.log('Olá');
    return valorPorcentagem;
}

function resetDados(){
    const gorjetaPessoa = document.getElementById('gorjetaPessoa');
    const totalPessoa = document.getElementById('totalPessoa');
    const valorTotal = document.getElementById('valorTotal');
    const gorjetaTotal = document.getElementById('gorjetaTotal');

    gorjetaPessoa.innerHTML = "00.00";
    totalPessoa.innerHTML = "00.00";
    valorTotal.innerHTML = "00.00";
    gorjetaTotal.innerHTML = "00.00";
}
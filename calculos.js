function getAmplitude(ultima_linha,primeira_linha)
{
	return ultima_linha - primeira_linha;
}
function getVariancia(totalxi2fi,totalxifi,totalfi)
{
	
	//console.log('totalxi2fi='+totalxi2fi);
	//console.log('totalxifi='+totalxifi);
	//console.log('totalfi='+totalfi);

	var variancia = totalxi2fi - ( (totalxifi ** 2) / totalfi);
	variancia = variancia / (totalfi - 1);

	return variancia;
}
function getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi)
{
	var coeficiente = desvio_padrao / (totalxifi / totalfi);
	coeficiente = coeficiente * 100;
	return coeficiente;
}
function getDesvioPadrao(variancia)
{
	return Math.sqrt(variancia);
}








//CALCULOS DE ROL


function getMaiorValorRol(elementos)
{
	var i = 0;
	var maior = 0;
	while(i < elementos)
	{
		var valor = parseFloat((document.getElementById("item"+i).value));
		if(valor > maior)
		{
			maior = valor;
		}
		i++;
	}
	return maior;
}
function getMenorValorRol(elementos)
{
	var i = 0;
	var menor = document.getElementById("item0").value;
	while(i < elementos)
	{
		var valor = parseFloat((document.getElementById("item"+i).value));
		if(valor < menor)
		{
			menor = valor;
		}
		i++;
	}
	return menor;
}
function getVarianciaRol(elementos)
{
	var i = 0;
	var total2 = 0;
	var total = 0;
	while(i < elementos)
	{
		total = total + parseFloat((document.getElementById("item"+i).value));

		total2 = total2 + parseFloat((document.getElementById("item"+i).value)**2);
		i++;
	}
	//console.log(total2);
	//console.log(total);
	var variancia = (total**2) / elementos;
	//console.log(variancia);
	variancia = total2 - variancia;
	//console.log(variancia);
	variancia = variancia / (elementos - 1);
	//console.log(variancia);

	return variancia;
}
function getDesvioPadraoRol(variancia)
{
	return Math.sqrt(variancia);
}
function getCoeficienteVariacaoRol(desvio_padrao,elementos)
{
	var media = 0;
	var i = 0;
	var total = 0;
	while(i < elementos)
	{
		total = total + parseFloat((document.getElementById("item"+i).value));
		i++;
	}
	media = total / elementos;
	return (desvio_padrao / media) * 100;
}





//TABELA COM INTERVALO	
function getVarianciaClasse(totalxi2_fi,totalxi_fi,totalfi)
{
	var variancia = totalxi2_fi - ((totalxi_fi**2) / totalfi);
	variancia = variancia / (totalfi-1);
	return variancia;
}
function getMaiorValorClasse(elementos)
{
	var i = 0;
	var maior = 0;
	while(i < elementos)
	{
		var valor = parseFloat((document.getElementById("l"+i+"c1").value));
		if(valor > maior)
		{
			maior = valor;
		}
		i++;
	}
	return maior;
}
function getMenorValorClasse(elementos)
{
	var i = 0;
	var menor = document.getElementById("l"+i+"c1").value;
	while(i < elementos)
	{
		var valor = parseFloat((document.getElementById("l"+i+"c1").value));
		if(valor < menor)
		{
			menor = valor;
		}
		i++;
	}
	return menor;
}
function getCoeficienteVariacaoClasse(desvio_padrao,elementos)
{
	var media = 0;
	var i = 0;
	var total = 0;
	var totalxi_fi = parseFloat(document.getElementById("resultado3").value);
	
	while(i < elementos)
	{
		total = total + parseFloat((document.getElementById("l"+i+"c1").value));
		i++;
	}
	media = totalxi_fi / total;
	

	return (desvio_padrao / media) * 100;
}
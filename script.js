function gerarCampo(campoPai)
{
  if (document.getElementById('div-detalhes')) {
    limparDetalhes();
  }
  var tipoSelecionado = (campoPai.value || campoPai.options[campoPai.selectedIndex].value);
  if (tipoSelecionado == 1)
  {
    var newdiv = document.createElement('div');
    newdiv.setAttribute("id", "div-detalhes");
    newdiv.innerHTML = "<br>Insira o número de elementos <br><input type='number' name='linhas' id='linhas' min='3' max='100'>"+
                        "<br><input type='button' value='Gerar Espaços' onclick='proxima_pagina();'>";
    document.getElementById("insercaoDados").appendChild(newdiv);
  }

  else if (tipoSelecionado == 2 || tipoSelecionado == 3)
  {
    var newdiv = document.createElement('div');
    newdiv.setAttribute("id", "div-detalhes");
    newdiv.innerHTML = "<br>Insira o número de linhas<br><input type='number' name='linhas' id='linhas' min='3' max='30'>"+
                        "<br><input type='button' value='Gerar Linhas' onclick='proxima_pagina();'>";
    document.getElementById("insercaoDados").appendChild(newdiv);
  }
}

function limparDetalhes()
{
  var parent = document.getElementById("insercaoDados");
  var child = document.getElementById("div-detalhes");
  parent.removeChild(child);
}
function proxima_pagina()
{
  var dropdown1 = document.getElementById("tipoInsercao");
  var tipoSelecionado = dropdown1.options[dropdown1.selectedIndex].value;
  var elementos = document.getElementById("linhas").value;
  if(elementos == 0)
  {
    alert('insira o numero de elementos!');
    document.getElementById("tabelas2").style.visibility = "hidden";
  }
  else
  {
    document.getElementById("amplitude").innerHTML = "";
    document.getElementById("variancia").innerHTML = "";
    document.getElementById("desvio_padrao").innerHTML = "";
    document.getElementById("coeficiente_variacao").innerHTML = "";
    
    document.getElementById("tabelas2").style.visibility = "visible";
    
    if(tipoSelecionado == 1)
    {
        document.getElementById("tipo_tabela").innerHTML = "Tabela ROL";
        tabela_rol(elementos);
    }
    else if(tipoSelecionado == 2)
    {
        document.getElementById("tipo_tabela").innerHTML = "Tabela Dados Agrupados";
        tabela_agrupados(elementos);
    }
    else
    {
        document.getElementById("tipo_tabela").innerHTML = "Tabela dados com intervalo";
        tabela_classe(elementos);
    }  
  }
  
}

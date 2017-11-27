<<<<<<< HEAD

=======
>>>>>>> 5668fd02416346ff54fb30cf22d93c13a204c746
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
<<<<<<< HEAD
    newdiv.innerHTML = "<br>Insira o número de elementos <br><input type='number' name='linhas' id='linhas' min='3' max='100'>"+
                        "<br><br><button type='button' class=\"btn btn-success\" value='Gerar Espaços' onclick='proxima_pagina();'>Gerar Espaços</button>";
=======
<<<<<<< HEAD
    newdiv.innerHTML = "<br>Insira o número de elementos <br><input type='number' name='linhas' id='linhas' min='3' max='100'>"+
                        "<br><input type='button' value='Gerar Espaços' onclick='proxima_pagina();'>";
=======
    newdiv.innerHTML = "<br>Insira o número de elementos <br><input type='number' name='numCampos' min='3' max='100'>"+
                        "<br><input type='button' value='Gerar Espaços'>";
>>>>>>> 5668fd02416346ff54fb30cf22d93c13a204c746
>>>>>>> 1481fc7db98e294fe03c04ecf7c65b600bc7810e
    document.getElementById("insercaoDados").appendChild(newdiv);
  }

  else if (tipoSelecionado == 2 || tipoSelecionado == 3)
  {
    var newdiv = document.createElement('div');
    newdiv.setAttribute("id", "div-detalhes");
<<<<<<< HEAD
    newdiv.innerHTML = "<br>Insira o número de linhas<br><input type='number' name='linhas' id='linhas' min='3' max='30'>"+
                        "<br><br><button type='button' class=\"btn btn-success\" value='Gerar Espaços' onclick='proxima_pagina();'>Gerar Linhas</button>";
=======
<<<<<<< HEAD
    newdiv.innerHTML = "<br>Insira o número de linhas<br><input type='number' name='linhas' id='linhas' min='3' max='30'>"+
                        "<br><input type='button' value='Gerar Linhas' onclick='proxima_pagina();'>";;
=======
    newdiv.innerHTML = "<br>Insira o número de linhas<br><input type='number' name='numLinhas' min='3' max='30'>"+
                        "<br><input type='button' value='Gerar Linhas'>";;
>>>>>>> 5668fd02416346ff54fb30cf22d93c13a204c746
>>>>>>> 1481fc7db98e294fe03c04ecf7c65b600bc7810e
    document.getElementById("insercaoDados").appendChild(newdiv);
  }
}

function limparDetalhes()
{
  var parent = document.getElementById("insercaoDados");
  var child = document.getElementById("div-detalhes");
  parent.removeChild(child);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1481fc7db98e294fe03c04ecf7c65b600bc7810e
function proxima_pagina()
{
  var dropdown1 = document.getElementById("tipoInsercao");
  var tipoSelecionado = dropdown1.options[dropdown1.selectedIndex].value;
  var elementos = document.getElementById("linhas").value;
<<<<<<< HEAD
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
=======
  if(tipoSelecionado == 1)
  {
      window.location="gerar_rol.php?linhas="+elementos;
  }
  else if(tipoSelecionado == 2)
  {
      window.location="gerar.php?linhas="+elementos;
  }
  else
  {
      window.location="gerar_classe.php?linhas="+elementos;   
  }
}
=======
>>>>>>> 5668fd02416346ff54fb30cf22d93c13a204c746
>>>>>>> 1481fc7db98e294fe03c04ecf7c65b600bc7810e

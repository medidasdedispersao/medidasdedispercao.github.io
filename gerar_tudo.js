 function tabela_agrupados(linhas)
 {
 	var html = "<table class=\"table table-responsive table-bordered\">";
 	
 	html += "<tr><thead class=\"thead-dark\">"+
                    "<th class=\"text-center\">Xi</th>"+
                    "<th class=\"text-center\">Fi</th>"+
                    "<th class=\"text-center\">Xi * Fi</th>"+
                    "<th class=\"text-center\">Xi² * Fi</th>"+
                    "</thead>"+
                "</tr>";

    var i = 0;
    var k = 0;
    var varname = "";
    var state = "";
   
    while(i < linhas)
    {
    	k = 0;
        html += "<tr>";
        while(k < 4)
        {
            varname = "l"+i+"c"+k;
            state = "disabled";
            if(k < 2)
            {
                state = "";   
            }
            html += "<td><input type=\"number\" class=\"form-control text-center\" size=\"2\" onkeyup=\"xifi("+i+");xifi2("+i+");totais("+linhas+");\" name=\""+varname+"\" id=\""+varname+"\" placeholder2=\"$varname\" enable=\"true\" "+state+"></td>\n";
            k++;
            //se for a ultima linha
           
        }
        html += "</tr>";
        if((i+1) == linhas)
        {
            html += "<td><p class=\"text-center\">Total</p></td>";
            j = 1;
            while(j < 4)
            {
                html += " "+
                "<td>"+
                    "<input type=\"number\" name=\"resultado$varname\" id=\"resultado"+j+"\" placeholder2=\"resultado$j\" class=\"form-control text-center\" size=\"3\" disabled>"+
                "</td>";
                j++;
            }
            
        }
        i++;
    }
    html += "</table>";
    document.getElementById("tabelas").innerHTML = html;
 }






  function tabela_rol(elementos)
    {
    	var html = "<table class=\"table table-responsive table-bordered\">";
        var i = 0;
        while(i < elementos)
        {
            varname = "item"+i;
            html += "<div class=\"col-md-2\">"+
                        "<input type=\"number\" name=\""+varname+"\" id=\""+varname+"\" class=\"form-control text-center\" placeholder2=\"$varname\" style=\"margin-bottom:15px;\">"+
                    "</div>";
           	i++;
        }
        html+="</table>";
    	document.getElementById("tabelas").innerHTML = html;
    }







    function tabela_classe(linhas)
	{
		var html = "";
		html = "<table class=\"table table-responsive table-bordered\">"
                    "<thead class=\"thead-dark\">"+
                        "<th class=\"text-center\">Intervalos</th>"+
                        "<th class=\"text-center\">Fi</th>"+
                        "<th class=\"text-center\">Xi_</th>"+
                        "<th class=\"text-center\">Xi_ * Fi</th>"+
                        "<th class=\"text-center\">Xi_² * Fi</th>"+
                    "</thead>";
        var i = 0;
        while(i < linhas)
        {
            var k = 0;
            html += "<tr>";
            while(k < 5)
            {
                var varname = "l"+i+"c"+k;
                var state = "disabled";
                if(k < 2)
                {
                    state = "";   
                    
                }
                if(k == 0)
                {
                    html += "<td>"+
                                "<div class=\"col-12\">"+
                                    "<div class=\"col-md-6\"><input type=\"number\" class=\"form-control text-center\" onkeyup=\"media_classe("+linhas+");somar_classe("+linhas+");\" name=\"a"+varname+"\" id=\"a"+varname+"\" placeholder2=\"a"+varname+"\" enable=\"true\" $state></div>"+
                                    "<div class=\"col-md-6\"><input type=\"number\" class=\"form-control text-center\" onkeyup=\"media_classe("+linhas+");somar_classe("+linhas+");\" name=\"b"+varname+"\" id=\"b"+varname+"\" placeholder2=\"b"+varname+"\" enable=\"true\" $state></div>"+
                                "</div>"+
                            "</td>";
                }
                else
                {
                        html +="<td>"+
                                "<input type=\"number\" class=\"form-control text-center\" onkeyup=\"javascript:ponto_medio("+i+");xi_fi("+i+");xi2_fi("+i+");somar_classe("+linhas+");\" name=\""+varname+"\" id=\""+varname+"\" placeholder2=\""+varname+"\" enable=\"true\" "+state+">"+                                
                            "</td>";
                }
                
                k++;
                //se for a ultima linha
               
            }
            html += "</tr>";
            if((i+1) == linhas)
            {
                html+= "<td><p class=\"text-center\">Total</p></td>";
                var j = 1;
                while(j < 5)
                {
                    
                    html += "<td>"+
                        "<input type=\"number\" name=\"resultado"+j+"\" id=\"resultado"+j+"\" placeholder2=\"resultado$j\" class=\"form-control text-center\" size=\"3\" disabled>"+
                    "</td>";
                    j++;
                }
                
            }
            i++;
        }
        html += "</table>";
        document.getElementById("tabelas").innerHTML = html;
    }
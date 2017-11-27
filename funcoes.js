        
        function media_classe(linhas)
        {
            var valor1 = parseFloat(document.getElementById('al0c0').value);
            var valor2 = parseFloat(document.getElementById('bl0c0').value);
            var soma = (valor2 - valor1);
            //console.log(valor1 + "+" + valor2+"="+soma);
            //console.log(soma);
            var i = 1;
            while(i < linhas)
            {
                var varname_anterior = "bl"+(i-1)+"c0";
                var varname_proximo_a = "al"+(i)+"c0";
                var varname_proximo_b = "bl"+(i)+"c0";
                var valor_anterior = parseFloat(document.getElementById(varname_anterior).value);
                document.getElementById(varname_proximo_a).value = Number(valor_anterior).toFixed(2);
                document.getElementById(varname_proximo_b).value = Number(parseFloat(valor_anterior + soma)).toFixed(2);
                i++;
            }

            
        }
        function ponto_medio(linha)
        {
            //var valor1 = parseFloat(document.getElementById('al0c0').value);
            //var valor2 = parseFloat(document.getElementById('bl0c0').value);
            //var soma = (valor2 - valor1);
            //console.log(valor1 + "+" + valor2+"="+soma);
            //console.log(soma);
            var varname_proximo_a = "al"+(linha)+"c0";
            var varname_proximo_b = "bl"+(linha)+"c0";
            var valor1 = parseFloat(document.getElementById(varname_proximo_a).value);
            var valor2 = parseFloat(document.getElementById(varname_proximo_b).value);
            var media = ((valor2 + valor1) / 2);
            document.getElementById("l"+linha+"c2").value =media;
            /*
            var i = 0;
            while(i < linhas)
            {

                i++;
            }
            */

            
        }
        function xi_fi(linha)
        {
            //var valor1 = parseFloat(document.getElementById('al0c0').value);
            //var valor2 = parseFloat(document.getElementById('bl0c0').value);
            //var soma = (valor2 - valor1);
            //console.log(valor1 + "+" + valor2+"="+soma);
            //console.log(soma);
            var varname_proximo_a = "al"+(linha)+"c0";
            var varname_proximo_b = "bl"+(linha)+"c0";
            var valor1 = parseFloat(document.getElementById(varname_proximo_a).value);
            var valor2 = parseFloat(document.getElementById(varname_proximo_b).value);
            var xifi = ((valor2 + valor1) / 2) * parseFloat(document.getElementById("l"+linha+"c1").value);
            document.getElementById("l"+linha+"c3").value = xifi;
            /*
            var i = 0;
            while(i < linhas)
            {

                i++;
            }
            */

            
        }
        
        function xi2_fi(linha)
        {
            //var valor1 = parseFloat(document.getElementById('al0c0').value);
            //var valor2 = parseFloat(document.getElementById('bl0c0').value);
            //var soma = (valor2 - valor1);
            //console.log(valor1 + "+" + valor2+"="+soma);
            //console.log(soma);
            var varname_proximo_a = "al"+(linha)+"c0";
            var varname_proximo_b = "bl"+(linha)+"c0";
            var valor1 = parseFloat(document.getElementById(varname_proximo_a).value);
            var valor2 = parseFloat(document.getElementById(varname_proximo_b).value);
            var xifi = (((valor2 + valor1) / 2) ** 2) * parseFloat(document.getElementById("l"+linha+"c1").value);
            document.getElementById("l"+linha+"c4").value = xifi;
            /*
            var i = 0;
            while(i < linhas)
            {

                i++;
            }
            */

            
        }

        function somar_classe(linhas)
        {
            //console.log(index + "-" + linhas);
            var k = 0;
            var total = parseFloat(0);
            
            var total_xi = parseFloat(0);
            var total_xi_fi = parseFloat(0);
            var total_xi2_fi = parseFloat(0);
            var c = 1;
            while(c < 5)
            {
                k = 0;
                while(k < linhas)
                {
                    var nome = "l"+k+"c"+c;

                    if(document.getElementById(nome).value == "")
                    {
                        numero = 0;
                    }
                    else
                    {
                        numero = parseFloat(document.getElementById(nome).value);
                    }
                    console.log(nome +" = "+numero);
                    total += numero;
                    k++;
                }
                document.getElementById("resultado"+c).value = total;
                //alert(c);
                total = 0;
                c++;
            }
            /*
            while(k < linhas)
            {
                var nome = "l"+k+"c1";
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                total += numero;
                k++;
            }


            k = 0;
            total_xi = parseFloat(0);
            while(k < linhas)
            {
                var nome = "l"+k+"c2";
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                total_xi += numero;
                k++;
            }


            k = 0;
            total_xi_fi = parseFloat(0);
            while(k < linhas)
            {
                var nome = "l"+k+"c3";
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                total_xi_fi += numero;
                k++;
            }



            k = 0;
            total_xi2_fi = parseFloat(0);
            while(k < linhas)
            {
                var nome = "l"+k+"c4";
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                total_xi2_fi += numero;
                k++;
            }

            
            document.getElementById("resultado1").value = total;
            document.getElementById("resultado2").value = total_xi;
            document.getElementById("resultado3").value = total_xi_fi;
            document.getElementById("resultado4").value = total_xi2_fi;
            */
        }

        function somar(index)
        {
            var k = 0;
            var total = parseInt(0);
            while(k < linhas)
            {
                var nome = "l"+k+"c"+index;
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseInt(document.getElementById(nome).value);
                }
                total += numero;
                k++;
            }
            document.getElementById("resultado"+index).value = total;
        }

        function xifi(l)
        {
            var id1 = "l"+l+"c0";
            var id2 = "l"+l+"c1";
            var resultadoid = "l"+l+"c2";
            var xi = document.getElementById(id1).value;
            var fi = document.getElementById(id2).value;
            var res = "";
            if(xi == "" || fi == "")
            {

            }
            else
            {
                res = parseFloat(xi) * parseFloat(fi);
            }
            var i = 0;
            
            document.getElementById(resultadoid).value = res;
        }
        function xifi2(l)
        {
            var id1 = "l"+l+"c0";
            var id2 = "l"+l+"c1";
            var resultadoid = "l"+l+"c3";
            var xi = document.getElementById(id1).value;
            var fi = document.getElementById(id2).value;
            var res = "";
            if(xi == "" || fi == "")
            {

            }
            else
            {
                res = (parseFloat(xi) * parseFloat(xi)) * parseFloat(fi);
            }
            
            document.getElementById(resultadoid).value = res;
        }
        function totais(linhas)
        {
            var k = 0;
            var totalfi = parseInt(0);
            var totalxifi = parseInt(0);
            var totalxi2fi = parseInt(0);
            var c = 1;
            

            //calculando a somatoria de totalfi
            while(k < linhas)
            {
                var nome = "l"+k+"c"+c;
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                totalfi += numero;
                k++;
            }


            //calculando a somatoria de xifi
            k = 0;
            c = 2;
            while(k < linhas)
            {
                var nome = "l"+k+"c"+c;
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                totalxifi += numero;
                k++;
            }

            
            //calculando a somatoria de xi2fi
            k = 0;
            c = 3;
            while(k < linhas)
            {
                var nome = "l"+k+"c"+c;
                var numero = 0;
                if(document.getElementById(nome).value == "")
                {
                    numero = 0;
                }
                else
                {
                    numero = parseFloat(document.getElementById(nome).value);
                }
                totalxi2fi += numero;
                k++;
            }
            document.getElementById('resultado1').value = totalfi;
            document.getElementById('resultado2').value = totalxifi;
            document.getElementById('resultado3').value = totalxi2fi;
        }

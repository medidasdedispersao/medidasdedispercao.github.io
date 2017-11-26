        var variancia = 0;
        var desvio_padrao = 0;
        var coeficiente = 0;
        var totalfi = 0;
        var totalxifi = 0;
        var totalxi2fi = 0;

        function calcularAmplitudeAgrupados()
        {
            var ultima_linha = document.getElementById("l"+(linhas-1)+"c0").value;
            var primeira_linha = document.getElementById('l0c0').value;
            
            var amplitude = getAmplitude(ultima_linha,primeira_linha);

            document.getElementById("amplitude").innerHTML = ""+amplitude;
        }

        //getVariancia(totalxi2fi,totalxifi,totalfi)
        function calcularVarianciaAgrupados()
        {
            totalfi = document.getElementById('resultado1').value;
            totalxifi = document.getElementById('resultado2').value;
            totalxi2fi = document.getElementById('resultado3').value;
            
            variancia = getVariancia(totalxi2fi,totalxifi,totalfi);
            document.getElementById("variancia").innerHTML = ""+Number(variancia).toFixed(2);
        }
        function calcularDesvioPadraoAgrupados()
        {
            desvio_padrao = Number(getDesvioPadrao(variancia)).toFixed(2);
            document.getElementById("desvio_padrao").innerHTML = desvio_padrao;
        }
        function calcularCoeficienteVariacaoAgrupados()
        {
            //getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi)
            coeficiente = getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi);
            document.getElementById("coeficiente_variacao").innerHTML = Number(coeficiente).toFixed(2) + "%";   
        }
        function calcularAgrupados()
        {

            calcularAmplitudeAgrupados();
            calcularVarianciaAgrupados();
            calcularDesvioPadraoAgrupados();
            calcularCoeficienteVariacaoAgrupados();
        }
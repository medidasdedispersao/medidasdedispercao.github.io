       var variancia = 0;
        var desvio_padrao = 0;
        var coeficiente = 0;
        var amplitude = 0;
        var linhas = 0;

        function calcularAmplitudeRol()
        {
            amplitude = getMaiorValorRol(linhas) - getMenorValorRol(linhas);
            console.log(getMaiorValorRol(linhas));
            console.log(getMenorValorRol(linhas));
            document.getElementById("amplitude").innerHTML = ""+amplitude;
        }

        //getVarianciaRol(elementos)
        function calcularVarianciaRol()
        {
            variancia = getVarianciaRol(linhas);
            document.getElementById("variancia").innerHTML = ""+Number(variancia).toFixed(2);
        }
        function calcularDesvioPadraoRol()
        {
            desvio_padrao = Number(getDesvioPadraoRol(variancia)).toFixed(2);
            document.getElementById("desvio_padrao").innerHTML = desvio_padrao;
        }
        function calcularCoeficienteVariacaoRol()
        {
            //getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi)
            coeficiente = getCoeficienteVariacaoRol(desvio_padrao,linhas);
            document.getElementById("coeficiente_variacao").innerHTML = Number(coeficiente).toFixed(2) + "%";   
        }
        function calcularRol()
        {
            linhas = document.getElementById("linhas").value;
            calcularAmplitudeRol();
            calcularVarianciaRol();
            calcularDesvioPadraoRol();
            calcularCoeficienteVariacaoRol();
        }

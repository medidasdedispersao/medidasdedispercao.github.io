var variancia = 0;
        var desvio_padrao = 0;
        var coeficiente = 0;
        var amplitude = 0;
        var linhas = 0;

        function calcularAmplitudeClasse()
        {
            amplitude = getMaiorValorClasse(linhas) - getMenorValorClasse(linhas);
            console.log(getMaiorValorClasse(linhas));
            console.log(getMenorValorClasse(linhas));
            document.getElementById("amplitude").innerHTML = ""+amplitude;
        }

        //getVarianciaClasse(totalxi2_fi,totalxi_fi,totalfi)
        function calcularVarianciaClasse()
        {
            var totalxi2_fi = parseFloat(document.getElementById("resultado4").value);
            var totalxi_fi = parseFloat(document.getElementById("resultado3").value);
            var totalfi = parseFloat(document.getElementById("resultado1").value);
            variancia = getVarianciaClasse(totalxi2_fi,totalxi_fi,totalfi)
            document.getElementById("variancia").innerHTML = ""+Number(variancia).toFixed(2);
        }
        function calcularDesvioPadraoClasse()
        {
            desvio_padrao = Number(getDesvioPadraoRol(variancia)).toFixed(2);
            document.getElementById("desvio_padrao").innerHTML = desvio_padrao;
        }
        function calcularCoeficienteVariacaoClasse()
        {
            //getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi)
            coeficiente = getCoeficienteVariacaoClasse(desvio_padrao,linhas);
            document.getElementById("coeficiente_variacao").innerHTML = Number(coeficiente).toFixed(2) + "%";   
        }
        function calcularClasse()
        {
            linhas = document.getElementById("linhas").value;
            calcularAmplitudeClasse();
            calcularVarianciaClasse();
            calcularDesvioPadraoClasse();
            calcularCoeficienteVariacaoClasse();
        }
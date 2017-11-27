<?php

    $linhas = @$_GET["linhas"];
    $colunas = @$_GET["colunas"];
    $colunas = 4;


?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>

        <style type="text/css">
            body
            {
                background-color:#607D8B;
            }
            #card
            {
                background-color: white;
                border-radius: 2px;
            }
        </style>
    </head>
<body>
    <script type="text/javascript">
        //declarando variaveis globais
        var linhas = <?php echo $linhas; ?>;
        var colunas = <?php echo $colunas; ?>;
        var variancia = 0;
        var desvio_padrao = 0;
        var coeficiente = 0;
        var totalfi = 0;
        var totalxifi = 0;
        var totalxi2fi = 0;

        function calcularAmplitude()
        {
            var ultima_linha = document.getElementById("l"+(linhas-1)+"c0").value;
            var primeira_linha = document.getElementById('l0c0').value;

            var amplitude = getAmplitude(ultima_linha,primeira_linha);

            document.getElementById("amplitude").innerHTML = ""+amplitude;
        }

        //getVariancia(totalxi2fi,totalxifi,totalfi)
        function calcularVariancia()
        {
            totalfi = document.getElementById('resultado1').value;
            totalxifi = document.getElementById('resultado2').value;
            totalxi2fi = document.getElementById('resultado3').value;

            variancia = getVariancia(totalxi2fi,totalxifi,totalfi);
            document.getElementById("variancia").innerHTML = ""+Number(variancia).toFixed(2);
        }
        function calcularDesvioPadrao()
        {
            desvio_padrao = Number(getDesvioPadrao(variancia)).toFixed(2);
            document.getElementById("desvio_padrao").innerHTML = desvio_padrao;
        }
        function calcularCoeficienteVariacao()
        {
            //getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi)
            coeficiente = getCoeficienteVariacao(desvio_padrao,totalxifi, totalfi);
            document.getElementById("coeficiente_variacao").innerHTML = Number(coeficiente).toFixed(2) + "%";
        }
        function calcular()
        {
            calcularAmplitude();
            calcularVariancia();
            calcularDesvioPadrao();
            calcularCoeficienteVariacao();
        }

    </script>

    <script type="text/javascript" src="funcoes.js"></script>
    <script type="text/javascript" src="calculos.js"></script>

    <center>
        <form action="calcular.php" method="GET">
            <input type="hidden" name="colunas" value="<?php echo $colunas; ?>">
            <input type="hidden" name="linhas" value="<?php echo $linhas; ?>">
            <br><br>
            <div class="col-md-8 col-md-offset-2" id="card">
                <br><br>
                <h2 class="text-center">Tabela agrupados</h2>
                <br><br>
                <table class="table table-responsive table-bordered">
                    <?php
                        require_once("functions.php");
                        require_once("tabelas.php");
                        $i = 0;
                        tabela_agrupados($linhas);
                    ?>
                    <tr>
                        <td>
                            <!-- <button type="submit" class="btn btn-success form-control">CALCULAR</button> -->
                        </td>
                    </tr>
                </table>
                <button type="button" class="btn btn-success form-control" onclick="calcular();">CALCULAR</button>

                <br><br>
                <!-- TABELA DE RESULTADOS -->
                <div class="col-md-8 col-md-offset-2">
                    <table class="table table-responsive table-bordered">
                        <tr class=".success">
                            <td>Amplitude = </td>
                            <td><p id="amplitude"></p></td>
                        </tr>
                        <tr class=".success">
                            <td>Variancia = </td>
                            <td><p id="variancia"></p></td>
                        </tr>
                        <tr class=".success">
                            <td>Desvio padrao = </td>
                            <td><p id="desvio_padrao"></p></td>
                        </tr>
                        <tr class=".success">
                            <td>Coeficiente de variacao = </td>
                            <td><p id="coeficiente_variacao"></p></td>
                        </tr>
                    </table>
                </div>
                <br>
            </div>
        </form>
    </center>
</body>
</html>

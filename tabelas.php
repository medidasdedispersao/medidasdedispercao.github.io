<?php

    function tabela_agrupados($linhas)
    {
        
        echo "<tr><thead class=\"thead-dark\">
                    <th class=\"text-center\">Xi</th>
                    <th class=\"text-center\">Fi</th>
                    <th class=\"text-center\">Xi * Fi</th>
                    <th class=\"text-center\">Xi² * Fi</th>
                    </thead>
                </tr>";
        $i = 0;
        while($i < $linhas)
        {
            $k = 0;
            echo "<tr>";
            while($k < 4)
            {
                $varname = "l$i";
                $varname .= "c$k";
                $state = "disabled";
                if($k < 2)
                {
                    $state = "";   
                }
                echo "<td><input type=\"number\" class=\"form-control text-center\" size=\"2\" onkeyup=\"xifi($i);xifi2($i);totais();\" name=\"$varname\" id=\"$varname\" placeholder2=\"$varname\" enable=\"true\" $state></td>\n";
                $k++;
                //se for a ultima linha
               
            }
            echo "</tr>";
            if(($i+1) == $linhas)
            {
                echo "<td><p class=\"text-center\">Total</p></td>";
                $j = 1;
                while($j < 4)
                {
                    echo "
                    <td>
                        <input type=\"number\" name=\"resultado$varname\" id=\"resultado$j\" placeholder2=\"resultado$j\" class=\"form-control text-center\" size=\"3\" disabled>
                    </td>
                    ";
                    $j++;
                }
                
            }
            $i++;
        }
    }
    function tabela_rol($elementos)
    {
        $i = 0;
        while($i < $elementos)
        {
            $varname = "item$i";
            echo "<div class=\"col-md-2\">
                        <input type=\"number\" name=\"$varname\" id=\"$varname\" class=\"form-control text-center\" placeholder2=\"$varname\" style=\"margin-bottom:15px;\">
                    </div>";
            $i++;
        }
    }
    function tabela_classe($linhas)
    {
        $i = 0;
        while($i < $linhas)
        {
            $k = 0;
            echo "<tr>";
            while($k < 5)
            {
                $varname = "l$i";
                $varname .= "c$k";
                $state = "disabled";
                if($k < 2)
                {
                    $state = "";   
                    
                }
                if($k == 0)
                {
                    echo "
                            
                            <td>
                                <div class=\"col-12\">
                                    <div class=\"col-md-6\"><input type=\"number\" class=\"form-control text-center\" onkeyup=\"media_classe($linhas);somar_classe($linhas);\" name=\"a$varname\" id=\"a$varname\" placeholder2=\"a$varname\" enable=\"true\" $state></div>
                                    <div class=\"col-md-6\"><input type=\"number\" class=\"form-control text-center\" onkeyup=\"media_classe($linhas);somar_classe($linhas);\" name=\"b$varname\" id=\"b$varname\" placeholder2=\"b$varname\" enable=\"true\" $state></div>
                                </div>
                            </td>

                            \n";
                }
                else
                {
                        echo "  
                            
                            <td>
                                <input type=\"number\" class=\"form-control text-center\" onkeyup=\"javascript:ponto_medio($i);xi_fi($i);xi2_fi($i);somar_classe($linhas);\" name=\"$varname\" id=\"$varname\" placeholder2=\"$varname\" enable=\"true\" $state>
                                
                            </td>

                            \n";
                }
                
                $k++;
                //se for a ultima linha
               
            }
            echo "</tr>";
            if(($i+1) == $linhas)
            {
                echo "<td><p class=\"text-center\">Total</p></td>";
                $j = 1;
                while($j < 5)
                {
                    echo "
                    <td>
                        <input type=\"number\" name=\"resultado$j\" id=\"resultado$j\" placeholder2=\"resultado$j\" class=\"form-control text-center\" size=\"3\" disabled>
                    </td>
                    ";
                    $j++;
                }
                
            }
            $i++;
        }
        /*
        $i = 0;
        while($i < $linhas)
        {
            $varname = "l"+$i;
            echo "<tr>
                        <!-- INTERVALO -->
                        <td>
                            <div class=\"col-md-12\">
                                <div class=\"col-md-6\"><input type=\"number\" class=\"form-control text-center\"></div>
                                <div class=\"col-md-6\"><input type=\"text\" class=\"form-control text-center\"></div>
                            </div>
                        </td>

                        <!-- Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" >
                        </td>

                        <!-- Xi_ -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>

                        <!-- Xi_ * Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>

                        <!-- Xi_² * Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>
                    </tr>";
            if($i == ($linhas - 1))
            {
                    echo "<tr>
                        <!-- INTERVALO -->
                        <td>
                            <p class=\"text-center\">Total</p>
                        </td>

                        <!-- Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\">
                        </td>

                        <!-- Xi_ -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>

                        <!-- Xi_ * Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>

                        <!-- Xi_² * Fi -->
                        <td>
                            <input type=\"text\" class=\"form-control text-center\" disabled>
                        </td>
                    </tr>";
            }
            $i++;
        }
        */
    }

?>
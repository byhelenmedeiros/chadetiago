<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere os dados do formulário
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $children = $_POST["children"];
    $childrenCount = $_POST["children-count"];

    // Conecte-se ao banco de dados (substitua as informações com as do seu banco)
    $dbHost = "seu_host";
    $dbUser = "seu_usuario";
    $dbPass = "sua_senha";
    $dbName = "seu_banco_de_dados";

    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Insira os dados no banco (substitua com suas consultas SQL reais)
    $sql = "INSERT INTO convite (nome, telefone, email, levara_criancas, quantas_criancas) 
            VALUES ('$name', '$phone', '$email', '$children', '$childrenCount')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }

    $conn->close();
}
?>

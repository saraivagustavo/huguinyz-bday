function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    if (password === "pde") {
        // Senha correta, redirecionar para a página desejada
        window.location.href = "conteudo.html";
    } else {
        alert("Senha incorreta. Tente novamente. (obs: se vc não é o hugo, vaza do site fazendo favor.");
    }
}

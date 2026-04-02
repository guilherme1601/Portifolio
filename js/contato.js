const form = document.getElementById("formcontato");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Captura os dados de forma simplificada
    const dadosForm = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    try {
        const resposta = await fetch("http://localhost:3000/mensagens", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosForm)
        });

        if (!resposta.ok) throw new Error("Erro na requisição");

        alert("Mensagem enviada com sucesso!");
        form.reset();

    } catch (erro) {
        alert(erro.message);
    }
});



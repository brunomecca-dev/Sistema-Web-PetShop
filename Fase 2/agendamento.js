// Aguarda o HTML carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", function () {
    
    // Captura o formulário pelo ID definido no HTML
    const form = document.getElementById("formPetshop");

    // Adiciona um evento para escutar quando o formulário for enviado (Submit)
    form.addEventListener("submit", function (event) {
        
        // Impede a página de recarregar (comportamento padrão do envio de formulários)
        event.preventDefault();

        // 1. Captura os valores dos campos do Cliente
        const nomeCliente = document.getElementById("nomeCliente").value;
        const cpfCliente = document.getElementById("cpfCliente").value;
        const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "Não informado";
        const telCliente = document.getElementById("telCliente").value;
        const emailCliente = document.getElementById("emailCliente").value;
        const endCliente = document.getElementById("endCliente").value;

        // 2. Captura os valores dos campos do Pet
        const nomePet = document.getElementById("nomePet").value;
        const racaPet = document.getElementById("racaPet").value;
        const idadePet = document.getElementById("idadePet").value;

        // 3. Captura os Serviços Selecionados (Múltipla escolha)
        let servicosSelecionados = [];
        if (document.getElementById("servicoBanho").checked) {
            servicosSelecionados.push("Banho e Higienização");
        }
        if (document.getElementById("servicoTosa").checked) {
            servicosSelecionados.push("Tosa Estilizada");
        }

        // Validação extra caso o usuário não marque nenhum serviço
        if (servicosSelecionados.length === 0) {
            alert("Por favor, selecione pelo menos um serviço (Banho ou Tosa)!");
            return; // Interrompe o envio
        }

        // 4. Captura Logística e Agenda
        const metodoEntrega = document.querySelector('input[name="metodoEntrega"]:checked')?.value;
        const dataAgendamento = document.getElementById("dataAgendamento").value;
        const horaAgendamento = document.getElementById("horaAgendamento").value;

        // Formatação simples da data para o formato brasileiro (DD/MM/AAAA)
        const dataFormatada = dataAgendamento.split("-").reverse().join("/");

        // 5. Criação da Mensagem de Sucesso Emocionante
        const resumoMensagem = `
🎉 SOLICITAÇÃO DE AGENDAMENTO RECEBIDA! 🎉

DADOS DO CLIENTE:
- Nome: ${nomeCliente}
- CPF: ${cpfCliente}
- Sexo: ${sexo}
- Telefone: ${telCliente}
- E-mail: ${emailCliente}
- Endereço: ${endCliente}

DADOS DO PET:
- Nome do Pet: ${nomePet}
- Raça: ${racaPet}
- Idade: ${idadePet} ano(s)

DETALHES DO AGENDAMENTO:
- Serviço(s): ${servicosSelecionados.join(" e ")}
- Forma de Entrega: ${metodoEntrega === "Tele-busca" ? "Solicitou Tele-busca (Buscamos em casa)" : "O cliente levará ao local"}
- Data: ${dataFormatada}
- Horário: ${horaAgendamento} horas

Obrigado, ${nomeCliente}! Entraremos em contato via WhatsApp no número ${telCliente} para confirmar a disponibilidade da agenda!
        `;

        // Exibe o alerta completo na tela do usuário
        alert(resumoMensagem);

        // Limpa todos os campos do formulário após o sucesso
        form.reset();
    });
});
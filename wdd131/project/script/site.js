document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        { name: "Paris", description: "Cidade luz, famosa pela gastronomia e cultura." },
        { name: "Roma", description: "Capital italiana, rica em história e pratos típicos." },
        { name: "Tóquio", description: "Metrópole futurística e berço da culinária japonesa." }
    ];

    const recipes = [
        { name: "Boeuf Bourguignon", country: "França", description: "Prato clássico francês feito com carne de boi e vinho." },
        { name: "Carbonara", country: "Itália", description: "Espaguete com molho cremoso à base de ovos, queijo e bacon." },
        { name: "Sushi", country: "Japão", description: "Arroz temperado com vinagre e peixe cru." }
    ];

    const destinationsList = document.getElementById("destinations-list");
    const recipesList = document.getElementById("recipes-list");

    // Adicionando destinos à página
    destinations.forEach(destination => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${destination.name}</h3><p>${destination.description}</p>`;
        destinationsList.appendChild(div);
    });

    // Adicionando receitas à página
    recipes.forEach(recipe => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${recipe.name}</h3><p><strong>${recipe.country}</strong>: ${recipe.description}</p>`;
        recipesList.appendChild(div);
    });
});

// site.js

// Função para armazenar informações no localStorage
function storeFormData(name, email, message) {
    const formData = {
        name: name,
        email: email,
        message: message
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData)); // Armazenando os dados no localStorage
}

// Função para exibir uma mensagem de agradecimento após o envio do formulário
function displayThankYouMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<p>Thank you for your message. We will get back to you shortly!</p>`;
    document.querySelector('main').appendChild(messageDiv);
}

// Função de evento de submissão do formulário
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coletando os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validando dados
    if (name && email && message) {
        storeFormData(name, email, message);  // Armazenando no localStorage
        displayThankYouMessage();  // Exibindo mensagem de agradecimento
    } else {
        alert('Please fill in all fields.');
    }
}

// Adicionando um ouvinte de evento ao formulário
document.getElementById('form').addEventListener('submit', handleFormSubmit);

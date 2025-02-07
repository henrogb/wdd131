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

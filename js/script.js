 function SaibaMais(id, id2) {
    var button = document.getElementById(id2);

    let card = document.getElementById(id);
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Voltar';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Saiba Mais';
};
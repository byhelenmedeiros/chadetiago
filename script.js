const childrenField = document.getElementById('children-count-field');
const childrenYes = document.getElementById('children-yes');
const childrenNo = document.getElementById('children-no');
const confirmButton = document.getElementById('confirm-button');
const confirmationMessage = document.getElementById('confirmation-message');

childrenField.style.display = 'none'; // Oculta o campo de quantidade de crianças inicialmente

childrenYes.addEventListener('change', () => {
    childrenField.style.display = childrenYes.checked ? 'block' : 'none';
});

childrenNo.addEventListener('change', () => {
    childrenField.style.display = childrenNo.checked ? 'none' : 'block';
});

confirmButton.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    confirmationMessage.textContent = `Obrigado ${name}! Contamos com sua presença.`;
    $('#confirmation-modal').modal('show');
});


function applyBoldEffect(event) {
    const letter = event.target;
    letter.style.fontWeight = "bold";
}

// Função para remover o efeito de negrito da letra
function removeBoldEffect(event) {
    const letter = event.target;
    letter.style.fontWeight = "normal";
}
document.addEventListener('DOMContentLoaded', () => {
    const childrenField = document.getElementById('children-count-field');
    const childrenYes = document.getElementById('children-yes');
    const childrenNo = document.getElementById('children-no');
    const confirmButton = document.getElementById('confirm-button');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (childrenField) {
        childrenField.style.display = 'none';
    }

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
});

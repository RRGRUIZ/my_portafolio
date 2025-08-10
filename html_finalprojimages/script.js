document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const recText = document.getElementById('rec-text').value;

    if (recText.length > 0) {
        // Muestra el mensaje de confirmación
        const message = document.getElementById('confirmation-message');
        message.style.display = 'block';

        // Opcional: Oculta el mensaje después de unos segundos
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000); // 3000 milisegundos = 3 segundos

        // Limpia el textarea del formulario
        document.getElementById('rec-text').value = '';
    }
});
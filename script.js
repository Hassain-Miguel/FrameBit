
function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '244939509745';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatado = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatado}`

    window.open(url, '_blank')
}









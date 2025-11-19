function abrirFormulario(tipo) {
    const tarjetaLogin = document.getElementById('tarjeta-login');
    const formLogin = document.getElementById('form-login');
    const tarjetaRegistro = document.getElementById('tarjeta-registro');
    const formRegistro = document.getElementById('form-registro');

    tarjetaLogin.style.display = 'flex';
    formLogin.style.display = 'none';
    tarjetaRegistro.style.display = 'flex';
    formRegistro.style.display = 'none';

    if (tipo === 'login') {
        tarjetaLogin.style.display = 'none';
        formLogin.style.display = 'block';
    } else if (tipo === 'registro') {
        tarjetaRegistro.style.display = 'none';
        formRegistro.style.display = 'block';
    }
}

function cerrarFormularios() {
    document.getElementById('tarjeta-login').style.display = 'flex';
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('tarjeta-registro').style.display = 'flex';
    document.getElementById('form-registro').style.display = 'none';
}
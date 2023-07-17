button = document.getElementById('button');
img = document.getElementById('img');

button.addEventListener('click', change);

function change () {
    if(button.innerHTML == "Encender"){
        img.src = "https://img.freepik.com/vector-gratis/vela-iglesia-oscuridad_1284-42553.jpg";
        button.innerHTML = "Apagar";
    } else {
        img.src = "https://img.freepik.com/vector-premium/vela-apagada-humo-sobre-fondo-oscuro-parafina-realista-o-vela-cera_368602-5010.jpg"
        button.innerHTML = "Encender"
    }
}
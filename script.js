const button_1 = document.getElementById('on/off');
const img = document.getElementById('img');
const button_2 = document.getElementById('candle/bulb')


button_1.addEventListener('click', change);

button_2.addEventListener('click', () => {
    if(button_2.innerHTML == 'Candle'){
        button_2.innerHTML = 'Bulb';
    } else{
        button_2.innerHTML = 'Candle';
    }; change()
});


function change () {
    if(button_2.innerHTML == 'Candle'){
        if(button_1.innerHTML == "Encender"){
            img.src = "https://img.freepik.com/vector-gratis/vela-iglesia-oscuridad_1284-42553.jpg";
            button_1.innerHTML = "Apagar";
        } else {
            img.src = "https://img.freepik.com/vector-premium/vela-apagada-humo-sobre-fondo-oscuro-parafina-realista-o-vela-cera_368602-5010.jpg"
            button_1.innerHTML = "Encender";
        }
    } else {
            if (button_2.innerHTML == 'Bulb'){
                if(button_1.innerHTML == 'Encender'){
                    img.src = 'https://media.istockphoto.com/id/1149246206/es/vector/bombilla-con-rayos-l%C3%A1mpara-de-iluminaci%C3%B3n-el%C3%A9ctrica-idea-creativa-soluci%C3%B3n-concepto-de.jpg?s=170667a&w=0&k=20&c=IxMQvorSsHBM3r8dLwJ0i9dto3REoxGvh7zTtJz40HI=';
                    button_1.innerHTML = 'Apagar';
                } else {
                    img.src = 'https://st.depositphotos.com/1020618/2357/i/600/depositphotos_23575953-stock-photo-light-bulb.jpg';
                    button_1.innerHTML = "Encender";
                }
            }
        }
};



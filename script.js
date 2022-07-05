function calcular(event){
    event.preventDefault();

    let volume = document.getElementById("volume").value;
    let tempo = document.getElementById("tempo").value;
    let opcoes = document.querySelectorAll(".calc");
    let resultado = document.getElementById("resultado");
    let calc;

    for(i = 0; i < opcoes.length; i++){
        if(opcoes[i].checked){
            if(opcoes[i].value == "microgotasPorHora"){
                calc = volume / tempo;
                resultado.innerHTML = calc + " Microgotas por hora";
            }else if(opcoes[i].value == "microgotasPorMinuto"){
                calc = volume * 60 / tempo;
                resultado.innerHTML = calc + " Microgotas por minuto";
            }else if(opcoes[i].value == "gotasPorHora"){
                calc = (volume / tempo) * 3;
                resultado.innerHTML = calc + " Gotas por hora";
            }else if(opcoes[i].value == "gotasPorMinuto"){
                calc = volume * 20 / tempo;
                resultado.innerHTML = calc + " Gotas por minuto"
            }
        }
    }
}


setInterval(() => {
    location.reload();
}, 60000);
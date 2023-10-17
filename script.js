document.addEventListener("DOMContentLoaded", function () {
    const diaSemanaElement = document.getElementById("diaSemana");
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dataAtual = new Date();
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];
    diaSemanaElement.textContent = diaDaSemana;
});

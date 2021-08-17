export default function func() {
  const funcionamento = document.querySelectorAll("[data-semana]");

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horasAgora = dataAgora.getHours();
  const minutosAgora = dataAgora.getMinutes();
  const horarioAgora = +`${horasAgora}.${minutosAgora}`;

  funcionamento.forEach((func) => {
    const diasSemana = func.dataset.semana.split(",").map(Number);
    const horarioSemana = func.dataset.horario.split(",").map(Number);

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
    const horarioAberto =
      horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    if (semanaAberto && horarioAberto) {
      func.classList.add("aberto");
    }
    if (!semanaAberto) {
      func.classList.add("not-day");
    }
  });
}

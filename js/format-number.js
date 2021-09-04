export default function formatNumber() {
  const number = document.getElementById("tel");

  console.log(number)

  number.addEventListener("keyup", formatNumber);

  function formatNumber() {
    const ddd = number.value[0] + number.value[1];
    const firstPartCel =
      number.value[2] +
      number.value[3] +
      number.value[4] +
      number.value[5] +
      number.value[6];
    const secondPartCel =
      number.value[7] + number.value[8] + number.value[9] + number.value[10];
    const firstPartTel =
      number.value[2] + number.value[3] + number.value[4] + number.value[5];
    const secondPartTel =
      number.value[6] + number.value[7] + number.value[8] + number.value[9];
    if (number.value.length >= 11) {
      number.value = `${ddd} ${firstPartCel} ${secondPartCel}`;
    } else if (number.value.length >= 10) {
      number.value = `${ddd} ${firstPartTel} ${secondPartTel}`;
    }
  }
}
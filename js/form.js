export default function sendForm() {
  const form = document.getElementById("form");
  const formDiv = document.querySelector(".contact-content .container");
  const btnSubmit = document.getElementById("submit");

  async function fetchMail(url) {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("disabled");
    btnSubmit.innerText = "Enviando...";
    const formDt = new FormData(form);
    const response = await fetch(url, {
      method: "post",
      body: formDt,
    });
    const feedback = document.createElement("div");
    if (response.ok) {
      feedback.setAttribute("class", "success");
      feedback.innerHTML =
        "<h3>Formulário enviado com sucesso!</h3><p>Em breve entraremos em contato com você.</p>";
    } else {
      feedback.setAttribute("class", "error");
      feedback.innerHTML =
        "<h3>Houve algum erro</h3><p>Tente enviar diretamente para o e-mail: <a class='link-post' href='mailto:dorival@adilisbr.com'>contato@autoescolahulk.com</a></p>";
    }
    form.style.display = "none";
    formDiv.appendChild(feedback);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchMail("contato.php");
  });
}
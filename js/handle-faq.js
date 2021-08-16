const questions = document.querySelectorAll(".faq-ul li");
const answers = document.querySelectorAll(".faq-ul li p");
const arrows = document.querySelectorAll(".arrow");

questions.forEach((question) => {
  question.addEventListener("click", showQ);
});

function showQ(e) {
  answers[e.currentTarget.id].classList.toggle("block");
  arrows[e.currentTarget.id].innerText = "▼";
  if (answers[e.currentTarget.id].classList.contains("block")) {
    arrows[e.currentTarget.id].innerText = "▲";
  }
}

export default function handleFaq() {}

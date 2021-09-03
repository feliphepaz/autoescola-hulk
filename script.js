import slide from "./js/slide.js";
import api from "./js/api.js";
import handleFaq from "./js/handle-faq.js";
import func from "./js/func.js";
import mobile from "./js/mobile.js";
import anime from "./js/anime.js";

mobile();
anime();

if (document.body.classList.contains("home")) {
  slide();
  api(5);
}

if (document.body.classList.contains("habilitacao")) {
  handleFaq();
}

if (document.body.classList.contains("unidades")) {
  func();
}

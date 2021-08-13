import slide from "./js/slide.js";
import api from "./js/api.js";

if (document.body.classList.contains("home")) {
  slide();
  api(5);
}

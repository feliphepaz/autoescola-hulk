export default function api(postsNumber) {
  const prev = document.querySelector(".prev");

  function createLi() {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const p = document.createElement("p");
    li.appendChild(a);
    li.appendChild(p);
    li.style.display = "none";
    a.appendChild(img);
    a.setAttribute("href", "");
    a.setAttribute("target", "_blank");
    img.setAttribute("src", "");
    prev.parentNode.insertBefore(li, prev.nextElementSibling);
  }

  for (let i = 0; i < postsNumber; i++) {
    createLi();
  }

  const next = document.querySelector(".next"),
    slidesInsta = document.querySelectorAll(".slide-insta li"),
    linksInsta = document.querySelectorAll(".slide-insta li a"),
    imgsInsta = document.querySelectorAll(".slide-insta li a img"),
    textInsta = document.querySelectorAll(".slide-insta li p");

  next.addEventListener("click", adv);
  prev.addEventListener("click", bck);

  slidesInsta[0].style.display = "block";

  const slidesQtd = slidesInsta.length - 1;

  let i = 0;

  function adv() {
    if (i < slidesQtd) {
      i = i + 1;
    } else {
      i = 0;
    }
    slidesInsta.forEach((slide) => {
      slide.style.display = "none";
    });
    slidesInsta[i].style.display = "block";
  }

  function bck() {
    i = i - 1;
    if (i < 0) {
      i = slidesQtd;
    }
    slidesInsta.forEach((slide) => {
      slide.style.display = "none";
    });
    slidesInsta[i].style.display = "block";
  }

  const token =
    "IGQVJYZAU9yc1lKc3JVb2FtYS1nbTkyTFJ0bnB5cHdJTWhQNnpqN0lNSGlsMV9DWEphdWM0UVZAmbEs3N3JiejhaMGh5cWhqRlRmb01YYUNVQldXTnZALU0s2SHpRUEdXRjBPVGtpMFZAzVDlkMms3MXJaVwZDZD";

  async function fetchInsta() {
    const response = await fetch(
      `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`
    );
    const resolve = await response.json();
    linksInsta.forEach((link, index) => {
      link.href = resolve.data[index].permalink;
    });
    imgsInsta.forEach((img, index) => {
      img.src = resolve.data[index].media_url;
    });
    textInsta.forEach((txt, index) => {
      txt.innerHTML = resolve.data[index].caption;
      if (txt.innerHTML.length > 200) {
        txt.innerHTML =
          txt.innerHTML.substring(0, 200) +
          ` <a class='link-post' href='${resolve.data[index].permalink}' target='_blank'>...Ver o post completo</a>`;
      }
      txt.innerHTML = txt.innerHTML.replace(
        /#(\w+)/g,
        `<a class='link-hash' href='https://www.instagram.com/explore/tags/$1' target='_blank'>$&</a>`
      );
    });
  }

  fetchInsta();
}

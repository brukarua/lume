document.addEventListener("DOMContentLoaded", function () {
  const topicos = document.querySelectorAll(".topico");

  topicos.forEach((topico) => {
    topico.addEventListener("click", function () {
      topicos.forEach((t) => {
        if (t !== this) t.classList.remove("ativo");
      });

      this.classList.toggle("ativo");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnContraste = document.getElementById("btn-contraste");
  
  btnContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");

    if (document.body.classList.contains("alto-contraste")) {
      localStorage.setItem("contraste", "ativo");
      btnContraste.textContent = "Contraste Normal";
    } else {
      localStorage.setItem("contraste", "normal");
      btnContraste.textContent = "Alto Contraste";
    }
  });

  if (localStorage.getItem("contraste") === "ativo") {
    document.body.classList.add("alto-contraste");
    btnContraste.textContent = "Contraste Normal";
  }
});


document.querySelectorAll('.place-card').forEach((card, index) => {
  if (index === 0) {
    const imgDefault = card.querySelector('.img-default');
    const imgHover = card.querySelector('.img-hover');
    
    if (!imgDefault || !imgHover) return;

    const srcDefaultOriginal = imgDefault.src;
    const srcHoverOriginal = imgHover.src;

    const srcDefaultContraste = "imagens/lumeblack.png";
    const srcHoverContraste = "imagens/voceestaaquiblack2.png";

    card.addEventListener('mouseenter', () => {
      if (document.body.classList.contains('alto-contraste')) {
        imgHover.src = srcHoverContraste;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (document.body.classList.contains('alto-contraste')) {
        imgHover.src = srcHoverOriginal; 
      }
    });

    const observer = new MutationObserver(() => {
      if (document.body.classList.contains('alto-contraste')) {
        imgDefault.src = srcDefaultContraste;
      } else {
        imgDefault.src = srcDefaultOriginal;
        imgHover.src = srcHoverOriginal;
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
});
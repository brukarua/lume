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
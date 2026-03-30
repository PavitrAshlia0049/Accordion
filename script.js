document.addEventListener("DOMContentLoaded", () => {
  if ((document.querySelector(".ans").style.display = "none")) {
    document.querySelector("#que").addEventListener("click", function () {
      document.querySelector(".ans").style.display = "block";
      document.querySelector(".logo").style.transform = rotate(180);
    });
  } else {
    document.querySelector("#que").addEventListener("click", function () {
      document.querySelector(".ans").style.display = "none";
      document.querySelector(".logo").style.transform = rotate(180);
    });
  }
});


const menubtn = document.getElementById("toggle");
const signUpbtn = document.getElementById("open");
const modalClosebtn = document.getElementById("close");
const modal = document.getElementById("modal");

menubtn.addEventListener("click", () =>
  document.body.classList.toggle("show-menu")
);

signUpbtn.addEventListener("click", () => modal.classList.add("show-modal"));

modalClosebtn.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);

modal.addEventListener("click", e =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);

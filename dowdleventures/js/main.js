// Behavior only. All visible text lives in index.html.

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".copy-btn").forEach(function (btn) {
  var label = btn.textContent;
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(btn.dataset.copy).then(function () {
      btn.textContent = btn.dataset.copiedLabel;
      btn.classList.add("copied");
      setTimeout(function () {
        btn.textContent = label;
        btn.classList.remove("copied");
      }, 2000);
    });
  });
});

// Contact form: compose a mailto: link from the fields and hand off to the email app.
document.querySelectorAll(".contact-form").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = data.get("name").trim();
    var org = data.get("organization").trim();
    var subject = form.dataset.subject + " from " + name + (org ? " (" + org + ")" : "");
    var body = [
      data.get("message").trim(),
      "",
      name,
      org,
      data.get("email").trim()
    ].filter(function (line, i) { return i < 3 || line; }).join("\n");

    var to = form.getAttribute("action").replace(/^mailto:/, "");
    window.location.href = "mailto:" + to +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    form.querySelector(".form-status").hidden = false;
  });
});

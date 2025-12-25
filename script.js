function handlePurchase(formId) {
  const form = document.getElementById(formId);
  const loader = document.getElementById("loader");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.innerHTML = "";
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.display = "none";
      message.style.color = "#00e676";
      message.innerHTML = "✅ Purchase successful (Demo)";
      form.reset();
    }, 1500);
  });
}

if (document.getElementById("airtimeForm")) {
  handlePurchase("airtimeForm");
}

if (document.getElementById("dataForm")) {
  handlePurchase("dataForm");
}

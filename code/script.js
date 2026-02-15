document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("submit fired")
    window.location.href = "payment.html"
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    // grab values if you want
    const name = e.target[0].value
    const email = e.target[1].value

    // store in sessionStorage to show on payment page
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("email", email)

    // go straight to payment page
    window.location.href = "payment.html"
  })
})

document.getElementById("appForm").addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get("name")
    const email = formData.get("email")

    // Validate inputs
    if (!name || !email) {
        console.error("Name and email are required")
        return
    }

    try {
        console.log("Submitting", { name, email })
        // Add actual API call here if needed
        window.location.href = "payment.html"
    } catch (error) {
        console.error("Submission failed", error)
    }
})

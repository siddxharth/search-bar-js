const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let user = []   //empty array; used to store users from placeholder API

fetch("https://jsonplaceholder.typicode.com/users") //fetch demo json data from placeholder API
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name
            body.textContent = user.email
            userCardContainer.append(card)
            return {name: user.name, email: user.email, element: card }
        })
    })

    
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase()
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    console.log(users)
})

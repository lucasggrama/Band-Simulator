let switchDarkModeEl = document.querySelector("#switcher")
let bodyDoSiteEl = document.querySelector("body")

switchDarkModeEl.addEventListener('click', () => {
    bodyDoSiteEl.classList.toggle('escuro')
});
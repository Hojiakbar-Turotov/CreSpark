function heightFix() {
    const pdfContainer = document.getElementById("pdfContainer");
    const pdfTitle = document.getElementById("pdfTitle");

    pdfContainer.style.height = `${window.innerHeight - pdfTitle.offsetHeight - 15}px`;
}

const nazariyStart = document.getElementById("nazariy-start")
const nazariy = document.getElementById("nazariy")
const amaliyStart = document.getElementById("amaliy-start")
const amaliy = document.getElementById("amaliy")
const tajribaStart = document.getElementById("tajriba-start")
const tajriba = document.getElementById("tajriba")
const allElements = document.getElementById("all-elements")
const viewStart = document.getElementById("view-start")
const viewClose = document.getElementById("view-close")

nazariyStart.addEventListener("click", () => {
    allElements.classList.add("d-none")
    viewStart.classList.remove("d-none")
    nazariy.classList.remove("d-none")
    heightFix()
});

amaliyStart.addEventListener("click", () => {
    allElements.classList.add("d-none")
    viewStart.classList.remove("d-none")
    amaliy.classList.remove("d-none")
    heightFix()
});

tajribaStart.addEventListener("click", () => {
    allElements.classList.add("d-none")
    viewStart.classList.remove("d-none")
    tajriba.classList.remove("d-none")
    heightFix()
});

viewClose.addEventListener("click", () => {
    allElements.classList.remove("d-none")
    viewStart.classList.add("d-none")
    nazariy.classList.add("d-none")
    amaliy.classList.add("d-none")
    tajriba.classList.add("d-none")
});


const nazariy1 = document.getElementById("nazariy-1")
const nazariy2 = document.getElementById("nazariy-2")
const nazariy3 = document.getElementById("nazariy-3")
const nazariy4 = document.getElementById("nazariy-4")
const nazariy5 = document.getElementById("nazariy-5")
const nazariy6 = document.getElementById("nazariy-6")

function removePrimaryNazariy() {
    nazariy1.classList.remove("btn-primary");
    nazariy2.classList.remove("btn-primary");
    nazariy3.classList.remove("btn-primary");
    nazariy4.classList.remove("btn-primary");
    nazariy5.classList.remove("btn-primary");
    nazariy6.classList.remove("btn-primary");
}

nazariy1.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy1.classList.remove("btn-outline-primary");
    nazariy1.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/1-mavzu.pdf")
})

nazariy2.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy2.classList.remove("btn-outline-primary");
    nazariy2.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/2-mavzu.pdf")
})

nazariy3.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy3.classList.remove("btn-outline-primary");
    nazariy3.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/3-mavzu.pdf")
})

nazariy4.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy4.classList.remove("btn-outline-primary");
    nazariy4.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/4-mavzu.pdf")
})

nazariy5.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy5.classList.remove("btn-outline-primary");
    nazariy5.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/5-mavzu.pdf")
})

nazariy6.addEventListener("click", () => {
    removePrimaryNazariy()
    nazariy6.classList.remove("btn-outline-primary");
    nazariy6.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/nazariy/6-mavzu.pdf")
})

const amaliy1 = document.getElementById("amaliy-1")
const amaliy2 = document.getElementById("amaliy-2")
const amaliy3 = document.getElementById("amaliy-3")
const amaliy4 = document.getElementById("amaliy-4")
const amaliy5 = document.getElementById("amaliy-5")
const amaliy6 = document.getElementById("amaliy-6")

function removePrimaryamaliy() {
    amaliy1.classList.remove("btn-primary");
    amaliy2.classList.remove("btn-primary");
    amaliy3.classList.remove("btn-primary");
    amaliy4.classList.remove("btn-primary");
    amaliy5.classList.remove("btn-primary");
}

amaliy1.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy1.classList.remove("btn-outline-primary");
    amaliy1.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/1-mavzu.pdf")
})

amaliy2.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy2.classList.remove("btn-outline-primary");
    amaliy2.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/2-mavzu.pdf")
})

amaliy3.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy3.classList.remove("btn-outline-primary");
    amaliy3.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/3-mavzu.pdf")
})

amaliy4.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy4.classList.remove("btn-outline-primary");
    amaliy4.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/4-mavzu.pdf")
})

amaliy5.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy5.classList.remove("btn-outline-primary");
    amaliy5.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/5-mavzu.pdf")
})

amaliy6.addEventListener("click", () => {
    removePrimaryamaliy()
    amaliy6.classList.remove("btn-outline-primary");
    amaliy6.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/amaliy/6-mavzu.pdf")
})

const tajriba1 = document.getElementById("tajriba-1")
const tajriba2 = document.getElementById("tajriba-2")
const tajriba3 = document.getElementById("tajriba-3")
const tajriba4 = document.getElementById("tajriba-4")
const tajriba5 = document.getElementById("tajriba-5")


function removePrimarytajriba() {
    tajriba1.classList.remove("btn-primary");
    tajriba2.classList.remove("btn-primary");
    tajriba3.classList.remove("btn-primary");
    tajriba4.classList.remove("btn-primary");
    tajriba5.classList.remove("btn-primary");
}

tajriba1.addEventListener("click", () => {
    removePrimarytajriba()
    tajriba1.classList.remove("btn-outline-primary");
    tajriba1.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/tajriba/1-mavzu.pdf")
})

tajriba2.addEventListener("click", () => {
    removePrimarytajriba()
    tajriba2.classList.remove("btn-outline-primary");
    tajriba2.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/tajriba/2-mavzu.pdf")
})

tajriba3.addEventListener("click", () => {
    removePrimarytajriba()
    tajriba3.classList.remove("btn-outline-primary");
    tajriba3.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/tajriba/3-mavzu.pdf")
})

tajriba4.addEventListener("click", () => {
    removePrimarytajriba()
    tajriba4.classList.remove("btn-outline-primary");
    tajriba4.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/tajriba/4-mavzu.pdf")
})

tajriba5.addEventListener("click", () => {
    removePrimarytajriba()
    tajriba5.classList.remove("btn-outline-primary");
    tajriba5.classList.add("btn-primary");
    pdfContainer.setAttribute("src", "./files/tajriba/5-mavzu.pdf")
})
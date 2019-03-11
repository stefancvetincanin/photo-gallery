const s = selektor => document.getElementById(selektor)
const maska = s("maska")
const modal = s("modal")

maska.addEventListener("click", function () {
    $("#modal").fadeOut()
    $("#maska").hide()
    modal.innerHTML = ""
})

modal.addEventListener("click", function () {
    $("#modal").fadeOut()
    $("#maska").hide()
    modal.innerHTML = ""
})

$("img").on("click", function() {
    $("#modal").fadeIn()
    $("#maska").fadeIn()
    $(this).clone().appendTo($("#modal"))
})


// [...document.querySelectorAll("img")]
// querySelectorAll daje niz koj nije niz (node list), niz html elemenata koji nema neke korisne array metode
// ... - tri tacke razlazu niz na sastavne cinioce, destruktor niza
// [] stavlja te cinioce u niz
const input = document.querySelector("input")
const button = document.querySelector(".button")
const mSm = document.querySelector(".metr")
const lToMl = document.querySelector(".hajm")
const KgToGr = document.querySelector(".massa")

let metr = 0
let hajm = 0
let litr = 0
let massa = 0
let sm = 0
let gr = 0
let grgr = 0

button.addEventListener("click", ()=>{
    input.value = input.value * 1
    metr = input.value * 100
    sm = input.value / 100
    hajm = input.value * 100
    gr = input.value / 1000
    massa = input.value * 1000
    grgr = input.value / 100
    mSm.textContent = `${input.value} m = ${metr}sm | ${input.value} sm = ${sm}m`
    lToMl.textContent = `${input.value}l = ${hajm}ml | ${input.value}gr = ${gr}mlgr`
    KgToGr.textContent = `${input.value}kg = ${massa}gr | ${input.value}gr = ${grgr}kg` 
})
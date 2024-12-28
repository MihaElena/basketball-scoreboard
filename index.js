

let scoreHomeEl = document.getElementById("scoreHome-el")
let totalPointsHome = 0

let scoreGuestEl = document.getElementById("scoreGuest-el")
let totalPointsGuest = 0



function add1home() {
    totalPointsHome += 1
    scoreHomeEl.textContent = totalPointsHome
}

function add2home() {
    totalPointsHome += 2
    scoreHomeEl.textContent = totalPointsHome
}

function add3home() {
    totalPointsHome += 3
    scoreHomeEl.textContent = totalPointsHome
}

// GUEST points

function add1guest() {
    totalPointsGuest += 1
    scoreGuestEl.textContent = totalPointsGuest
}

function add2guest() {
    totalPointsGuest += 2
    scoreGuestEl.textContent = totalPointsGuest
}

function add3guest() {
    totalPointsGuest += 3
    scoreGuestEl.textContent = totalPointsGuest
}














/* 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
*/
let textboard = document.querySelector(".textBoard")
let cardset = document.querySelector("#cardset")
let cardboard = document.querySelector(".cardboard")
let result = document.querySelector("#result")
let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
let c3 = document.querySelector("#c3")
let c4 = document.querySelector("#c4")
let c5 = document.querySelector("#c5")
let c6 = document.querySelector("#c6")
let c7 = document.querySelector("#c7")
let c8 = document.querySelector("#c8")
let c9 = document.querySelector("#c9")
let c10 = document.querySelector("#c10")
let c11 = document.querySelector("#c11")
let c12 = document.querySelector("#c12")


let c1c = 0
let c2c = 0
let c3c = 0
let c4c = 0
let c5c = 0
let c6c = 0
let c7c = 0
let c8c = 0
let c9c = 0
let c10c = 0
let c11c = 0
let c12c = 0


let count = 0

let destiny

var destinyMaker = () => {
    destiny = Math.floor(Math.random() * (21)) + 1;
}

result.onclick = () => {
    destinyMaker()
    let load = 'result.html?type=' + new URLSearchParams(location.search).get("type") + '&destiny=' + destiny
    location.href = load
}


onload = () => {
    setTimeout(function() { 
        cardset.classList.remove("cardsetAni")
        cardset.classList.add("hide")
        cardboard.classList.remove("hide")
        textboard.textContent = "운명의 카드 한 장을 골라주세요."
        result.classList.remove("hide")
    }, 5000) 
}


c1.onclick = () => {
    if(c1c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c1.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c1c = 1
        return 0
    } 
}
c2.onclick = () => {
    if(c2c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c2.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c2c = 1
        return 0
    } 
}
c3.onclick = () => {
    if(c3c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c3.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c3c = 1
        return 0
    } 
}
c4.onclick = () => {
    if(c4c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c4.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c4c = 1
        return 0
    } 
}
c5.onclick = () => {
    if(c5c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c5.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c5c = 1
        return 0
    } 
}
c6.onclick = () => {
    if(c6c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c6.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c6c = 1
        return 0
    } 
}
c7.onclick = () => {
    if(c7c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c7.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c7c = 1
        return 0
    } 
}
c8.onclick = () => {
    if(c8c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c8.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c8c = 1
        return 0
    } 
}
c9.onclick = () => {
    if(c9c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c9.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c9c = 1
        return 0
    } 
}
c10.onclick = () => {
    if(c10c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c10.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c10c = 1
        return 0
    } 
}
c11.onclick = () => {
    if(c11c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c11.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c11c = 1
        return 0
    } 
}
c12.onclick = () => {
    if(c12c >= 1) {
        textboard.textContent = "이미 선택이 완료되었습니다. 선택완료를 눌러주세요."
        return 0
    }
    if(count === 0) {
        c12.classList.add("border1")
        textboard.textContent = "선택이 완료되었습니다. 선택완료를 눌러주세요."
        count++
        c12c = 1
        return 0
    } 
}
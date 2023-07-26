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
let c13 = document.querySelector("#c13")
let c14 = document.querySelector("#c14")
let c15 = document.querySelector("#c15")
let c16 = document.querySelector("#c16")
let c17 = document.querySelector("#c17")
let c18 = document.querySelector("#c18")
let c19 = document.querySelector("#c19")
let c20 = document.querySelector("#c20")
let c21 = document.querySelector("#c21")
let c22 = document.querySelector("#c22")
let c23 = document.querySelector("#c23")

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
let c13c = 0
let c14c = 0
let c15c = 0
let c16c = 0
let c17c = 0
let c18c = 0
let c19c = 0
let c20c = 0
let c21c = 0
let c22c = 0
let c23c = 0

let count = 0



onload = () => {
    setTimeout(function() { 
        cardset.classList.remove("cardsetAni")
        cardset.classList.add("hide")
        cardboard.classList.remove("hide")
        textboard.textContent = "카드를 3장 중 첫번째 '과거'를 선택해주세요."
        result.classList.remove("hide")
    }, 5000) 
}


c1.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c1c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c1.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c1c = 1
        return 0
    } 
    if(count === 1) {
        c1.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c1c = 1
        return 0
    }
    if(count === 2) {
        c1.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c1c = 1
        return 0
    }
}

c2.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c2c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c2.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c2c = 1
        return 0
    } 
    if(count === 1) {
        c2.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c2c = 1
        return 0
    }
    if(count === 2) {
        c2.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c2c = 1
        return 0
    }
}
c3.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c3c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c3.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c3c = 1
        return 0
    } 
    if(count === 1) {
        c3.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c3c = 1
        return 0
    }
    if(count === 2) {
        c3.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c3c = 1
        return 0
    }
}
c4.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c4c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c4.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c4c = 1
        return 0
    } 
    if(count === 1) {
        c4.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c4c = 1
        return 0
    }
    if(count === 2) {
        c4.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c4c = 1
        return 0
    }
}
c5.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c5c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c5.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c5c = 1
        return 0
    } 
    if(count === 1) {
        c5.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c5c = 1
        return 0
    }
    if(count === 2) {
        c5.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c5c = 1
        return 0
    }
}
c6.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c6c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c6.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c6c = 1
        return 0
    } 
    if(count === 1) {
        c6.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c6c = 1
        return 0
    }
    if(count === 2) {
        c6.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c6c = 1
        return 0
    }
}
c7.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c7c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c7.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c7c = 1
        return 0
    } 
    if(count === 1) {
        c7.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c7c = 1
        return 0
    }
    if(count === 2) {
        c7.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c7c = 1
        return 0
    }
}
c8.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c8c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c8.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c8c = 1
        return 0
    } 
    if(count === 1) {
        c8.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c8c = 1
        return 0
    }
    if(count === 2) {
        c9.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c8c = 1
        return 0
    }
}
c9.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c9c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c9.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c9c = 1
        return 0
    } 
    if(count === 1) {
        c9.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c9c = 1
        return 0
    }
    if(count === 2) {
        c9.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c9c = 1
        return 0
    }
}
c10.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c10c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c10.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c10c = 1
        return 0
    } 
    if(count === 1) {
        c10.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c10c = 1
        return 0
    }
    if(count === 2) {
        c10.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c10c = 1
        return 0
    }
}
c11.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c11c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c11.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c11c = 1
        return 0
    } 
    if(count === 1) {
        c11.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c11c = 1
        return 0
    }
    if(count === 2) {
        c11.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c11c = 1
        return 0
    }
}
c12.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c12c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c12.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c12c = 1
        return 0
    } 
    if(count === 1) {
        c12.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c12c = 1
        return 0
    }
    if(count === 2) {
        c12.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c12c = 1
        return 0
    }
}
c13.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c13c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c13.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c13c = 1
        return 0
    } 
    if(count === 1) {
        c13.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c13c = 1
        return 0
    }
    if(count === 2) {
        c13.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c13c = 1
        return 0
    }
}
c14.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c14c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c14.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c14c = 1
        return 0
    } 
    if(count === 1) {
        c14.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c14c = 1
        return 0
    }
    if(count === 2) {
        c14.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c14c = 1
        return 0
    }
}
c15.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c15c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c15.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c15c = 1
        return 0
    } 
    if(count === 1) {
        c15.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c15c = 1
        return 0
    }
    if(count === 2) {
        c15.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c15c = 1
        return 0
    }
}
c16.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c16c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c16.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c16c = 1
        return 0
    } 
    if(count === 1) {
        c16.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c16c = 1
        return 0
    }
    if(count === 2) {
        c16.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c16c = 1
        return 0
    }
}
c17.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c17c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c17.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c17c = 1
        return 0
    } 
    if(count === 1) {
        c17.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c17c = 1
        return 0
    }
    if(count === 2) {
        c17.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c17c = 1
        return 0
    }
}
c18.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c18c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c18.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c18c = 1
        return 0
    } 
    if(count === 1) {
        c18.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c18c = 1
        return 0
    }
    if(count === 2) {
        c18.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c18c = 1
        return 0
    }
}
c19.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c19c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c19.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c19c = 1
        return 0
    } 
    if(count === 1) {
        c19.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c19c = 1
        return 0
    }
    if(count === 2) {
        c19.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c19c = 1
        return 0
    }
}
c20.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c20c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c20.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c20c = 1
        return 0
    } 
    if(count === 1) {
        c20.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c20c = 1
        return 0
    }
    if(count === 2) {
        c20.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c20c = 1
        return 0
    }
}
c21.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c21c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c21.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c21c = 1
        return 0
    } 
    if(count === 1) {
        c21.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c21c = 1
        return 0
    }
    if(count === 2) {
        c21.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c21c = 1
        return 0
    }
}
c22.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c22c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c22.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c22c = 1
        return 0
    } 
    if(count === 1) {
        c22.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c22c = 1
        return 0
    }
    if(count === 2) {
        c22.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c22c = 1
        return 0
    }
}
c23.onclick = () => {
    if(count >= 3) {
        textboard.textContent = "3장 모두 선택되었습니다. 아래의 결과확인을 눌러주세요."
        return 0
    }
    if(c23c === 1) {
        textboard.textContent = "이미 선택된 카드입니다. 다른 것을 선택해주세요."
        return 0
    }
    if(count === 0) {
        c23.classList.add("border1")
        textboard.textContent = "카드를 3장 중 두번째 '현재'를 선택해주세요."
        count++
        c23c = 1
        return 0
    } 
    if(count === 1) {
        c23.classList.add("border2")
        textboard.textContent = "카드를 3장 중 세번째 '미래'를 선택해주세요."
        count++
        c23c = 1
        return 0
    }
    if(count === 2) {
        c23.classList.add("border3")
        textboard.textContent = "선택이 완료되었습니다. 아래의 결과확인을 눌러주세요."
        count++
        c23c = 1
        return 0
    }
}

let destiny1, destiny2, destiny3

var destinyMaker1 = () => {
    destiny1 = Math.floor(Math.random() * (22)) + 1;
}
var destinyMaker2 = () => {
    destiny2 = Math.floor(Math.random() * (22)) + 1;
    if(destiny2 === destiny1) {
        destinyMaker2()
        // console.log('error1')
    }
}
var destinyMaker3 = () => {
    destiny3 = Math.floor(Math.random() * (22)) + 1;
    if(destiny3 === destiny1) {
        destinyMaker3()
        // console.log('error2')
    }
    if(destiny3 === destiny2) {
        destinyMaker3()
        // console.log('error3')
    }
}



result.onclick = () => {
    if(count < 3) {
        textboard.textContent = "아직 카드가 전부 선택되지 않았습니다. 3장을 전부 선택해주세요."
    }else {
        destinyMaker1()
        destinyMaker2()
        destinyMaker3()
        localStorage.setItem("destiny", 'ture')
        localStorage.setItem("destiny1", destiny1)
        localStorage.setItem("destiny2", destiny2)
        localStorage.setItem("destiny3", destiny3)
        location.href = "result.html?destiny1=" + destiny1 + "&destiny2=" + destiny2 + "&destiny3=" + destiny3
    }
}
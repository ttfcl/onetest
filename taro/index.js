let textboard = document.querySelector(".textBoard")
let skip = document.querySelector("#skip")
let next = document.querySelector("#next")
let finder = document.querySelector("#finder")
let count = 0


skip.onclick = () => {
    window.navigator.clipboard.writeText("https://onetest.pe.kr/taro/index.html").then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
}



next.onclick = () => {
    if(localStorage.getItem("destiny") !== null) {
        textboard.textContent = "이미 신비타로를 이용하신 적이 있으시군요. 운명을 바꾸는 것은 매우 어려운 일입니다. 여기서 결과를 뒤집는 것은 버튼 하나만 누르면 됩니다. 하지만 본인의 운명을 바꾸는 것은 본인 스스로의 역량에 달려 있습니다. 자신의 손에 주어진 운명을 뿌리칠지 가져갈지 판단은 당신이 몫입니다."
    }
    if(count === 2) {
        textboard.textContent = "그럼 시작하겠습니다."
        location.href="taro.html"
    }
    if(count === 1) {
        textboard.classList.remove("ani")
        count++
        textboard.textContent = "오직 재미로만 이용하시길 바라며 타로의 결과를 받아드릴지 벗어날지는 당신의 선택입니다."
        textboard.classList.add("ani2")
    }
    if(count === 0) {
        textboard.classList.remove("ani")
        count++
        textboard.textContent = "저희는 마르세유 정통 타로를 기반으로 진행됩니다."
        next.textContent = "시작"
        textboard.classList.add("ani2")
    }
    if(localStorage.getItem("destiny") !== null) {
        textboard.textContent = "이미 신비타로를 이용하신 적이 있으시군요. 운명을 바꾸는 것은 매우 어려운 일입니다. 여기서 결과를 뒤집는 것은 버튼 하나만 누르면 됩니다. 하지만 본인의 운명을 바꾸는 것은 본인 스스로의 역량에 달려 있습니다. 자신의 손에 주어진 운명을 뿌리칠지 가져갈지 판단은 당신이 몫입니다."
        count = 2
    }
}

finder.onclick = () => {
    if(localStorage.getItem("destiny") === null) {
        alert("기록이 존재하지 않습니다.")
    }else {
        let i = localStorage.getItem("destiny1")
        let b = localStorage.getItem("destiny2")
        let k = localStorage.getItem("destiny3")
        let lo = "result.html?destiny1=" + i + "&destiny2=" + b + "&destiny3=" + k
        location.href=lo
    }
}
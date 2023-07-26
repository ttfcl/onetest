let textboard = document.querySelector(".textBoard")
let skip = document.querySelector("#skip")
let next = document.querySelector("#next")
let finder = document.querySelector("#finder")
let count = 0


skip.onclick = () => {
    window.navigator.clipboard.writeText("https://properties.pe.kr/properties/index.html").then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
}



next.onclick = () => {
    if(count === 2) {
        location.href="behave.html"
    }
    if(count === 1) {
        textboard.classList.remove("ani")
        count++
        textboard.textContent = "좋은 결과가 나와도 맹신하지 말고 관계를 위해 서로 노력해야하며 나쁜 결과가 나오는 것은 서로를 위해 더욱 노력해야하는 의미입니다. 시작을 누르면 진행합니다."
        next.textContent = "시작"
        textboard.classList.add("ani2")
    }
    if(count === 0) {
        textboard.classList.remove("ani")
        count++
        textboard.textContent = "토(흙), 수(물), 화(불) ,금(금), 목(나무) 이 5가지의 상성을 통해 재미로만 즐겨주시길 바랍니다."
        textboard.classList.add("ani2")
    }
}

finder.onclick = () => {
    if(localStorage.getItem("manName") === null) {
        alert("기록이 존재하지 않습니다.")
    }else {
        location.href= "result.html"
    }
}
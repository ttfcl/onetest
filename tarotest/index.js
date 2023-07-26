let textboard = document.querySelector(".textBoard")
let skip = document.querySelector("#skip")
let love = document.querySelector("#love")
let work = document.querySelector("#work")
let money = document.querySelector("#money")
let health = document.querySelector("#health")
let count = 0


skip.onclick = () => {
    window.navigator.clipboard.writeText("https://onetest.pe.kr/tarotest/index.html").then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
}

love.onclick = () => { 
    location.href = 'taro.html?type=love'
}
work.onclick = () => { 
    location.href = 'taro.html?type=work'
}
money.onclick = () => { 
    location.href = 'taro.html?type=money'
}
health.onclick = () => { 
    location.href = 'taro.html?type=health'
}
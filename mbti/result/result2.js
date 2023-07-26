let textboard = document.querySelector(".textBoard")
let skip = document.querySelector("#skip")

// let finder = document.querySelector("#finder")
let count = 0


skip.onclick = () => {
    window.navigator.clipboard.writeText("https://mbtitest.pe.kr/").then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
}




finder.onclick = () => {
    if(localStorage.getItem("manName") === null) {
        alert("기록이 존재하지 않습니다.")
    }else {
        location.href= "result.html"
    }
}
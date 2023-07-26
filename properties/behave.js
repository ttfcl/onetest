let name3 = document.querySelector("#name")
let name2 = document.querySelector("#name2")
let day = document.querySelector("#day")
let day2 = document.querySelector("#day2")
let result = document.querySelector("#result")


result.onclick = () => {
    if(name3.value === '') {
        alert("남자의 이름이 없습니다.")
        return 0
    }
    if(name2.value === '') {
        alert("여성의 이름이 없습니다.")
        return 0
    }
    if(day.value === '') {
        alert("남자의 년도가 없습니다.")
        return 0
    }
    if(day2.value === '') {
        alert("여자의 년도가 없습니다.")
        return 0
    }
    let abc = day.value
    let defg = day2.value
    let manYear = Number(abc)
    let womanYear = Number(defg)
    
    if(manYear < 1900) {
        alert("1900 ~ 2050 사이의 숫자를 입력하세요.")
        return 0
    }
    if(manYear > 2050) {
        alert("1900 ~ 2050 사이의 숫자를 입력하세요.")
        return 0
    }
    if(womanYear < 1900) {
        alert("1900 ~ 2050 사이의 숫자를 입력하세요.")
        return 0
    }
    if(womanYear > 2050) {
        alert("1900 ~ 2050 사이의 숫자를 입력하세요.")
        return 0
    }
    localStorage.setItem("manName", name3.value)
    localStorage.setItem("manYear", manYear)
    localStorage.setItem("womanName", name2.value)
    localStorage.setItem("womanYear", womanYear)

    result.classList.add("hide")
    setTimeout(function() { 
        location.href = "result.html"
    }, 3000) 

}
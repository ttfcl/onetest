let iBox = []
let nBox = []
let fBox = []
let pBox = []
let eBox = []
let sBox = []
let tBox = []
let jBox = []
let l1 = ''
let l2 = ''
let l3 = ''
let l4 = ''

const counter = () => {
    if(iBox.length > eBox.length) {
        l1 = 'i'
    }else {
        l1 = 'e'
    }
    if(nBox.length > sBox.length) {
        l2 = 'n'
    }else {
        l2 = 's'
    }
    if(fBox.length > tBox.length) {
        l3 = 'f'
    }else {
        l3 = 't'
    }
    if(pBox.length > jBox.length) {
        l4 = 'p'
    }else {
        l4 = 'j'
    }
    setTimeout(function() { 
        location.href = l1 + l2 + l3 + l4 + '.html'
    }, 7000) 
}
//https://mbtitest.pe.kr/

onload = () => {
    if(localStorage.getItem("q1") === "I") {
        iBox.push(localStorage.getItem("q1"))
    }
    if(localStorage.getItem("q1") === "E") {
        eBox.push(localStorage.getItem("q1"))
    }
    if(localStorage.getItem("q2") === "I") {
        iBox.push(localStorage.getItem("q2"))
    }
    if(localStorage.getItem("q2") === "E") {
        eBox.push(localStorage.getItem("q2"))
    }
    if(localStorage.getItem("q3") === "I") {
        iBox.push(localStorage.getItem("q3"))
    }
    if(localStorage.getItem("q3") === "E") {
        eBox.push(localStorage.getItem("q3"))
    }
    if(localStorage.getItem("q4") === "I") {
        iBox.push(localStorage.getItem("q4"))
    }
    if(localStorage.getItem("q4") === "E") {
        eBox.push(localStorage.getItem("q4"))
    }
    if(localStorage.getItem("q5") === "I") {
        iBox.push(localStorage.getItem("q5"))
    }
    if(localStorage.getItem("q5") === "E") {
        eBox.push(localStorage.getItem("q5"))
    }

    if(localStorage.getItem("q6") === "N") {
        nBox.push(localStorage.getItem("q6"))
    }
    if(localStorage.getItem("q6") === "S") {
        sBox.push(localStorage.getItem("q6"))
    }
    if(localStorage.getItem("q7") === "N") {
        nBox.push(localStorage.getItem("q7"))
    }
    if(localStorage.getItem("q7") === "S") {
        sBox.push(localStorage.getItem("q7"))
    }
    if(localStorage.getItem("q8") === "N") {
        nBox.push(localStorage.getItem("q8"))
    }
    if(localStorage.getItem("q8") === "S") {
        sBox.push(localStorage.getItem("q8"))
    }
    if(localStorage.getItem("q9") === "N") {
        nBox.push(localStorage.getItem("q9"))
    }
    if(localStorage.getItem("q9") === "S") {
        sBox.push(localStorage.getItem("q9"))
    }
    if(localStorage.getItem("q10") === "N") {
        nBox.push(localStorage.getItem("q10"))
    }
    if(localStorage.getItem("q10") === "S") {
        sBox.push(localStorage.getItem("q10"))
    }

    if(localStorage.getItem("q11") === "F") {
        fBox.push(localStorage.getItem("q11"))
    }
    if(localStorage.getItem("q11") === "T") {
        tBox.push(localStorage.getItem("q11"))
    }
    if(localStorage.getItem("q12") === "F") {
        fBox.push(localStorage.getItem("q12"))
    }
    if(localStorage.getItem("q12") === "T") {
        tBox.push(localStorage.getItem("q12"))
    }
    if(localStorage.getItem("q13") === "F") {
        fBox.push(localStorage.getItem("q13"))
    }
    if(localStorage.getItem("q13") === "T") {
        tBox.push(localStorage.getItem("q13"))
    }
    if(localStorage.getItem("q14") === "F") {
        fBox.push(localStorage.getItem("q14"))
    }
    if(localStorage.getItem("q14") === "T") {
        tBox.push(localStorage.getItem("q14"))
    }
    if(localStorage.getItem("q15") === "F") {
        fBox.push(localStorage.getItem("q15"))
    }
    if(localStorage.getItem("q15") === "T") {
        tBox.push(localStorage.getItem("q15"))
    }

    if(localStorage.getItem("q16") === "P") {
        pBox.push(localStorage.getItem("q16"))
    }
    if(localStorage.getItem("q16") === "J") {
        jBox.push(localStorage.getItem("q16"))
    }
    if(localStorage.getItem("q17") === "P") {
        pBox.push(localStorage.getItem("q17"))
    }
    if(localStorage.getItem("q17") === "J") {
        jBox.push(localStorage.getItem("q17"))
    }
    if(localStorage.getItem("q18") === "P") {
        pBox.push(localStorage.getItem("q18"))
    }
    if(localStorage.getItem("q18") === "J") {
        jBox.push(localStorage.getItem("q18"))
    }
    if(localStorage.getItem("q19") === "P") {
        pBox.push(localStorage.getItem("q19"))
    }
    if(localStorage.getItem("q19") === "J") {
        jBox.push(localStorage.getItem("q19"))
    }
    if(localStorage.getItem("q20") === "P") {
        pBox.push(localStorage.getItem("q20"))
    }
    if(localStorage.getItem("q20") === "J") {
        jBox.push(localStorage.getItem("q20"))
    }

    counter()
}


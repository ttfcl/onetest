let question = document.querySelector("#question")
let progressBar = document.querySelector("#progressBar")
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let count = 1


answer1.onclick = () => {
    if(count === 1) {
        question.textContent = "친구와 약속이 있습니다. 준비를 다하고 나가기 직전 친구로부터 갑작스러운 사정으로 약속이 취소었습니다.."
        answer1.textContent = "나이스! 집에서 혼자 재밌게 논다."
        answer2.textContent = "이미 준비 다했는데 다른 사람에게 연락을 해본다."
        count++
        localStorage.setItem("q1", "I")
        progressBar.style = "width:10%"
        progressBar.textContent = "10%"
        return 0
    }
    if(count === 2) {
        question.textContent = "일주일간 열심히 일하고 불타는 금요일 저녁이 되었습니다."
        answer1.textContent = "이번주는 되게 힘들었으니 집에서 쉰다."
        answer2.textContent = "이 아까운 시간을 혼자 보낼 수 없다. 클럽에 가거나 친구들과 술을 마신다."
        count++
        localStorage.setItem("q2", "I")
        progressBar.style = "width:15%"
        progressBar.textContent = "15%"
        return 0
    }
    if(count === 3) {
        question.textContent = "당신은 보통 취미 생활할 때 무엇을 하나요?"
        answer1.textContent = "보통 혼자하는 취미를 즐긴다."
        answer2.textContent = "동호회에 가입하거나 각 종 커뮤니티에서 활동을 한다."
        count++
        localStorage.setItem("q3", "I")
        progressBar.style = "width:20%"
        progressBar.textContent = "20%"
        return 0
    }
    if(count === 4) {
        question.textContent = "당신은 휴가를 떠납니다. 목적지를 선택해야 하는데 어디로 가시겠습니까?"
        answer1.textContent = "사람이 없고 조용한 산과 바다."
        answer2.textContent = "새로운 사람을 만날 수 있는 산장파티 또는 해수욕장."
        count++
        localStorage.setItem("q4", "I")
        progressBar.style = "width:25%"
        progressBar.textContent = "25%"
        return 0
    }
    if(count === 5) {
        question.textContent = "꽤 재밌는 신문을 읽었습니다. 당신은 여기서 기억이 나는 내용은"
        answer1.textContent = "유명 연예인의 스캔들 의혹"
        answer2.textContent = "세계 경제의 예측 분석"
        count++
        localStorage.setItem("q5", "I")
        progressBar.style = "width:30%"
        progressBar.textContent = "30%"
        return 0
    }
    if(count === 6) {
        question.textContent = "접시 위에 사과가 있습니다. 이것을 보고 무슨 생각이 드셨나요?"
        answer1.textContent = "백설공주, 독사과, 뉴턴, 중력 법칙, 황금사과 등"
        answer2.textContent = "빨강, 과일, 맛있다, 새콤달콤하다 등"
        count++
        localStorage.setItem("q6", "N")
        progressBar.style = "width:35%"
        progressBar.textContent = "35%"
        return 0
    }
    if(count === 7) {
        question.textContent = "당신은 노래를 들을 때 가장 중요하게 생각하는 요소는 무엇인가요?"
        answer1.textContent = "가사의 내용이 중요하다. 멜로디가 좋아도 가사가 별로면 좋은 음악이 아니다."
        answer2.textContent = "외국 팝송처럼 가사는 몰라도 멜로디가 좋으면 장땡이다."
        count++
        localStorage.setItem("q7", "N")
        progressBar.style = "width:40%"
        progressBar.textContent = "40%"
        return 0
    }
    if(count === 8) {
        question.textContent = "당신은 휴가를 떠나기 위해 비행기를 탔습니다. 당신은 무슨 생각을 하시나요?"
        answer1.textContent = "비행기가 추락하면 어떡하지? 비상구에 앉을까? (재밌는 상상을 한다.)"
        answer2.textContent = "도착 시간은 언제지? 영화를 볼까? (현실적인 생각을 한다.)"
        count++
        localStorage.setItem("q8", "N")
        progressBar.style = "width:45%"
        progressBar.textContent = "45%"
        return 0
    }
    if(count === 9) {
        question.textContent = "당신은 마감기한까지 과제를 제출하지 못했습니다. 당신은 이때"
        answer1.textContent = "과제가 왜 오늘까지 였을까? 근데 과제를 왜하는거지 시험만 보면 되는걸!"
        answer2.textContent = "과제를 제출하지 못해서 학점을 걱정한다."
        count++
        localStorage.setItem("q9", "N")
        progressBar.style = "width:50%"
        progressBar.textContent = "50%"
        return 0
    }
    if(count === 10) {
        question.textContent = "당신에게 슬픈 일이 있습니다. 다른 사람과 공유를 한다면?"
        answer1.textContent = "슬픔이 반이 되니까 공유를 한다."
        answer2.textContent = "두배가 된다. 슬픈 사람이 두명이 되어버리기 때문이다."
        count++
        localStorage.setItem("q10", "N")
        progressBar.style = "width:55%"
        progressBar.textContent = "55%"
        return 0
    }
    if(count === 11) {
        question.textContent = "당신의 친구가 우울해서 병원에 다녀왔다고 합니다. 당신의 질문은?"
        answer1.textContent = "우울하다고? 무슨일 있었어?"
        answer2.textContent = "병원에서는 뭐라고해? 큰 병 있는 건 아니지?"
        count++
        localStorage.setItem("q11", "F")
        progressBar.style = "width:60%"
        progressBar.textContent = "60%"
        return 0
    }
    if(count === 12) {
        question.textContent = "학교가 끝나고 친구와 집으로 돌아가던 중 무언가를 두고 온 것이 생각났습니다."
        answer1.textContent = "같이가자! 혼자가긴 외롭다!"
        answer2.textContent = "나 혼자 갔다올게 금방 돌아올거야!"
        count++
        localStorage.setItem("q12", "F")
        progressBar.style = "width:65%"
        progressBar.textContent = "65%"
        return 0
    }
    if(count === 13) {
        question.textContent = "그런 일이 안일어나는게 좋지만 당신의 지인이 교통사고가 났습니다. 당신의 질문은?"
        answer1.textContent = "어디 안다쳤어? 괜찮아?"
        answer2.textContent = "보험은 들어놨어? 누구 과실이야?"
        count++
        localStorage.setItem("q13", "F")
        progressBar.style = "width:70%"
        progressBar.textContent = "70%"
        return 0
    }
    if(count === 14) {
        question.textContent = "누군가가 당신에게 '넌 열심히 안하는데 왜 잘하냐? 재능있네?' 라고 하면"
        answer1.textContent = "니가 뭔데 내 노력을 평가하냐?"
        answer2.textContent = "와 나 천재인가 보다! 기분이 좋다!"
        count++
        localStorage.setItem("q14", "F")
        progressBar.style = "width:75%"
        progressBar.textContent = "75%"
        return 0
    }
    if(count === 15) {
        question.textContent = "당신은 여행 계획을 세워야 합니다."
        answer1.textContent = "대강 큰 그림만 그려놓고 세부 계획은 그때 정한다."
        answer2.textContent = "몇시에 어디서 무엇을 어떻게 철저한 계획을 세운다."
        count++
        localStorage.setItem("q15", "F")
        progressBar.style = "width:80%"
        progressBar.textContent = "80%"
        return 0
    }
    if(count === 16) {
        question.textContent = "지금 문자나 카톡을 열었는데"
        answer1.textContent = "읽지 않은 알람이......엄청 많다!"
        answer2.textContent = "읽지 않은 알람이 하나도 없다."
        count++
        localStorage.setItem("q16", "P")
        progressBar.style = "width:85%"
        progressBar.textContent = "85%"
        return 0
    }
    if(count === 17) {
        question.textContent = "당신은 처음해보는 요리를 하고 있습니다. 다만 레시피는 대강 알고 있습니다."
        answer1.textContent = "음식은 감으로 한다. 손맛이 중요하다."
        answer2.textContent = "레시피를 여러번 확인하고 정확한 계량이 중요하다."
        count++
        localStorage.setItem("q17", "P")
        progressBar.style = "width:90%"
        progressBar.textContent = "90%"
        return 0
    }
    if(count === 18) {
        question.textContent = "친구가 갑자기 연락해서 지금 밥먹자고 합니다."
        answer1.textContent = "그래! 어디로 갈지는 모르지만 일단 만나자!"
        answer2.textContent = "갑자기? 나 오늘 이미 일정이 있는데!"
        count++
        localStorage.setItem("q18", "P")
        progressBar.style = "width:95%"
        progressBar.textContent = "95%"
        return 0
    }
    if(count === 19) {
        question.textContent = "지금 당신의 책상 정리 상태는 어떻습니까?"
        answer1.textContent = "원래 물건에는 제자리라는 것은 존재하지 않다!"
        answer2.textContent = "각 물건의 위치에 맞게 딱딱 정리되어 있다."
        count++
        localStorage.setItem("q19", "P")
        progressBar.style = "width:100%"
        progressBar.textContent = "100%"
        return 0
    }
    if(count === 20) {
        // question.textContent = "ddsad"
        // answer1.textContent = ""
        // answer2.textContent = ""
        count++
        localStorage.setItem("q20", "P")
        location.href = "https://mbtitest.pe.kr/result/result.html"
        return 0
    }
}

answer2.onclick = () => {
    if(count === 1) {
        question.textContent = "친구와 약속이 있습니다. 준비를 다하고 나가기 직전 친구로부터 갑작스러운 사정으로 약속이 취소었습니다.."
        answer1.textContent = "나이스! 집에서 혼자 재밌게 논다."
        answer2.textContent = "이미 준비 다했는데 다른 사람에게 연락을 해본다."
        count++
        localStorage.setItem("q1", "E")
        progressBar.style = "width:10%"
        progressBar.textContent = "10%"
        return 0
    }
    if(count === 2) {
        question.textContent = "일주일간 열심히 일하고 불타는 금요일 저녁이 되었습니다."
        answer1.textContent = "이번주는 되게 힘들었으니 집에서 쉰다."
        answer2.textContent = "이 아까운 시간을 혼자 보낼 수 없다. 클럽에 가거나 친구들과 술을 마신다."
        count++
        localStorage.setItem("q2", "E")
        progressBar.style = "width:15%"
        progressBar.textContent = "15%"
        return 0
    }
    if(count === 3) {
        question.textContent = "당신은 보통 취미 생활할 때 무엇을 하나요?"
        answer1.textContent = "보통 혼자하는 취미를 즐긴다."
        answer2.textContent = "동호회에 가입하거나 각 종 커뮤니티에서 활동을 한다."
        count++
        localStorage.setItem("q3", "E")
        progressBar.style = "width:20%"
        progressBar.textContent = "20%"
        return 0
    }
    if(count === 4) {
        question.textContent = "당신은 휴가를 떠납니다. 목적지를 선택해야 하는데 어디로 가시겠습니까?"
        answer1.textContent = "사람이 없고 조용한 산과 바다."
        answer2.textContent = "새로운 사람을 만날 수 있는 산장파티 또는 해수욕장."
        count++
        localStorage.setItem("q4", "E")
        progressBar.style = "width:25%"
        progressBar.textContent = "25%"
        return 0
    }
    if(count === 5) {
        question.textContent = "꽤 재밌는 신문을 읽었습니다. 당신은 여기서 기억이 나는 내용은"
        answer1.textContent = "유명 연예인의 스캔들 의혹"
        answer2.textContent = "세계 경제의 예측 분석"
        count++
        localStorage.setItem("q5", "E")
        progressBar.style = "width:30%"
        progressBar.textContent = "30%"
        return 0
    }
    if(count === 6) {
        question.textContent = "접시 위에 사과가 있습니다. 이것을 보고 무슨 생각이 드셨나요?"
        answer1.textContent = "백설공주, 독사과, 뉴턴, 중력 법칙, 황금사과 등"
        answer2.textContent = "빨강, 과일, 맛있다, 새콤달콤하다 등"
        count++
        localStorage.setItem("q6", "S")
        progressBar.style = "width:35%"
        progressBar.textContent = "35%"
        return 0
    }
    if(count === 7) {
        question.textContent = "당신은 노래를 들을 때 가장 중요하게 생각하는 요소는 무엇인가요?"
        answer1.textContent = "가사의 내용이 중요하다. 멜로디가 좋아도 가사가 별로면 좋은 음악이 아니다."
        answer2.textContent = "외국 팝송처럼 가사는 몰라도 멜로디가 좋으면 장땡이다."
        count++
        localStorage.setItem("q7", "S")
        progressBar.style = "width:40%"
        progressBar.textContent = "40%"
        return 0
    }
    if(count === 8) {
        question.textContent = "당신은 휴가를 떠나기 위해 비행기를 탔습니다. 당신은 무슨 생각을 하시나요?"
        answer1.textContent = "비행기가 추락하면 어떡하지? 비상구에 앉을까? (재밌는 상상을 한다.)"
        answer2.textContent = "도착 시간은 언제지? 영화를 볼까? (현실적인 생각을 한다.)"
        count++
        localStorage.setItem("q8", "S")
        progressBar.style = "width:45%"
        progressBar.textContent = "45%"
        return 0
    }
    if(count === 9) {
        question.textContent = "당신은 마감기한까지 과제를 제출하지 못했습니다. 당신은 이때"
        answer1.textContent = "과제가 왜 오늘까지 였을까? 근데 과제를 왜하는거지 시험만 보면 되는걸!"
        answer2.textContent = "과제를 제출하지 못해서 학점을 걱정한다."
        count++
        localStorage.setItem("q9", "S")
        progressBar.style = "width:50%"
        progressBar.textContent = "50%"
        return 0
    }
    if(count === 10) {
        question.textContent = "당신에게 슬픈 일이 있습니다. 다른 사람과 공유를 한다면?"
        answer1.textContent = "슬픔이 반이 되니까 공유를 한다."
        answer2.textContent = "두배가 된다. 슬픈 사람이 두명이 되어버리기 때문이다."
        count++
        localStorage.setItem("q10", "S")
        progressBar.style = "width:55%"
        progressBar.textContent = "55%"
        return 0
    }
    if(count === 11) {
        question.textContent = "당신의 친구가 우울해서 병원에 다녀왔다고 합니다. 당신의 질문은?"
        answer1.textContent = "우울하다고? 무슨일 있었어?"
        answer2.textContent = "병원에서는 뭐라고해? 큰 병 있는 건 아니지?"
        count++
        localStorage.setItem("q11", "T")
        progressBar.style = "width:60%"
        progressBar.textContent = "60%"
        return 0
    }
    if(count === 12) {
        question.textContent = "학교가 끝나고 친구와 집으로 돌아가던 중 무언가를 두고 온 것이 생각났습니다."
        answer1.textContent = "같이가자! 혼자가긴 외롭다!"
        answer2.textContent = "나 혼자 갔다올게 금방 돌아올거야!"
        count++
        localStorage.setItem("q12", "T")
        progressBar.style = "width:65%"
        progressBar.textContent = "65%"
        return 0
    }
    if(count === 13) {
        question.textContent = "그런 일이 안일어나는게 좋지만 당신의 지인이 교통사고가 났습니다. 당신의 질문은?"
        answer1.textContent = "어디 안다쳤어? 괜찮아?"
        answer2.textContent = "보험은 들어놨어? 누구 과실이야?"
        count++
        localStorage.setItem("q13", "T")
        progressBar.style = "width:70%"
        progressBar.textContent = "70%"
        return 0
    }
    if(count === 14) {
        question.textContent = "누군가가 당신에게 '넌 열심히 안하는데 왜 잘하냐? 재능있네?' 라고 하면"
        answer1.textContent = "니가 뭔데 내 노력을 평가하냐?"
        answer2.textContent = "와 나 천재인가 보다! 기분이 좋다!"
        count++
        localStorage.setItem("q14", "T")
        progressBar.style = "width:75%"
        progressBar.textContent = "75%"
        return 0
    }
    if(count === 15) {
        question.textContent = "당신은 여행 계획을 세워야 합니다."
        answer1.textContent = "대강 큰 그림만 그려놓고 세부 계획은 그때 정한다."
        answer2.textContent = "몇시에 어디서 무엇을 어떻게 철저한 계획을 세운다."
        count++
        localStorage.setItem("q15", "T")
        progressBar.style = "width:80%"
        progressBar.textContent = "80%"
        return 0
    }
    if(count === 16) {
        question.textContent = "지금 문자나 카톡을 열었는데"
        answer1.textContent = "읽지 않은 알람이......엄청 많다!"
        answer2.textContent = "읽지 않은 알람이 하나도 없다."
        count++
        localStorage.setItem("q16", "J")
        progressBar.style = "width:85%"
        progressBar.textContent = "85%"
        return 0
    }
    if(count === 17) {
        question.textContent = "당신은 처음해보는 요리를 하고 있습니다. 다만 레시피는 대강 알고 있습니다."
        answer1.textContent = "음식은 감으로 한다. 손맛이 중요하다."
        answer2.textContent = "레시피를 여러번 확인하고 정확한 계량이 중요하다."
        count++
        localStorage.setItem("q17", "J")
        progressBar.style = "width:90%"
        progressBar.textContent = "90%"
        return 0
    }
    if(count === 18) {
        question.textContent = "친구가 갑자기 연락해서 지금 밥먹자고 합니다."
        answer1.textContent = "그래! 어디로 갈지는 모르지만 일단 만나자!"
        answer2.textContent = "갑자기? 나 오늘 이미 일정이 있는데!"
        count++
        localStorage.setItem("q18", "J")
        progressBar.style = "width:95%"
        progressBar.textContent = "95%"
        return 0
    }
    if(count === 19) {
        question.textContent = "지금 당신의 책상 정리 상태는 어떻습니까?"
        answer1.textContent = "원래 물건에는 제자리라는 것은 존재하지 않다!"
        answer2.textContent = "각 물건의 위치에 맞게 딱딱 정리되어 있다."
        count++
        localStorage.setItem("q19", "J")
        progressBar.style = "width:100%"
        progressBar.textContent = "100%"
        return 0
    }
    if(count === 20) {
        question.textContent = "ddsad"
        answer1.textContent = ""
        answer2.textContent = ""
        count++
        localStorage.setItem("q20", "J")
        location.href = "https://mbtitest.pe.kr/result/result.html"
        return 0
    }
}
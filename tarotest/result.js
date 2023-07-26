let tb11 = document.querySelector("#tb11")
let tb12 = document.querySelector("#tb12")
let tbi1 = document.querySelector("#tbi1")
let love = document.querySelector("#love")
let work = document.querySelector("#work")
let money = document.querySelector("#money")
let health = document.querySelector("#health")
let copyButton = document.querySelector("#copyButton")

let type = new URLSearchParams(location.search).get("type")
let destiny = Number(new URLSearchParams(location.search).get("destiny"))

copyButton.onclick = () => {
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

onload = () => {
    if(destiny === 1 && type === 'love') {
        tbi1.src = "image/0001.png"
        tb11.textContent = '연애운 - 바보 (정방향)'
        tb12.textContent = '만약 당신이 혼자라면 좋은 징조이다. 곧 연애를 시작할 것이며 재밌고 매력적인 긍정적으로 좋은 사람을 만날 것이다. 만약 이미 연애를 하고 있다면 사랑의 도피를 하거나 결혼을 할 수 있다.'
    }
    if(destiny === 1 && type === 'work') {
        tbi1.src = "image/0001.png"
        tb11.textContent = '직업운 - 바보 (정방향)'
        tb12.textContent = '새로운 직장이나 사업을 시작할 때 등장하는 카드이다. 다만 너무 열심히하는 의지 때문에 지나치게 일하는 경우가 있다. 일을 할 때 재밌는 것만 하는게 아닌 지루한 일도 잘 해야한다. 자신의 두려움을 이겨내고 업무에 몰두하면 좋은 성과를 거둘 수 있다.'
    }
    if(destiny === 1 && type === 'money') {
        tbi1.src = "image/0001.png"
        tb11.textContent = '금전운 - 바보 (정방향)'
        tb12.textContent = '자신이 하는 업무에서 성과를 거두거나 연봉협상이 성공할 것이다. 이 카드는 돈과 직업을 위한 큰 기회를 의미한다.'
    }
    if(destiny === 1 && type === 'health') {
        tbi1.src = "image/0001.png"
        tb11.textContent = '건강운 - 바보 (정방향)'
        tb12.textContent = '바보 카드는 건강과 활력과 의미 있다. 만약 아프더라도 금방 치유될 것이다.'
    }
    if(destiny === 2 && type === 'love') {
        tbi1.src = "image/0002.png"
        tb11.textContent = '연애운 - 바보 (역방향)'
        tb12.textContent = '연애에서 당신이나 애인이 관계를 더 깊게 생각하지 않는 것을 의미한다. 연인과의 관계나 나빠질 것이며 부부로써의 가능성은 더욱 희박하다.'
    }
    if(destiny === 2 && type === 'work') {
        tbi1.src = "image/0002.png"
        tb11.textContent = '직업운 - 바보 (역방향)'
        tb12.textContent = '지금은 새롭게 무언가를 할 때는 아니다. 이 카드의 강아지는 바로 앞에 위험을 경고하고 있다.'
    }
    if(destiny === 2 && type === 'money') {
        tbi1.src = "image/0002.png"
        tb11.textContent = '금전운 - 바보 (역방향)'
        tb12.textContent = '금전과 관련된 결정을 내릴 때 신중해야 한다. 기회가 오더라도 신중하게 정보를 알아봐야 한다.'
    }
    if(destiny === 2 && type === 'health') {
        tbi1.src = "image/0002.png"
        tb11.textContent = '건강운 - 바보 (역방향)'
        tb12.textContent = '평소보다 자주 사고를 당할 수 있다. 만약 건강에 문제가 있다면 다른 방법이나 새로운 의사를 찾아보는 것이 좋다.'
    }


    /*-----------------------------------------------------*/

    if(destiny === 3 && type === 'love') {
        tbi1.src = "image/0003.png"
        tb11.textContent = '연애운 - 마법사 (정방향)'
        tb12.textContent = '능숙한 능구렁이로 지적이면서 충동적이다. 사랑에 빠졌다면 그것을 보여주기 위해 테크닉이 필요하며 일상의 단조로움을 깨뜨린다. 새로운 연인을 만날 수 있다.'
    }
    if(destiny === 3 && type === 'work') {
        tbi1.src = "image/0003.png"
        tb11.textContent = '직업운 - 마법사 (정방향)'
        tb12.textContent = '일이나 사업이 잘 풀리고 미래에는 더욱 바빠질 것이다. 새로운 기회를 얻을 것이고 기분좋은 출발을 할 것이다.'
    }
    if(destiny === 3 && type === 'money') {
        tbi1.src = "image/0003.png"
        tb11.textContent = '금전운 - 마법사 (정방향)'
        tb12.textContent = '갑자스럽게 큰 돈을 벌 기회가 있다. 하지만 귀찮은 일에 휘말릴 수 있다.'
    }
    if(destiny === 3 && type === 'health') {
        tbi1.src = "image/0003.png"
        tb11.textContent = '건강운 - 마법사 (정방향)'
        tb12.textContent = '마법사 카드는 신체 활력과 관련 있다. 만약 지금 아프더라도 금방 회복될 것이다.'
    }
    if(destiny === 4 && type === 'love') {
        tbi1.src = "image/0004.png"
        tb11.textContent = '연애운 - 마법사 (역방향)'
        tb12.textContent = '연인과의 관계가 나빠질 수 있다. 앞으로의 연애 관계가 불투명해질 수 있다. 스스로가 진실하지 않거나 뒤에 캥기는 일이 있다고 생각할 수 있으며 너무 자신만 생각하여 이기적으로 행동하고 있는지 확인이 필요하다.'
    }
    if(destiny === 4 && type === 'work') {
        tbi1.src = "image/0004.png"
        tb11.textContent = '직업운 - 마법사 (역방향)'
        tb12.textContent = '새로운 업무는 시작이 나쁘거나 진행에 방해가 생길 수 있다. 자신의 능력을 제대로 발휘하지 못하고 있으며 자신의 실수를 모르고 있을 수도 있다.'
    }
    if(destiny === 4 && type === 'money') {
        tbi1.src = "image/0004.png"
        tb11.textContent = '금전운 - 마법사 (역방향)'
        tb12.textContent = '깊은 고민을 하지 않고 쉽게 결정을 내려 자신의 미래에 해를 끼치는 결과를 불러 올 수 있으니 주의해야 한다.'
    }
    if(destiny === 4 && type === 'health') {
        tbi1.src = "image/0004.png"
        tb11.textContent = '건강운 - 마법사 (역방향)'
        tb12.textContent = '에너지가 넘치면 안정감이 없어지고 에너지가 소진되면 신체적, 정신적인 피로를 느낄 수 있다. 적당한 운동과 휴식이 필요한 시간이다.'
    }

    /*-----------------------------------------------------*/   
    /*-----------------------------------------------------*/

    if(destiny === 5 && type === 'love') {
        tbi1.src = "image/0005.png"
        tb11.textContent = '연애운 - 여사제 (정방향)'
        tb12.textContent = '비밀리에 연애를 하게 된다. 또한 예측하지 못한 행복한 일이 일어날 것이다. 연애를 하고 있다면 서로의 감정 표현이 적을 수 있다. 성격이 내성적이라 그런거니 걱정을 하지 않아도 된다.'
    }
    if(destiny === 5 && type === 'work') {
        tbi1.src = "image/0005.png"
        tb11.textContent = '직업운 - 여사제 (정방향)'
        tb12.textContent = '일이 꼬일 수 있거나 새로운 승진의 기회가 찾아올 것이다. 기회를 잡을 수 있도록 잘 참고 기다려야 한다.'
    }
    if(destiny === 5 && type === 'money') {
        tbi1.src = "image/0005.png"
        tb11.textContent = '금전운 - 여사제 (정방향)'
        tb12.textContent = '금전적으로 약간 위험이 있을 수 있다. 재정적인 문제를 다른 사람과 상담할 때는 주의해야 한다.'
    }
    if(destiny === 5 && type === 'health') {
        tbi1.src = "image/0005.png"
        tb11.textContent = '건강운 - 여사제 (정방향)'
        tb12.textContent = '주변 환경에 따라 건강이 망가질 수 있다. 또한 아직 밝혀지지 않은 문제가 있을 수 있다. 평소에 잘 관리하고 가끔은 건강검진을 하는 것이 좋다.'
    }
    if(destiny === 6 && type === 'love') {
        tbi1.src = "image/0006.png"
        tb11.textContent = '연애운 - 여사제 (역방향)'
        tb12.textContent = '만약 연애를 하고 있다면 눈앞에 있는 문제를 모르고 있다. 진실을 마주하는 것은 두려운 일이지만 알고도 모른 척을 하면 자신만 지치게 될 수 있다.'
    }
    if(destiny === 6 && type === 'work') {
        tbi1.src = "image/0006.png"
        tb11.textContent = '직업운 - 여사제 (역방향)'
        tb12.textContent = '누군가 당신에게 원한을 품고 문제를 일으키면서 승진 기회를 망치고 있다. 만약 안좋은 일이 일어나면 드러난 이유보다 숨겨진 이유가 있을 수 있다. 거짓말에 속고 있는 거 같다면 본능을 믿어보는 것도 좋다.'
    }
    if(destiny === 6 && type === 'money') {
        tbi1.src = "image/0006.png"
        tb11.textContent = '금전운 - 여사제 (역방향)'
        tb12.textContent = '금전이 오고가는 거래를 할 때 세세한 부분을 확인해야 한다. 당신은 모든 것을 모르고 있으며 이게 나중에 어떤 큰 화근이 될 수 있다.'
    }
    if(destiny === 6 && type === 'health') {
        tbi1.src = "image/0006.png"
        tb11.textContent = '건강운 - 여사제 (역방향)'
        tb12.textContent = '의사의 조언을 무시하면 안된다. 건강에 적신호가 왔으며 큰 변화가 필요하다. 운동과 처방된 약을 복용해야 할 수 있다. 스트레스로 인하여 여러가지 안좋은 일이 있을 수 있으니 주의해야 한다.'
    }

    /*-----------------------------------------------------*/    

    /*-----------------------------------------------------*/

    if(destiny === 7 && type === 'love') {
        tbi1.src = "image/0007.png"
        tb11.textContent = '연애운 - 여황제 (정방향)'
        tb12.textContent = '연애 중이라면 여황제의 축복을 받아 더욱 깊어질 것이다. 싱글이라도 곧 운명의 상대를 만날 것이다. 천천히 진행하면 급할 것도 없다.'
    }
    if(destiny === 7 && type === 'work') {
        tbi1.src = "image/0007.png"
        tb11.textContent = '직업운 - 여황제 (정방향)'
        tb12.textContent = '현재 일을 구하는 사람은 곧 좋은 직장을 구할 것이며 큰 프로젝트를 맡거나 리더로 성장할 수 있다. 지금 만약 어려움을 겪더라도 흐름이 괜찮으니 조금만 더 기다려봄직 하다.'
    }
    if(destiny === 7 && type === 'money') {
        tbi1.src = "image/0007.png"
        tb11.textContent = '금전운 - 여황제 (정방향)'
        tb12.textContent = '재정상태가 좋아질 것이며 부를 축적하게 될 것이다. 그 부를 조금씩 나누는 것이 좋으며 투자를 하는 것 또한 괜찮다.'
    }
    if(destiny === 7 && type === 'health') {
        tbi1.src = "image/0007.png"
        tb11.textContent = '건강운 - 여황제 (정방향)'
        tb12.textContent = '만약 임신을 계획했다면 매우 긍정적이다. 하지만 임신을 원하지 않다면 피임에 더욱 신경써야 한다.'
    }
    if(destiny === 8 && type === 'love') {
        tbi1.src = "image/0008.png"
        tb11.textContent = '연애운 - 여황제 (역방향)'
        tb12.textContent = '연애관계가 나빠질까봐 자신의 감정을 숨기고 있을 수 있다. 또는 고백을 해서 거절당하는 등의 문제를 걱정하고 있다. 진짜로 사랑을 위해선 진실이 필요하다.'
    }
    if(destiny === 8 && type === 'work') {
        tbi1.src = "image/0008.png"
        tb11.textContent = '직업운 - 여황제 (역방향)'
        tb12.textContent = '자신이 지금 자신의 성과를 인정 받지 못할까봐 걱정하고 있다. 하지만 현실에선 대부분의 사람은 당신을 믿고 있다. 감정에 휘둘리지 말고 이성적인 결정을 내려야 한다.'
    } 
    if(destiny === 8 && type === 'money') {
        tbi1.src = "image/0008.png"
        tb11.textContent = '금전운 - 여황제 (역방향)'
        tb12.textContent = '재정에 관해서는 문제 없다. 어떤 문제가 당장에 생기지도 않을 것이며 지금까지 해왔던 것처럼 신중한 선택을 하고 유혹에 빠지지 않으면 큰 문제 없다.'
    }
    if(destiny === 8 && type === 'health') {
        tbi1.src = "image/0008.png"
        tb11.textContent = '건강운 - 여황제 (역방향)'
        tb12.textContent = '가끔 감정적인 문제로 인해 건강을 돌보지 않고 있다. 우울증이나 전반적으로 무기력함 때문이다. 규칙적인 운동을 하여 감정적으로 힘든 시기를 이겨내는 것이 좋다.'
    }

    /*-----------------------------------------------------*/   

    /*-----------------------------------------------------*/

    if(destiny === 9 && type === 'love') {
        tbi1.src = "image/0009.png"
        tb11.textContent = '연애운 - 황제 (정방향)'
        tb12.textContent = '새롭게 연애를 시작한다면 그 사람이 당신과 천생연분이라는 것을 의미한다. 이미 연애 중이라면 함께 성공한다는 의미이며 싱글이라면 좋은 사람을 만나게 될 것이다.'
    }
    if(destiny === 9 && type === 'work') {
        tbi1.src = "image/0009.png"
        tb11.textContent = '직업운 - 황제 (정방향)'
        tb12.textContent = '당신의 노력이 결실이 맺을 것임을 의미한다. 승진이나 임금인상도 포함해서 새로운 고객이나 사업의 기회가 올 수 있다.'
    }
    if(destiny === 9 && type === 'money') {
        tbi1.src = "image/0009.png"
        tb11.textContent = '금전운 - 황제 (정방향)'
        tb12.textContent = '재정적인 측면에서 미래는 안정적이다. 돈에 관련된 일을 결정해야 한다면 지금이 적기이다. 하지만 약간 세밀하게 살펴보는 것이 좋다.'
    }
    if(destiny === 9 && type === 'health') {
        tbi1.src = "image/0009.png"
        tb11.textContent = '건강운 - 황제 (정방향)'
        tb12.textContent = '건강에 대해 너무 걱정하는 것은 좋지 않다. 건강에 문제가 있더라도 곧 괜찮아 질 것이다. 의사의 충고를 따르는 것이 좋을 것 같다.'
    }
    if(destiny === 10 && type === 'love') {
        tbi1.src = "image/0010.png"
        tb11.textContent = '연애운 - 황제 (역방향)'
        tb12.textContent = '연애 중이라면 불행을 느끼는 길을 걷고 있음을 말한다. 서로에게 타협하는 자세가 필요하다. 그렇지 않다면 곧 헤어지게 될 것이다. 싱글이라면 당분간은 가벼운 만남을 추구하는 것이 좋다.'
    }
    if(destiny === 10 && type === 'work') {
        tbi1.src = "image/0010.png"
        tb11.textContent = '직업운 - 황제 (역방향)'
        tb12.textContent = '지금까지 해온 일에 지쳐있으며 이제 새롭게 출발할 때가 되었다. 현재 직장의 불만은 능력없는 상사일 수 있고 당신의 길이 아닌 것 일수 있다.'
    }
    if(destiny === 10 && type === 'money') {
        tbi1.src = "image/0010.png"
        tb11.textContent = '금전운 - 황제 (역방향)'
        tb12.textContent = '재정에 대한 통제력이 부족한 것인데 습관의 문제가 아닌 직업 상의 임금이 낮은 것이 문제이다. 외부의 도움을 구하거나 해당 조언을 해줄 수 있는 사람을 알아보는 것이 좋다.'
    }
    if(destiny === 10 && type === 'health') {
        tbi1.src = "image/0010.png"
        tb11.textContent = '건강운 - 황제 (역방향)'
        tb12.textContent = '건강을 챙기지 못했다면 이제 챙겨야한다. 지금 상태는 괜찮더라도 머지않아 심각하게 나빠질 수 있다.'
    }
    
    /*-----------------------------------------------------*/   
    /*-----------------------------------------------------*/

    if(destiny === 11 && type === 'love') {
        tbi1.src = "image/0011.png"
        tb11.textContent = '연애운 - 교황 (정방향)'
        tb12.textContent = '싱글이라면 누군가가 당신에게 호감이 있으며 이미 연인이 있다면 시간이 지날수록 관계가 더 좋아질 것이다.'
    }
    if(destiny === 11 && type === 'work') {
        tbi1.src = "image/0011.png"
        tb11.textContent = '직업운 - 교황 (정방향)'
        tb12.textContent = '당신은 새로운 단계로 성장할 것이다. 새로운 사람들과 일하게 된다. 직장에서 효율적인 것을 유지해야 하며 규칙을 잘 따르는 것이 좋다.'
    }
    if(destiny === 11 && type === 'money') {
        tbi1.src = "image/0011.png"
        tb11.textContent = '금전운 - 교황 (정방향)'
        tb12.textContent = '지금은 당장 어떤 상품에 투자하면 안된다. 금전 부준에서 보수적인 생각을 따라야 한다. 과도한 지출을 피하고 저축을 하는 것이 좋다.'
    }
    if(destiny === 11 && type === 'health') {
        tbi1.src = "image/0011.png"
        tb11.textContent = '건강운 - 교황 (정방향)'
        tb12.textContent = '건강은 괜찮은 편이지만 꾸준한 운동을 하고 좋은 식습관을 유지하는 것이 좋다. 의사의 진료와 처방전을 따르는 것이 좋다.'
    }
    if(destiny === 12 && type === 'love') {
        tbi1.src = "image/0012.png"
        tb11.textContent = '연애운 - 교황 (역방향)'
        tb12.textContent = '현재 애정 관계가 식어가고 있다. 새로운 무언가를 바라고 있음을 의미한다.'
    }
    if(destiny === 12 && type === 'work') {
        tbi1.src = "image/0012.png"
        tb11.textContent = '직업운 - 교황 (역방향)'
        tb12.textContent = '새로운 현실을 받아드려야 한다. 그지같은 상사가 있는데 당장은 순응해야 한다. 도망가는 것은 오히려 독이 될 수 있다.'
    }
    if(destiny === 12 && type === 'money') {
        tbi1.src = "image/0012.png"
        tb11.textContent = '금전운 - 교황 (역방향)'
        tb12.textContent = '투자하기에 좋은 시기이다. 위험한 투자가 아닌 안정적이고 보수적인 투자 방법을 선택해야 한다.'
    }
    if(destiny === 12 && type === 'health') {
        tbi1.src = "image/0012.png"
        tb11.textContent = '건강운 - 교황 (역방향)'
        tb12.textContent = '오랜기간 지병이 있다면 치료 방법을 바꾸는 것이 좋다. 약간의 변화가 필요한 상태이다.'
    }
    
    /*-----------------------------------------------------*/   
    /*-----------------------------------------------------*/

    if(destiny === 13 && type === 'love') {
        tbi1.src = "image/0013.png"
        tb11.textContent = '연애운 - 연인 (정방향)'
        tb12.textContent = '연애 관계에서 완벽함을 의미한다. 서로 깊은 사랑과 신뢰를 기방으로 모든 것을 극복할 수 있다. 열린 마음으로 대화를 하면 발전할 수 있는 잠재력이 있다.'
    }
    if(destiny === 13 && type === 'work') {
        tbi1.src = "image/0013.png"
        tb11.textContent = '직업운 - 연인 (정방향)'
        tb12.textContent = '직업적 상황에서 중요한 결정을 앞두고 있다. 선택이 가볍게 이루어지면 안된다. 그 선택이 큰 바람을 불게 할 것이다. 마음의 소리를 따르는 것이 좋을 것이다.'
    }
    if(destiny === 13 && type === 'money') {
        tbi1.src = "image/0013.png"
        tb11.textContent = '금전운 - 연인 (정방향)'
        tb12.textContent = '금전적인 문제가 있으면 도움을 요청하면 도움을 받을 수 있는 시기이다. 창업, 대출, 복학 같은 위험을 감수할 만한 타이밍이다.'
    }
    if(destiny === 13 && type === 'health') {
        tbi1.src = "image/0013.png"
        tb11.textContent = '건강운 - 연인 (정방향)'
        tb12.textContent = '큰 힘을 얻게 된다. 신체적으로 강인해지거나 심적인 부분이 회복될 것이다.'
    }
    if(destiny === 14 && type === 'love') {
        tbi1.src = "image/0014.png"
        tb11.textContent = '연애운 - 연인 (역방향)'
        tb12.textContent = '연인간의 연락이 두절되었고 그로 인해 여러 문제가 발생한다. 주기만 하는 사랑도 받기만 하는 사랑도 잘못된 것이니 각별한 주의가 필요하다.'
    }
    if(destiny === 14 && type === 'work') {
        tbi1.src = "image/0014.png"
        tb11.textContent = '직업운 - 연인 (역방향)'
        tb12.textContent = '비윤리적인 기회나 유혹이 다가올 것임을 의미한다. 위험한 양자택일을 강요받을 수 있으니 주의가 필요하다.'
    }
    if(destiny === 14 && type === 'money') {
        tbi1.src = "image/0014.png"
        tb11.textContent = '금전운 - 연인 (역방향)'
        tb12.textContent = '재정 상태가 좋지 않음을 의미한다. 너무 낭만적인 생각은 그만두고 재정 부분을 재평가해야 한다.'
    }
    if(destiny === 14 && type === 'health') {
        tbi1.src = "image/0014.png"
        tb11.textContent = '건강운 - 연인 (역방향)'
        tb12.textContent = '몸을 회복하는데 충분한 시간이 필요하며 긍정적으로 생각하면 회복하는 시간이 더 빨라질 것이다.'
    }
    
    /*-----------------------------------------------------*/ 

    /*-----------------------------------------------------*/

    if(destiny === 15 && type === 'love') {
        tbi1.src = "image/0015.png"
        tb11.textContent = '연애운 - 전차 (정방향)'
        tb12.textContent = '자신을 사랑해야 한다. 남을 사랑하기 전에 자신을 돌보는 것이 더욱 중요하다는 것을 의미한다.'
    }
    if(destiny === 15 && type === 'work') {
        tbi1.src = "image/0015.png"
        tb11.textContent = '직업운 - 전차 (정방향)'
        tb12.textContent = '주변 사람이 자신을 어떻게 생각하는지 너무 신경쓰면 안된다. 지금 당신의 행동에 자신감을 가지면 결국 좋은 결과를 불러올 것이다.'
    }
    if(destiny === 15 && type === 'money') {
        tbi1.src = "image/0015.png"
        tb11.textContent = '금전운 - 전차 (정방향)'
        tb12.textContent = '빚이 있으면 지금 갚을 수 있는 기회이며 빚이 없어진다면 여행을 고려하는 것이 좋다.'
    }
    if(destiny === 15 && type === 'health') {
        tbi1.src = "image/0015.png"
        tb11.textContent = '건강운 - 전차 (정방향)'
        tb12.textContent = '지금 같은 최상의 상태는 영원하지 않다. 꾸준히 운동하면 건강이 훨씬 좋아질 것이다.'
    }
    if(destiny === 16 && type === 'love') {
        tbi1.src = "image/0016.png"
        tb11.textContent = '연애운 - 전차 (역방향)'
        tb12.textContent = '연인을 너무 옥죄어서 끔찍한 결과를 초래할 수 있다. 지금은 중요한 결정을 내릴 때가 아니다. 급할 것 없으니 천천히 준비하는 것이 좋다.'
    }
    if(destiny === 16 && type === 'work') {
        tbi1.src = "image/0016.png"
        tb11.textContent = '직업운 - 전차 (역방향)'
        tb12.textContent = '자신의 상황을 재평가하는 것이 중요하다. 너무 많은 일을 하거나 준비가 덜 된 일을 할려고 할 수 있으니 주의해야 한다.'
    }
    if(destiny === 16 && type === 'money') {
        tbi1.src = "image/0016.png"
        tb11.textContent = '금전운 - 전차 (역방향)'
        tb12.textContent = '대규모 투자는 피해야 한다. 담대한 거래는 오히려 역효과를 불러 올 수 있다. 충분히 생각하고 이해하는 것이 좋다.'
    }
    if(destiny === 16 && type === 'health') {
        tbi1.src = "image/0016.png"
        tb11.textContent = '건강운 - 전차 (역방향)'
        tb12.textContent = '의욕이 넘쳐날 것이다. 그 에너지를 긍정적인 곳에 사용해야 한다. 당신의 성공은 절제와 용기의 균형을 조절하는 것에 달려 있다.'
    }
    
    /*-----------------------------------------------------*/    
    /*-----------------------------------------------------*/

    if(destiny === 17 && type === 'love') {
        tbi1.src = "image/0017.png"
        tb11.textContent = '연애운 - 힘 (정방향)'
        tb12.textContent = '싱글이라면 누군가를 만나기에 완벽한 시기이다. 연애 중이라면 관계가 매우 견고하다는 것을 의미한다.'
    }
    if(destiny === 17 && type === 'work') {
        tbi1.src = "image/0017.png"
        tb11.textContent = '직업운 - 힘 (정방향)'
        tb12.textContent = '경력을 발전시키기 위해 무언가를 해야한다. 자신있게 승진이나 임금 인상을 요구할 수 있다.'
    }
    if(destiny === 17 && type === 'money') {
        tbi1.src = "image/0017.png"
        tb11.textContent = '금전운 - 힘 (정방향)'
        tb12.textContent = '당분간의 흐름은 좋다. 안정적이며 임금 인상 등의 호재가 발생한다. 저축을 늘리며 거액의 돈을 빌리지 않는 것이 좋다.'
    }
    if(destiny === 17 && type === 'health') {
        tbi1.src = "image/0017.png"
        tb11.textContent = '건강운 - 힘 (정방향)'
        tb12.textContent = '몸과 마음이 모두 좋아질 것이다. 나쁜 습관을 버리고 운동을 꾸준히 하여 새로운 습관을 만드는 것이 좋다.'
    }
    if(destiny === 18 && type === 'love') {
        tbi1.src = "image/0018.png"
        tb11.textContent = '연애운 - 힘 (역방향)'
        tb12.textContent = '좋은 연애를 할 준비가 안되어 있으며 스스로에 대한 의심이 관계를 망친다. 자신감을 기르고 스스로의 가치를 인정할 줄 알아야한다.'
    }
    if(destiny === 18 && type === 'work') {
        tbi1.src = "image/0018.png"
        tb11.textContent = '직업운 - 힘 (역방향)'
        tb12.textContent = '자신에 대한 의심과 두려움 때문에 스스로의 발목을 잡고 있을 수 있다. 가장 큰 벽은 자신이 만들고 있으니 스스로 넘을 수 있다. 가끔은 담대함이 필요하다.'
    }
    if(destiny === 18 && type === 'money') {
        tbi1.src = "image/0018.png"
        tb11.textContent = '금전운 - 힘 (역방향)'
        tb12.textContent = '지금은 돈이 들어올 것인데 가까운 장래에 큰 돈이 필요할 수 있는데 지금 저축을 해놓으면 큰 문제가 되지 않을 것이다.'
    }
    if(destiny === 18 && type === 'health') {
        tbi1.src = "image/0018.png"
        tb11.textContent = '건강운 - 힘 (역방향)'
        tb12.textContent = '지금은 괜찮지만 나쁜 습관이 예상했던 것보다 건강을 해칠 수 있다. 나쁜 습관을 그만두는 것이 좋다.'
    }
    
    /*-----------------------------------------------------*/   
    /*-----------------------------------------------------*/

    if(destiny === 19 && type === 'love') {
        tbi1.src = "image/0019.png"
        tb11.textContent = '연애운 - 은둔자 (정방향)'
        tb12.textContent = '지금은 연애하기 보단 자신에 대해 관찰하고 탐구하는 것이 좋다. 오래된 감정을 버리고 새로운 것을 찾아 나설 때이다.'
    }
    if(destiny === 19 && type === 'work') {
        tbi1.src = "image/0019.png"
        tb11.textContent = '직업운 - 은둔자 (정방향)'
        tb12.textContent = '지금은 진실을 추구하고 발전을 위한 시기이다. 자신의 직업이 잘 맞는지 확인하고 동료와 고민을 나누는 것이 좋다.'
    }
    if(destiny === 19 && type === 'money') {
        tbi1.src = "image/0019.png"
        tb11.textContent = '금전운 - 은둔자 (정방향)'
        tb12.textContent = '당분간은 돈에 대해 보수적인 생각을 가져야 한다. 자신에게 투자하고 유혹에 빠지면 안된다. 목적의식을 가지고 문제를 해결해야 한다.'
    }
    if(destiny === 19 && type === 'health') {
        tbi1.src = "image/0019.png"
        tb11.textContent = '건강운 - 은둔자 (정방향)'
        tb12.textContent = '자신을 위한 시간을 가지고 휴식과 스트레스를 풀어야 한다. 가벼운 운동과 휴식이 좋을 것이다.'
    }
    if(destiny === 20 && type === 'love') {
        tbi1.src = "image/0020.png"
        tb11.textContent = '연애운 - 은둔자 (역방향)'
        tb12.textContent = '연인과 관계를 끝내고 혼자만의 시간을 가지는 것이 좋다. 각자의 시간을 가지고 자신을 돌아보는 것이 좋다.'
    }
    if(destiny === 20 && type === 'work') {
        tbi1.src = "image/0020.png"
        tb11.textContent = '직업운 - 은둔자 (역방향)'
        tb12.textContent = '직장에서 고립되어 있을 수 있다. 신뢰하는 사람에게 가르침을 받는 것이 좋다.'
    }
    if(destiny === 20 && type === 'money') {
        tbi1.src = "image/0020.png"
        tb11.textContent = '금전운 - 은둔자 (역방향)'
        tb12.textContent = '돈에 너무 많은 초점을 맞추고 있다. 압박에서 벗어나 사회적, 물질적인 부분에서 벗어나면 좋을 것이다.'
    }
    if(destiny === 20 && type === 'health') {
        tbi1.src = "image/0020.png"
        tb11.textContent = '건강운 - 은둔자 (역방향)'
        tb12.textContent = '부정적인 감정은 건강에도 나쁜 영향을 미친다. 의료 전문가와 상담하는 것이 좋다.'
    }
    
    /*-----------------------------------------------------*/    
    /*-----------------------------------------------------*/

    if(destiny === 21 && type === 'love') {
        tbi1.src = "image/0021.png"
        tb11.textContent = '연애운 - 운명의 수레바퀴 (정방향)'
        tb12.textContent = '연애와 운명에 긍정적인 변화를 의미한다. 곧 진정한 사람을 만날 것이다. 연애 중이라면 힘든 시기를 겪고 있지만 곧 변화가 생길 것이다.'
    }
    if(destiny === 21 && type === 'work') {
        tbi1.src = "image/0021.png"
        tb11.textContent = '직업운 - 운명의 수레바퀴 (정방향)'
        tb12.textContent = '직업변화에 좋은 징조가 있을 수 있으니 꿈에 그리던 직업을 얻을 수 있다. 승진의 기회가 오고 있으니 준비를 해야한다.'
    }
    if(destiny === 21 && type === 'money') {
        tbi1.src = "image/0021.png"
        tb11.textContent = '금전운 - 운명의 수레바퀴 (정방향)'
        tb12.textContent = '금전적인 문제가 있었다면 이제 끝이 보인다. 임금을 받거나 가족의 도움을 받을 수 있다.'
    }
    if(destiny === 21 && type === 'health') {
        tbi1.src = "image/0021.png"
        tb11.textContent = '건강운 - 운명의 수레바퀴 (정방향)'
        tb12.textContent = '건강에 문제가 있었다면 곧 회복될 것이고 건강했다면 곧 부상에 입을 수 있으니 주의해야 한다.'
    }
    if(destiny === 22 && type === 'love') {
        tbi1.src = "image/0022.png"
        tb11.textContent = '연애운 - 운명의 수레바퀴 (역방향)'
        tb12.textContent = '이미 연애 관계가 무너졌는데 미련이 있으면 불행할 수 있다. 이미 연인이 있다면 관계가 끝이 다가왔음을 의미한다.'
    }
    if(destiny === 22 && type === 'work') {
        tbi1.src = "image/0022.png"
        tb11.textContent = '직업운 - 운명의 수레바퀴 (역방향)'
        tb12.textContent = '직업적인 문제가 발생했다. 당신을 인정하지 않는 회사는 당신을 우울하게 만들며 회사에서 해고될 수 있고 더 힘든일이 있을 수 있다.'
    }
    if(destiny === 22 && type === 'money') {
        tbi1.src = "image/0022.png"
        tb11.textContent = '금전운 - 운명의 수레바퀴 (역방향)'
        tb12.textContent = '재정적인 위험을 감수할 시기가 아니다. 지금은 저축에 집중해야 하고 불운이 지나갈 때까지 유혹을 피하는 것이 좋다.'
    }
    if(destiny === 22 && type === 'health') {
        tbi1.src = "image/0022.png"
        tb11.textContent = '건강운 - 운명의 수레바퀴 (역방향)'
        tb12.textContent = '혼란스러운 삶의 기간은 부정적인 영향을 끼치고 있다. 음식, 술에 의존하지 않고 스스로 이겨내야 한다.'
    }
    
    /*-----------------------------------------------------*/        
    /*-----------------------------------------------------*/

    if(destiny === 23 && type === 'love') {
        tbi1.src = "image/0023.png"
        tb11.textContent = '연애운 - 정의 (정방향)'
        tb12.textContent = '만약 당신이 다른 사람들을 친절히 대했다면 하늘은 친절로 돌려주고 멸시를 했다면 그대로 돌려받을 것이다.'
    }
    if(destiny === 23 && type === 'work') {
        tbi1.src = "image/0023.png"
        tb11.textContent = '직업운 - 정의 (정방향)'
        tb12.textContent = '일과 삶의 균형을 찾아야한다. 너무 오랜시간 일을해서 사랑하는 사람과 충분한 시간을 갖지 못하고 있다.'
    }
    if(destiny === 23 && type === 'money') {
        tbi1.src = "image/0023.png"
        tb11.textContent = '금전운 - 정의 (정방향)'
        tb12.textContent = '빚이 있다면 곧 청산하게 될 것이다. 재정 상태가 좋아질 것이기 때문에 저축을 하는 것이 좋다.'
    }
    if(destiny === 23 && type === 'health') {
        tbi1.src = "image/0023.png"
        tb11.textContent = '건강운 - 정의 (정방향)'
        tb12.textContent = '열심히 운동하고 노력했다면 그 결과를 보게 될 것이고 게을렀다면 그에 대한 결과를 보게 될 것이다.'
    }
    if(destiny === 24 && type === 'love') {
        tbi1.src = "image/0024.png"
        tb11.textContent = '연애운 - 정의 (역방향)'
        tb12.textContent = '연인에게 제대로 된 감정을 가지고 있는지 확인해야 한다. 지금이 마지막 기회이니 잘 잡아야 한다.'
    }
    if(destiny === 24 && type === 'work') {
        tbi1.src = "image/0024.png"
        tb11.textContent = '직업운 - 정의 (역방향)'
        tb12.textContent = '상사느 동료들이 당신의 업적을 가로챌 수 있다. 이용당하고 있다면 정의로운 방법으로 해결해야 한다.'
    }
    if(destiny === 24 && type === 'money') {
        tbi1.src = "image/0024.png"
        tb11.textContent = '금전운 - 정의 (역방향)'
        tb12.textContent = '금전적으로 무언가 비윤리적인 행동을 했을 것이다. 이것은 스스로를 잠식해서 안좋은 결과를 불러 올 수 있다. 지금이라도 진실을 마주해야 한다.'
    }
    if(destiny === 24 && type === 'health') {
        tbi1.src = "image/0024.png"
        tb11.textContent = '건강운 - 정의 (역방향)'
        tb12.textContent = '술과 담배 같은 나쁜 습관에 지나치게 빠져있을 수 있다. 자신을 더 관리하지 않으면 심각한 문제를 일으킬 수 있으니 주의해야 한다.'
    }
    
    /*-----------------------------------------------------*/           
    /*-----------------------------------------------------*/

    if(destiny === 25 && type === 'love') {
        tbi1.src = "image/0025.png"
        tb11.textContent = '연애운 - 매달린 사람 (정방향)'
        tb12.textContent = '만약 연애를 하고 있다면 연인에게 불만이 있을 수 있다. 작별을 준비하는게 정답일 수 있다. 혼자일 경우 짝사랑이나 옛연인을 그리워하면 고통스러울 뿐이니 포기해야 한다.'
    }
    if(destiny === 25 && type === 'work') {
        tbi1.src = "image/0025.png"
        tb11.textContent = '직업운 - 매달린 사람 (정방향)'
        tb12.textContent = '틀에 박혀 있는 직업에 질렸을 것이다. 상황을 바꾸기 위해 무엇을 할 수 있는지 알아봐야 한다. 그렇지 않다면 잠시 생각을 해야할 때이다.'
    }
    if(destiny === 25 && type === 'money') {
        tbi1.src = "image/0025.png"
        tb11.textContent = '금전운 - 매달린 사람 (정방향)'
        tb12.textContent = '지금 바로 돈에 대한 생각을 재평가해야 한다. 인색했다면 주변에 나누는 것이 좋고 안일했다면 그것 또한 재평가해야 한다.'
    }
    if(destiny === 25 && type === 'health') {
        tbi1.src = "image/0025.png"
        tb11.textContent = '건강운 - 매달린 사람 (정방향)'
        tb12.textContent = '건강관리를 다른 관점에서 접근해야 한다. 예를 들어 과격한 운동을 한다면 요가같은 가벼운 운동을 할 때이다. 육체적 건강은 괜찮으며 컨트롤 할 수 없는 부분은 걱정하지 않아도 괜찮다.'
    }
    if(destiny === 26 && type === 'love') {
        tbi1.src = "image/0026.png"
        tb11.textContent = '연애운 - 매달린 사람 (역방향)'
        tb12.textContent = '연애 중이라면 심각한 문제일 수 있다. 회복될 수 있는 기회는 있지만 다시 시작하는 것에 대한 두려움이 있을 수 있다. 싱글이라면 같은 실수를 반복해서는 안된다.'
    }
    if(destiny === 26 && type === 'work') {
        tbi1.src = "image/0026.png"
        tb11.textContent = '직업운 - 매달린 사람 (역방향)'
        tb12.textContent = '지금 처한 문제를 해결하려는 의지나 결심이 부족해서 경력이 정지되었음을 의미한다.'
    }
    if(destiny === 26 && type === 'money') {
        tbi1.src = "image/0026.png"
        tb11.textContent = '금전운 - 매달린 사람 (역방향)'
        tb12.textContent = '부정적인 결과에 대한 두려움 때문에 망설이면 안된다. 금융전문가를 통해 상황을 개선하는 것 또한 방법이다.'
    }
    if(destiny === 26 && type === 'health') {
        tbi1.src = "image/0026.png"
        tb11.textContent = '건강운 - 매달린 사람 (역방향)'
        tb12.textContent = '지금까지 가족에게만 의지해왔다면 의료 전문가를 만나보는 것이 좋을 수 있다.'
    }
    
    /*-----------------------------------------------------*/  
    /*-----------------------------------------------------*/

    if(destiny === 27 && type === 'love') {
        tbi1.src = "image/0027.png"
        tb11.textContent = '연애운 - 죽음 (정방향)'
        tb12.textContent = '이번의 새로운 경험은 과거의 관계와 완전히 다를 것이다. 당신의 습관이나 태도 등을 바꿀 필요가 있다.'
    }
    if(destiny === 27 && type === 'work') {
        tbi1.src = "image/0027.png"
        tb11.textContent = '직업운 - 죽음 (정방향)'
        tb12.textContent = '일에 너무 의존하거나 현실에 안주하면 안된다. 새로운 직업을 찾아야하는 압박을 받을 수도 있다.'
    }
    if(destiny === 27 && type === 'money') {
        tbi1.src = "image/0027.png"
        tb11.textContent = '금전운 - 죽음 (정방향)'
        tb12.textContent = '재정 문제를 해결하기 위해 희생을 감수해야한다. 너무 급하게 결정하지 않고 신중히 결정해야 한다.'
    }
    if(destiny === 27 && type === 'health') {
        tbi1.src = "image/0027.png"
        tb11.textContent = '건강운 - 죽음 (정방향)'
        tb12.textContent = '스트레스나 고난을 관리해야 한다. 다만 술에 의지하지 않고 내면을 보아 에너지를 집중해야 한다.'
    }
    if(destiny === 28 && type === 'love') {
        tbi1.src = "image/0028.png"
        tb11.textContent = '연애운 - 죽음 (역방향)'
        tb12.textContent = '연인이나 당신이 죽음에 임박했을 것을 의미한다. 죽음은 마지막이라는 의미를 갖고 있기 때문에 좋지 않다.'
    }
    if(destiny === 28 && type === 'work') {
        tbi1.src = "image/0028.png"
        tb11.textContent = '직업운 - 죽음 (역방향)'
        tb12.textContent = '직업의 방향성이나 나아가는 길을 바꿀 때다. 지금이 안정적이더라도 더 큰 것에 도전할 수 있다.'
    }
    if(destiny === 28 && type === 'money') {
        tbi1.src = "image/0028.png"
        tb11.textContent = '금전운 - 죽음 (역방향)'
        tb12.textContent = '지금은 돈에 대해 다시 고민하기에 좋은 시기이다. 나쁜 소비 습관에 대해 더 많은 책임감이 필요하다.'
    }
    if(destiny === 28 && type === 'health') {
        tbi1.src = "image/0028.png"
        tb11.textContent = '건강운 - 죽음 (역방향)'
        tb12.textContent = '지금의 고통을 무시하지 말고 의사에게 진찰을 받는 것이 좋다. 무시하려 했던 문제 때문에 심적인 영향으로 건강이 악화될 수 있다.'
    }
    
    /*-----------------------------------------------------*/
    /*-----------------------------------------------------*/

    if(destiny === 29 && type === 'love') {
        tbi1.src = "image/0029.png"
        tb11.textContent = '연애운 - 절제 (정방향)'
        tb12.textContent = '사랑과 헌신, 친구의 완벽한 균형을 의미한다. 최근에 문제가 있었더라도 곧 문제가 조화롭게 해결 될 것이다.'
    }
    if(destiny === 29 && type === 'work') {
        tbi1.src = "image/0029.png"
        tb11.textContent = '직업운 - 절제 (정방향)'
        tb12.textContent = '모든 것을 성취할 수 있는 인내심과 끈기가 있어 새로운 목표를 달성하기에 좋은 시기이다.'
    }
    if(destiny === 29 && type === 'money') {
        tbi1.src = "image/0029.png"
        tb11.textContent = '금전운 - 절제 (정방향)'
        tb12.textContent = '재정 상태가 안정되고 빚을 졌었다면 머지않아 갚을 수 있을 것이다. 경제적으로 좀 더 편안해질 수 있음을 의미한다.'
    }
    if(destiny === 29 && type === 'health') {
        tbi1.src = "image/0029.png"
        tb11.textContent = '건강운 - 절제 (정방향)'
        tb12.textContent = '건강을 해칠 나쁜 습관이 있다면 지금이야말로 그것을 고치기 위한 좋은 시기이다.'
    }
    if(destiny === 30 && type === 'love') {
        tbi1.src = "image/0030.png"
        tb11.textContent = '연애운 - 절제 (역방향)'
        tb12.textContent = '연인이 있다면 파트너와 불균형으로 종종 다툼이 있을 것이다. 주기만하거나 받기만 하는 사랑을 하고 있다. 균형을 잘 찾아야 한다.'
    }
    if(destiny === 30 && type === 'work') {
        tbi1.src = "image/0030.png"
        tb11.textContent = '직업운 - 절제 (역방향)'
        tb12.textContent = '지금은 혼자 일을 할 때가 아니다. 혼자 일하더라도 전문가의 협력이 필요하다.'
    }
    if(destiny === 30 && type === 'money') {
        tbi1.src = "image/0030.png"
        tb11.textContent = '금전운 - 절제 (역방향)'
        tb12.textContent = '재정상태가 양호하지만 앞으로 찾아올 기회에 대해 고민을 해보아야 할 필요가 있다.'
    }
    if(destiny === 30 && type === 'health') {
        tbi1.src = "image/0030.png"
        tb11.textContent = '건강운 - 절제 (역방향)'
        tb12.textContent = '자신을 잘 돌보고 운동과 휴식, 적절한 식사 등 여러 노력을 하는 것이 좋다. 지금 문제가 있다면 상기 노력을 하는 것이 좋다.'
    }
    
    /*-----------------------------------------------------*/   
    /*-----------------------------------------------------*/

    if(destiny === 31 && type === 'love') {
        tbi1.src = "image/0031.png"
        tb11.textContent = '연애운 - 악마 (정방향)'
        tb12.textContent = '연인관계가 진도가 나가지 않는다. 지금 관계를 끊을지 이어갈지 결정해야한다. 어느 쪽이든 지금의 상태는 유지할 수 없다.'
    }
    if(destiny === 31 && type === 'work') {
        tbi1.src = "image/0031.png"
        tb11.textContent = '직업운 - 악마 (정방향)'
        tb12.textContent = '지금 자신이 완전히 성취할 수 없는 일에 갇혀 있다. 자신의 직업을 싫어하는 근본적인 이유가 될 수도 있다.'
    }
    if(destiny === 31 && type === 'money') {
        tbi1.src = "image/0031.png"
        tb11.textContent = '금전운 - 악마 (정방향)'
        tb12.textContent = '돈은 부족하겠지만 큰 문제는 아니다. 다만 미래를 위해 보수적으로 대응해야할 필요가 있다.'
    }
    if(destiny === 31 && type === 'health') {
        tbi1.src = "image/0031.png"
        tb11.textContent = '건강운 - 악마 (정방향)'
        tb12.textContent = '지금 심적인 질병에 빠질 위험이 있다. 지금 나쁜 습관이 있다면 각별한 주의가 필요하며 심각해지기 전에 도움을 받아야 한다.'
    }
    if(destiny === 32 && type === 'love') {
        tbi1.src = "image/0032.png"
        tb11.textContent = '연애운 - 악마 (역방향)'
        tb12.textContent = '신체적, 육체적으로 둘 다 망가질 가능성이 있는 사람이 있다. 만약 그들을 경계하지 않으면 물들 수 있으니 주의해야 한다.'
    }
    if(destiny === 32 && type === 'work') {
        tbi1.src = "image/0032.png"
        tb11.textContent = '직업운 - 악마 (역방향)'
        tb12.textContent = '장기적인 직업 목표에 관심을 가지기 시작했으며 지금까지 생각해온 것과 다를 수 있다. 큰 뜻을 가지고 있어 야망을 실현시킬 수도 있다.'
    }
    if(destiny === 32 && type === 'money') {
        tbi1.src = "image/0032.png"
        tb11.textContent = '금전운 - 악마 (역방향)'
        tb12.textContent = '지금 알고 있는 것보다 일이 어려워지고 있다. 최근에 한 선택이 엄청난 결과를 초래할 것이다. 분수에 맞는 생활을 해야한다.'
    }
    if(destiny === 32 && type === 'health') {
        tbi1.src = "image/0032.png"
        tb11.textContent = '건강운 - 악마 (역방향)'
        tb12.textContent = '지금 육체나 정신적에 문제가 있다면 그렇게 행동하는 것을 파괴할 수 있다. 중독이나 정신적 문제를 파괴해서 없애버리고 자신감을 되찾을 수 있게 된다.'
    }
    
    /*-----------------------------------------------------*/ 
    /*-----------------------------------------------------*/

    if(destiny === 33 && type === 'love') {
        tbi1.src = "image/0033.png"
        tb11.textContent = '연애운 - 탑 (정방향)'
        tb12.textContent = '지금 불건전한 관계를 의미하면 예상치 못한 일이 일어나고 있다. 만약 싱글이라면 외로움을 느끼고 있으며 과거의 인연 때문에 괴로워 할 수 있다.'
    }
    if(destiny === 33 && type === 'work') {
        tbi1.src = "image/0033.png"
        tb11.textContent = '직업운 - 탑 (정방향)'
        tb12.textContent = '부정적인 환경이나 불안정한 고용을 의미한다. 스트레스 같은 감정적인 일이 일어날 수 있음을 의미한다.'
    }
    if(destiny === 33 && type === 'money') {
        tbi1.src = "image/0033.png"
        tb11.textContent = '금전운 - 탑 (정방향)'
        tb12.textContent = '탑은 실패와 파산을 의미하는데 최악의 경우에 대비해야 한다. 돈을 빚지거나 시장이 무너지거나 사업이 실패 할 수도 있다.'
    }
    if(destiny === 33 && type === 'health') {
        tbi1.src = "image/0033.png"
        tb11.textContent = '건강운 - 탑 (정방향)'
        tb12.textContent = '질병에 취약하다고 생각하며 건강하게 살기 위해 노력해야 한다. 지금은 괜찮더라도 건강검진을 해보아야 한다.'
    }
    if(destiny === 34 && type === 'love') {
        tbi1.src = "image/0034.png"
        tb11.textContent = '연애운 - 탑 (역방향)'
        tb12.textContent = '헤어지는 것이 두려워 미루고 있지만 사실 관계는 이미 끝났음을 의미한다. 현실에서 도망치지 말고 직시해야 하다.'
    }
    if(destiny === 34 && type === 'work') {
        tbi1.src = "image/0034.png"
        tb11.textContent = '직업운 - 탑 (역방향)'
        tb12.textContent = '스트레스를 많이 받고 상황이 악화되고 있다. 하지만 실패하더라도 안정적인 것에서 벗어나면 그것이 새로운 기회로 이어질 수 있다.'
    }
    if(destiny === 34 && type === 'money') {
        tbi1.src = "image/0034.png"
        tb11.textContent = '금전운 - 탑 (역방향)'
        tb12.textContent = '파산과 같은 재정적인 문제에서 벗어나려고 노력하고 있음을 의미한다. 하지만 다시 새로운 것을 시작하도록 동기를 불어넣어주는 것도 될 수 있다.'
    }
    if(destiny === 34 && type === 'health') {
        tbi1.src = "image/0034.png"
        tb11.textContent = '건강운 - 탑 (역방향)'
        tb12.textContent = '몸의 이상이 스스로 사라질 것이라고 생각하면서 신체의 경고를 무시하고 있을 수 있다. 지금 당장 전문 의료인을 찾는 것이 좋다. 병원은 죽었다 부활할 때 가는 곳이 아니다.'
    }
    
    /*-----------------------------------------------------*/                 
    /*-----------------------------------------------------*/

    if(destiny === 35 && type === 'love') {
        tbi1.src = "image/0035.png"
        tb11.textContent = '연애운 - 별 (정방향)'
        tb12.textContent = '연애 중이라면 한 단계 더 발전할 때이다. 새로운 것에 도전해보는 것이 좋다. 싱글이면 곧 좋은 인연을 만날 것이지만 이상형이 아닐 수 있다.'
    }
    if(destiny === 35 && type === 'work') {
        tbi1.src = "image/0035.png"
        tb11.textContent = '직업운 - 별 (정방향)'
        tb12.textContent = '새로운 기회가 열렸으니 그 기회를 잡을 수 있도록 준비해야한다. 자신의 상황에 만족하지 않았다면 새로운 분야를 찾아보는 것이 좋다.'
    }
    if(destiny === 35 && type === 'money') {
        tbi1.src = "image/0035.png"
        tb11.textContent = '금전운 - 별 (정방향)'
        tb12.textContent = '경제적으로 괜찮은 시기이다. 작은 투자는 결국 큰 결실을 맺을 것이다. 다만 무한한 행운은 아니니까 잘 계산하는 것이 좋다.'
    }
    if(destiny === 35 && type === 'health') {
        tbi1.src = "image/0035.png"
        tb11.textContent = '건강운 - 별 (정방향)'
        tb12.textContent = '작은 의학적 고민이라도 간소한 검진을 통해 제거할 수 있다. 대부분의 신체검사에 문제 없다고 나올 것이다.'
    }
    if(destiny === 36 && type === 'love') {
        tbi1.src = "image/0036.png"
        tb11.textContent = '연애운 - 별 (역방향)'
        tb12.textContent = '지금 연애를 하고 있다면 힘든 시기를 겪고 있을 것이다. 관계가 점점 멀어질 것이다. 이 문제를 해결하면 앞으로 나아갈 수 있다. 싱글이라면 사랑을 완전히 포기할 것이지만 장기적으로 보면 사랑은 기대하지 않을 때 찾아올 것이다.'
    }
    if(destiny === 36 && type === 'work') {
        tbi1.src = "image/0036.png"
        tb11.textContent = '직업운 - 별 (역방향)'
        tb12.textContent = '지금은 직업이 좋을지도 모르지만 당신의 야망을 만족시키지 못할 수도 있다. 다만 현실과 다르게 생각만 부정적일 수 있으니 다시 한 번 재평가 하는 것이 좋다.'
    }
    if(destiny === 36 && type === 'money') {
        tbi1.src = "image/0036.png"
        tb11.textContent = '금전운 - 별 (역방향)'
        tb12.textContent = '재정적인 검토를 해야한다. 재정 상태는 생각하는 것보다 좋다. 하지만 목표를 위해 상태를 점검하는 것 또한 좋다.'
    }
    if(destiny === 36 && type === 'health') {
        tbi1.src = "image/0036.png"
        tb11.textContent = '건강운 - 별 (역방향)'
        tb12.textContent = '건강 상태는 양호하지만 스스로 지나치게 비관적일 수 있다. 건강한 생활은 올바른 사고방식에서 나온다. 건강을 위해 건강검진을 받아보는 것도 좋다.'
    }
    
    /*-----------------------------------------------------*/
    /*-----------------------------------------------------*/

    if(destiny === 37 && type === 'love') {
        tbi1.src = "image/0037.png"
        tb11.textContent = '연애운 - 달 (정방향)'
        tb12.textContent = '연인과 목표를 위해 대화를 하는 것을 의미하거나 변화를 수용하지 못하는 사람과 헤어지는 것을 의미한다. 싱글이라면 사랑을 지나치게 열망하면 안된다. 겉과 속이 다른 의도를 가지고 접근한 사람이 있을 수 있다.'
    }
    if(destiny === 37 && type === 'work') {
        tbi1.src = "image/0037.png"
        tb11.textContent = '직업운 - 달 (정방향)'
        tb12.textContent = '의사소통이 잘 되지 않아 직업에 불만이 있을 수 있다. 회사 전체를 밝게 하는 것은 어렵지만 주변 사람들은 좋은 관계를 유지할 수 있다.'
    }
    if(destiny === 37 && type === 'money') {
        tbi1.src = "image/0037.png"
        tb11.textContent = '금전운 - 달 (정방향)'
        tb12.textContent = '누군가가 당신의 재정 상태를 이용하려고 하기 때문에 대규모 투자는 역효과가 날 수 있다. 외부의 충고는 오히려 곤경에 빠질 수 있다.'
    }
    if(destiny === 37 && type === 'health') {
        tbi1.src = "image/0037.png"
        tb11.textContent = '건강운 - 달 (정방향)'
        tb12.textContent = '정신건강이 좋지 않다는 것을 의미한다. 불안감이나 우울함이 여정을 방해할 수 있기 때문에 전문가와 상담해야 할 수 있다.'
    }
    if(destiny === 38 && type === 'love') {
        tbi1.src = "image/0038.png"
        tb11.textContent = '연애운 - 달 (역방향)'
        tb12.textContent = '점차적으로 연인의 본색을 알게 될 것이다. 생각과 다르게 깊은 관계이거나 생각과 다르게 부도덕적일 수 있다. 진실을 회피해선 안된다. 싱글이라면 당신에게 해로운 영향을 줄 수 있는 사람과 관계를 추구하고 있으니 주의해야 한다.'
    }
    if(destiny === 38 && type === 'work') {
        tbi1.src = "image/0038.png"
        tb11.textContent = '직업운 - 달 (역방향)'
        tb12.textContent = '최근 직장에서 업무적으로 한가로운 상태에 있으며 이것이 걸림돌이 되고 있다. 능력의 제한을 깨뜨리고 한계까지 발휘할 수 있으니 여러가지 시도를 하는 것이 좋다.'
    }
    if(destiny === 38 && type === 'money') {
        tbi1.src = "image/0038.png"
        tb11.textContent = '금전운 - 달 (역방향)'
        tb12.textContent = '재정 상황이 긍정저긍로 돌아가려고 한다. 봉금이 인상되거나 더 좋은 직장을 찾을 수 있다. 기회가 왔으니 잡을 수 있어야 한다.'
    }
    if(destiny === 38 && type === 'health') {
        tbi1.src = "image/0038.png"
        tb11.textContent = '건강운 - 달 (역방향)'
        tb12.textContent = '심적으로 안정된 상태이다. 차분하고 밝은 상태이니 걱정할 필요는 없다.'
    }
    
    /*-----------------------------------------------------*/
    /*-----------------------------------------------------*/

    if(destiny === 39 && type === 'love') {
        tbi1.src = "image/0039.png"
        tb11.textContent = '연애운 - 태양 (정방향)'
        tb12.textContent = '지금은 완벽하지 않지만 성찰을 통해 새로운 사람을 끌어드리고 낭만적인 관계가 탄생할 것을 의미한다.'
    }
    if(destiny === 39 && type === 'work') {
        tbi1.src = "image/0039.png"
        tb11.textContent = '직업운 - 태양 (정방향)'
        tb12.textContent = '프로젝트의 성공에 큰 기여를 할 것이고, 노력은 주변 사람들도 인정할 것이다. 직업적으로 새로운 단계로 성장할 것을 의미한다.'
    }
    if(destiny === 39 && type === 'money') {
        tbi1.src = "image/0039.png"
        tb11.textContent = '금전운 - 태양 (정방향)'
        tb12.textContent = '일이 잘 되기 때문에 재정 상태는 좋을 것이다. 빚이 있다면 갚을 수 있고 열심히 일한 것에 대한 대가가 있을 것이니 여행도 고려해보는 것이 좋다.'
    }
    if(destiny === 39 && type === 'health') {
        tbi1.src = "image/0039.png"
        tb11.textContent = '건강운 - 태양 (정방향)'
        tb12.textContent = '건강한 정신은 건강한 육체에 깃드니 새로운 취미나 스포츠를 시도하기에 완벽한 타이밍이다.'
    }
    if(destiny === 40 && type === 'love') {
        tbi1.src = "image/0040.png"
        tb11.textContent = '연애운 - 태양 (역방향)'
        tb12.textContent = '싱글이라면 지나치게 자만하는 경향이 있을 수 있다. 자신감은 매력이지만 지나치면 좋지 않다. 연애 중이라면 파트너와 관계가 원만하진 않을 것이다.'
    }
    if(destiny === 40 && type === 'work') {
        tbi1.src = "image/0040.png"
        tb11.textContent = '직업운 - 태양 (역방향)'
        tb12.textContent = '지금은 직장에서 어려움이 있을 수 있다. 업무에 성과가 잘 드러나지 않기 때문이다.자신에게 불가능한 목표가 주어졌을 수도 있고 경우에 따라 실패를 대비하라는 것이기도 하다.'
    }
    if(destiny === 40 && type === 'money') {
        tbi1.src = "image/0040.png"
        tb11.textContent = '금전운 - 태양 (역방향)'
        tb12.textContent = '아마 많은 돈을 쓰거나 재정적인 결정을 하기에 좋은 상황은 아니다. 꼭 해야한다면 가능한 오랜 시간동안 검토를 해야한다.'
    }
    if(destiny === 40 && type === 'health') {
        tbi1.src = "image/0040.png"
        tb11.textContent = '건강운 - 태양 (역방향)'
        tb12.textContent = '지금은 기분이 좋지 않고 의욕기 없다는 것을 의미한다. 심리적인 문제나 신체적인 문제가 있다면 병원에 가보는 것도 괜찮다.'
    }
    
    /*-----------------------------------------------------*/                           
    /*-----------------------------------------------------*/

    if(destiny === 41 && type === 'love') {
        tbi1.src = "image/0041.png"
        tb11.textContent = '연애운 - 심판 (정방향)'
        tb12.textContent = '연애 중이라면 판단력이 중요하다는 것을 의미하며 현재 인연이 천생연분은 아니다. 싱글이라면 일반적인 환경 이외의 다른 사람과 데이트를 고려해보아야 한다. 눈이 너무 높으니 조금 낮춰는 것이 좋다.'
    }
    if(destiny === 41 && type === 'work') {
        tbi1.src = "image/0041.png"
        tb11.textContent = '직업운 - 심판 (정방향)'
        tb12.textContent = '누군가가 당신을 승진시키려거나 새로운 일에 스카우트 될 기회가 찾아올 것이니 지금처럼 열심히 일을 해서 좋은 성과를 내야 한다.'
    }
    if(destiny === 41 && type === 'money') {
        tbi1.src = "image/0041.png"
        tb11.textContent = '금전운 - 심판 (정방향)'
        tb12.textContent = '지출을 줄이고 안정된 보장을 제외하고 모두 피해야 한다. 인생에 중요한 것에 대해 다시한 번 고려해보는 것이 좋다.'
    }
    if(destiny === 41 && type === 'health') {
        tbi1.src = "image/0041.png"
        tb11.textContent = '건강운 - 심판 (정방향)'
        tb12.textContent = '정신적, 육체적으로 좋은 징조다. 더 건강한 내일을 위해 준비하면 좋다.'
    }
    if(destiny === 42 && type === 'love') {
        tbi1.src = "image/0042.png"
        tb11.textContent = '연애운 - 심판 (역방향)'
        tb12.textContent = '연애를 하고 있다면 연애의 진척이 나아가고 있지 않다. 이제 다음 단계를 밟아야 하는데 중요한 선택의 순간이 다가올 것이다. 싱글이라면 소심한 성격때문에 현재 상태를 방관했을 것이다.'
    }
    if(destiny === 42 && type === 'work') {
        tbi1.src = "image/0042.png"
        tb11.textContent = '직업운 - 심판 (역방향)'
        tb12.textContent = '좋은 기회가 찾아왔지만 의심때문에 그 순간을 잡지 못했을 것이다. 기회는 자주 찾아오지 않으니 준비해서 잡도록 노력해야한다.'
    }
    if(destiny === 42 && type === 'money') {
        tbi1.src = "image/0042.png"
        tb11.textContent = '금전운 - 심판 (역방향)'
        tb12.textContent = '재정은 안정될 것이며 더 위험한 투자를 할 수 있게 된다. 적은 예산은 즐거움을 줄 수도 있을 것이다.'
    }
    if(destiny === 42 && type === 'health') {
        tbi1.src = "image/0042.png"
        tb11.textContent = '건강운 - 심판 (역방향)'
        tb12.textContent = '부상과 걱정은 마음의 짐이 되었다. 우리가 과거의 것은 바꿀 수 없다. 과거도 중요하지만 현재와 미래는 그것보다 더욱 중요하는 점을 잊지 말자.'
    }
    
    /*-----------------------------------------------------*/  
    /*-----------------------------------------------------*/

    if(destiny === 43 && type === 'love') {
        tbi1.src = "image/0043.png"
        tb11.textContent = '연애운 - 세계 (정방향)'
        tb12.textContent = '연애를 하고 있다면 파트너와 행복할 것이다. 공동의 목표를 위해 서로 열심히 노력하고 있다. 만약 싱글이라면 지금 컴퓨터나 휴대폰을 끄고 새로운 사람을 만나도록 하는 것이 좋다.'
    }
    if(destiny === 43 && type === 'work') {
        tbi1.src = "image/0043.png"
        tb11.textContent = '직업운 - 세계 (정방향)'
        tb12.textContent = '꿈과 목표에 거의다 왔다. 완성 직전이니 조금만 더 노력하자.'
    }
    if(destiny === 43 && type === 'money') {
        tbi1.src = "image/0043.png"
        tb11.textContent = '금전운 - 세계 (정방향)'
        tb12.textContent = '재정은 보수적으로 관리하는 것이 유리하며 신중한 투자와 저축을 하는 것이 좋다.'
    }
    if(destiny === 43 && type === 'health') {
        tbi1.src = "image/0043.png"
        tb11.textContent = '건강운 - 세계 (정방향)'
        tb12.textContent = '건강 상태가 곧 호전될 것이다. 비로 가까운 미래에 문제가 생길 수도 있지만 큰 문제는 아닐 것이다.'
    }
    if(destiny === 44 && type === 'love') {
        tbi1.src = "image/0044.png"
        tb11.textContent = '연애운 - 세계 (역방향)'
        tb12.textContent = '연애 중이라면 일과 균형에 문제가 있을 수 있다. 싱글이라면 외로움을 느끼거나 사랑을 찾는 것에 회의적일 수 있다.'
    }
    if(destiny === 44 && type === 'work') {
        tbi1.src = "image/0044.png"
        tb11.textContent = '직업운 - 세계 (역방향)'
        tb12.textContent = '업무적인 측면에서 무언가가 당신의 능력을 가로막고 있다. 스스로의 목표는 실제보다 조금 더 어려울 수 있다.'
    }
    if(destiny === 44 && type === 'money') {
        tbi1.src = "image/0044.png"
        tb11.textContent = '금전운 - 세계 (역방향)'
        tb12.textContent = '최근 재정상태에 관심이 없어 나빠졌을 수 있다. 그동안 안정적인 투자만 했다면 약간 위험한 투자를 하는 것도 좋다.'
    }
    if(destiny === 44 && type === 'health') {
        tbi1.src = "image/0044.png"
        tb11.textContent = '건강운 - 세계 (역방향)'
        tb12.textContent = '지금까지 해온 관리에 약간 문제가 있을 수 있다. 사실 당신은 정답을 알고 있지만 애써 모른척 했을 수도 있다.'
    }
    
    /*-----------------------------------------------------*/       
    // /*-----------------------------------------------------*/

    // if(destiny === 45 && type === 'love') {
    //     tbi1.src = "image/0045.png"
    //     tb11.textContent = '연애운 - 첫번째 완즈 (정방향)'
    //     tb12.textContent = '지금의 연인과 새로운 단계에 도래할 것이다. 새로운 것에 대비를 해야한다. 싱글은 관심 갖고 있는 사람에게 도전해보아도 좋을 것 같다.'
    // }
    // if(destiny === 45 && type === 'work') {
    //     tbi1.src = "image/0045.png"
    //     tb11.textContent = '직업운 - 첫번째 완즈 (정방향)'
    //     tb12.textContent = '강인한 직업정신으로 좋은 성과를 거둘 것이다. 그 성과가 승진으로 이어질 수도 있다. 취준생은 곧 직업을 얻게 될 것이다.'
    // }
    // if(destiny === 45 && type === 'money') {
    //     tbi1.src = "image/0045.png"
    //     tb11.textContent = '금전운 - 첫번째 완즈 (정방향)'
    //     tb12.textContent = '적은 양의 돈을 얻게 될 것이다. 그것을 미래에 투자하는 것이 좋을 것이다.'
    // }
    // if(destiny === 45 && type === 'health') {
    //     tbi1.src = "image/0045.png"
    //     tb11.textContent = '건강운 - 첫번째 완즈 (정방향)'
    //     tb12.textContent = '건강이 향후에도 좋을 것을 의미한다. 체중 감량 등 가벼운 목표를 잡아보는 것이 어떠한가?'
    // }
    // if(destiny === 46 && type === 'love') {
    //     tbi1.src = "image/0046.png"
    //     tb11.textContent = '연애운 - 첫번째 완즈 (역방향)'
    //     tb12.textContent = '본인의 모습을 지나치게 가리고 있어 다른 사람들이 당신에 대해 잘 모른다. 가끔은 자신감을 가지고 자신을 드러내는 것이 좋다.'
    // }
    // if(destiny === 46 && type === 'work') {
    //     tbi1.src = "image/0046.png"
    //     tb11.textContent = '직업운 - 첫번째 완즈 (역방향)'
    //     tb12.textContent = '당신은 취업이나 승진에서 실패할 수 있다. 목표를 조금 낮추는 것이 좋을 것 같다.'
    // }
    // if(destiny === 46 && type === 'money') {
    //     tbi1.src = "image/0046.png"
    //     tb11.textContent = '금전운 - 첫번째 완즈 (역방향)'
    //     tb12.textContent = '금전적으로 문제가 있을 수 있고 지출도 늘어날 수 있다. 빚을 지는게 좋지 않을 것이다.'
    // }
    // if(destiny === 46 && type === 'health') {
    //     tbi1.src = "image/0046.png"
    //     tb11.textContent = '건강운 - 첫번째 완즈 (역방향)'
    //     tb12.textContent = '건강이 나빠질 징조이다. 지금 노력을 기울어야 미래에 후회하지 않을 것이다.'
    // }
    
    // /*-----------------------------------------------------*/   
    // /*-----------------------------------------------------*/

    // if(destiny === 47 && type === 'love') {
    //     tbi1.src = "image/0047.png"
    //     tb11.textContent = '연애운 -  (정방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 47 && type === 'work') {
    //     tbi1.src = "image/0047.png"
    //     tb11.textContent = '직업운 -  (정방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 47 && type === 'money') {
    //     tbi1.src = "image/0047.png"
    //     tb11.textContent = '금전운 -  (정방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 47 && type === 'health') {
    //     tbi1.src = "image/0047.png"
    //     tb11.textContent = '건강운 -  (정방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 48 && type === 'love') {
    //     tbi1.src = "image/0048.png"
    //     tb11.textContent = '연애운 -  (역방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 48 && type === 'work') {
    //     tbi1.src = "image/0048.png"
    //     tb11.textContent = '직업운 -  (역방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 48 && type === 'money') {
    //     tbi1.src = "image/0048.png"
    //     tb11.textContent = '금전운 -  (역방향)'
    //     tb12.textContent = ''
    // }
    // if(destiny === 48 && type === 'health') {
    //     tbi1.src = "image/0048.png"
    //     tb11.textContent = '건강운 -  (역방향)'
    //     tb12.textContent = ''
    // }
    
    // /*-----------------------------------------------------*/          
}



   
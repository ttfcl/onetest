
let copyButton = document.querySelector("#copyButton")
let finder = document.querySelector("#finder")
let manName = document.querySelector("#manName")
let womanName = document.querySelector("#womanName")
let manYear = document.querySelector("#manYear")
let womanYear = document.querySelector("#womanYear")
let manBehave = document.querySelector("#manBehave")
let womanBehave = document.querySelector("#womanBehave")
let resultText = document.querySelector("#resultText")
let count = []

copyButton.onclick = () => {
    window.navigator.clipboard.writeText("https://onetest.pe.kr/properties/index.html").then(() => {
        // 복사가 완료되면 호출된다.
        alert("복사완료");
      });
}
finder.onclick = () => {
    location.href = "index.html"
}

const masterF = () => {
    if(count[0] === ('해중금') && count[1] === ('해중금')) {
        resultText.textContent = '"해중금"은 바다의 쇠 = 소금으로써 소금끼리의 만남으로 궁합이 잘 맞지도 안맞지도 않다. 하지만 두 사람의 존재만으로 주변사람이 행복해질 수 있다. 여기서 주변사람은 지인을 의미하기도 하지만 가족도 포함한다. 그들의 행복한 모습을 바라보면서 자신들도 행복을 찾길 바란다.'
    }
    if(count.includes('해중금') && count.includes('노중화')) {
        resultText.textContent = '"해중금"은 죽어있는 금속(바다에 빠진 금속)으로 혼자 있으면 아무런 가치가 없지만 화로속의 불인 "노중화"를 만나 쓸모가 생긴다. 또한 "노중화" 단독으로 있는 불은 불안정하지만 화로 역할을 해주는 "해중금"을 만나 서로를 필요하면서 충족시켜주는 좋은 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('대림목')) {
        resultText.textContent = '"해중금"은 바닷속의 금인 소금을 의미한다. "대림목"은 큰 나무를 상징한다. "해중금"의 소금 기운이 "대림목"의 생명을 해할 수도 있으나 매우 적은량의 소금은 오히려 비료 역할을 할 수 있기 때문에 상처를 주지 않는지 확인하면서 서로를 필요할 때 의지하고 각자를 배려하면 좋을 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('노방토')) {
        resultText.textContent = '"해중금"은 바닷속의 금인 소금을 의미한다. "노방토"는 길가의 흙을 의미한다. 길가의 흙은 어떻게보면 별 의미가 없을 것 같지만 소금인 "해중금"과 만나면...그렇다. 별 의미가 없다. 서로에게 좋지도 안좋지도 않은 애매한 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('검봉금')) {
        resultText.textContent = '"해중금"은 바다에 잠긴 금속을 의미한다. "검봉금"은 날카로운 칼을 의미하는데, "해중금"은 녹을 벗기고 다시 재련하는 엄청난 고통을 겪겠지만 결국 "검봉금"과 함께 하나되어 대성을 할 궁합이지만, 그 고통과 시련을 이겨내기가 힘든 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('산두화')) {
        resultText.textContent = '"해중금"은 죽은 금속을 의미한다. "산두화"는 산속의 불을 의미하는데, 산불은 다른 의미로 혁명을 상징한다. "해중금"은 지금은 별 볼일 없지만 "산두화"를 만나 새롭게 태어나 훌륭한 금속으로 태어날 수 있다. 만약 "해중금"이 "산두화"를 통해 팔자가 고쳐지면 반드시 그 은혜를 갚아야 한다.'
    }
    if(count.includes('해중금') && count.includes('간하수')) {
        resultText.textContent = '"해중금"은 죽은 금속을 의미한다. "간하수"는 약수터를 의미한다. 둘이 만나면 "해중금"은 더욱 녹슬고 "간하수"는 약수터가 오염되어 서로 안맞는 궁합이다. 다만 주변에 솜씨 좋은 대장장이나 훌륭한 약수터지기를 만나 서로의 궁합이 긍정적으로 달라질 확률이 낮기는 하지만 존재한다.'
    }
    if(count.includes('해중금') && count.includes('성두토')) {
        resultText.textContent = '"해중금"은 바닷속 소금을 의미한다. "성두토"는 우두머리를 의미하는데 예로부터 보통 소금을 장악하는 것이 우두머리가 되는 경우가 많았다. 흔히 "소금왕" 이라고 부르는데 "성두토"는 혼자 성공할 수 있는 능력이 충분하지만 "해중금"과 함께라면 성공확률도 높아지고 더욱 크게 성공할 수 있다.'
    }
    if(count.includes('해중금') && count.includes('백랍금')) {
        resultText.textContent = '"해중금"은 바닷속 소금을 의미한다. "백랍금"은 빙하를 의미하는데 소금과 빙하가 만나면 빙하가 녹는다. 즉, 그리 좋지 않은 궁합이다. '
    }
    if(count.includes('해중금') && count.includes('양류목')) {
        resultText.textContent = '"해중금"은 바닷속 소금을 의미한다. "양류목" 버드나무인데 다른 나무와 다르게 소금기에 강하다. 그리고 최근 버드나무와 소금을 통해 코로나를 억제하는 내용도 있어 둘이 약간 좋은 궁합이다. 둘의 만남을 통해 서로의 관계의 정도 나름이다.'
    }
    if(count.includes('해중금') && count.includes('천중수')) {
        resultText.textContent = '"해중금"은 바다에 잠긴 금속을 의미한다. "천중수"는 약수터를 의미한다. 둘이 만나면 "해중금"은 더욱 녹슬고 "천중수"는 약수터가 오염되어 서로 안맞는 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('옥상토')) {
        resultText.textContent = '"해중금"은 바닷속 소금을 의미한다. "옥상토"는 지붕의 흙을 의미한다. 서로 좋은 궁합이 좋지도 나쁘지도 않은 애매한 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('벽력화')) {
        resultText.textContent = '"해중금"은 바다속 금속을 의미한다. "벽력화"는 비와 번개와 불을 의미하는데 바다에 잠긴 녹슨 금속을 불로 뜨겁게 달구고 번개와 같은 망치질로 녹을 제거하고 물로 식힘으로써 새로운 금속으로 만들 수 있다. "해중금"은 "벽력화"를 통해 새롭게 태어날 수 있으니 항상 감사하는 마음으로 살아야 한다. 궁합 자체는 좋은 편이다.'
    }
    if(count.includes('해중금') && count.includes('송백목')) {
        resultText.textContent = '"해중금"은 바다속 금속을 의미한다. "송백목"은 일년 내내 푸른 강한 생명력을 가진 소나무이다. 바다에 빠진 무른 금속으로는 강인한 소나무를 벨 수 없다. 둘이 자잘한 다툼이 있더라도 금방 풀어질 궁합이다. 다툼이 좋은 것은 아니나 서로를 더 잘아가기 위한 빠른 방법이기도 하니 상처를 주지 않도록 노력하는 것이 좋을 것 같다.'
    }
    if(count.includes('해중금') && count.includes('장류수')) {
        resultText.textContent = '"해중금"은 바다속 금속을 의미한다. "장류수"은 큰 강을 의미한다. 큰 강에 빠진 금속은 더욱 녹슬지만 큰 강은 거의 오염되지 않는다. 한 쪽이 고생할 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('사중금')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "사중금"은 모래속의 쇠(철)이다. 둘다 재련이 필요한데 서로를 재련해주기는 어렵다. 다만 주변의 환경에 따라 바뀔 수 있으니 그리 부정적인 궁합은 아니다.'
    }
    if(count.includes('해중금') && count.includes('산하화')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "산하화"는 저녁의 지는 해를 의미한다. 녹슨 금속과 지는 해의 관련성은 크게 없으나 둘 다 어느 것의 끝물이고 새롭게 다시 태어날 수 있기 때문에 감히 궁합을 점치기 어렵다.'
    }
    if(count.includes('해중금') && count.includes('평지목')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "평지목"은 평지에 자라는 연약한 나무이다. 아무리 녹슨 금속이라도 약한 나무는 벨 수 있기 때문에 서로에게 상처를 줄 가능성이 높다. 하지만 도끼가 있어도 굳이 나무를 벨 필요는 없는 것처럼 서로에게 상처를 주지 않으려는 노력을 하면 좋을 것 같다.'
    }
    if(count.includes('해중금') && count.includes('벽상토')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "벽상토"는 마르기 기다리는 진흙이다. 녹슨 금속이 진흙에 묻혀 오랜 시간이 지나 자연으로 돌아가 다시 새롭게 태어날 수 있다. 즉, 오랜 시간이 걸리겠지만 서로에게 긍정적인 영향을 줄 수 있는 좋은 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('금박금')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "금박금"은 얇게 늘린 금속을 의미한다. 녹슨 금속과 일반 금속이 만나면 녹이 이염될 수 있다. 서로에게 피해를 줄 수 있으니 조심하는 것이 좋다.'
    }
    if(count.includes('해중금') && count.includes('복등화')) {
        resultText.textContent = '"해중금"은 바다속 소금을 의미한다. "복등화"는 뒤집은 등의 불을 의미한다. 뒤집힌 등불은 위태롭지만 소금과 만나면 화려한 불꽃을 낼 수 있다. 둘이 만나면 화려한 궁합이지만 금방 사그라 들 수 있는 궁합이기도 하다.'
    }
    if(count.includes('해중금') && count.includes('천하수')) {
        resultText.textContent = '"해중금"은 바다속 소금을 의미한다. "천하수"는 장마를 의미한다. 소금은 비에 쉽게 녹는다. 장마랑 소금이 만나면 한 쪽이 가치를 잃어버리거나 한 쪽이 중요한 무언가를 포기해야하는 상황이 올 수도 있는 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('대역토')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "대역토"는 음과 양이 역전되는 시기이다. 녹슨 금속이 "대역토"와 함께하여 새로운 반전을 기대할 수 있는 궁합이다. 지금이 힘든 시기라도 잘 참고 견디어내면 좋은 미래를 맞이할 수 있다.'
    }
    if(count.includes('해중금') && count.includes('차천금')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "차천금"은 연약한 금속을 의미한다. 연약한 금속과 녹슨 금속이 만나는 것 자체는 문제가 없으나 세상의 어려움을 함께 해결하는데 어려움이 있을 수 있는 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('상자목')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "상자목"은 뽕나무를 의미한다. 겉으로 보기엔 둘은 별 상관이 없어 보일 수 있다. 그러나 소금 장수처럼 뽕나무를 베어 지게를 만들고 소금을 들고 다니며 팔 수 있듯이 생각하기 나름이다.'
    }
    if(count.includes('해중금') && count.includes('대계수')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "대계수"는 큰 강을 의미한다. 큰 강에 빠진 금속은 더욱 녹슬지만 큰 강은 거의 오염되지 않는다. 한 쪽이 고생할 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('사중토')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "사중토"는 모래에 섞인 흙이다. 적은 양의 흙으로는 녹슨 금속을 덮지 못해 새롭게 태어나게 할 수 없다. 서로에게 긍정적인, 부정적인 영향을 주지 않는 보통 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('천상화')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "천상화"는 모든 불의 왕이다. 매우 강한 불로 녹슨 쇠를 녹여 불순물을 걸러내고 새로은 금속으로 다시 태어나게 할 수 있다. 한 쪽이 긍정적인 영향을 줄 수 있으니 받은 사람은 준 사람에게 지금 큰 절을 한 번 올리는 것도 좋을 것 같다.'
    }
    if(count.includes('해중금') && count.includes('석류목')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "석류목"은 매우 단단한 석류열매를 의미한다. 열매라는 좋은 결과를 눈앞에 놔두고 녹슨 금속으로 쪼개지를 못하여 큰 기회를 눈앞에서 놓칠 수 있는 궁합이다. 녹슨 금속은 스스로를 재련하여 큰 기회가 왔을 때 같이 잡도록 노력해야 하는 궁합이다.'
    }
    if(count.includes('해중금') && count.includes('대해수')) {
        resultText.textContent = '"해중금"은 바다속 녹슨 금속을 의미한다. "대해수"는 매우 큰 바다의 물로써 녹슨 금속을 더욱 녹슬게 한다. 서로 좋지 않은 궁합이긴 하나 낮은 확률로 바닷물이 금속을 분해하여 다시 자연으로 돌아가 새롭게 태어나게 할 수 있으니 너무 부정적으로 생각하지는 않아도 괜찮다.'
    }
    if(count[0] === ('노중화') && count[1] === ('노중화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불로 작은 불이 모이면 큰 불이 되는 것처럼 서로가 하나되어 더욱 커질 수 있다. 상당히 좋은 궁합이다.'
    } 
    if(count.includes('노중화') && count.includes('대림목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "대림목"은 큰 숲과 나무를 의미하는데, 불에 의해 숲이 불타버릴 수 있다. 좋지 않은 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('노방토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "노방토"는 길가를 의미한다. 길가 위에 화로를 통해 사람들에게 안식처를 제공하여 주변에 명성이 자자할 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('검봉금')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "검봉금"은 날카로운 검으로써 두 사이에 별다른 관계는 없기 때문에 큰 문제는 없다.'
    }
    if(count.includes('노중화') && count.includes('산두화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "산두화"는 산불이라는 큰 불을 의미하여 두 불이 만나서 합쳐지고 더욱 커진다. 서로에게 도움이 되는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('간하수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "간하수"는 깊은 골짜기의 물이다. 물의 양이 많지 않기 때문에 불을 끄는 정도로 서로에게 약간의 상처를 입힐 수 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('성두토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "성두토"는 성벽꼭대기를 의미한다. 성벽에 병사들에게 화롯불을 제공하여 사기를 올릴 수 있다. 둘의 존재가 주변 사람들에게 좋은 영향을 줄 수 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('백랍금')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "백랍금"은 빙하를 의미한다. 화로의 작은 불로는 빙하를 절대 못녹인다. 경우에 따라 다를 수 있지만 서로에게 상처를 입히지 않는 궁합이다. '
    }
    if(count.includes('노중화') && count.includes('양류목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "양류목"은 버드나무로 둘이 만나면 불타는 작은 나무가 되는데 이것은 "양류목"의 다른 뜻이다. 생각보다 궁합이 어울린다.'
    }
    if(count.includes('노중화') && count.includes('천중수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "천중수"는 맑은 샘의 물이다. 새벽에 맑은 샘을 찾는데 어두워서 안보일 때 화롯불을 통해 샘을 찾아내서 물을 마실 수 있다. 잘 어울리는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('옥상토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "옥상토"는 화(火) 기운이 가득한 집안을 의미한다. 불의 기운이 많은 집안에 화로속 불이 들어가면 화 + 화가 되어 지나치게 커져 한쪽이 끌려다니는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('벽력화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "벽력화"는 번개 불을 의미한다. 짧은 시간에 번개가 내려쳐 화로속 작은 불을 거대한 불로 만들어 낼 수 있다. 지금은 작은 사람을 크게 성장시킬 수 있는 궁합이다. 항상 감사하면서 살아가야한다.'
    }
    if(count.includes('노중화') && count.includes('송백목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "송백목"은 일 년 내내 푸른 소나무를 의미한다. 강인한 생명력을 지닌 소나무를 겨우 화롯불로 태울 수는 없다. 서로 상처를 주지 않지만 크게 도움이 되는 궁합은 아니다.'
    }
    if(count.includes('노중화') && count.includes('장류수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "검봉금"은 날카로운 검으로써 두 사이에 별다른 관계는 없기 때문에 큰 문제는 없다.'
    }
    if(count.includes('노중화') && count.includes('사중금')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "사중금"은 모래속의 쇠(철)이다. 재련이 필요한 "사중금"은 화로속 작은 불로는 재련이 불가능하기에 외부에 도움을 받는게 아닌 이상 좋은 궁합은 아니다.'
    }
    if(count.includes('노중화') && count.includes('산하화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "산하화"는 산 아래의 불로써 저녁 해가 지고나서 추운 밤에 화로를 통해 따뜻해질 수 있다. 다른 궁합과 달리 "노중화"가 다른 납음에게 도움이 되는 몇 안되는 희귀하게 좋은 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('평지목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "평지목"은 넓게 자란 숲으로 불에 매우 취약하다. 화롯불이라 할지라도 불이 붙으면 크게 번질 수 있다. 한 쪽은 크게 성장하지만 다른 한 쪽은 퇴화 할 수 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('벽상토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "벽상토"는 마르기 기다리는 진흙이다. 화롯불을 옆에 두면 진흙이 매우 빠르게 말라 단단한 흙이 될 수 있다. 서로에게 도움이 되는 좋은 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('금박금')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "금박금"은 얇게 늘려 만든 쇠(철)인데 "금박금"은 다른 금속과 달리 불에 취약하다. 하지만 그 금속 특유의 유연함을 통해 화롯불과 만나 새롭게 탄생할 수 있는 가능성 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('복등화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "복등화"는 뒤집힌 등의 불이다. 작은 화롯불과 만나 서로를 보듬어 각자의 역할을 충실히 할 수 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('천하수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "천하수"는 은하수를 의미한다. 주변에 화롯불 등 밝은 물체가 있으면 하늘의 은하수가 잘 안보인다. 한 쪽이 희생해야 다른 쪽이 크게 성장할 수 있는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('대역토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "대역토"는 많이 다니는 큰길의 흙이다. 겨울에 사람이 많이 다니는 길에 화롯불을 통해 사람들에게 추위를 견디게 도와주는 궁합으로 본인보단 다른 사람들에게 도움이 되는 궁합이다. 하지만 그 선행을 배푼 것에 대한 보답을 확실하게 받을 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('차천금')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "차천금"은 연약한 금속을 의미한다. 연약한 금속은 화로의 불만으로도 변형이 가능하다. 둘이 만나서 큰 노력을 하면 더 좋은 쪽으로 성장할 수 있는 궁합이지만 노력이 부족하면 한쪽이 무너지는 궁합이기도 하다.'
    }
    if(count.includes('노중화') && count.includes('상자목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "상자목"은 아낌없이 주는 나무를 의미한다. 화로에 장작으로 쓰여 큰 불을 만들어 낼 수 있는 궁합으로 나무가 희생하여 불이 성장하는 궁합이다. 불은 나무에게 항상 감사하는 마음을 가져야 한다.'
    }
    if(count.includes('노중화') && count.includes('대계수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "대계수"는 큰 강을 의미한다. 큰 강물이 화로를 덮치면 맥없이 꺼지는 불이기 때문에 좋은 궁합은 아니다.'
    }
    if(count.includes('노중화') && count.includes('사중토')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "사중토"는 모래를 의미한다. 둘이 만나면 화롯불이 꺼지지만 만약 불이 버텨낸다면 유리라는 새로운 것을 만들어 낼 수 있는 궁합이기도 하다.'
    }
    if(count.includes('노중화') && count.includes('천상화')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "천상화"는 모든 불의 왕이다. 둘이 만나면 별다른 노력이 없어도 작은 불이 큰 불로 성장하는 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('석류목')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "석류목"는 열매, 과실을 의미한다. 그렇다. 별다르게 좋은 영향도 나쁜 영향도 없는 애매한 궁합이다.'
    }
    if(count.includes('노중화') && count.includes('대해수')) {
        resultText.textContent = '"노중화"는 화로속 작은 불이다. "대해수"는 큰 바닷물을 의미한다. 소량의 물만으로도 꺼지는 불인데 바다랑 만나면 어떻게 되겠는가.'
    }
    if(count[0] === ('대림목') && count[1] === ('대림목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무를 의미한다. 나무와 나무가 모이면 큰 숲으로 발전하고 각 종 동식물이 모여 생태계를 이루게 된다. 찰떡궁합이다.'
    } 
    if(count.includes('대림목') && count.includes('노방토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "노방토"는 길가의 흙인데 길가에 나무가 있으면 더욱 좋은 것처럼 적은 양의 흙이라도 서로에게 큰 도움이 될 수 있다.'
    }
    if(count.includes('대림목') && count.includes('검봉금')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "검봉금"은 여기선 도끼로 해석할 수 있다. 날카로운 도끼로 나무를 해할 수 있다. 워낙 나무가 크기 때문에 함부로 베지는 못하지만 상처를 입을 수 있으니 주의해야 한다.'
    }
    if(count.includes('대림목') && count.includes('산두화')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "산두화"는 산불을 의미한다. 숲과 불은 만나면 안되는 최악의 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('간하수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "간하수"는 깊은 골짜기의 물로 나무는 물을 필요하고 물은 나무를 통해 오염을 정화할 수 있다. 최고의 찰떡 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('성두토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "성두토"는 넓은 벌판을 의미한다. 넓은 벌판은 태양빛을 쬐기 좋은 위치로 나무가 잘 자라는 환경이다. 괜찮은 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('백랍금')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "백랍금"은 무른 금속을 의미한다. 무른 도끼는 큰 나무에 상처조차 낼 수 없다. 서로에게 피해를 주는 궁합은 아니다.'
    }
    if(count.includes('대림목') && count.includes('양류목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "양류목"은 버드나무를 의미한다. 큰 나무는 그림자를 만들어 주변의 작은 나무의 성장을 막을 수 있다. 서로 양보를 잘하면 좋은 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('천중수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "천중수"는 지하수를 의미한다. 큰 나무는 많은 양의 물을 필요하는데, 지하수로 끊임없이 공급하여 무한정 성장이 가능한 좋은 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('옥상토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "옥상토"는 불의 기운이 가득한 집안의 흙이다. 흙과 나무는 원래 서로를 필요하는 궁합이지만 불의 기운을 가진 흙은 조금 다르다. 필요한 것을 얻으면서도 피해를 입을 수 있는 아이러니한 궁합이니 상처가 있는지 확인하고 보듬어야 한다.'
    }
    if(count.includes('대림목') && count.includes('벽력화')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "벽력화"는 번개를 의미한다. 나무와 번개가 만나면 나무는 불에 타죽는다. 바오밥나무를 상상하면 좋을 것 같다. 좋은 궁합으로 보긴 어렵다.'
    }
    if(count.includes('대림목') && count.includes('송백목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "송백목"은 일 년 내내 강인한 생명력의 소나무를 의미한다. 큰 나무와 강인한 나무가 만났으니 이보다 더 좋을 것은 없지만 서로의 기운이 너무 강하여 대립하는 일이 종종 있을 수 있으니 양보하는 자세, 경청하는 자세가 필요하다.'
    }
    if(count.includes('대림목') && count.includes('장류수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "장류수"는 큰 강으로 나무와 강은 서로 물을 교환하면서 나무는 생명을 유지하고 강은 물의 총량을 조절한다. 서로에게 공생하는 아름다운 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('사중금')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "사중금"은 재련이 필요한 모래속의 쇠로 그정도로는 큰 나무에 상처를 낼 수 없다. 크게 피해가 있는 궁합은 아니다.'
    }
    if(count.includes('대림목') && count.includes('산하화')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "산하화"는 산 아래의 불을 의미한다. 지금 당장에는 큰 문제는 없지만 산 아래 불이 산으로 올라오면 큰 불이 날 수 있다. 서로 항상 조심하면 큰 문제는 없을 것이다.'
    }
    if(count.includes('대림목') && count.includes('평지목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "평지목"은 넓게 자란 숲을 의미한다. 넓은 숲에는 나무가 있고 나무는 넓은 숲이 필요하다. 서로가 필요로 하는 궁합으로 잘 어울리는 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('벽상토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "벽상토"는 담벼락을 의미하는데 가장 약한 기운의 흙과 강인한 기운의 나무가 만난 것이라 크게 도움이 되진 않는다.'
    }
    if(count.includes('대림목') && count.includes('금박금')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "금박금"은 얇게 늘려 종이처럼 만든 쇠(철)이다. 원래 철과 나무는 안 좋은 궁합이지만 강인한 나무와 약한 철이 만나서 큰 걱정은 할 필요없다.'
    }
    if(count.includes('대림목') && count.includes('복등화')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "복등화"는 뒤집힌 등불을 의미한다. 원래 불과 나무는 안 좋은 궁합이지만 강인한 나무와 약한 불이 만나서 큰 걱정은 할 필요없다.'
    }
    if(count.includes('대림목') && count.includes('천하수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "천하수"는 장마를 의미한다. 나무에 장마는 매우 좋은 존재로써 필요할 때 많은 양의 물을 공급해줄 수 있다. 상당히 좋은 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('대역토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "대역토"는 사람이 많은 큰 길의 흙이다. 길가에 가로수 같은 만남으로 주변에 시원한 그늘을 제공해주거나 열매와 같은 작물도 제공해주어 주변 사람들에게 좋은 평판을 만드는 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('차천금')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "차천금"은 약한 금속으로 나무에 상처를 줄 수는 있지만 베지는 못한다. 하지만 상처 자체가 좋은 것은 아니니 관계를 원만히 하는 것이 좋다.'
    }
    if(count.includes('대림목') && count.includes('상자목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "상자목"은 뽕나무로 같이 있으면 좋지만 따로 있어도 큰 상관은 없기에 그저그런 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('대계수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "대계수"는 산과 계곡의 물을 의미한다. 산에는 태양빛 잘 들고 계곡을 통해 많은 물을 얻을 수 있는 것처럼 서로에게 큰 도움이 되는 좋은 궁합이다'
    }
    if(count.includes('대림목') && count.includes('사중토')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "사중토"는 모래를 의미한다. 모래는 영양도 없고 물도 흡수를 못하여 나무에게 큰 도움이 되지 않는다. 큰 도움은 되지 않는 애매한 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('천상화')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "천상화"는 태양을 의미한다. 나무와 태양의 조화이다. 무슨 설명이 더 필요한가.'
    }
    if(count.includes('대림목') && count.includes('석류목')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "석류목"은 석류처럼 매우 단단한 나무이다. 같이 있으면 좋지만 따로 있어도 큰 상관은 없기에 그저그런 궁합이다.'
    }
    if(count.includes('대림목') && count.includes('대해수')) {
        resultText.textContent = '"대림목"은 큰 숲의 나무다. "대해수"는 바닷물을 의미한다. 나무에 바닷물은 당연히 좋은 것은 아니지만 "대해수"는 거대한 물을 의미하기도 해서 물이 품고 있는 독(소금)을 정화하면 아주 좋은 궁합이 될 수 있다.'
    }
    if(count[0] === ('노방토') && count[1] === ('노방토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. 약한 기운의 흙을 의미하므로 약한 흙 + 흙의 조합은 별다른 특색이 없다.'
    } 
    if(count.includes('노방토') && count.includes('검봉금')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "검봉금"은 날카로운 칼을 의미한다. 칼이 아무리 날카로워도 부드러운 흙은 베지 못하는 법. 다툼이 있어도 별 일 없이 잘 풀어지는 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('산두화')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "산두화"는 산 정산의 불을 의미한다. 산에 불이나도 길가의 흙때문에 마을로 불이 옮겨붙지 않는다. 불이 활동을 억제해주는 좋은 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('간하수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "간하수"는 약수터를 의미한다. 길가의 흙만으로는 약수터를 막을 수 없으니 서로 상처를 내지 못하니 화목할 수 있는 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('성두토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "성두토"는 우두머리를 의미한다. 길가의 우두머리는 왕초를 의미하므로 둘이 함께 있으면 재산이 쉽게 모이지 않는 궁합이니 재무관리에 신경을 쓰는 것을 권장한다.'
    }
    if(count.includes('노방토') && count.includes('백랍금')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "백랍금"은 빙하를 의미한다. 길가의 흙과 빙하는 서로 관계가 미약하므로 좋지도 나쁘지도 않은 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('양류목')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "양류목"은 버드나무를 의미한다. 길가의 흙만으로도 버드나무를 기를 수 있다. 서로에게 공생관계로 좋은 영향을 주는 궁합이다. 평상시에는 잘 지내지만 시련이 닥쳤을때는 잘 모를 수 있다.'
    }
    if(count.includes('노방토') && count.includes('천중수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "천중수"는 지하수를 의미한다. 흙이 지하수를 오염되지 않게 보호해주는 모양새로 서로를 지켜주려는 마음이 아주 예쁜 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('옥상토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "옥상토"는 지붕의 흙을 의미한다. 길가의 흙과 지붕의 흙은 둘 다 약한 흙으로 둘이 붙어봤자 큰 의미는 없는 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('벽력화')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "벽력화"는 비와 번개를 의미한다. 길가의 흙에 번개와 비가 내려쳐 미생물이 번식하고 생태계가 변화하는 모양이다. 한 쪽이 다른 한 쪽을 변화시키는 궁합인데 변화되는 방향성은 알 수 없다.'
    }
    if(count.includes('노방토') && count.includes('송백목')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 소나무의 생명력을 유지하기 위해 땅의 기운을 가져가는데 상대적으로 약한 흙의 기운을 많이 가져갈 수 있으니, 배려하는 자세가 필요한 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('장류수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "장류수"는 큰 강을 의미한다. 둘이 만나면 강변 산책로가 생긴다. 주변에는 사람이 많아지고 활기차져서 사는데 큰 행복을 느낄 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('사중금')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "사중금"은 모래속의 쇠(철)을 의미하지만 "노방토"는 숙살지기를 의미한다. "노방토"와 "사중금"은 서로 절대 만나선 안되는 극한의 앙숙 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('산하화')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "산하화"는 아지랑이를 의미한다. 아지랑이는 길가에 햇빛이 과도하게 비출 때 발생한다. 이때 땅의 열기를 식혀주는 역할을 하는 것처럼 사람이 힘들때 옆에서 잘 도와주는 아름다운 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('평지목')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "평지목"은 연약한 나무를 의미한다. 길가의 흙 정도로는 연약한 나무를 기를 수는 있지만 지켜주지는 못한다. 평상시에는 잘 지내지만 시련이 닥쳤을때는 잘 모를 수 있다.'
    }
    if(count.includes('노방토') && count.includes('벽상토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "벽상토"는 벽 위의 흙을 의미한다. 벽 위의 흙이 길가로 떨어져도 아무런 흔적이 남지 않는다. 서로의 단점을 커버해줄 수 있는 아름다운 궁합이다. '
    }
    if(count.includes('노방토') && count.includes('금박금')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "금박금"은 겉멋만 든 속빈 강정을 의미한다. 길가의 흙은 보기에 별 것 없지만 금박금은 보기는 좋지만 속으로 별 거 없다. 사실 이 둘의 조합도 상성으로 보나 납음으로 보나 별탈 없는 궁합이라 할 말이 없어 길게 적어보았다.'
    }
    if(count.includes('노방토') && count.includes('복등화')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 등불에서 떨어진 촛농이나 불씨는 다른 곳에 떨어지면 위험하지만 흙에 떨어지면 별탈 없다. 위험이나 시련을 겪을 때 서로를 지켜주는 마음이 강한 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('천하수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "천하수"는 장마를 의미한다. 길가의 흙은 장마가 오면 다 쓸려간다. 한 사람의 존재 자체를 지워버릴 수 있는 흉한 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('대역토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "대역토"는 환절기를 의미한다. 길가의 흙은 사계절 내내 그 자리에 그대로 있다. 둘이 잘 섞이지 않는 궁합으로 서로를 있는 그대로 존중해주면 좋은 궁합이지만 그렇지 못하면 흉한 궁합이다.'
    }
    if(count.includes('노방토') && count.includes('차천금')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "차천금"는 연약한 금속을 의미한다. 여기서는 바늘로 해석할 수 있는데 길가에 바늘이 떨어지면 찾을 수 없다. 흔히 사막에서 바늘찾기로 상상하면 좋다. 사실 이 둘의 조합도 상성으로 보나 납음으로 보나 별탈 없는 궁합이라 할 말이 없어 길게 적어보았다.'
    }
    if(count.includes('노방토') && count.includes('상자목')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "상자목"은 뽕나무를 의미한다. 길가의 흙만으로도 뽕나무를 기를 수 있다. 서로에게 공생관계로 좋은 영향을 주는 궁합이다. 평상시에는 잘 지내지만 시련이 닥쳤을때는 잘 모를 수 있다.'
    }
    if(count.includes('노방토') && count.includes('대계수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "대계수"는 시냇물을 의미한다. 둘이 만나면 .................................... 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('노방토') && count.includes('사중토')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "사중토"는 모래를 의미한다. 사실 길가의 흙은 많은 양이 모래를 차지한다. 둘의 태생은 사실 비슷하다. 다른말로 천생연분이라고 한다.'
    }
    if(count.includes('노방토') && count.includes('천상화')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "천상화"는 태양을 의미한다. 하늘의 불로써 길가를 환히 비춰준다. "천상화"가 "노방토"를 크게 이끌어 줄 수 있는 모양새이다. "노방토"는 항상 태양에게 감사하는 마음을 가져야 한다.'
    }
    if(count.includes('노방토') && count.includes('석류목')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "석류목"은 석류 열매를 의미한다. 둘이 만나면 .................................... 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('노방토') && count.includes('대해수')) {
        resultText.textContent = '"노방토"는 길가의 흙을 의미한다. "대해수"는 큰 바닷물을 의미한다. 둘이 만나면 .................................... 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count[0] === ('검봉금') && count[1] === ('검봉금')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. 숙살지기는 가을의 쓸쓸한 공기를 의미하지만 사물을 죽이는 기운을 의미한다. 서로의 기운을 억제하는 안좋은 궁합이다.'
    } 
    if(count.includes('검봉금') && count.includes('산두화')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "산두화"는 산불을 의미하나 여기서는 혁명을 상징한다. 숙살지기는 사물의 기운을 억제하는 경향이 있어 혁밍이 큰 일을 하려고해도 숙살지기가 막는 안 좋은 형태의 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('간하수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "간하수"는 약수터를 의미한다. 약수는 산의 정기를 받아 맑은 기운을 가졌으나 숙살지기를 만나 기운이 죽을 수 있다. 숙살지기는 다른 사물의 기운을 억제하는 악영향을 줄 수 있으니 주의가 필요하다.'
    }
    if(count.includes('검봉금') && count.includes('성두토')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "성두토"는 성스러운 지역을 의미한다. 다른 사람의 기운을 해하는 숙살지기라고 해도 "성두토"를 이길 수 없다. 숙살지기는 대부분의 납음과 악연이지만 이 궁합은 예외다.'
    }
    if(count.includes('검봉금') && count.includes('백랍금')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. 백랍금은 빙하를 의미한다. 숙살지기의 다른 사람의 기운을 해하려는 속성이 있어도 거대한 빙하를 해할 수는 없다. 하지만 요즘 기상이변을 보니 아닐 수도 있으니 주의하여 상처를 주지 않도록 노력해야한다.'
    }
    if(count.includes('검봉금') && count.includes('양류목')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "양류목"은 버드나무를 의미한다. 버드나무는 사막에서도 자라는 강인한 나무이다. 에초에 "금"과 "목"은 앙숙인 관계지만 버드나무는 숙살지기의 음의 기운을 충분히 이길 수 있다. 적어도 나쁜 궁합은 아니다.'
    }
    if(count.includes('검봉금') && count.includes('천중수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "천중수"는 맑은 샘물을 의미한다. 숙살지기의 기운을 죽이려는 특성이 맑은 물을 오염시키는 궁합이니라. 에초에 수과 금은 앙숙인 관계이니 좋지 않은 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('옥상토')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "옥상토"는 화 기운이 많은 흙 의미한다. 화의 기운은 금의 악한 기운으로 지우기 어렵다. 따라서 숙살지기를 따뜻하게 품어주면 좋은 궁합이 될 수 있다.'
    }
    if(count.includes('검봉금') && count.includes('벽력화')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "벽력화"는 비와 번개를 의미한다. 번개처럼 많은 에너지를 가진 것을 숙살지기가 함부로 해할 수 없다. 적어도 나쁜 궁합은 아니다.'
    }
    if(count.includes('검봉금') && count.includes('송백목')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 숙살지기는 주변 사물의 기운을 해하려는 속성이 있는데 강력한 소나무는 그것따위에 지지 않는다. 오히려 숙살지기가 지칠 수 있으니 적당한 관계를 유지하려고 노력해야한다.'
    }
    if(count.includes('검봉금') && count.includes('장류수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "장류수"는 큰 강을 의미한다. "금"과 "수"는 원래부터 앙숙인 관계이지만 "금"의 최강자와 "수"의 강자가 만났으니 서로의 기가 지치게 되어 서로가 무너질 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('사중금')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "사중금"은 모래속의 쇠(철)을 의미하지만 "검봉금"은 숙살지기를 의미한다. "검봉금"와 "사중금"은 서로 절대 만나선 안되는 극한의 앙숙 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('산하화')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "산하화"는 아지랑이를 의미한다. 아지랑이는 강렬한 태양아래에서 나타난다. 아무리 다른 기운을 억제하는 숙살지기라고 해도 아지랑이는 이기기 어렵다. 좋은 궁합도 나쁜 궁합은 아니다.'
    }
    if(count.includes('검봉금') && count.includes('평지목')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "평지목"은 연약한 나무를 의미한다. 숙살지기처럼 다른 기운을 해하는 납음이 연약한 나무와 만나면 쓰러져버린다. 나쁜 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('벽상토')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "벽상토"는 담벼락을 의미한다. "금"과 "토" 상성 자체도 크게 상관없고 납읍 관계에서도 큰 문제는 없다.'
    }
    if(count.includes('검봉금') && count.includes('금박금')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "금박금"은 겉멋만 든 속빈 강정을 의미한다. 사실 이 둘의 조합은 상성으로 보나 납음으로 보나 별탈 없는 궁합이라 할 말이 없어 길게 적어보았다.'
    }
    if(count.includes('검봉금') && count.includes('복등화')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 위태로운 등불은 약한 "화"의 기운을 가지고 있는데 이때 다른 기운을 해하는 숙살지기와 만나면 안좋은 결과가 나올 수 있다. 좋지 않은 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('천하수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "천하수"는 장마를 의미한다. 사실 이 둘의 조합은 상성으로 보나 납음으로 보나 별탈 없는 궁합이라 할 말이 없어 길게 적어보았다.'
    }
    if(count.includes('검봉금') && count.includes('대역토')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "대역토"는 환절기를 의미한다. 사실 이 둘의 조합은 상성으로 보나 납음으로 보나 별탈 없는 궁합이라 할 말이 없어 길게 적어보았다.'
    }
    if(count.includes('검봉금') && count.includes('차천금')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "차천금"는 연약한 금속을 의미한다. 위태로운 등불은 약한 "금"의 기운을 가지고 있는데 이때 다른 기운을 해하는 숙살지기와 만나면 안좋은 결과가 나올 수 있다. 좋지 않은 궁합이다.'
    }
    if(count.includes('검봉금') && count.includes('상자목')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "상자목"은 뽕나무를 의미한다. 길가의 흙만으로도 뽕나무를 기를 수 있다. 그러나 상대적으로 연약한 뽕나무가 남의 기운을 해하는 숙살지기와 만나면 좋지 않은 결과가 나올 수 있다.'
    }
    if(count.includes('검봉금') && count.includes('대계수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "대계수"는 큰 강을 의미한다. "수"와 "금"은 애초에 상성이 나쁘다. 하지만 다른 기운을 해하는 숙살지기라도 큰 강이랑 만나면 오히려 숙살지기의 기가 꺾일 수 있으니 좋은 궁합 일 수 있다.'
    }
    if(count.includes('검봉금') && count.includes('사중토')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "사중토"는 모래를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('검봉금') && count.includes('천상화')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "천상화"는 태양을 의미한다. 숙살지기의 다른 생명력을 해할 수 있다. 하지만 상대는 태양이다. 저 하늘의 태양이 지는 것을 본 적이 있는가? 어림도 없다. 오히려 숙살지기의 안좋은 기운을 억제하여 오히려 숙살지기가 정화될 수 있는 좋은 조합이다.'
    }
    if(count.includes('검봉금') && count.includes('석류목')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "석류목"은 석류 열매를 의미한다. 석류열매는 결실을 의미하는데 그 결실을 숙살지기가 뒤엎을 궁합이다. 서로를 위해 조금 거리를 두는 것이 좋을 수 있다.'
    }
    if(count.includes('검봉금') && count.includes('대해수')) {
        resultText.textContent = '"검봉금"은 숙살지기를 의미한다. "대해수"는 큰 바닷물을 의미한다. 둘이 만나면 .................................... 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count[0] === ('산두화') && count[1] === ('산두화')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. 혁명과 혁명이 만나 세상을 뒤집을 수 있는 궁합이다. 다만 둘의 이상과 생각이 다르면 큰 화를 부를 수 있다.'
    } 
    if(count.includes('산두화') && count.includes('간하수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "간하수"는 약수터를 의미한다. 약수터의 물만으로는 산불을 끌 수 없다. 서로의 이상이 같다면 혁명가에게 약수터라는 쉼터를 제공하지만 이상이 달라도 크게 문제가 되진 않는다.'
    }
    if(count.includes('산두화') && count.includes('성두토')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "성두토"는 우두머리를 의미한다. 세상을 바꿀 수 있는 능력을 가진사람과 다른 사람을 이끄는 우두머리가 만났다. 둘이 함께라면 세상 어느 것도 두려울 것이 없는 환상의 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('백랍금')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. 백랍금은 빙하를 의미한다. 산불이 아무리 거대하더라도 빙하를 녹일 수는 없다. 한 사람이 불같은 성격을 가졌더라도 다른 한 쪽은 얼음과 같은 마음을 가져 서로 다툼이 성립되지 않는다. 나쁘지 않은 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('양류목')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "양류목"은 버드나무를 의미한다. 산불과 버드나무가 만나면 쉽게 불에 탄다. 한 쪽이 다른 한 쪽을 잡아먹는 구도로 좋지 않은 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('천중수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "천중수"는 맑은 샘물을 의미한다. 약수터의 물만으로는 산불을 끌 수 없다. 서로의 이상이 같다면 혁명가에게 약수터라는 쉼터를 제공하지만 이상이 달라도 크게 문제가 되진 않는다.'
    }
    if(count.includes('산두화') && count.includes('옥상토')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "옥상토"는 담벼락을 의미한다. 여기선 자신들을 막는 무언가를 의미하는데 혁명가가 이 벽을 깨부숴주어 한차례 성장할 수 있는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('벽력화')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "벽력화"는 비와 번개를 의미한다. 번개가 산에 내려치면 큰 불이 난다. 그러나 곧 비가 내려 그 불을 끌 수도 있다. 서로에게 도움이 되기도 하지만 피해도 주는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('송백목')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 그러나 산불에 의하여 쉽게 불에 타버린다. 한 쪽이 다른 한 쪽을 잡아먹는 구도로 좋지 않은 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('장류수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "장류수"는 큰 강을 의미한다. 혁명을 위해 달려가던 중 큰 강을 만나 건너야 하는 상황이 왔다. 혁명가가 그 강을 건널 방법이 있으면 괜찮치만 방법이 없다면 혁명은 좌절될 것이다. 본인의 능력치에 따라 좋은 궁합일 수도 아닐 수도 있다.'
    }
    if(count.includes('산두화') && count.includes('사중금')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 모래속의 쇠는 재련이 필요하다. 그러나 혁신적인 대장장이를 만나 쇠를 재련하면 새롭게 태어날 수 있다. 능력이 좋은 사람이라면 사람의 가치를 알아보고 그만큼 성장시켜줄 수 있는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('산하화')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "산하화"는 산아래 불을 의미한다. 산아래 불과 산 위의 불이 동시에 일어나면 그것은 대재앙이다. 농담이고 산위, 산아래의 태울 수 있는 것을 다 태우면 어떻게 되겠는가? 더 이상 태울게 없어 불이 사그라든다. 흔히 맞불작전 구도인데 서로가 만나면 서로 피곤할 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('평지목')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "평지목"은 연약한 나무를 의미한다. 산불에 의하여 쉽게 불에 타버린다. 한 쪽이 다른 한 쪽을 잡아먹는 구도로 좋지 않은 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('벽상토')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "벽상토"는 담벼락을 의미한다. 여기선 자신들을 막는 무언가를 의미하는데 혁명가가 이 벽을 깨부숴주어 한차례 성장할 수 있는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('금박금')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "금박금"은 얇게 재련한 쇠를 의미한다. 과거에는 이 둘의 궁합은 좋지 않았지만 현대에선 의미가 달라졌다. 현대에서 우두머리 기업은 얇은 쇠를 이용하여 혁신적인 물건을 만들어내고 있다. 둘이 만나면 크게 성공할 모양새이다. 납음오행이지만 현대시대에 맞게 다시 생각해본 것이다. 생각하기 나름이다.'
    }
    if(count.includes('산두화') && count.includes('복등화')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 생각하기 나름이지만 위태로운 불이 큰 불을 만나 흡수되었다고 생각할 수 있지만 다르게 생각하면 큰 불의 도움을 받아 커졌다고 할 수도 있다. 각자의 노력에 따라 크게 달라지는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('천하수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "천하수"는 장마를 의미한다. 산불이 났는데 장마가오면 불이 꺼질 수도 있다. 둘의 관계에서는 그리 좋은 궁합이라고 볼 수 없다.'
    }
    if(count.includes('산두화') && count.includes('대역토')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "대역토"는 양음반전를 의미한다. "산두화"와 "대역토" 모두 세상을 뒤집을 수 있는 존재로 둘이 힘을 합하면 원하는 바를 이룰 수 있을 것이다.'
    }
    if(count.includes('산두화') && count.includes('차천금')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "차천금"는 연약한 금속을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('산두화') && count.includes('상자목')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "상자목"은 뽕나무를 의미한다. 산불에 의하여 쉽게 불에 타버린다. 한 쪽이 다른 한 쪽을 잡아먹는 구도로 좋지 않은 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('대계수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "대계수"는 큰 강을 의미한다. 산불이 났는데 주변에 강이 있으면 그 주변으로 불이 더 이상 커질 수 없다. 크게 방해는 안하지만 한계를 만들어 버릴 수 있는 궁합이다.'
    }
    if(count.includes('산두화') && count.includes('사중토')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "사중토"는 모래를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('산두화') && count.includes('천상화')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "천상화"는 모든 불의 왕을 의미한다. 산불, 혁명 모두 불의 왕과 함께 매우 크게 성장할 수 있을 것이다. 한 쪽이 크게 이끌어주는 경향이 있으니 항상 감사하는 마음을 품고 살아야한다.'
    }
    if(count.includes('산두화') && count.includes('석류목')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "석류목"은 석류 열매를 의미한다. 산불이 나면 열매가 다 타버려 먹을 수 없게 된다. 한 사람이 다른 사람의 가치를 훼손할 수 있으니 항상 주의를 기울어야 한다.'
    }
    if(count.includes('산두화') && count.includes('대해수')) {
        resultText.textContent = '"산두화"는 산불, 혁명을 의미한다. "대해수"는 큰 바닷물을 의미한다. 산불이 났는데 주변에 바다가 있으면 그 주변으로 불이 더 이상 커질 수 없다. 크게 방해는 안하지만 한계를 만들어 버릴 수 있는 궁합이다.'
    }
    if(count[0] === ('간하수') && count[1] === ('간하수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. 약수터는 사람들에게 시원한 물을 제공하여 주변 사람들로부터 명성을 얻을 납음인데 그 좋은 일을 하는 둘이 만나면 얼마나 좋은가!'
    } 
    if(count.includes('간하수') && count.includes('성두토')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "성두토"는 우두머리를 의미한다. 우두머리는 사실 되게 피곤한 역할이다. 그 사람에게 약수터라는 안식처를 제공하여 휴식 후 재충전하여 새로운 일을 하게 할 수 있는 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('백랍금')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "백랍금"은 빙하를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('간하수') && count.includes('양류목')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "양류목"은 버드나무를 의미한다. 약수터가 강한 기운의 물은 아니지만 버드나무 정도라면 성장시키는데 도움을 줄 수 있는 좋은 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('천중수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "천중수"는 맑은 샘물을 의미한다. 사람들에게 시원한 물을 제공하여 주변 사람들로부터 명성을 얻을 납음인데 그 좋은 일을 하는 둘이 만나면 얼마나 좋은가!'
    }
    if(count.includes('간하수') && count.includes('옥상토')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "옥상토"는 담벼락을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('간하수') && count.includes('벽력화')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "벽력화"는 비를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('간하수') && count.includes('송백목')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 약수터의 물로 인하여 그 생명력을 유지하는데 큰 기여를 할 수 있어서 둘이 잘 어울리는 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('장류수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "장류수"는 큰 강을 의미한다. 약수터의 물이 흘러넘치면 큰 강으로 흘러가게 되어 있다. 즉, 약수터의 물은 결국 큰 강으로 이어진다는 것으로 둘의 생각과 의견이 다르더라도 본질적으로 같을 수 있으니 다툼이 있어서 상대방의 생각을 다시한 번 확인해보는 것이 좋을 것 같다.'
    }
    if(count.includes('간하수') && count.includes('사중금')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 모래속의 쇠가 물에 빠지면 녹슬기까지 하여 더 이상 쓸 수 없게 된다. 둘이 만나면 좋지 않은 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('산하화')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "산하화"는 산아래 불을 의미한다. 약수터의 물로는 불을 끌 수 없다. 하지만 불이 약수터의 물을 모두 증발시킬 수도 없다. 둘이 서로 상극이지만 해하지는 않는 기묘한 조합이다.'
    }
    if(count.includes('간하수') && count.includes('평지목')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무일지라도 약수터의 물이 있으면 튼튼한 나무로 성장할 수 있다. 지금은 몰라도 미래에 큰 사람으로 성장할 수 있는 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('벽상토')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "벽상토"는 담벼락을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('간하수') && count.includes('금박금')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "금박금"은 얇게 재련한 쇠를 의미한다. 현대사회에선 얇은 금이 새로운 것을 창조해내는 것에 쓰이지만 그것이 물에 빠지면 제 기능을 못하게 된다. 생각하기 나름이지만 금속과 물이 만나 새로운 무언가를 하기는 어렵지만 불가능한 것은 아니기에 애매한 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('복등화')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 뒤집힌 등불이라는 약한 불이 약수터의 물에 의해 꺼질 수 있다. 둘의 관계에서는 그리 좋은 궁합이라고 볼 수 없다.'
    }
    if(count.includes('간하수') && count.includes('천하수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "천하수"는 별빛, 은하수를 의미한다. 은하수가 약수터에 투영되어 매우 아름다운 모습을 볼 수 있는데, 한 사람의 장점을 다른 사람이 보고 배울 수 있는 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('대역토')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "대역토"는 양음반전를 의미한다. 물은 "음"의 기운을 가지고 있다. "대역토"에 의해 양음반전이 되면 "양"의 기운을 가지게 되어 존재자체가 역설된다. 한 사람이 본인의 재능을 살리기 어려운 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('차천금')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "차천금"는 연약한 금속을 의미한다. 연약한 금속이 물에 빠지면 쉽게 녹슬어 본연의 가치를 잃어버릴 수 있으니 주의해야한다.'
    }
    if(count.includes('간하수') && count.includes('상자목')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무에게 물을 주면 그 댓가로 무언가를 얻을 수 있는 궁합이다. 서로에게 주고 받음이 있어 항상 화목할 것이니 아주 아름다운 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('대계수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "대계수"는 큰 강을 의미한다. 약수터의 물이 흘러넘치면 큰 강으로 흘러가게 되어 있다. 즉, 약수터의 물은 결국 큰 강으로 이어진다는 것으로 둘의 생각과 의견이 다르더라도 본질적으로 같을 수 있으니 다툼이 있어서 상대방의 생각을 다시한 번 확인해보는 것이 좋을 것 같다.'
    }
    if(count.includes('간하수') && count.includes('사중토')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "사중토"는 모래를 의미한다. 모래가 약수터를 매울 수는 있지만 대게는 모래의 양이 많지 않아 밑바닥에 가라 앉고 끝날 수준이다. 크게 문제되지는 않지만 모래의 기운을 가진 사람이 큰 뜻을 품고 있다면 물의 기운을 가진 사람이 조금은 고생할 수 있다.'
    }
    if(count.includes('간하수') && count.includes('천상화')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 태양이 약수터의 물을 전부 말려버리는 궁합이다. "천상화"가 다른 납음과 어울리지 않는 몇 안되는 경우이며, 물의 기운을 가진 사람이 제 뜻을 펼치기 어려운 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('석류목')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "석류목"은 석류 열매를 의미한다. 석류나무에게 물을 주어 열매라는 과실을 맺게 하는 궁합이다. 한 사람이 다른 사람을 성장하는데 도움을 줄 수 있는 궁합이다.'
    }
    if(count.includes('간하수') && count.includes('대해수')) {
        resultText.textContent = '"간하수"는 약수터를 의미한다. "대해수"는 큰 바닷물을 의미한다. 약수터의 물이 흘러 넘처 강으로 들어간다음 결국 큰 바다로 가는 모양이다. 한 사람이 방황을 하더라도 다시 원래 위치로 돌아간다는 의미로 서로에게 편안한 안식처가 될 수 있도록 노력해야 한다.'
    }
    if(count[0] === ('성두토') && count[1] === ('성두토')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. 우두머리와 우두머리의 만남으로 두 훌륭항 지도자가 만나면 대성을 할 수 있지만 서로의 기가 너무 강하면 서로를 지치게 할 수 있으니 주의를 기울이면 좋은 궁합이다.'
    } 
    if(count.includes('성두토') && count.includes('백랍금')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "백랍금"은 빙하를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('성두토') && count.includes('양류목')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "양류목"은 버드나무를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('성두토') && count.includes('천중수')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "천중수"는 맑은 샘물을 의미한다. 맑은 샘물을 우두머리가 독차지하여 주변 사람들을 통제하거나 넓은 벌판에 샘물이 있어 사람들이 잘 찾지 못하게 할 수 있다. 한 사람이 다른 사람의 재능을 발휘하지 못하게 막는 좋지 않은 궁합이다.'
    }
    if(count.includes('성두토') && count.includes('옥상토')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "옥상토"는 담벼락을 의미한다. 우두머리의 거처는 담벼락 등으로 보호를 받는다. 서로를 지켜주려는 마음이 강한 것은 보기 좋으나 너무 얽매일 수도 있으니 주의해야 한다.'
    }
    if(count.includes('성두토') && count.includes('벽력화')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "벽력화"는 비를 의미한다. 넓은 벌판에 비가 내려 새로운 생명이 싹트게 한다. 혼자서는 할 수 없는 일을 둘이서 같이하여 성공하는 좋은 그림이다.'
    }
    if(count.includes('성두토') && count.includes('송백목')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 우두머리가 튼튼한 소나무를 가지고 무기를 만들어 자신의 지위를 지키거나 확장하는데 도움을 줄 것이다. 큰 뜻을 품은 사람일수록 더 큰 목표를 이룰 수 있을 것이다.'
    }
    if(count.includes('성두토') && count.includes('장류수')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "장류수"는 큰 강을 의미한다. 넓은 벌판에 강이 흐르면 그 땅은 비옥해지고 각 종 농작물을 기를 수 있게 된다. 서로가 훌륭한 공생관계가 되어 상당히 좋은 궁합이라고 볼 수 있다.'
    }
    if(count.includes('성두토') && count.includes('사중금')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('성두토') && count.includes('산하화')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "산하화"는 저무는 태양을 의미한다. 우두머리가 지금은 왕일지라도 끝물에 도달하여 자리에서 내려오게 되는 궁합이다. 한 사람의 앞길을 가로막을 수 있는 궁합이다.'
    }
    if(count.includes('성두토') && count.includes('평지목')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "평지목"은 연약한 나무를 의미한다. 넓은 벌판에 나무가 자라면서 햇빛을 잘 받을 수 있는 환경이 만들어진다. 그러나 태생이 연약하여 큰 성장을 기대하긴 어렵다.'
    }
    if(count.includes('성두토') && count.includes('벽상토')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "벽상토"는 담벼락을 의미한다. 우두머리의 거처는 담벼락 등으로 보호를 받는다. 서로를 지켜주려는 마음이 강한 것은 보기 좋으나 너무 얽매일 수도 있으니 주의해야 한다.'
    }
    if(count.includes('성두토') && count.includes('금박금')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 우두머리가 사치와 향락에 빠지는 모양새로 한 사람이 일을 하는데 유혹에 빠질 가능성이 높다. 하지만 우두머리가 강인한 정신력을 가졌다면 그정도는 피할 수 있다.'
    }
    if(count.includes('성두토') && count.includes('복등화')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('성두토') && count.includes('천하수')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "천하수"는 별빛, 은하수를 의미한다. 우두머리가 하늘을 가지게 되는 모양이다. 지금은 큰 무리의 우두머리가 아니지만 크게 대성하는 궁합으로 아주 좋은 궁합에 속한다.'
    }
    if(count.includes('성두토') && count.includes('대역토')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "대역토"는 양음반전를 의미한다. 지금 우두머리는 매우 대성을 하고 있지만 "대역토"에 의해 반전이 일어나 추락할 수 있으니 주의해야 한다.'
    }
    if(count.includes('성두토') && count.includes('차천금')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "차천금"는 연약한 금속을 의미한다. 우두머리의 능력 자체는 훌륭하나 무기가 빈약하여 큰 일에 제대로 힘을 쓸 수 없는 구조다. 서로에게 방해가 되는 궁합이다.'
    }
    if(count.includes('성두토') && count.includes('상자목')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "상자목"은 뽕나무를 의미한다. 넓은 벌판에 많은 뽕나무를 심으면 큰 돈을 벌 수 있다. 하지만 뽕나무는 생각보다 기르기 힘든 나무이니 많은 노력이 필요하다. 큰 힘에는 큰 책임이 따르는 법.'
    }
    if(count.includes('성두토') && count.includes('대계수')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "대계수"는 큰 강을 의미한다. 넓은 벌판에 강이 흐르면 그 땅은 비옥해지고 각 종 농작물을 길러 큰 성공을 거둘 수 있다.. 서로가 훌륭한 공생관계가 되어 상당히 좋은 궁합이라고 볼 수 있다.'
    }
    if(count.includes('성두토') && count.includes('사중토')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "사중토"는 모래를 의미한다. 넓은 벌판과 모래는 사실 큰 관련이 없고 둘 다 "토"의 속성을 지녔기에 큰 문제는 되지 않는다.'
    }
    if(count.includes('성두토') && count.includes('천상화')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 성공하지 못한 우두머리면 태양을 만나 성공하게 될 것이고, 성공한 우두머리는 태양과 함께 지배적인 단계까지 성장 할 수 있는 훌륭한 궁합이다.'
    }
    if(count.includes('성두토') && count.includes('석류목')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "석류목"은 석류 열매를 의미한다. 우두머리는 원래 많이 힘든 지위로써 석류 열매를 먹고 재충전하여 다시 일을 할 수 있게 해준다. 서로에게 휴식처가 되어 큰 도움이 되는 궁합이니 서로 감사하면서 살아가야 한다.'
    }
    if(count.includes('성두토') && count.includes('대해수')) {
        resultText.textContent = '"성두토"는 넓은 벌판, 우두머리를 의미한다. "대해수"는 큰 바닷물을 의미한다. 큰 바닷물은 여기선 시련을 의미하며 두 사람이 머지않아 큰 시련을 맞이하는 궁합이다. 하지만 그 시련을 이겨내면 무엇보다 단단해질 수 있지만 이겨내지 못하거나 피해가면 큰 피해를 입을 수 있는 궁합이기도 한다.'
    }
    if(count[0] === ('백랍금') && count[1] === ('백랍금')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. 빙하와 빙하가 만나 큰 빙산이 되었다. 옛날이면 별다른 의미는 없지만 현대에는 빙하에 많은 잠재력이 있어 관심이 높다. 지금은 별 볼일 없지만 가능성이 높은 궁합이다.'
    } 
    if(count.includes('백랍금') && count.includes('양류목')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "양류목"은 버드나무를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('천중수')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "천중수"는 맑은 샘물을 의미한다. 빙하가 녹으면 물이 된다. 빙하는 잘 녹지 않기 때문에 물이 되기 어렵지만 만약 물이 되더라도 샘물과 함께 섞이니 지금 당장도 걱정거리가 없지만 미래에도 걱정거리가 없다.'
    }
    if(count.includes('백랍금') && count.includes('옥상토')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "옥상토"는 담벼락을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('벽력화')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "벽력화"는 비를 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('송백목')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('장류수')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "장류수"는 큰 강을 의미한다. 빙하가 녹을 확률은 매우 낮지만 녹아서 큰 강으로 흐른다면 강이 넘쳐 범람을 할 수 있다. 매우 낮은 확률이지만 안좋은 일이 일어날 수 있는 궁합이다.'
    }
    if(count.includes('백랍금') && count.includes('사중금')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('산하화')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "산하화"는 저무는 태양을 의미한다. 태양이 빙하를 녹일 수는 있지만 저무는 태양 정도로는 어림도 없기 때문에 나쁜 궁합은 아니다.'
    }
    if(count.includes('백랍금') && count.includes('평지목')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무에 낮은 온도의 빙하가 옆에 있으면 성장은 물론이거니와 생존자체가 어렵기 때문에 좋은 궁합은 아니다.'
    }
    if(count.includes('백랍금') && count.includes('벽상토')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "벽상토"는 담벼락을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('금박금')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('복등화')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "복등화"는 뒤집힌 등불을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('천하수')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "천하수"는 별빛, 은하수를 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('대역토')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "대역토"는 양음반전를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('차천금')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "차천금"는 연약한 금속을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('상자목')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "상자목"은 뽕나무를 의미한다. 나무에 낮은 온도의 빙하가 옆에 있으면 성장은 물론이거니와 생존자체가 어렵기 때문에 좋은 궁합은 아니다. 큰 힘에는 큰 책임이 따르는 법.'
    }
    if(count.includes('백랍금') && count.includes('대계수')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "대계수"는 큰 강을 의미한다. 빙하가 녹을 확률은 매우 낮지만 녹아서 큰 강으로 흐른다면 강이 넘쳐 범람을 할 수 있다. 매우 낮은 확률이지만 안좋은 일이 일어날 수 있는 궁합이다.'
    }
    if(count.includes('백랍금') && count.includes('사중토')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "사중토"는 모래를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('천상화')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. "백랍금" 중 유일하게 다른 납음에 피해를 입는 궁합으로 최강의 태양으로 빙하를 녹여버린다. 궤멸까지는 아니더라도 큰 피해를 입을 수 있는 상성이 최악인 궁합이다.'
    }
    if(count.includes('백랍금') && count.includes('석류목')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "석류목"은 석류 열매를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('백랍금') && count.includes('대해수')) {
        resultText.textContent = '"백랍금"은 빙하를 의미한다. "대해수"는 큰 바다를 의미한다. 빙하는 바다를 통해 만들어졌고 바다 위에 존재한다. 태어날 때부터 같이 있어야 하는 궁합으로 하늘이 점지해준 궁합이다.'
    }
    if(count[0] === ('양류목') && count[1] === ('양류목')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. 버드나무는 사막에서도 잘 자라는 생명력이 강인한 나무이다. 그러한 나무가 모였으니 어떠한 역경도 잘 이겨낼 수 있으리라.'
    } 
    if(count.includes('양류목') && count.includes('천중수')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "천중수"는 맑은 샘물을 의미한다. 버드나무가 잘 자라는데 맑은 물이 옆에 있으면 얼마나 좋으리라. 서로에게 긍정적인 영향을 주는 좋은 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('옥상토')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "옥상토"는 담벼락을 의미한다. 담벼락이 버드나무를 가려 성장에 방해를 줄 수 있다. 긍정적인 궁합은 아니다.'
    }
    if(count.includes('양류목') && count.includes('벽력화')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "벽력화"는 비와 번개를 의미한다. "양류목"은 버드나무도 의미하지만 불에 타는 작은 나무를 의미하기도 한다. 성장에 도움이 될 수도 번개로 불태워버릴 수도 있는 기묘한 궁합이다. 서로에게 상처주지 않는지 다시 한 번 확인하는 것이 좋다.'
    }
    if(count.includes('양류목') && count.includes('송백목')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('양류목') && count.includes('장류수')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "장류수"는 큰 강을 의미한다. 버드나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 큰 강이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('사중금')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 녹슨 철로는 버드나무를 베긴 어렵다. 하지만 어린 나무라면 충분히 해할 수 있으니 항상 주의가 필요하다.'
    }
    if(count.includes('양류목') && count.includes('산하화')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "산하화"는 저무는 태양을 의미한다. 태양이 저물고나면 다시 떠오를 때까지 성장할 수 없다. 하지만 태양은 반드시 뜨니 지금은 어렵더라도 참고 견디면 좋은 결과를 볼 수 있다.'
    }
    if(count.includes('양류목') && count.includes('평지목')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 큰 강이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('벽상토')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "벽상토"는 담벼락을 의미한다. 담벼락이 버드나무를 가려 성장에 방해를 줄 수 있다. 긍정적인 궁합은 아니다.'
    }
    if(count.includes('양류목') && count.includes('금박금')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 버드나무는 겉도 훌륭하고 속도 꽉찬 알차다. 하지만 "금박금"은 겉만 번지르르하여 서로의 성향이 상반되니 서로가 마음에 안드는 경우가 있으니 배려하면서 이해하는 자세가 필요한 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('복등화')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "복등화"는 뒤집힌 등불을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('양류목') && count.includes('천하수')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "천하수"는 장마를 의미한다. 버드나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 큰 강이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('대역토')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "대역토"는 양음반전를 의미한다. 버드나무는 성장하기 위해 많은 일을 겪어야 하는데 힘든 일도 쉬운 일도 있다. 지금 만약 쉬운 일을 하고 있다면 어려운 시련이 다가오고 시련을 겪고 있다면 곧 끝난다는 의미이다. 상황에 따라 궁합이 조금 달라 질 수 있다.'
    }
    if(count.includes('양류목') && count.includes('차천금')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "차천금"는 연약한 금속을 의미한다. 연약한 철로는 버드나무를 베긴 어렵다. 하지만 어린 나무라면 충분히 해할 수 있으니 항상 주의가 필요하다.'
    }
    if(count.includes('양류목') && count.includes('상자목')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무와 버드나무가 같이 있으면 뿌리가 공생하게 되어 물과 영양을 흡수하기 용이해진다. 서로 딱 붙어 필요한 것을 주고 받는 아주 예쁜 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('대계수')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "대계수"는 큰 강을 의미한다.  성장하기 위해 많은 양의 물이 필요한데 마침 옆에 큰 강이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('사중토')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "사중토"는 모래를 의미한다. 나무가 있는 흙에 모래가 있으면 영양과 물을 흡수하는데 방해가 된다. 성장은 고사하고 생존하기도 어려울 수 있다. 다만 "사중토"에는 흙도 섞여 있으니 서로가 마음 상하지 않게 노력해야 한다.'
    }
    if(count.includes('양류목') && count.includes('천상화')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 버드나무가 강렬한 태양을 통해 영양분은 만들고 크게 성장할 수 있다. 다만 태양이 지나치게 강렬할 경우 오히려 독이 될 수 있으니 과유불급이다. 함께하면 크게 성장할 수 있는 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('석류목')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "석류목"은 석류나무를 의미한다. 석류나무와 버드나무가 같이 있으면 뿌리가 공생하게 되어 물과 영양을 흡수하기 용이해진다. 서로 딱 붙어 필요한 것을 주고 받는 아주 예쁜 궁합이다.'
    }
    if(count.includes('양류목') && count.includes('대해수')) {
        resultText.textContent = '"양류목"은 버드나무를 의미한다. "대해수"는 큰 바다를 의미한다. 단어적 의미로 해석하면 바닷물이 버드나무에 닿으면 수분을 빼앗겨 죽게 된다. 내포하는 의미로 해석하면 버드나무가 성장하는데 큰 시련(바닷물)이 찾아온다는 것으로 죽을 만큼 힘든 시련이 온다는 것이다. 항상 주의를 기울어야 한다.'
    }
    if(count[0] === ('천중수') && count[1] === ('천중수')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. 작은물이 만나 큰 물이 되니 큰 뜻을 이루기에 적절하다. '
    } 
    if(count.includes('천중수') && count.includes('옥상토')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "옥상토"는 담벼락을 의미한다. 주변의 사람들이 담벼락에 가려진 샘물을 못보고 지나가는 모양이다. 한 쪽의 재능을 가려버릴 수 있으니 주의가 필요하다.'
    }
    if(count.includes('천중수') && count.includes('벽력화')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "벽력화"는 비와 번개를 의미한다. 맑은 샘에 비가 내리면 부족한 물이 많이진다. 번개가 내려쳐도 별 일이 없으니 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('송백목')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 강인한 송백목의 생명력을 유지하는데 마침 옆에 맑은 샘물이 있어 아주 훌륭하다. 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('장류수')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "장류수"는 큰 강을 의미한다. 샘의 물이 흘러넘치면 큰 강으로 흘러가게 되어 있다. 즉, 맑은 샘의 물은 결국 큰 강으로 이어진다는 것으로 둘의 생각과 의견이 다르더라도 본질적으로 같을 수 있으니 다툼이 있어서 상대방의 생각을 다시한 번 확인해보는 것이 좋을 것 같다.'
    }
    if(count.includes('천중수') && count.includes('사중금')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 물에 쇠가 빠지면 녹슬게된다. 또한 샘 또한 오염이 되기 때문에 서로에게 큰 피해를 주는 안타까운 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('산하화')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "산하화"는 저무는 태양을 의미한다. 원래 태양과 물은 상극인 조합이지만 저무는 태양으로 약한 태양이라 크게 문제는 없는 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('평지목')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 샘물이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('벽상토')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "벽상토"는 담벼락을 의미한다. 주변의 사람들이 담벼락에 가려진 샘물을 못보고 지나가는 모양이다. 한 쪽의 재능을 가려버릴 수 있으니 주의가 필요하다.'
    }
    if(count.includes('천중수') && count.includes('금박금')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('천중수') && count.includes('복등화')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 안그래도 위태로운 등불인데 강한 기운의 물을 만나 사그라질 모앙이니 좋은 궁합은 아니다.'
    }
    if(count.includes('천중수') && count.includes('천하수')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "천하수"는 장마를 의미한다. 은하수가 샘에 투영되어 매우 아름다운 모습을 볼 수 있는데, 한 사람의 장점을 다른 사람이 보고 배울 수 있는 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('대역토')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "대역토"는 양음반전를 의미한다. 지금은 맑은 샘물을 유지하지만 오염이 될 수 있는 시련이 찾아온다. 누구라도 이 시련을 이겨낼 것이라고 확신할 수 없다. 하지만 둘의 사랑이 진심이라면 이겨낼 수 있다.'
    }
    if(count.includes('천중수') && count.includes('차천금')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "차천금"는 연약한 금속을 의미한다. 안그래도 연약한 금속인데 물에 빠져버리면 녹슬어 못쓰게 된다. 좋은 궁합은 아니다.'
    }
    if(count.includes('천중수') && count.includes('상자목')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 샘물이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('대계수')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "대계수"는 큰 강을 의미한다. 샘의 물이 흘러넘치면 큰 강으로 흘러가게 되어 있다. 즉, 맑은 샘의 물은 결국 큰 강으로 이어진다는 것으로 둘의 생각과 의견이 다르더라도 본질적으로 같을 수 있으니 다툼이 있어서 상대방의 생각을 다시한 번 확인해보는 것이 좋을 것 같다.'
    }
    if(count.includes('천중수') && count.includes('사중토')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "사중토"는 모래를 의미한다. 모래가 샘을 매울 수는 있지만 대게는 모래의 양이 많지 않아 밑바닥에 가라 앉고 끝날 수준이다. 크게 문제되지는 않지만 모래의 기운을 가진 사람이 큰 뜻을 품고 있다면 물의 기운을 가진 사람이 조금은 고생할 수 있다.'
    }
    if(count.includes('천중수') && count.includes('천상화')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 강렬한 태양때문에 샘물이 증발해버릴 수 있다. 하지만 그 물이 사라지는 것이 아니라 다른 형태로 변화하여 새로운 일을 한다. 쉽게 말해 새로운 운명을 맞이하는 궁합으로 힘든 일도 잘 이겨내길 바란다.'
    }
    if(count.includes('천중수') && count.includes('석류목')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "석류목"은 석류나무를 의미한다. 석류나무가 성장하기 위해 많은 양의 물이 필요한데 마침 옆에 샘물이 있다. 서로에게 큰 도움을 주면서 성장할 수 있는 좋은 궁합이다.'
    }
    if(count.includes('천중수') && count.includes('대해수')) {
        resultText.textContent = '"천중수"는 맑은 샘물을 의미한다. "대해수"는 큰 바다를 의미한다. 샘의 물이 흘러 넘처 강으로 들어간다음 결국 큰 바다로 가는 모양이다. 한 사람이 크게 성장했지만 더 이상의 목표가 없어 방황하는데 그때 바다가 도움을 주어 올바른 길로 인도하는 모양이다. 항상 서로에게 감사하면서 살도록 하자.'
    }
    if(count[0] === ('옥상토') && count[1] === ('옥상토')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. 담벼락끼리 서로를 보호하며 세상의 각 종 시련과 역경을 이겨 낼 수 있다. 아주 훌륭한 궁합이다.'
    } 
    if(count.includes('옥상토') && count.includes('벽력화')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "벽력화"는 비와 번개를 의미한다. 비와 번개가 아무리 내려쳐도 담벼락이 전부 막아준다. 에초에 비와 번개의 발생을 막는 것이 아니기 때문에 정도가 지나칠 때만 막아주는 것으로 억제기 같은 역할을 해준다. 좋은 궁합이다.'
    }
    if(count.includes('옥상토') && count.includes('송백목')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 소나무 옆에 담벼락이 햇빛을 막아 성장을 막을 수 있으나 나무의 기운이 강력하거나 흙(담벼락)의 기운이 약하면 크게 상관없는 궁합이다.'
    }
    if(count.includes('옥상토') && count.includes('장류수')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "장류수"는 큰 강을 의미한다. 다른 사람이 담벼락에 가려 큰 강을 보는데 제약이 있을 수 있다. 담벼락의 크기가 크지 않으면 일부만 가릴 수 있으나 강이 생각보다 작고 담벼락이 크다면 흙이(담벼락) 물의 기운을 가로막는 모양새이다.'
    }
    if(count.includes('옥상토') && count.includes('사중금')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('옥상토') && count.includes('산하화')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "산하화"는 저무는 태양을 의미한다.  이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('옥상토') && count.includes('평지목')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무가 성장하기 위해 많은 햇빛이 필요한데 담벼락이 그늘을 만들어 햇빛 흡수를 방해한다. 하지만 가끔 불어오는 강력한 바람또한 같이 막아주기 떄문에 병주고 약주는 기묘한 조합이다.'
    }
    if(count.includes('옥상토') && count.includes('벽상토')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "벽상토"는 담벼락을 의미한다. 담벼락끼리 서로를 보호하며 세상의 각 종 시련과 역경을 이겨 낼 수 있다. 아주 훌륭한 궁합이다.'
    }
    if(count.includes('옥상토') && count.includes('금박금')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 담벼락에 금박을 바르면 예뻐지기는 하지만 제 역할에 큰 도움을 준다고 보긴 어렵다. 물론 생각하기 나름이지만 크게 도움이 되는 궁합은 아닌 것 같다.'
    }
    if(count.includes('옥상토') && count.includes('복등화')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('옥상토') && count.includes('천하수')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "천하수"는 장마를 의미한다. 장마가 아무리 내려도 담벼락을 넘기는 어렵다. "물"의 기운을 가진 사람이 다른 한 쪽을 괴롭히더라도 "흙"의 기운을 가진자를 넘을 수는 없다. 서로 다툼이 있더라도 크게 문제 되지는 않는다.'
    }
    if(count.includes('옥상토') && count.includes('대역토')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "대역토"는 양음반전를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('옥상토') && count.includes('차천금')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "차천금"는 연약한 금속을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('옥상토') && count.includes('상자목')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 위해 많은 햇빛이 필요한데 담벼락이 그늘을 만들어 햇빛 흡수를 방해한다. 하지만 가끔 불어오는 강력한 바람또한 같이 막아주기 떄문에 병주고 약주는 기묘한 조합이다.'
    }
    if(count.includes('옥상토') && count.includes('대계수')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "대계수"는 큰 강을 의미한다.  다른 사람이 담벼락에 가려 큰 강을 보는데 제약이 있을 수 있다. 담벼락의 크기가 크지 않으면 일부만 가릴 수 있으나 강이 생각보다 작고 담벼락이 크다면 흙이(담벼락) 물의 기운을 가로막는 모양새이다.'
    }
    if(count.includes('옥상토') && count.includes('사중토')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "사중토"는 모래를 의미한다. 담벼락이 만들어질 때 모래가 섞이면 압력차로 인하여 균열이 생기고 무너질 수 있다. "옥상토"가 자아나 경제적 여건이 완성된 상태에서 만남을 시작했다면 괜찮지만 그렇지 않다면 두 사람이 만나 한 사람의 성장을 방해하는 구도이다.'
    }
    if(count.includes('옥상토') && count.includes('천상화')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 한 여름 강렬한 태양빛 아래에서 담벼락을 통해 열기를 피할 수 있다. 두 사람만의 궁합은 그저 그렇다고 볼 수 있지만 주변 사람들에게 도움을 주어 평판이 매우 좋으니 약간 좋은 궁합이기도 하다.'
    }
    if(count.includes('옥상토') && count.includes('석류목')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "석류목"은 석류나무를 의미한다. 석류나무가 성장하기 위해 많은 햇빛이 필요한데 담벼락이 그늘을 만들어 햇빛 흡수를 방해한다. 하지만 가끔 불어오는 강력한 바람또한 같이 막아주기 떄문에 병주고 약주는 기묘한 조합이다.'
    }
    if(count.includes('옥상토') && count.includes('대해수')) {
        resultText.textContent = '"옥상토"는 담벼락을 의미한다. "대해수"는 큰 바다를 의미한다. 담벼락이 튼튼하더라도 바다의 해일은 막을 수 없다. 물론 해일이 일어날 확률은 적지만 한 번 일어나면 큰 피해가 일어 날 수 있으니, "물"의 기운을 가진 사람은 항상 조심하면 크게 문제 없는 궁합이다.'
    }
    if(count[0] === ('벽력화') && count[1] === ('벽력화')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. 비와 번개가 내리치는 건 좋아보이지 않을 수 있다. 하지만 비와 번개라는 에너지를 통해 새로운 생명이 다시 탄생하는 좋은 현상이다. 둘이 만나면 번개와 같은 사랑으로 새로운 무언가를 창조하는 궁합이다.'
    } 
    if(count.includes('벽력화') && count.includes('송백목')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 비를 통해 수분을 공급하지만 번개를 맞으면 그대로 불에 타버리는 병주고 약주고 하는 기묘한 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('장류수')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "장류수"는 큰 강을 의미한다. 강에 비가 내리면 부족한 수량이 공급되어 아주 좋은 현상이다. 게다가 번개가 큰 강에 내려쳐도 크게 문제없는 궁합으로 큰 뜻을 가진 비와 번개를 따뜻하게 포용해주는 아름다운 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('사중금')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 안그래도 재련이 필요한 금속인데 비를 맞아버리면 더욱 녹슬게 된다. 하지만 번개와 같은 망치질로 쇠를 다시 재련할 수 있으니 둘이 만나면 "금"의 기운을 가진 사람이 크게 성장할 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('산하화')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "산하화"는 산불을 의미한다. 비가 내리면 산불이 진화되지만 번개가 치면 산불이 더욱 커진다. "화"의 기운을 가진 사람이 하기 나름에 따라 좋은 궁합이 될 수도 나쁜 궁합이 될 수도 있다.'
    }
    if(count.includes('벽력화') && count.includes('평지목')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무가 성장하기 비를 통해 수분을 공급받지만 번개를 맞으면 그대로 불에 타버리는 병주고 약주고 하는 기묘한 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('벽상토')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "벽상토"는 담벼락을 의미한다.. 비가 아무리 내려도 담벼락을 넘을 수 없으며 번개가 쳐도 담벼락을 무너뜨릴 수 없다. "화"의 기운을 가진 사람이 아무리 화를 내고 별 일을 다 하여도 "토"의 기운을 가진 사람이 컨트롤이 되기 때문에 잘못된 길을 가는 것을 막아줄 수도 있다. 지금 당장은 눈에 띄는 무언가는 없지만 언젠간 큰 도움이 되는 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('금박금')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('벽력화') && count.includes('복등화')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 위태로운 등불에 비가 내리면 불이 그냥 사그라진다. 하지만 다시 번개가 내리쳐 불이 소생될 수 있지만 또 다시 비가 내려 불이 꺼질 수 있다. 둘이 같이 있으면 굴곡이 많은 안타까운 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('천하수')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "천하수"는 장마를 의미한다. 비와 번개, 장마는 인간에게는 재앙이지만 조합 자체는 좋은 궁합이다. 주변 사람들에게 피해를 줄 수 있지만 둘이 좋으면 그만이다.'
    }
    if(count.includes('벽력화') && count.includes('대역토')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "대역토"는 양음반전를 의미한다. 지금은 번개가 내리치고 비가 와도 곧 잦아들고 햇빛이 드는 모양이다. 쉽게 말해 지금 겪는 시련이 곧 끝난다는 의미이기도 하지만, 에초에 강력한 "화"의 기운을 가진 사람을 억제하는 것이기 때문에 좋은 궁합은 아니다.'
    }
    if(count.includes('벽력화') && count.includes('차천금')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "차천금"는 연약한 금속을 의미한다. 연약한 금속이 물에 젖이면 녹이 쓸어 못쓰게 된다. 하지만 번개와 같은 망치질로 약한 금속을 강한 금속으로 다시 태어나게 할 수도 있으니 "물"의 기운을 가진 사람은 항상 자신이 어떠한 영향을 주는지 확인 하는 것이 좋다.'
    }
    if(count.includes('벽력화') && count.includes('상자목')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 비를 통해 수분을 공급받지만 번개를 맞으면 그대로 불에 타버리는 병주고 약주고 하는 기묘한 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('대계수')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "대계수"는 큰 강을 의미한다. 강에 비가 내리면 부족한 수량이 공급되어 아주 좋은 현상이다. 게다가 번개가 큰 강에 내려쳐도 크게 문제없는 궁합으로 큰 뜻을 가진 비와 번개를 따뜻하게 포용해주는 아름다운 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('사중토')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "사중토"는 모래를 의미한다. 번개처럼 강력한 에너지가 모래에 내려쳐도 별다른 일이 일어나지 않는다. 모래는 물을 흡수하지 않고 통과시키는 성질이 있어 둘이 만나도 잘 섞이지 않고 따로 놀 수 있는 좋지 않은 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('천상화')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 비와 번개가 아무리 강하다 하더라도 최강의 태양이 구름을 밀어내어 비와 번개를 사라지게 한다. 두가지 의미가 있는데 지금은 시련을 겪고 있더라도 곧 빛을 보게 된다는 의미가 있지만 에초에 비와 번개의 기운을 태양이 억제하는 구도이기도 하다. 상황에 따라 최고의 궁합이기도 최악의 궁합이기도 하니 항상 관계에 문제가 없는지 잘 살피는 자세가 필요할 것 같다.'
    }
    if(count.includes('벽력화') && count.includes('석류목')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "석류목"은 석류나무를 의미한다. 성장하기 비를 통해 수분을 공급받지만 번개를 맞으면 그대로 불에 타버리는 병주고 약주고 하는 기묘한 궁합이다.'
    }
    if(count.includes('벽력화') && count.includes('대해수')) {
        resultText.textContent = '"벽력화"는 비와 번개를 의미한다. "대해수"는 큰 바다를 의미한다. 깨알 상식으로 바다에 비와 번개가 치면 무슨일이 일어나는가? 바다에 녹아 있는 산소가 줄어들어 물고기가 수면위로 올라온다. 가끔 어항에 물고기가 수면위에서 호흡을 하는 것과 비슷한 원리이다. 두 사람의 궁합은 어느 한 현상을 평소와 다르게 바꿔버리는 힘이 있다. 무언가 새롭게 시도하기에 아름다운 궁합이다.'
    }
    if(count[0] === ('송백목') && count[1] === ('송백목')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. 두 강인한 생명력의 나무가 만났으니 어떠한 역경과 시련도 가볍게 이겨낼 수 있다. 하지만 서로의 기운이 강력하니 서로에게 상처를 줄 가능성이 있으니 주의가 필요하다.'
    } 
    if(count.includes('송백목') && count.includes('장류수')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "장류수"는 큰 강을 의미한다. 소나무의 강인한 생명력을 유지하기 위해 많은 양의 물이 필요한데 큰 강의 물정도면 충분하다. 게다가 큰 강의 물을 아무리 퍼도 마르지 않기 때문에 밸런스도 좋은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('사중금')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('송백목') && count.includes('산하화')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "산하화"는 산불을 의미한다. 소나무가 산불과 만나면 그것이야 말로 거대한 악재이다. 불이 나무를 잡아먹으니 한 쪽이 매우 피곤한 궁합이니라.'
    }
    if(count.includes('송백목') && count.includes('평지목')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "평지목"은 연약한 나무를 의미한다. 소나무처럼 거대한 나무의 그림자가 연약한 나무를 가려 햇빛을 받는데 방해를 할 수 있다. 하지만 다른 뜻으로 큰 사람이 상대적으로 작은 사람을 이끌어준다는 의미도 있다.'
    }
    if(count.includes('송백목') && count.includes('벽상토')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "벽상토"는 담벼락을 의미한다. 사실 나무를 담벼락이 가려서 그늘이지고 나무의 광합성을 방해하기 때문에 좋지는 않지만 소나무가 워낙 거대하다 보니 그런 일은 없을 것이다. 나쁜 궁합은 아니다.'
    }
    if(count.includes('송백목') && count.includes('금박금')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. "송백목"은 겉도 훌륭하고 속도 알찬데 "금박금"은 겉만 번지르르하니 서로가 추구하는 성격과 사고, 이상이 다를 수 있다. 사람이 서로 존중하고 배려하는 자세가 갖춰져 있으면 괜찮지만 그렇지 않다면 매일 다툼이 일어나니 좋은 궁합은 아니다.'
    }
    if(count.includes('송백목') && count.includes('복등화')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 원래 나무는 불에 매우 취약하지만 소나무 정도의 나무와 위태로운 불은 예외다. 그 정도의 불로는 나무에 영향이 없으니 만나도 괜찮은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('천하수')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "천하수"는 장마를 의미한다. 나무에 장마급으로 많은 양의 비가 내려 물이 공급이 좋으니 나무가 크게 성장할 것이다. 서로에게 도움이 되는 좋은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('대역토')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "대역토"는 양음반전를 의미한다. 소나무가 지금은 강인한 생명력은 가졌지만 아직 성장하지 못한 상태이다. 하지만 "대역토"를 만나 상황이 반전되었으니 가로 막힌 것은 "대역토"가 치워줘서 소나무는 승승장구할 모양이다.'
    }
    if(count.includes('송백목') && count.includes('차천금')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "차천금"는 연약한 금속을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('송백목') && count.includes('상자목')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "상자목"은 뽕나무를 의미한다. 소나무처럼 거대한 나무의 그림자가 뽕나무 나무를 가려 햇빛을 받는데 방해를 할 수 있다. 하지만 다른 뜻으로 큰 사람이 상대적으로 작은 사람을 이끌어준다는 의미도 있다.'
    }
    if(count.includes('송백목') && count.includes('대계수')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "대계수"는 큰 강을 의미한다. 소나무의 강인한 생명력을 유지하기 위해 많은 양의 물이 필요한데 큰 강의 물정도면 충분하다. 게다가 큰 강의 물을 아무리 퍼도 마르지 않기 때문에 밸런스도 좋은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('사중토')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "사중토"는 모래를 의미한다. 모래는 나무의 뿌리를 지탱해주지 못한다. 거대한 소나무의 뿌리를 모래로 보존하지 못하며 그 모래 또한 흩어지기 마련이다. 서로에게 악영향만 주니 좋지 않은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('천상화')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 최강의 나무와 최강의 태양이 만났다. 태양이 강렬하면 강렬할 수록 나무에 많은 에너지를 주고 나무 또한 그것을 감당할 만큼 강인하다. 궁합이 아주아주아주 훌륭하다.'
    }
    if(count.includes('송백목') && count.includes('석류목')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "석류목"은 석류나무를 의미한다. 석류나무는 다른 나무보다 강인한 편에 속하며, 다른 나무와 다르게 소나무에 의해 피해를 입지 않는다. 나쁘지 않은 궁합이다.'
    }
    if(count.includes('송백목') && count.includes('대해수')) {
        resultText.textContent = '"송백목"은 일 년 내내 푸른 생명력의 소나무를 의미한다. "대해수"는 큰 바다를 의미한다. 소나무가 강인하더라도 소금물인 바다와 만나면 썩어버리기 마련이다. 한 쪽이 다른 하나를 잡아먹는 궁합으로 좋은 궁합은 아니다.'
    }
    if(count[0] === ('장류수') && count[1] === ('장류수')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. 큰 강과 큰 강이 만나면 평야를 만들고 그 곳은 매우 비옥한 땅이 되어 많은 곡식을 재배하여 큰 성공을 거둘 수 있다. 둘이 함께하면 큰 성공을 이룰 수 있으니 좋은 궁합이다.'
    } 
    if(count.includes('장류수') && count.includes('사중금')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "사중금"은 모래속의 쇠(철)을 의미한다. 안그래도 재련이 필요한 철이 물에 빠졌으니 더욱 못쓰게 된다. 둘이 좋은 궁합은 아니다.'
    }
    if(count.includes('장류수') && count.includes('산하화')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "산하화"는 산불을 의미한다. 산불이 아무리 크게 나도 강을 넘어 갈 수는 없다. 한 쪽이 아무리 날뛰어도 다른 쪽이 충분히 커버가 된다는 것으로 크게 문제는 없고 사람이 어긋나는 것을 막아줄 수 있는 훌륭한 궁합이다.'
    }
    if(count.includes('장류수') && count.includes('평지목')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무가 성장하기 위해 많은 양의 물이 필요한데 그 조건을 만족하는 매우 많은 양의 물이 있으니 서로에게 이익되는 긍정적인 영향을 주는 궁합이다.'
    }
    if(count.includes('장류수') && count.includes('벽상토')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "벽상토"는 담벼락을 의미한다. 주변의 사람들이 담벼락에 가려진 강을 못보고 지나가는 모양이다. 한 쪽의 재능을 가려버릴 수 있으니 주의가 필요하다.'
    }
    if(count.includes('장류수') && count.includes('금박금')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('장류수') && count.includes('복등화')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 태생이 약한 불이 강인한 물과 만났으니 금방 사그라질 모양이다. 둘의 궁합은 그다지 좋은 편은 아니다.'
    }
    if(count.includes('장류수') && count.includes('천하수')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "천하수"는 장마를 의미한다. 많은 양의 비가 강에 내려 범람하거나 더욱 큰 강이 될 수 있다. 또한 비의 영양분이 강에 사는 생명에 큰 도움이 되니 아주 훌륭한 궁합이다.'
    }
    if(count.includes('장류수') && count.includes('대역토')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "대역토"는 양음반전를 의미한다. 강의 물줄기가 바뀐다는 것을 암시한다. 지금 나아가는 일 또는 운명이 새로운 국면을 맞이한다는 것이다. 어느 방향으로 바뀌는지는 본인들의 상상에 맡기겠다.'
    }
    if(count.includes('장류수') && count.includes('차천금')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "차천금"는 연약한 금속을 의미한다. 안그래도 재련이 약한 금속이 물에 빠졌으니 더욱 못쓰게 된다. 둘이 좋은 궁합은 아니다..'
    }
    if(count.includes('장류수') && count.includes('상자목')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 위해 많은 양의 물이 필요한데 그 조건을 만족하는 매우 많은 양의 물이 있으니 서로에게 이익되는 긍정적인 영향을 주는 궁합이다.'
    }
    if(count.includes('장류수') && count.includes('대계수')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "대계수"는 큰 강을 의미한다. 큰 강과 큰 강이 만나면 평야를 만들고 그 곳은 매우 비옥한 땅이 되어 많은 곡식을 재배하여 큰 성공을 거둘 수 있다. 둘이 함께하면 큰 성공을 이룰 수 있으니 좋은 궁합이다.'
    }
    if(count.includes('장류수') && count.includes('사중토')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('장류수') && count.includes('천상화')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 하늘의 태양이 아무리 강력해도 강의 물을 모두 증발시킬 수 없다. 서로 상성이 나쁘지만 실제로 살펴보면 궁합자체는 나쁘지 않다.'
    }
    if(count.includes('장류수') && count.includes('석류목')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "석류목"은 석류나무를 의미한다. 석류나무가 성장해서 과실을 만드는데 많은 양의 물이 필요한데 그 조건을 만족하는 매우 많은 양의 물이 있으니 서로에게 이익되는 긍정적인 영향을 주는 궁합이다. 그렇게 완성된 열매라는 "결과"가 매우 달콤할 것이다.'
    }
    if(count.includes('장류수') && count.includes('대해수')) {
        resultText.textContent = '"장류수"는 큰 강을 의미한다. "대해수"는 큰 바다를 의미한다. 큰 강은 결국 바다로 흘러가게 된다. 이 둘은 하늘이 정해주고 자연이 정해준 궁합이다. 에초에 강과 바다는 경계가 명확하여 서로를 침범하지 않아 다툼의 가능성도 없다. 아주 훌륭한 궁합이라고 할 수 있다.'
    }
    if(count[0] === ('사중금') && count[1] === ('사중금')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. 둘다 재련이 필요한 금속인데 서로를 재련해주지 못하는 안타까운 궁합이다.'
    } 
    if(count.includes('사중금') && count.includes('산하화')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "산하화"는 산불을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('사중금') && count.includes('평지목')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "평지목"은 연약한 나무를 의미한다. 연약한 나무라도 녹슨 금속으로는 벨 수 없다. "금"과 "목"은 원래 좋은 궁합은 아니나 이 궁합은 예외다.'
    }
    if(count.includes('사중금') && count.includes('벽상토')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "벽상토"는 담벼락을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('사중금') && count.includes('금박금')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 겉이 어쨌든 둘 다 내실이 안타까우니 서로 발전에 도움이 되지 않는 안타까운 궁합이다..'
    }
    if(count.includes('사중금') && count.includes('복등화')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('사중금') && count.includes('천하수')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "천하수"는 장마를 의미한다. 안그래도 재련이 약한 금속이 비를 맞아 더욱 못쓰게 된다. 둘이 좋은 궁합은 아니다.'
    }
    if(count.includes('사중금') && count.includes('대역토')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "대역토"는 양음반전를 의미한다. 지금은 별 소용없는 금속이지만 추후에 어떠한 계기로 좋은 금속으로 바뀌는데 그 계기를 "대역토"가 가져다 줄 것이다. 엄청난 귀인이니 "사중금"은 항상 감사하면서 살아야한다..'
    }
    if(count.includes('사중금') && count.includes('차천금')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "차천금"는 연약한 금속을 의미한다. 둘다 재련이 필요한 금속인데 서로를 재련해주지 못하는 안타까운 궁합이다.'
    }
    if(count.includes('사중금') && count.includes('상자목')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "상자목"은 뽕나무를 의미한다. 얇은 뽕나무라도 녹슨 금속으로는 벨 수 없다. "금"과 "목"은 원래 좋은 궁합은 아니나 이 궁합은 예외다.'
    }
    if(count.includes('사중금') && count.includes('대계수')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "대계수"는 큰 강을 의미한다.. 이미 녹슨 금속이 또 다시 물에 빠져버렸다. 상성이 좋지 않다. 한 사람의 성격이나 사고 등 근본에 부정적인 영향을 줄 수 있다.'
    }
    if(count.includes('사중금') && count.includes('사중토')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "사중토"는 모래를 의미한다. 모래가 금속을 품은 모양으로 "토"의 기운을 가진 사람이 "철"의 사람을 포용하는 궁합이다. 한 사람을 포용하는 것은 쉬운 일이 아니니 본인 스스로가 지치지 않았는지 확인해야한다..'
    }
    if(count.includes('사중금') && count.includes('천상화')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "천상화"는 최강의 불을 의미한다. 최강의 불을 통해 훌륭한 금속으로 재련되어 다시 태어나 큰 일을 할 궁합이다. 아주 훌륭한 궁합이다.'
    }
    if(count.includes('사중금') && count.includes('석류목')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "석류목"은 석류나무를 의미한다. 석류나무라도 녹슨 금속으로는 벨 수 없다. "금"과 "목"은 원래 좋은 궁합은 아니나 이 궁합은 예외다.'
    }
    if(count.includes('사중금') && count.includes('대해수')) {
        resultText.textContent = '"사중금"은 모래속의 쇠(철)을 의미한다. "대해수"는 큰 바다를 의미한다. 이미 녹슨 금속이 바다속에 빠져 부식이 된다. 둘이 만나면 한 사람이 크게 망가지는 모양새이니 좋은 궁합이다.'
    }
    if(count[0] === ('산하화') && count[1] === ('산하화')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. 산불과 산불이 만나면 그야말로 재앙이다. 물론 이건 자연에 한정된 것이고 재앙이라고 부를 정도로 불타는 사랑을 의미한다. 오해의 소지가 있으니 확실히 말하겠다. 아주 좋은 궁합이다.'
    } 
    if(count.includes('산하화') && count.includes('평지목')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "평지목"은 불타는 나무를 의미한다. 둘의 납음이 일치한다. 속성의 상성은 나쁘지만 납음 자체는 좋은 궁합을 의미한다.'
    }
    if(count.includes('산하화') && count.includes('벽상토')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "벽상토"는 담벼락을 의미한다. 담벼락이 불을 막아준다. "화"의 기운을 가진 사람이 지나치게 커지더라도 "토"의 기운을 가진 사람이 막아주는 궁합이다. 지금은 몰라도 가까운 미래에 큰 도움이 되는 아름다운 궁합이다.'
    }
    if(count.includes('산하화') && count.includes('금박금')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('산하화') && count.includes('복등화')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 약한 불이 거대한 불과 만나 크게 성장하는 모양이다. "복등화"는 지금 바로 "산하화"에게 사랑한다고 열 번 말해야한다. 하지 않으면 안좋은 일이 일어난다.'
    }
    if(count.includes('산하화') && count.includes('천하수')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "천하수"는 장마를 의미한다. 장마 정도의 큰 비면 산불이 바로 진압된다. 한 사람의 근본을 지워버리는 안좋은 궁합이다.'
    }
    if(count.includes('산하화') && count.includes('대역토')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "대역토"는 양음반전를 의미한다. 산에 큰 불이 났는데 상황이 반전되어 꺼지게 된다. 큰 뜻을 가지고 행동하는 사람이 뜻을 펼칠 수 없는 궁합이다.'
    }
    if(count.includes('산하화') && count.includes('차천금')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "차천금"는 연약한 금속을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('산하화') && count.includes('상자목')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무에 불이 붙었다. 나무 중에서도 엄청 잘 타는 나무이다. 초반에 매우 불같은 사랑을 하지만 나무의 크기가 크지 않아 머지않아 꺼질 것이다. 나무의 크기에 따라 궁합이 오래 지속될 수도 일찍 끝날 수도 있다.'
    }
    if(count.includes('산하화') && count.includes('대계수')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "대계수"는 큰 강을 의미한다. 산불이 아무리 크게 나도 강을 넘어 갈 수는 없다. 한 쪽이 아무리 날뛰어도 다른 쪽이 충분히 커버가 된다는 것으로 크게 문제는 없고 사람이 어긋나는 것을 막아줄 수 있는 훌륭한 궁합이다.'
    }
    if(count.includes('산하화') && count.includes('사중토')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('산하화') && count.includes('천상화')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "천상화"는 최강의 불을 의미한다. 산불은 애초에 큰 불이라 더욱 커지기 어렵다. 하지만 최강의 불과 만나서 한계를 돌파하여 더욱 커질 것이다. 서로에게 도움이 되면서 성장시킬 수 있는 아주 좋은 조합이다.'
    }
    if(count.includes('산하화') && count.includes('석류목')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "석류목"은 석류나무를 의미한다. 나무에 불이 붙었다. 매우 불같은 사랑을 하지만 나무의 크기랑 불의 세기에 따라 언제까지 불타오를지 정해지니 아직 운명이 정해지지 않았다. 둘의 운명이 긍정적인 방향으로 흐르길 기도하겠다.'
    }
    if(count.includes('산하화') && count.includes('대해수')) {
        resultText.textContent = '"산하화"는 산불을 의미한다. "대해수"는 큰 바다를 의미한다. 큰 바닷물이면 산불을 꺼버릴 수 있다. 하지만 바닷물을 퍼오는 것은 매우 어려운 일이다. 둘이 서로에게 큰 상처를 주는 확률은 매우 적으나 한 번 상처를 주면 되돌릴 수 없으니 항상 주의해야 한다.'
    }
    if(count[0] === ('평지목') && count[1] === ('평지목')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. 연약한 나무가 혼자 있으면 거센 바람을 이겨낼 수 없다. 하지만 두 그루가 있으면 얘기가 다르다. 땅속에서 뿌리가 하나되어 이겨낼 수 있다. 이처럼 둘이 만나면 어떠한 역경이나 시련이 와도 이겨내는 힘을 얻는 궁합이다.'
    } 
    if(count.includes('평지목') && count.includes('벽상토')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "벽상토"는 담벼락을 의미한다. 작은 나무가 자라기 위해 햇빛을 봐야하는데 담벼락이 가려 성장에 방해된다. 한 사람이 큰 뜻을 품고 있어도 제 뜻을 펼치기 어렵다.'
    }
    if(count.includes('평지목') && count.includes('금박금')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 아직 성장가능성이 있는 나무가 "금"을 만나 잘못된 길로 갈 수 있는 궁합이다. "금"은 상대방이 잘못된 길로 빠지지 않도록 잘 인도해야 한다.'
    }
    if(count.includes('평지목') && count.includes('복등화')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 위태로운 불이라도 작고 연약한 나무는 쉽게 불태울 수 있다. 한 사람을 크게 상처입힐 궁합이니 서로를 배려하고 마음이 다치지 않도록 해야한다.'
    }
    if(count.includes('평지목') && count.includes('천하수')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "천하수"는 장마를 의미한다. 연약한 나무가 성장하기 위해 많은 양의 물이 필요한데 그 조건을 만족하는 매우 많은 양의 물이 있으니 서로에게 이익되는 긍정적인 영향을 주는 궁합이다.'
    }
    if(count.includes('평지목') && count.includes('대역토')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "대역토"는 양음반전를 의미한다. 지금은 연약한 나무지만 상황이 반전되어 매우 큰 거목으로 성장한다는 의미이다. 서로의 만남을 계기로 내면에 변화가 일어나 한 단계 성장하는 궁합이다..'
    }
    if(count.includes('평지목') && count.includes('차천금')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "차천금"는 연약한 금속을 의미한다. 연약한 금속이라도 약한 나무 정도는 베어버릴 수 있다. 자신도 모르게 상대에게 상처를 줄 수 있으니 항상 조심하는 것이 좋다.'
    }
    if(count.includes('평지목') && count.includes('상자목')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "상자목"은 뽕나무를 의미한다. 정해진 자원안에서 성장을 해야하는 나무 두 그루가 만났다. 좋게 보면 서로를 위해 경쟁하는 것이 될 수 있지만 정도가 심해지면 한 쪽을 꺾어버릴 수 있다. 항상 양보하는 마음을 가지는 것이 좋다.'
    }
    if(count.includes('평지목') && count.includes('대계수')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "대계수"는 큰 강을 의미한다. 연약한 나무가 성장하기 위해 많은 양의 물이 필요한데 그 조건을 만족하는 매우 많은 양의 물이 있으니 서로에게 이익되는 긍정적인 영향을 주는 궁합이다.'
    }
    if(count.includes('평지목') && count.includes('사중토')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "사중토"는 모래를 의미한다. 연약한 나무의 뿌리를 모래가 지탱해주지 못하고 물의 흡수력도 떨어뜨린다. 서로 상극인 궁합이니 만남을 다시 한 번 고려해보는 것이 좋겠다..'
    }
    if(count.includes('평지목') && count.includes('천상화')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "천상화"는 태양을 의미한다. 나무가 성장하기 위해 물 뿐만 아니라 강렬한 태양이 필요한데 최강의 태양과 만나 큰 성장을 이룰 궁합이다. 아주 좋은 궁합이다.'
    }
    if(count.includes('평지목') && count.includes('석류목')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "석류목"은 석류나무를 의미한다. 정해진 자원안에서 성장을 해야하는 나무 두 그루가 만났다. 좋게 보면 서로를 위해 경쟁하는 것이 될 수 있지만 정도가 심해지면 한 쪽을 꺾어버릴 수 있다. 항상 양보하는 마음을 가지는 것이 좋다.'
    }
    if(count.includes('평지목') && count.includes('대해수')) {
        resultText.textContent = '"평지목"은 연약한 나무를 의미한다. "대해수"는 큰 바다를 의미한다. 바다의 소금물이 연약한 나무에 스며들어 썩게하거나 말려 죽일 수 있다. 언제나 항상 서로에게 상처를 주지 않는지 살펴보아야 한다.'
    }
    if(count[0] === ('벽상토') && count[1] === ('벽상토')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. 담벼락끼리 서로를 보호하며 세상의 각 종 시련과 역경을 이겨 낼 수 있다. 아주 훌륭한 궁합이다.'
    } 
    if(count.includes('벽상토') && count.includes('금박금')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "금박금"은 겉먼 번지르르함을 의미한다. 담벼락에 금박을 바르면 예뻐지기는 하지만 제 역할에 큰 도움을 준다고 보긴 어렵다. 물론 생각하기 나름이지만 크게 도움이 되는 궁합은 아닌 것 같다.'
    }
    if(count.includes('벽상토') && count.includes('복등화')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('벽상토') && count.includes('천하수')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "천하수"는 장마를 의미한다. 장마가 아무리 내려도 담벼락을 넘기는 어렵다. "물"의 기운을 가진 사람이 다른 한 쪽을 괴롭히더라도 "흙"의 기운을 가진자를 넘을 수는 없다. 서로 다툼이 있더라도 크게 문제 되지는 않는다.'
    }
    if(count.includes('벽상토') && count.includes('대역토')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "대역토"는 양음반전를 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('벽상토') && count.includes('차천금')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "차천금"는 연약한 금속을 의미한다. 이 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('벽상토') && count.includes('상자목')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 위해 많은 햇빛이 필요한데 담벼락이 그늘을 만들어 햇빛 흡수를 방해한다. 하지만 가끔 불어오는 강력한 바람또한 같이 막아주기 떄문에 병주고 약주는 기묘한 조합이다.'
    }
    if(count.includes('벽상토') && count.includes('대계수')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "대계수"는 큰 강을 의미한다.  다른 사람이 담벼락에 가려 큰 강을 보는데 제약이 있을 수 있다. 담벼락의 크기가 크지 않으면 일부만 가릴 수 있으나 강이 생각보다 작고 담벼락이 크다면 흙이(담벼락) 물의 기운을 가로막는 모양새이다.'
    }
    if(count.includes('벽상토') && count.includes('사중토')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "사중토"는 모래를 의미한다. 담벼락이 만들어질 때 모래가 섞이면 압력차로 인하여 균열이 생기고 무너질 수 있다. "벽상토"가 자아나 경제적 여건이 완성된 상태에서 만남을 시작했다면 괜찮지만 그렇지 않다면 두 사람이 만나 한 사람의 성장을 방해하는 구도이다.'
    }
    if(count.includes('벽상토') && count.includes('천상화')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 한 여름 강렬한 태양빛 아래에서 담벼락을 통해 열기를 피할 수 있다. 두 사람만의 궁합은 그저 그렇다고 볼 수 있지만 주변 사람들에게 도움을 주어 평판이 매우 좋으니 약간 좋은 궁합이기도 하다.'
    }
    if(count.includes('벽상토') && count.includes('석류목')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "석류목"은 석류나무를 의미한다. 석류나무가 성장하기 위해 많은 햇빛이 필요한데 담벼락이 그늘을 만들어 햇빛 흡수를 방해한다. 하지만 가끔 불어오는 강력한 바람또한 같이 막아주기 떄문에 병주고 약주는 기묘한 조합이다.'
    }
    if(count.includes('벽상토') && count.includes('대해수')) {
        resultText.textContent = '"벽상토"는 담벼락을 의미한다. "대해수"는 큰 바다를 의미한다. 담벼락이 튼튼하더라도 바다의 해일은 막을 수 없다. 물론 해일이 일어날 확률은 적지만 한 번 일어나면 큰 피해가 일어 날 수 있으니, "물"의 기운을 가진 사람은 항상 조심하면 크게 문제 없는 궁합이다.'
    }
    if(count[0] === ('금박금') && count[1] === ('금박금')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. 겉멋만 든 둘이 만났다. 서로의 내면을 보고 만난게 아닌 육체 등 외부적인 요소만 보고 만났으니 오래갈 궁합은 아니다.'
    } 
    if(count.includes('금박금') && count.includes('복등화')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "복등화"는 뒤집힌 등불을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('천하수')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "천하수"는 장마를 의미한다. 장마의 많은 비로 인하여 겉면의 허례허식은 전부 벗겨지고 초라한 내면이 나타난다. 하지만 이 기회를 잡아 내면을 다시 쌓아올리면 큰 사람이 될 수 있으니 많은 노력을 기울어야 한다.'
    }
    if(count.includes('금박금') && count.includes('대역토')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "대역토"는 양음반전를 의미한다. "금박금"은 겉면만 번지르르하고 내면은 초라한데 "대역토"를 만나 두 면이 반전되어 화려한 면은 사라지고 초라한 내면이 드러난다. 하지만 이 기회를 잡아 내면을 다시 쌓아올리면 큰 사람이 될 수 있으니 많은 노력을 기울어야 한다.'
    }
    if(count.includes('금박금') && count.includes('차천금')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "차천금"는 연약한 금속을 의미한다. 아무리 그래도 연약한 금속이 성장하기 위해 좋은 멘토가 필요한데 그것이 겉멋만 든 사람이다. 아주 좋지 않은 궁합이다.'
    }
    if(count.includes('금박금') && count.includes('상자목')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "상자목"은 뽕나무를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('대계수')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "대계수"는 큰 강을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('사중토')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('천상화')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('석류목')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "석류목"은 석류나무를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('금박금') && count.includes('대해수')) {
        resultText.textContent = '"금박금"은 겉만 번지르르 함을 의미한다. "대해수"는 큰 바다를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count[0] === ('복등화') && count[1] === ('복등화')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. 위태로운 등불은 찬밥 더운밥 가릴 것 없이 아무리 작은 불이라도 필요하다. 둘의 만남으로 커질 수 있는 기회가 마련되었으니 열심히 노력하면 큰 성공을 가져 올 수 있는 궁합이다.'
    } 
    if(count.includes('복등화') && count.includes('천하수')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "천하수"는 장마를 의미한다. 안그래도 위태로운 등불이 장마를 만나 사그라진다. 한 사람이 다른 사람을 잡아먹는 궁합이다.'
    }
    if(count.includes('복등화') && count.includes('대역토')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "대역토"는 양음반전를 의미한다. 지금은 위태로운 등불이지만 둘의 만남이 계기가 되어 작은 불이 매우 크게 성장할 모양이다.'
    }
    if(count.includes('복등화') && count.includes('차천금')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "차천금"는 연약한 금속을 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('복등화') && count.includes('상자목')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "상자목"은 뽕나무를 의미한다. 작은 불이라도 뽕나무 정도는 불태울수 있다. 한 사람이 다른 사람을 잡아먹는 궁합이다.'
    }
    if(count.includes('복등화') && count.includes('대계수')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "대계수"는 큰 강을 의미한다. 안그래도 위태로운 등불이 강물에 의해 사그라진다. 한 사람이 다른 사람을 잡아먹는 궁합이다.'
    }
    if(count.includes('복등화') && count.includes('사중토')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('복등화') && count.includes('천상화')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 위태로운 등불은 찬밥 더운밥 가릴 것 없이 아무리 작은 불이라도 필요하다. 근데 최강의 불을 만나게 되었으니 매우 높은 확률로 크게 성장할 것이다. 항상 감사한 마음을 가지고 새로운 기회가 왔을 때 잡도록 준비해야 한다.'
    }
    if(count.includes('복등화') && count.includes('석류목')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "석류목"은 석류, 결실을 의미한다. 힘들게 열매를 만들었는데 불이 다 태워버렸다. 많은 노력을 해서 무언가를 이루었는데 그걸 엎어버릴 수 있으니 항상 주의해야 한다.'
    }
    if(count.includes('복등화') && count.includes('대해수')) {
        resultText.textContent = '"복등화"는 위태로운 등불을 의미한다. "대해수"는 큰 바다를 의미한다. 안그래도 위태로운 등불이 바닷물과 만나서 사그라진다. 한 사람이 다른 사람을 잡아먹는 궁합이다.'
    }
    if(count[0] === ('천하수') && count[1] === ('천하수')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. 장마와 장마가 만나면 상상하기 어려울 정도로 많은 양의 비가 온다. 서로의 같은 뜻을 지지하고 이루게 될 궁합이다.'
    } 
    if(count.includes('천하수') && count.includes('대역토')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "대역토"는 양음반전를 의미한다. 지금은 많은 양의 비가 오는 장마지만 이 시기는 거의 끝나고 다시 해가 뜨는 궁합이다. 지금 시련을 겪고 있거나 가까운 미래에 시련을 겪을 예정이지만 짧은 시간내에 끝날 것을 의미한다.'
    }
    if(count.includes('천하수') && count.includes('차천금')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "차천금"는 연약한 금속을 의미한다. 약한 금속이 장마와 만나 녹이 쓸어 못쓰게 된다. 한 사람이 다른 사름의 근본을 무너뜨릴 수 있으니 주의가 필요하다.'
    }
    if(count.includes('천하수') && count.includes('상자목')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "상자목"은 뽕나무를 의미한다. 뽕나무가 성장하기 위해선 많은 물이 필요한데 장마가 그것을 해결해준다. 한 사람이 다른 사람을 이끌어주는 훌륭한 궁합이다.'
    }
    if(count.includes('천하수') && count.includes('대계수')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "대계수"는 큰 강을 의미한다. 장마가 질소와 영양분을 강에 보급해주어 생태계가 발전한다. 둘이 만나면 한 단계 성장하는 무언가를 겪게 될 궁합이다.'
    }
    if(count.includes('천하수') && count.includes('사중토')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('천하수') && count.includes('천상화')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 최강의 태양이 구름을 몰아내어 장마를 멈추게 한다. 둘 또는 둘 중 한명이 겪고 있던 시련이 곧 끝나게 되는 궁합이다.'
    }
    if(count.includes('천하수') && count.includes('석류목')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "석류목"은 석류, 결실을 의미한다. 결실(열매)를 만들기 위해 매우 많은 양의 노력(물)이 있으니 뜻을 이루기에 매우 좋은 궁합이다.'
    }
    if(count.includes('천하수') && count.includes('대해수')) {
        resultText.textContent = '"천하수"는 장마를 의미한다. "대해수"는 큰 바다를 의미한다. 장마가 질소와 영양분을 해수면에 보급해주어 생태계가 발전한다. 둘이 만나면 한 단계 성장하는 무언가를 겪게 될 궁합이다.'
    }
    if(count[0] === ('대역토') && count[1] === ('대역토')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. 애매한 궁합이다. 사실 이 둘은 애매한 궁합인데 둘 다 큰 반전이 일어날 팔자지만 둘이 만나 양음이 조화를 이루어 평화가 찾아온다. 즉, 좋은 일이 일어날 팔자가 아무 일도 안 일어나고 나쁜 일이 일어날 팔자도 아무 일도 안 일어난다. 안정적인 궁합이다.'
    } 
    if(count.includes('대역토') && count.includes('차천금')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "차천금"는 연약한 금속을 의미한다. 지금은 약한 금속이지만 큰 반전이 일어나 훌륭한 금속으로 재련된다. 지금은 부족하지만 가까운 미래에 크게 성장할 무언가 새로운 동력이 생긴다.'
    }
    if(count.includes('대역토') && count.includes('상자목')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "상자목"은 뽕나무를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('대역토') && count.includes('대계수')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "대계수"는 큰 강을 의미한다. 강의 흐름과 물줄기가 바뀐다. 지금까지 해오던 일의 방향성이 달라지니 갑작스런 변화에 대응을 해야하는 궁합이다.'
    }
    if(count.includes('대역토') && count.includes('사중토')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "사중토"는 모래를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count.includes('대역토') && count.includes('천상화')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 태양이 정오를 지나 황혼이 되어 지기 시작했다. 지금까지 잘 해왔던 일이 뒤집어질 안좋은 궁합이다.'
    }
    if(count.includes('대역토') && count.includes('석류목')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "석류목"은 석류, 결실을 의미한다. 한 사람이 열심히 만든 무언가에 갑작스런 복병이 튀어나온다. 일이든 연애관계든 다양한 부분에서 나올 수 있으니 잘 준비해서 다가올 시련을 준비해야 한다.'
    }
    if(count.includes('대역토') && count.includes('대해수')) {
        resultText.textContent = '"대역토"는 양음반전 의미한다. "대해수"는 큰 바다를 의미한다. 둘이 만나면 크게 좋은 궁합도 나쁜 궁합도 아니다.'
    }
    if(count[0] === ('차천금') && count[1] === ('차천금')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. 연약한 금속은 재련이 필요한데 서로가 재련할 수 없는 안타까운 상황이다. 크게 도움이 되는 궁합은 아니다.'
    } 
    if(count.includes('차천금') && count.includes('상자목')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "상자목"은 뽕나무를 의미한다. 연약한 금속이라도 뽕나무는 베어버리기 충분하다. 둘 다 약한 기운을 가졌으니 상처를 준다해도 깊지는 않겠지만 상처 자체가 좋은 건 아니니 서로를 배려하며 살아야한다.'
    }
    if(count.includes('차천금') && count.includes('대계수')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "대계수"는 큰 강을 의미한다. 약한 금속이 물에 빠져 녹슬게 되니 쓸모가 없어지게 된다. 서로의 궁합이 좋지는 않으나 노력하면 극복할 수 있다.'
    }
    if(count.includes('차천금') && count.includes('사중토')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "사중토"는 모래를 의미한다. 연약한 금속이 모래에 빠져 재련이 필요하게 된다. 아직은 때가 아니지만 꾹 참고 기다리면 좋은 기회가 올테니 서로를 안아줘서 잘 견디길 바란다.'
    }
    if(count.includes('차천금') && count.includes('천상화')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 강력한 불로 금속을 녹여 새롭게 재련한다. 한 사람이 새롭게 태어나는 모양으로 아주 훌륭한 궁합이다.'
    }
    if(count.includes('차천금') && count.includes('석류목')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "석류목"은 석류, 결실을 의미한다. 석류나무라도 약한 금속으로는 벨 수 없다. "금"과 "목"은 원래 좋은 궁합은 아니나 이 궁합은 나쁘진 않다.'
    }
    if(count.includes('차천금') && count.includes('대해수')) {
        resultText.textContent = '"차천금"은 연약한 금속을 의미한다. "대해수"는 큰 바다를 의미한다. 약한 금속이 큰 바다에 빠져 녹슬게 되니 쓸모가 없어지게 된다. 너무 깊게 빠져 되돌아 올 수 없으니 상성이 최악인 궁합이다.'
    }
    if(count[0] === ('상자목') && count[1] === ('상자목')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. 아낌없이 퍼주는 훌륭한 인품을 가진 두 사람이 만났으니 하늘이 그대들의 인연을 축복해주고 모든 역경과 시련을 극복하게 해줄 것이다. 그 훌륭한 인품이 빛바래지 않도록 조심해야 한다.'
    } 
    if(count.includes('상자목') && count.includes('대계수')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. "대계수"는 큰 강을 의미한다. 아낌없이 주는 나무가 많은 양의 물을 만나 극한의 성장을 하여 자신의 인품과 내면이 크게 성장하는 모양이다. 그 훌륭한 인품이 빛바래지 않도록 조심해야 한다.'
    }
    if(count.includes('상자목') && count.includes('사중토')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. "사중토"는 모래를 의미한다. 뽕나무가 모래때문에 물을 흡수하지 못하고 뿌리 부분이 지탱되지 않아 매우 불안정한 상태가 된다. 나무의 훌륭한 인품이 상황에 의해 방해될 수 있으니 주의해야한다.'
    }
    if(count.includes('상자목') && count.includes('천상화')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 아낌없이 주는 나무가 최강의 태양을 만나 극한의 성장을 하여 자신의 인품과 내면이 크게 성장하는 모양이다. 그 훌륭한 인품이 빛바래지 않도록 조심해야 한다.'
    }
    if(count.includes('상자목') && count.includes('석류목')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. "석류목"은 석류, 결실을 의미한다. 석류나무와 뽕나무가 만나 서로의 뿌리를 연결하여 거센 바람 등의 역경과 시련을 이겨낼 수 있게 되었다. 서로에게 큰 도움이 되는 아주 훌륭한 궁합이다.'
    }
    if(count.includes('상자목') && count.includes('대해수')) {
        resultText.textContent = '"상자목"은 뽕나무, 아낌없이 주는 나무를 의미한다. "대해수"는 큰 바다를 의미한다. 뽕나무가 바닷물과 만나 썩어들어가게 된다. 한 사람의 인품과 성격을 망칠뿐만 아니라 근본 자체에 큰 악영향을 주는 안좋은 궁합이다.'
    }
    if(count[0] === ('대계수') && count[1] === ('대계수')) {
        resultText.textContent = '"대계수"는 큰 강을 의미한다.  큰 강과 큰 강이 만나면 평야를 만들고 그 곳은 매우 비옥한 땅이 되어 많은 곡식을 재배하여 큰 성공을 거둘 수 있다. 둘이 함께하면 큰 성공을 이룰 수 있으니 좋은 궁합이다.'
    } 
    if(count.includes('대계수') && count.includes('사중토')) {
        resultText.textContent = '"대계수"는 큰 강을 의미한다. "사중토"는 모래를 의미한다. 큰 강에 모래가 빠려 흐름에 따라 많은 곳을 돌아다니게 되는 궁합이다. 에초에 떠도는 것에 익숙하거나 좋아하면 괜찮지만 다른 사람이 품은 큰 뜻의 크기에 따라 여행의 시기가 길어질 수 있다.'
    }
    if(count.includes('대계수') && count.includes('천상화')) {
        resultText.textContent = '"대계수"는 큰 강을 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 강렬한 태양이라도 큰 강의 물을 모두 없앨 수는 없다. 하지만 조금씩 증발이 되어 구름이 되고 다시 비가 내려 강으로 흘러간다. 한 사람의 형태를 변화시켜 다양한 경험을 하게 하지만 본질은 변하지 않는다. 크게 보면 성장하는데 큰 기여를 하는 좋은 궁합이다.'
    }
    if(count.includes('대계수') && count.includes('석류목')) {
        resultText.textContent = '"대계수"는 큰 강을 의미한다. "석류목"은 석류, 결실을 의미한다. 석류나무가 결실을 맺기위해 많은 물이 필요하다. 마침 옆에 큰 강이 있어 수월하게 열매를 맺을 것이다. 어떠한 일을 하는데 어려움이 찾아올 수 있는데 연인의 도움으로 수월하게 넘기는 모양이다. 아주 좋은 궁합이다.'
    }
    if(count.includes('대계수') && count.includes('대해수')) {
        resultText.textContent = '"대계수"는 큰 강을 의미한다. "대해수"는 큰 바다를 의미한다. 큰 강은 결국 바다로 흘러가게 된다. 이 둘은 하늘이 정해주고 자연이 정해준 궁합이다. 에초에 강과 바다는 경계가 명확하여 서로를 침범하지 않아 다툼의 가능성도 없다. 아주 훌륭한 궁합이라고 할 수 있다.'
    }
    if(count[0] === ('사중토') && count[1] === ('사중토')) {
        resultText.textContent = '"사중토"는 모래를 의미한다. 모래와 모래가 만나 매우 넓은 사막이 만들어졌다. 서로가 만나는 과정이 사막에서 돌아다니는 것처럼 천천히 지쳐갈 것이다. 하지만 서로에게 오아시스가 되어주어 지치지 않게 해주면 좋은 궁합이다.'
    } 
    if(count.includes('사중토') && count.includes('천상화')) {
        resultText.textContent = '"사중토"는 모래를 의미한다. "천상화"는 하늘의 불, 태양을 의미한다. 강렬한 태양이라도 큰 강의 물을 모두 없앨 수는 없다. 하지만 조금씩 증발이 되어 구름이 되고 다시 비가 내려 강으로 흘러간다. 한 사람의 형태를 변화시켜 다양한 경험을 하게 하지만 본질은 변하지 않는다. 크게 보면 성장하는데 큰 기여를 하는 좋은 궁합이다.'
    }
    if(count.includes('사중토') && count.includes('석류목')) {
        resultText.textContent = '"사중토"는 모래를 의미한다. "석류목"은 석류, 결실을 의미한다. 이 둘이 만나면 좋지도 나쁘지도 않은 애매한 궁합이 된다.'
    }
    if(count.includes('사중토') && count.includes('대해수')) {
        resultText.textContent = '"사중토"는 모래를 의미한다. "대해수"는 큰 바다를 의미한다. 바다에 모래가 만나 해수욕장이 되어 많은 인연이 만들어지는 공간이 된다. 두 사람이 함께 있으면 수많은 사람을 만나게 될 것인데 그 중에서 귀인이 여러 있으니 좋은 사람을 잘 가려내어 사귀도록 하면 좋을 것이다.'
    }
    if(count[0] === ('천상화') && count[1] === ('천상화')) {
        resultText.textContent = '"천상화"는 최강의 불, 하늘의 태양을 의미한다. 하늘에 태양이 두개가 떠있다가 하나로 합쳐져 더욱 밝은 태양이 되었다. 이미 서로의 존재는 매우 밝고 강인했지만 그 둘이 하나가 되어 최강의 태양이 되니 그 어떠한 시련과 역경도 이겨낼 수 있으리라.'
    } 
    if(count.includes('천상화') && count.includes('석류목')) {
        resultText.textContent = '"천상화"는 최강의 불, 하늘의 태양을 의미한다. "석류목"은 석류, 결실을 의미한다. 결실이란 열매를 맺기 위해 많은 양의 에너지가 필요한데 그 태양이 충분한 에너지를 줄 수 있다. 아주 훌륭한 궁합이니 항상 서로에게 감사하는 것이 좋을 것 같다.'
    }
    if(count.includes('천상화') && count.includes('대해수')) {
        resultText.textContent = '"천상화"는 최강의 불, 하늘의 태양을 의미한다. "대해수"는 큰 바다를 의미한다. 태양이 바다에 잔상이 비치고 푸른 바다의 지구가 태양에 투영되어 개기일식이 일어나니 서로의 아름다운 모습과 장점 서로에게 투영시키는 훌륭하고 아름다운 궁합이다.'
    }
    if(count[0] === ('석류목') && count[1] === ('석류목')) {
        resultText.textContent = '"석류목"는 석류나무, 결실을 의미한다. 두 사람이 사랑을 하게되어 각자 생각한 목표가 있는데 그것이 반드시 이루어 진다는 의미를 가지고 있다. '
    } 
    if(count.includes('석류목') && count.includes('대해수')) {
        resultText.textContent = '"석류목"는 석류나무, 결실을 의미한다. "대해수"는 큰 바다를 의미한다. 힘들게 열매를 완성시켰는데 바닷물에 빠져버린 상황이다. 물론 찾기 힘들겠지만 불가능한 것은 아니니 열심히 노력해야겠다. 여기서 의미하는 결실은 무엇인지는 말하지 않겠다.'
    }
    if(count[0] === ('대해수') && count[1] === ('대해수')) {
        resultText.textContent = '"대해수"는 큰 바다를 의미한다. 큰 바다와 큰 바다가 만나서 깊고 거대한 바다가 되었다. 혼자서는 시간이 매우 오래걸리거나 불가능했던 것이 둘이 만나 가능해진 것이다. 만약 자신이 무언가를 하고 있는데 잘 안되면 연인에게 물어보자. 도움을 받으면 항상 감사해야하는 것을 잊으면 안된다.'
    } 
}

let manYear2 = localStorage.getItem("manYear")
let womanYear2 = localStorage.getItem("womanYear")


if((manYear2 - 1804) % 60 === 0 || (manYear2 - 1805) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "해중금(海中金)"
    count.push("해중금")
}
if((womanYear2 - 1804) % 60 === 0 || (womanYear2 - 1805) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "해중금(海中金)"
    count.push("해중금")
}
if((manYear2 - 1806) % 60 === 0 || (manYear2 - 1807) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "노중화(爐中火)"
    count.push("노중화")
}
if((womanYear2 - 1806) % 60 === 0 || (womanYear2 - 1807) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "노중화(爐中火)"
    count.push("노중화")
}
if((manYear2 - 1808) % 60 === 0 || (manYear2 - 1809) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "대림목(大林木)"
    count.push("대림목")
}
if((womanYear2 - 1808) % 60 === 0 || (womanYear2 - 1809) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "대림목(大林木)"
    count.push("대림목")
}
if((manYear2 - 1810) % 60 === 0 || (manYear2 - 1811) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "노방토(路傍土)"
    count.push("노방토")
}
if((womanYear2 - 1810) % 60 === 0 || (womanYear2 - 1811) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "노방토(路傍土)"
    count.push("노방토")
}
if((manYear2 - 1812) % 60 === 0 || (manYear2 - 1813) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "검봉금(劍鋒金)"
    count.push("검봉금")
}
if((womanYear2 - 1812) % 60 === 0 || (womanYear2 - 1813) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "검봉금(劍鋒金)"
    count.push("검봉금")
}
if((manYear2 - 1814) % 60 === 0 || (manYear2 - 1815) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "산두화(山頭火)"
    count.push("산두화")
}
if((womanYear2 - 1814) % 60 === 0 || (womanYear2 - 1815) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "산두화(山頭火)"
    count.push("산두화")
}
if((manYear2 - 1816) % 60 === 0 || (manYear2 - 1817) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "간하수(澗下水)"
    count.push("간하수")
}
if((womanYear2 - 1816) % 60 === 0 || (womanYear2 - 1817) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "간하수(澗下水)"
    count.push("간하수")
}
if((manYear2 - 1818) % 60 === 0 || (manYear2 - 1819) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "성두토(城頭土)"
    count.push("성두토")
}
if((womanYear2 - 1818) % 60 === 0 || (womanYear2 - 1819) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "성두토(城頭土)"
    count.push("성두토")
}
if((manYear2 - 1820) % 60 === 0 || (manYear2 - 1821) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "백랍금(白蠟金)"
    count.push("백랍금")
}
if((womanYear2 - 1820) % 60 === 0 || (womanYear2 - 1821) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "백랍금(白蠟金)"
    count.push("백랍금")
}
if((manYear2 - 1822) % 60 === 0 || (manYear2 - 1823) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "양류목(楊柳木)"
    count.push("양류목")
}
if((womanYear2 - 1822) % 60 === 0 || (womanYear2 - 1823) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "양류목(楊柳木)"
    count.push("양류목")
}
if((manYear2 - 1824) % 60 === 0 || (manYear2 - 1825) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "천중수(泉中水)"
    count.push("천중수")
}
if((womanYear2 - 1824) % 60 === 0 || (womanYear2 - 1825) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "천중수(泉中水)"
    count.push("천중수")
}
if((manYear2 - 1826) % 60 === 0 || (manYear2 - 1827) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "옥상토(屋上土)"
    count.push("옥상토")
}
if((womanYear2 - 1826) % 60 === 0 || (womanYear2 - 1827) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "옥상토(屋上土)"
    count.push("옥상토")
}
if((manYear2 - 1828) % 60 === 0 || (manYear2 - 1829) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "벽력화(霹靂火)"
    count.push("벽력화")
}
if((womanYear2 - 1828) % 60 === 0 || (womanYear2 - 1829) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "벽력화(霹靂火)"
    count.push("벽력화")
}
if((manYear2 - 1830) % 60 === 0 || (manYear2 - 1831) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "송백목(松柏木)"
    count.push("송백목")
}
if((womanYear2 - 1830) % 60 === 0 || (womanYear2 - 1831) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "송백목(松柏木)"
    count.push("송백목")
}
if((manYear2 - 1832) % 60 === 0 || (manYear2 - 1833) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "장류수(長流水)"
    count.push("장류수")
}
if((womanYear2 - 1832) % 60 === 0 || (womanYear2 - 1833) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "장류수(長流水)"
    count.push("장류수")
}
if((manYear2 - 1834) % 60 === 0 || (manYear2 - 1835) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "사중금(四重禁)"
    count.push("사중금")
}
if((womanYear2 - 1834) % 60 === 0 || (womanYear2 - 1835) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "사중금(四重禁)"
    count.push("사중금")
}
if((manYear2 - 1836) % 60 === 0 || (manYear2 - 1837) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "산하화(山下火)"
    count.push("산하화")
}
if((womanYear2 - 1836) % 60 === 0 || (womanYear2 - 1837) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "산하화(山下火)"
    count.push("산하화")
}
if((manYear2 - 1838) % 60 === 0 || (manYear2 - 1839) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "평지목(平地木)"
    count.push("평지목")
}
if((womanYear2 - 1838) % 60 === 0 || (womanYear2 - 1839) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "평지목(平地木)"
    count.push("평지목")
}
if((manYear2 - 1840) % 60 === 0 || (manYear2 - 1841) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "벽상토(壁上土)"
    count.push("벽상토")
}
if((womanYear2 - 1840) % 60 === 0 || (womanYear2 - 1841) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "벽상토(壁上土)"
    count.push("벽상토")
}
if((manYear2 - 1842) % 60 === 0 || (manYear2 - 1843) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "금박금(金箔金)"
    count.push("금박금")
}
if((womanYear2 - 1842) % 60 === 0 || (womanYear2 - 1843) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "금박금(金箔金)"
    count.push("금박금")
}
if((manYear2 - 1844) % 60 === 0 || (manYear2 - 1845) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "복등화(覆燈火)"
    count.push("복등화")
}
if((womanYear2 - 1844) % 60 === 0 || (womanYear2 - 1845) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "복등화(覆燈火)"
    count.push("복등화")
}
if((manYear2 - 1846) % 60 === 0 || (manYear2 - 1847) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "천하수(天下水)"
    count.push("천하수")
}
if((womanYear2 - 1846) % 60 === 0 || (womanYear2 - 1847) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "천하수(天下水)"
    count.push("천하수")
}
if((manYear2 - 1848) % 60 === 0 || (manYear2 - 1849) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "대역토(大驛土)"
    count.push("대역토")
}
if((womanYear2 - 1848) % 60 === 0 || (womanYear2 - 1849) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "대역토(大驛土)"
    count.push("대역토")
}
if((manYear2 - 1850) % 60 === 0 || (manYear2 - 1851) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "차천금(釵釧金)"
    count.push("차천금")
}
if((womanYear2 - 1850) % 60 === 0 || (womanYear2 - 1851) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "차천금(釵釧金)"
    count.push("차천금")
}
if((manYear2 - 1852) % 60 === 0 || (manYear2 - 1853) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "상자목(桑柘木)"
    count.push("상자목")
}
if((womanYear2 - 1852) % 60 === 0 || (womanYear2 - 1853) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "상자목(桑柘木)"
    count.push("상자목")
}
if((manYear2 - 1854) % 60 === 0 || (manYear2 - 1855) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "대계수(大溪水)"
    count.push("대계수")
}
if((womanYear2 - 1854) % 60 === 0 || (womanYear2 - 1855) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "대계수(大溪水)"
    count.push("대계수")
}
if((manYear2 - 1856) % 60 === 0 || (manYear2 - 1857) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "사중토(沙中土)"
    count.push("사중토")
}
if((womanYear2 - 1856) % 60 === 0 || (womanYear2 - 1857) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "사중토(沙中土)"
    count.push("사중토")
}
if((manYear2 - 1858) % 60 === 0 || (manYear2 - 1859) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "천상화(天上花)"
    count.push("천상화")
}
if((womanYear2 - 1858) % 60 === 0 || (womanYear2 - 1859) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "천상화(天上花)"
    count.push("천상화")
}
if((manYear2 - 1860) % 60 === 0 || (manYear2 - 1861) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "석류목(石榴木)"
    count.push("석류목")
}
if((womanYear2 - 1860) % 60 === 0 || (womanYear2 - 1861) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "석류목(石榴木)"
    count.push("석류목")
}
if((manYear2 - 1862) % 60 === 0 || (manYear2 - 1863) % 60 === 0) {
    manName.textContent = localStorage.getItem("manName")
    manYear.textContent = manYear2
    manBehave.textContent = "대해수(大海水)"
    count.push("대해수")
}
if((womanYear2 - 1862) % 60 === 0 || (womanYear2 - 1863) % 60 === 0) {
    womanName.textContent = localStorage.getItem("womanName")
    womanYear.textContent = womanYear2
    womanBehave.textContent = "대해수(大海水)"
    count.push("대해수")
}


masterF()

// open('http://www.naver.com')
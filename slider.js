
// work slider

// slider 문서객체
const slider = document.querySelector('.slider');
const sliders = document.querySelector('.sliders');
// pager 버튼
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// 슬라이더 요소
const slides = document.querySelectorAll('.sliders > .slide')
const slideLength = slides.length;  // 이미지 장수
let imgNum = 0; // 이미지 번호

console.log(slides.length)

function changeSlide(num) {
  slides.forEach(function(slide) {
    slide.classList.remove('prev', 'next', 'current') // 전체 클래스 초기화
  })

  // 현재 슬라이드
  const curImg = slides[num];
  curImg.classList.remove('prev', 'next', 'current') // 기존 클래스 초기화
  curImg.classList.add('current') // 현재 슬라이드 설정

  // 이전 슬라이드(현재 슬라이드 기준)
  const preImg = (num == 0) ? slides[slideLength - 1] : slides[num - 1];
  preImg.classList.remove('prev', 'next', 'current')
  preImg.classList.add('prev')

  // 다음 슬라이드(현재 슬라이드 기준)
  const nextImg = slides[(num + 1) % slideLength];
  nextImg.classList.remove('prev', 'next', 'current')
  nextImg.classList.add('next')

  // slide 콘텐츠 높이 만큼 sliders의 높이값 갱신
  sliders.style.height = document.querySelector('.slider .current').offsetHeight + 'px';
  console.log(sliders.style.height);
}


window.onload = function(){
  // 슬라이더 시작
  changeSlide(0)
}

// 이벤트
btnNext.addEventListener('click', function(){
  imgNum++;
  if(imgNum >= slides.length) {
    imgNum = 0;
  }
  changeSlide(imgNum);
  console.log('imgNum = ', imgNum);
})

btnPrev.addEventListener('click', function(){
  imgNum--;
  if(imgNum < 0) {
    imgNum = slideLength - 1;
  }
  changeSlide(imgNum);
  console.log('imgNum = ', imgNum);
})

// 윈도우 크기 변경시 슬라이드 높이 갱신
window.addEventListener('resize', function(){
  // slide 콘텐츠 높이 만큼 sliders의 높이값 갱신
  sliders.style.height = document.querySelector('.slider .current').offsetHeight + 'px';
})

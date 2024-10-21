// 定义月亮颜色数组
const moonColors = ['white', 'yellow', 'lightblue'];
// 获取月亮元素
const moon = document.getElementById('moon');
let currentMoonColorIndex = 0;

// 定义星星颜色数组
const starColors = ['white', 'yellow','orange'];
// 获取星星元素
const star = document.querySelector('.star');
let currentStarColorIndex = 0;

// 点击月亮时改变颜色的函数
function changeMoonColor() {
  moon.style.backgroundColor = moonColors[currentMoonColorIndex];
  currentMoonColorIndex = (currentMoonColorIndex + 1) % moonColors.length;
}

// 点击星星时改变颜色的函数
function changeStarColor() {
  star.style.backgroundColor = starColors[currentStarColorIndex];
  currentStarColorIndex = (currentStarColorIndex + 1) % starColors.length;
}
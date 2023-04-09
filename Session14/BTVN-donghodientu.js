let backgrounds = [
    '1-background.jpg',
    '2-background.jpg',
    '3-background.jpg'
  ];
  
  let songs = [
    'La-Anh-Loi-Viet-Pham-Lich.mp3',
    'Until-You-Shayne-Ward.mp3',
    'Lemon-KenshiYonezu.mp3'
  ];


// Lấy các phần tử HTML cần thiết
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let musicElement = document.querySelector('.music');
let backgroundElement = document.querySelector('.background');

    // console.log(hoursElement);
    // console.log(minutesElement);
    // console.log(secondsElement);


// Biến lưu trữ vị trí của bài hát và hình nền hiện tại trong mảng
let currentSongIndex = 0;
let currentBackgroundIndex = 0;

// Hàm để định dạng số thành chuỗi có 2 chữ số
function formatNumber(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

// Hàm để cập nhật thời gian trên đồng hồ
function updateTime() {
  let date = new Date();
  let hours = formatNumber(date.getHours());
  let minutes = formatNumber(date.getMinutes());
  let seconds = formatNumber(date.getSeconds());
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  //console.log(`${hours}:${minutes}:${seconds}`);
  // Kiểm tra nếu đang là 5 phút hoặc 10 phút, thực hiện các yêu cầu tương ứng
  if (minutes === '05') {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    musicElement.src = songs[currentSongIndex];
  }

  if (minutes === '10') {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    backgroundElement.style.backgroundImage = `${backgrounds[currentBackgroundIndex]}`;
  }
}

// Gọi hàm updateTime mỗi giây (1000ms = 1s)
setInterval(updateTime, 1000);

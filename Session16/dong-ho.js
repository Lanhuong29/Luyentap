let show = document.getElementById('show_time');
let music = document.getElementById('music');
let listMusics = [
    '../Session14/La-Anh-Loi-Viet-Pham-Lich.mp3',
    '../Session14/Lemon-KenshiYonezu.mp3',
    '../Session14/Until-You-Shayne-Ward.mp3'
]

//Hiển thị đồng hồ
music.play(); //Hàm để tự động chạy audio bằng JS
let showTime = setInterval(function() {
    let now = new Date();
    show.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}, 1000); //Hàm setInterval được chạy lặp lại sau mỗi 1000ms (1s)


//Chạy nhạc
let playMusic = setInterval(function() {
    //Chuyển bài hát, đọc đường dẫn nhạc từ mảng listMusics

    //Chạy bài hát
    music.pause();
    // music.play();
}, 300000); //5 phút chạy 1 lần


//Đổi ảnh nền
document.getElementById('').style.backgroundImage = 'url()';

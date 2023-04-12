let btn = document.getElementById('btn');
let txtId = document.getElementById('txtId'); //Lấy dữ liệu từ trong các ô input của những dòng trong html
let txtPhone = document.getElementById('txtName');
let txtAge = document.getElementById('txtAge');
let txtName = document.getElementById('txtPhone');
let txtEmail = document.getElementById('txtEmail');
let list = document.getElementById('list');

//Xử lý sự kiện
btn.onclick = function(evt) {
    // alert("Clicked!"); //Kiểm tra xem sự kiện đã được bắt đúng chưa (xử dụng để kiểm tra sự kiện được thực thi)
    // Lấy giá trị của ô ID (Nếu <6 thì...)
    if (txtId.value.length != 6) {
        alert("Mã sinh viên phải có 6 ký tự");
        return;
    }
    if (txtName.value == "") {
        alert("Vui lòng nhập tên sinh viên");
        return;
    }
    if (txtAge.value == "" || parseInt(txtAge.value) < 18) {
        alert("Tuổi phải lớn hơn hoặc bằng 18");
        return;
    }
                //2.
                //Có 2 cách so sánh
                //1. So sánh length có = 0 hay không
                //2. So sánh giá trị có = "" (chuỗi rỗng) hay không

                //3.
                //Có 2 lựa chọn so sánh
                //1. Lấy value (đang có type = text nên dữ liệu nhập vào sẽ là dạng chuỗi) rồi chuyển thành số
                //2. Đổi type ở file html thành type = number

        //Dữ liệu hợp lệ
        //Thêm dữ liệu hiển thị vào bảng


    let row = `<tr>
    <td>${txtId.value}</td>
    <td>${txtName.value}</td>
    <td>${txtAge.value}</td>
    <td>${txtPhone.value}</td>
    <td>${txtEmail.value}</td>
    </tr>`;

list.innerHTML += row; //inner HTML: thay đổi toàn bộ nội dung trong HTML
            //inner HTML = row tức là sau mỗi lần bấm Create sẽ tạo ra một hàng mới. Nội dung của hàng mới này sẽ thay thế hoàn toàn nội dung của hàng cũ (vì đang dùng inner HTML). Vì thế cần phải thay thế theo dạng cộng chuỗi (để lưu lại thông tin đã nhập trước đó).

}




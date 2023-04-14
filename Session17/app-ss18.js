// Định nghĩa lớp Nhiệm vụ
class User {
    constructor(id = 0, username = '', email = '', password = '', status = true) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.status = status;
    }
}

// Khai báo khởi tại mảng nhiệm vụ
function loadUser() {
    let userList = JSON.parse(localStorage.getItem('users')) || [];
    let html = userList.map((item, index) => {
        return `
            <tr>
                <td>${index}</td>
                <td>${item.username}</td>
                <td>${item.status ? 'Đang hoạt động' : 'Tạm dừng'}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                
                <td>
                    <button data-username="${item.username}" class="btnEdit">Sửa</button>
                    <button class="btnDel">Xóa</button>
                </td>
            </tr>
        `;
    })
    html = html.join();
    $('tbody.list').html(html);
}

        // function loadUser2() {
        //     let userList = JSON.parse(localStorage.getItem('users')) || [];
        //     let html = '';
        //     for (let i = 0; i < userList.length; i++) {
        //         let item = userList[i];
        //         html += `
        //         <tr>
        //             <td>${i}</td>
        //             <td>${item.username}</td>
        //             <td>${item.status ? 'Đang hoạt động' : 'Tạm dừng'}</td>
        //             <td>${item.email}</td>
        //             <td>${item.password}</td>
                    
        //             <td>
        //                 <button data-username="${item.username}" class="btnEdit">Sửa</button>
        //                 <button class="btnDel">Xóa</button>
        //             </td>
        //         </tr>
        //     `
        //     }
            
        //     $('tbody.list').html(html);
        // }

        // loadUser2();

$(document).on('click', '.btnEdit', function () {
    let userList = JSON.parse(localStorage.getItem('users')) || [];
    let user = userList.find(x => x.username == $(this).data('username'));
    $('#id-username').val(user.username);
    $('#username').val(user.username);
    $('#status').val(user.status ? 1 : 0);
    $('#email').val(user.email);
    $('#password').val(user.password);
});

$('.btnSave').on('click', function () {

    let username = $('#username').val();
    let status = $('#status').val() == 1 ? true : false;
    let email = $('#email').val();
    let password = $('#password').val();

    let userList = JSON.parse(localStorage.getItem('users')) || [];
    if ($('#id-username').val()) {
        let index = userList.findIndex(c => c.username == $('#id-username').val());

        userList[index].username = username;
        userList[index].status = status;
        userList[index].email = email;
        userList[index].password = password;
    } else {
        let user = {
            username,
            email,
            password,
            status,
        };

        userList.push(user);
    }


    $('#id-username').val('');
    $('#username').val('');
    $('#status').val(1);
    $('#email').val('');
    $('#password').val('');

    localStorage.setItem('users', JSON.stringify(userList));
    loadUser()
});



// list => form => update localStorage => list

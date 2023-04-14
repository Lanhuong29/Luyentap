
// Định nghĩa lớp Nhiệm vụ
class Task {
    constructor(id = 0, name = '', status = false) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

// Khai báo khởi tạo mảng Nhiệm vụ
var tasks = [new Task(1, 'Buy flower for girlfriend', false)];
var tasks = [new Task(2, 'Buy flower for girlfriend 2', false)];
var tasks = [new Task(3, 'Buy flower for girlfriend 3', false)];

// Định nghĩa hàm hiển thị nhiệm vụ
function loadTasks() {
    let row = '';
    for (let t of tasks) {
        row += `
            <tr data-id='${t.id}'>
                <td>${t.id}</td>
                <td>${t.name}</td>
                <td>
                    <select class="taskStatus" name="" id="">
                        <option value="false" ${t.status? '' : 'selected'}>In Progress</option>
                        <option value="true" ${t.status? 'selected' : ''}>Done</option>
                    </select>
                </td>
                <td>
                    <button class="btnEdit">Edit</button>
                    <button class="btnDel">Delete</button>
                </td>
            </tr>
        `
    } 
}

// Xử lý sự kiện update trạng thái
$(document).on('change', '.taskStatus', (function(){
    let tr = $(this).parents('tr');
    let id = $(tr).data('id');
    let stt = $(this).val();
                // tasks = tasks.map(t => {
                //     if (t.id == id) {
                //         t.status = stt == 'true' ? true : false;
                //     }
                //     return t;
                // })
                // console.log(tasks);
                // })
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].status = stt == 'true' ? true : false;
        }
    }
})
);

$(document).on('click', '.btnEdit', (function(){
    let tr = $(this).parents('tr');
    let id = $(tr).data('id');
    let _task = tasks.find(t => t.id == id);
    $('.taskId').val(_task.id);
    $('.taskName').val(_task.name);
})
)
$('.btnSave').click(function(){
    if ($('.taskId').val() != '') { //sửa
        let id = parseInt($('.taskId').val());
        tasks = tasks.map(t => {
            if (t.id == id) {
                t.status = stt == 'true' ? true : false;
            }
            return t;
        })  
    } else { //thêm mới
        let newTask = new Task();
        newTask.id = tasks.length + 1;
        newTask.name = $('.taskName').val();
        tasks.push(newTask);
    }
    loadTasks();
})
$(document).on('click', '.btnDel', (function(){
    if (confirm = 'Bạn có muốn xóa không?') {
        let tr = $(this).parents('tr');
        let id = $(tr).data('id');
        // tìm Task cần xóa
        let _taskIndex = tasks.findIndex(t => t.id == id);
        // Xóa
        tasks.splice(_taskIndex, 1);
        loadTasks();
    }
})
)
loadTasks();
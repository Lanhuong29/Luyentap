// $(document).ready(function() {
//     // lấy danh sách ghi chú từ localStorage nếu có
//     let todos = JSON.parse(localStorage.getItem('todos')) || [];

//     // hiển thị danh sách ghi chú
//     displayTodos();
 
//     // thêm ghi chú mới
//     $('.save-btn').click(function() {
//         let todoText = $('.input-field').val();
//         if(todoText.trim() !== '') {
//             let newTodo = {
//                 text: todoText,
//                 status: 'open'
//             };
//             todos.push(newTodo); // Lưu newTodo vào mảng todos
//             saveTodos(); // Lưu danh sách todos mới vào localStorage
//             $('.input-field').val('');
//             displayTodos();
//         }
//     })
// });


// $(document).ready(function() {
//     // lấy danh sách ghi chú từ localStorage nếu có
//     let todos = JSON.parse(localStorage.getItem('todos')) || [];

//     // hiển thị danh sách ghi chú
//     function displayTodos() {
//         $('.todo-list').empty();
//         for (let i = 0; i < todos.length; i++) {
//             let todo = todos[i];
//             let statusText = todo.status === 'open' ? 'Not done' : 'Done';
//             let row = $('<tr></tr>');
//             row.append($('<td></td>').text(i + 1));
//             row.append($('<td></td>').text(todo.text));
//             row.append($('<td></td>').text(statusText));
//             let action = $('<td></td>');
//             let deleteBtn = $('<button>Delete</button>');
//             deleteBtn.click(function() {
//                 todos.splice(i, 1);
//                 saveTodos();
//                 displayTodos();
//             });
//             action.append(deleteBtn);
//             if (todo.status === 'open') {
//                 let doneBtn = $('<button>Done</button>');
//                 doneBtn.click(function() {
//                     todo.status = 'done';
//                     saveTodos();
//                     displayTodos();
//                 });
//                 action.append(doneBtn);
//             }
//             row.append(action);
//             $('.todo-list').append(row);
//         }
//     }
//     displayTodos();
 
//     // thêm ghi chú mới
//     $('.save-btn').click(function() {
//         let todoText = $('.input-field').val();
//         if(todoText.trim() !== '') {
//             let newTodo = {
//                 text: todoText,
//                 status: 'open'
//             };
//             todos.push(newTodo);
//             saveTodos();
//             $('.input-field').val('');
//             displayTodos();
//         }
//     });

//     function saveTodos() {
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }
// });


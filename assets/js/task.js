let taskArr = JSON.parse(localStorage.getItem("task")) || [];

let content = document.getElementById("taskContent");

function display() {
    content.innerHTML = ''
    taskArr.forEach((taskValue, idx) => {
        content.innerHTML += `
        <tr>
            <td>${taskValue.title}</td>
            <td>${taskValue.descp}</td>
            <td>${taskValue.date}</td>
            <td>${taskValue.priority == 1 ? "Low" : taskValue.priority == 2 ? "Medium" : "High"}</td>
            <td>
                <button class="btn btn-success" onclick="updateTask(${idx})"><i class="bi bi-pencil-square"></i></button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteTask(${idx})"><i class="bi bi-trash3"></i></button>
            </td>
        </tr>
        `
    });
}
display();

function deleteTask(idx){
    taskArr[idx] == idx;
    taskArr.splice(idx, 1)
    localStorage.setItem("task", JSON.stringify(taskArr));
    display();
}

function updateTask(idx, data){
    taskArr.findIndex((taskIdx)=>{
        return taskIdx.idx == idx;
    })
}
let addBtn = document.getElementById("addBtn");
let title = document.getElementById("title").value;
let descp = document.getElementById("descp").value;
let date = document.getElementById("date").value;
let priority = document.getElementById("priority").value;

addBtn.addEventListener("click", () => {
    if (title === "" || descp === "" || date === "" || priority === "") {
        Swal.fire({
            icon: "error",
            text: "Add Title and Description !",
        });
    }

    title = document.getElementById("title").value;
    descp = document.getElementById("descp").value;
    date = document.getElementById("date").value;
    priority = document.getElementById("priority").value;

    let taskArr = JSON.parse(localStorage.getItem("task")) || [];

    let obj = { title, descp, date, priority };
    taskArr.push(obj);

    localStorage.setItem("task", JSON.stringify(taskArr));
    console.log(taskArr);

    window.location = "./task.html"
})
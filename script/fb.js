
function completeTask(taskname, button) {
    alert(taskname);

    let now = new Date();
    let timestring = now.toLocaleTimeString();

    let taskCount = document.getElementById("count-task");
    let numberCount = document.getElementById("number-count");
    let container = document.getElementById("container");
    

    let currentCount = parseInt(taskCount.textContent) || 0;
    taskCount.textContent = currentCount - 1;
    let currentNumber = parseInt(numberCount.textContent) || 0;
    numberCount.textContent = currentNumber + 1;

    let taskInfo = document.createElement("p");
    taskInfo.textContent = `You have completed the Task ${taskname} at ${timestring}`;
    container.appendChild(taskInfo);

    button.disabled = true;
    button.style.backgroundColor = "gray";
}

// Add event listener to the button
document.getElementById("btn-1").addEventListener("click", function() {
    let button = document.getElementById("btn-1");
    let title = document.getElementById("title").textContent;  
    completeTask(title, button);
});

document.getElementById("btn-2").addEventListener("click", function() {
    let button = document.getElementById("btn-2");
    let title = document.getElementById("title-2").textContent;  
    completeTask(title, button);
})








// 

let completeTask = 0;
if (completeBtn.getAttribute("disabled") === "true") {
    completeTask = 1;
}

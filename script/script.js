function getConfirmationAlert() {
  const taskAssigned = document.getElementById('assigned-nmbr');
const taskValue = taskAssigned.innerText;
const convertedTaskAssigned =parseInt(taskValue);   
console.log(convertedTaskAssigned,'convertedTaskAssigned');

if (convertedTaskAssigned === 1) {
    alert("congrats!!! You Have Completed all the current Task");
  }

}
const addedHistory = document.getElementById("added-history");

const date = new Date().toDateString();
document.getElementById("calender").innerHTML = date;

document
  .getElementById("complete-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // btn 1

    alert("Board updated Successfully");
    getConfirmationAlert();
    const button = document.getElementById("complete-btn");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title1').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });

// btn 2

document
  .getElementById("complete-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    getConfirmationAlert()
    const button = document.getElementById("complete-btn2");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title2').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });

// btn 3

document
  .getElementById("complete-btn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    getConfirmationAlert()
    const button = document.getElementById("complete-btn3");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title3').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });

// btn 4

document
  .getElementById("complete-btn4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    getConfirmationAlert()
    const button = document.getElementById("complete-btn4");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title4').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });

// btn 5

document
  .getElementById("complete-btn5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    getConfirmationAlert()
    const button = document.getElementById("complete-btn5");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title5').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });
// btn 6

document
  .getElementById("complete-btn6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated Successfully");
    getConfirmationAlert()
    const button = document.getElementById("complete-btn6");
    button.disabled = true;
    button.style.backgroundColor = "silver";

    const assignedNumber =
      document.getElementById("assigned-nmbr").innerText;
    const convertedAssignedNumber = parseInt(assignedNumber);

    const countPlus = document.getElementById("count-plus").innerText;
    const convertedCountPlus = parseInt(countPlus);

    const minusCount = convertedAssignedNumber - 1;
    document.getElementById("assigned-nmbr").innerText = minusCount;
    const plusCount = convertedCountPlus + 1;
    document.getElementById("count-plus").innerText = plusCount;
    const title = document.getElementById('title6').innerText;
    const p = document.createElement("p");
    const time = new Date().toLocaleTimeString();
    p.style.cssText =
      "font-size:16px; background-color:gainsboro; border-radius:12px; padding:20px; margin:20px 0;";
    p.innerText = `You have completed ${title} at ${time}`;
    addedHistory.append(p);
  });


document.getElementById('clear-history').addEventListener('click',function (event) {
  event.preventDefault();
  addedHistory.style.display = 'none';
})

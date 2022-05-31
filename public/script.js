let view = document.getElementById('view-project');
let fullProject = document.getElementById('full-project');
let arrow = document.getElementById("arrow");
function displayProject() {
    if (fullProject.style.display === "none") {
      fullProject.style.display = "block";
      arrow.className = "fas fa-arrow-down";
    } else {
      fullProject.style.display = "none";
      arrow.className = "fas fa-arrow-right";
    }
  }

  view.addEventListener('click', displayProject);

  let view1 = document.getElementById('view-project-1');
let fullProject1 = document.getElementById('full-project-1');
let arrow1 = document.getElementById("arrow-1");
function displayProject1() {
    if (fullProject1.style.display === "none") {
      fullProject1.style.display = "block";
      arrow1.className = "fas fa-arrow-down";
    } else {
      fullProject1.style.display = "none";
      arrow1.className = "fas fa-arrow-right";
    }
  }

  view1.addEventListener('click', displayProject1);

  let view2 = document.getElementById('view-project-2');
let fullProject2 = document.getElementById('full-project-2');
let arrow2 = document.getElementById("arrow-2");
function displayProject2() {
    if (fullProject2.style.display === "none") {
      fullProject2.style.display = "block";
      arrow2.className = "fas fa-arrow-down";
    } else {
      fullProject2.style.display = "none";
      arrow2.className = "fas fa-arrow-right";
    }
  }

  view2.addEventListener('click', displayProject2);

  let view3 = document.getElementById('view-project-3');
let fullProject3 = document.getElementById('full-project-3');
let arrow3 = document.getElementById("arrow-3");
function displayProject3() {
    if (fullProject3.style.display === "none") {
      fullProject3.style.display = "block";
      arrow3.className = "fas fa-arrow-down";
    } else {
      fullProject3.style.display = "none";
      arrow3.className = "fas fa-arrow-right";
    }
  }

  view3.addEventListener('click', displayProject3);

  let view4 = document.getElementById('view-project-4');
let fullProject4 = document.getElementById('full-project-4');
let arrow4 = document.getElementById("arrow-4");
function displayProject4() {
    if (fullProject4.style.display === "none") {
      fullProject4.style.display = "block";
      arrow4.className = "fas fa-arrow-down";
    } else {
      fullProject4.style.display = "none";
      arrow4.className = "fas fa-arrow-right";
    }
  }

  view4.addEventListener('click', displayProject4);


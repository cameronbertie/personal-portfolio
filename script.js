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
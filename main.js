// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(event, tabname) {
//     for (let tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (let tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".certificateimg");

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Add the enlarged class when the image is in the center
                  entry.target.classList.add("enlarged");
              } else {
                  // Remove the enlarged class when it moves out of the center
                  entry.target.classList.remove("enlarged");
              }
          });
      },
      {
          root: null, // Observing within the viewport
          threshold: 0.5, // Trigger when 50% of the image is visible
      }
  );
});

document.getElementById("seeMoreBtn").addEventListener("click", function () {
    // Images ko show karna
    document.getElementById("imgremove").style.display = "block";
    
    // See More button ko hide karna
    this.style.display = "none";
  
    // See Less button ko show karna
    document.getElementById("seeLessBtn").style.display = "inline-block";
  });
  
  document.getElementById("seeLessBtn").addEventListener("click", function () {
    // Images ko hide karna
    document.getElementById("imgremove").style.display = "none";
    
    // See Less button ko hide karna
    this.style.display = "none";
  
    // See More button ko show karna
    document.getElementById("seeMoreBtn").style.display = "inline-block";
  });
  
var sidemeu  = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
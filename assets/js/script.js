'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// Select elements
const projectItems = document.querySelectorAll('.project-item');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close-btn');
const projectVideo = document.getElementById('projectVideo');

// Function to show modal with specified video source
function showModal(videoSrc) {
  projectVideo.src = videoSrc; // Set the video source
  videoModal.style.display = 'flex'; // Display the modal
  projectVideo.play(); // Start video playback
}

// Add click event to each project item
projectItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    // Determine the video source based on the project item
    const videoSrc = item.querySelector('img').alt === "AR Image Target" 
    ? './assets/videos/Rajoo-GD-01-AR-Test.mp4'
    : item.querySelector('img').alt === "Plane Detection" 
      ? './assets/videos/hal ar.mp4'
      : item.querySelector('img').alt === "VR Reproductive System Exploration"
        ? './assets/videos/Hololensmku.mp4'
         : item.querySelector('img').alt === "OpenCV and Selenium Youtube automation"
        ? './assets/videos/vuforia model target AR.mp4'
        : item.querySelector('img').alt === "Virtual Tour"
          ? './assets/videos/rajjovideorecord.mp4'
          : item.querySelector('img').alt === "VR Learning Aid" 
            ? './assets/videos/furniture hololens.mp4' 
            : item.querySelector('img').alt === "Model target Thumbsup" 
              ? './assets/videos/vuforia AR model Thumbsup.mp4'
              : item.querySelector('img').alt === "Exploring City" 
                ? './assets/videos/PearlAbyssAR.mp4'
                : item.querySelector('img').alt === "Bussiness card AR" 
                  ? './assets/videos/14-B-Card.mp4' 
                  : item.querySelector('img').alt === "VR mueseum" 
                    ? './assets/videos/Christmas experience.mp4' 
                    : item.querySelector('img').alt === "Defence VR" 
                      ? './assets/videos/03-Defence-show.mp4'
                      : item.querySelector('img').alt === "VR Cultural Game" 
                        ? './assets/videos/TCSVRRecord.mp4' 
                        : item.querySelector('img').alt === "HAL Innovate" 
                          ? './assets/videos/09-HAL-TouchScreen.mp4' 
                          : item.querySelector('img').alt === "Obstacle game" 
                            ? './assets/videos/10-Rajoo-TouchScreen.mp4' 
                            : item.querySelector('img').alt === "OpenCv hand interaction" // Updated condition
                              ? './assets/videos/Merino-Screen_recording-060723-1.mp4' // Video for OpenCv hand interaction
                              : item.querySelector('img').alt === "TCS Touch" // Updated condition
                              ? './assets/videos/TCSTouchscreen.mp4' // Video for OpenCv hand interaction
                               : item.querySelector('img').alt === "SoulStories" 
                                ? './assets/videos/Soulstories video.mp4'
                                 : item.querySelector('img').alt === "SkyDecorTouch" 
                                ? './assets/videos/Skydecor Touch.mp4'
                              : './assets/videos/TCSTouchscreen.mp4'; // Fallback option
  
  showModal(videoSrc);
  
  
  
  
  
  
  
  
  
  });
});

// Hide modal and stop video on close button click
closeBtn.addEventListener('click', () => {
  videoModal.style.display = 'none';
  projectVideo.pause();
  projectVideo.currentTime = 0; // Reset video
  projectVideo.removeAttribute('src'); // Remove the source to stop playback
});

// Hide modal when clicking outside the video content
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    projectVideo.pause();
    projectVideo.currentTime = 0;
    projectVideo.removeAttribute('src'); // Remove the source to stop playback
  }
});



// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
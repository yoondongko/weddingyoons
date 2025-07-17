function openWeb(url) {
  window.open(url, "_blank");
}

function showPopupContact() {
  document.getElementById("popupContact").style.display = "block";
}
function hidePopupContact() {
  document.getElementById("popupContact").style.display = "none";
}

function showPopupGroomBank() {
  document.getElementById("popupGroomBank").style.display = "block";
}
function hidePopupGroomBank() {
  document.getElementById("popupGroomBank").style.display = "none";
}

function showPopupBrideBank() {
  document.getElementById("popupBrideBank").style.display = "block";
}
function hidePopupBrideBank() {
  document.getElementById("popupBrideBank").style.display = "none";
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("복사 완료: " + text);
    })
    .catch(err => {
      alert("복사 실패: " + err);
    });
}


let currentIndex = 1;
const totalImages = 15;

function popupGallery(n) {
  currentIndex = n;
  showImage(currentIndex);
  const modal = document.getElementById("popGallery");
  modal.classList.add("show");
}
function closeGallery() {
  const modal = document.getElementById("popGallery");
  modal.classList.remove("show");
}

function showImage(index) {
  document.getElementById("galleryModalImage").src = `gallery_${index}.jpg`;
}

function nextImage() {
  currentIndex = (currentIndex % totalImages) + 1;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 2 + totalImages) % totalImages + 1;
  showImage(currentIndex);
}

let startX = 0;
let endX = 0;

const modal = document.getElementById("popGallery");

modal.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
}, false);

modal.addEventListener('touchend', function(e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}, false);

function handleSwipe() {
  let diffX = startX - endX;
  if (Math.abs(diffX) > 30) { 
    if (diffX > 0) {
      nextImage();
    } else {
      prevImage();
    }
  }
}
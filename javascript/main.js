// start more button

// حدث الضغط على زر "المزيد"
document.getElementById('moreButton').addEventListener('click', function(event) {
    event.preventDefault(); // منع الرابط من التوجيه
    const megaMenu = document.getElementById('megaMenu');
    // عكس حالة عرض القائمة
    if (megaMenu.style.display === "none" || megaMenu.style.display === "") {
        megaMenu.style.display = "block"; // إظهار القائمة
    } else {
        megaMenu.style.display = "none"; // إخفاء القائمة
    }
});

// إخفاء القائمة عند الضغط على أي مكان في الصفحة أو في القائمة نفسها
document.addEventListener('click', function(event) {
    const megaMenu = document.getElementById('megaMenu');
    // تحقق مما إذا كان النقر على الزر
    if (event.target.id !== 'moreButton') {
        megaMenu.style.display = "none"; // إخفاء القائمة
    }
});


// end more button


// start youtube
function changeVideo(videoId) {
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + videoId;
}
// end youtube





// start arrow
const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.add("show");
        scrollToTopButton.classList.remove("hide");
    } else {
        scrollToTopButton.classList.add("hide");
        setTimeout(() => {
            scrollToTopButton.classList.remove("show");
        }, 300); // الوقت المستغرق للاختفاء
    }
};


scrollToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// end arrow

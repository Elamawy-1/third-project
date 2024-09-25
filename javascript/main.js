document.getElementById('moreButton').addEventListener('click', function(event) {
    event.preventDefault(); // منع الرابط من التوجيه
    const megaMenu = document.getElementById('megaMenu');
    if (megaMenu.style.display === "none" || megaMenu.style.display === "") {
        megaMenu.style.display = "block"; // إظهار القائمة
    } else {
        megaMenu.style.display = "none"; // إخفاء القائمة
    }
});




function changeVideo(videoId) {
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + videoId;
}
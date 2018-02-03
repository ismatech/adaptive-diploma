Array.from(document.getElementsByTagName("img")).forEach(img => {
    img.onclick = function () {
    alert(img.getAttribute("alt"));
};
});
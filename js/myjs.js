$.get("/header.html", function (result) {
    html = result;
    document.getElementById("header").insertAdjacentHTML("afterend", html);
});
$.get("/footer.html", function (result) {
    html = result;
    document.getElementById("footer").insertAdjacentHTML("afterend", html);
});
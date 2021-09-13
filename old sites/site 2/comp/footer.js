async function getFile(file) {
    var myFile = await fetch(file);
    var html = await myFile.text();
    return html;
};

function display(t) {
    document.getElementById("footer").innerHTML = t;
};

getFile("comp/footer.html").then(
    function(val) {
        display(val);
    }
);
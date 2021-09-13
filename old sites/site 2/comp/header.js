async function getFile(file) {
    var myFile = await fetch(file);
    var html = await myFile.text();
    return html;
};

function display(t) {
    document.getElementById("header").innerHTML = t;
};

getFile("comp/header.html").then(
    function(val) {
        display(val);
    }
);

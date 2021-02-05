// Task 1 
function monday() {
    document.getElementById("weekDay").innerHTML = "Monday";
}
function tuesday() {
    document.getElementById("weekDay").innerHTML = "Tuesday";
}
function wednesday() {
    document.getElementById("weekDay").innerHTML = "Wednesday";
}
function thursday() {
    document.getElementById("weekDay").innerHTML = "Thursday";
}
function friday() {
    document.getElementById("weekDay").innerHTML = "Friday";
}
function saturday() {
    document.getElementById("weekDay").innerHTML = "Saturday";
}
function sunday() {
    document.getElementById("weekDay").innerHTML = "Sunday";
}

// Task 3 -- Simple Interest Calculator 
function simpleInterest() {
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value

    var benefit = principal * rate * years / 100
    var total = principal + benefit;

    document.getElementById("benefit").innerHTML = benefit;
    document.getElementById("total").innerHTML = total;
}
// Task 4 -- Compound Interest Calculator 
function compoundInterest() {
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value / 100
    var years = document.getElementById("years").value
    var percentAmount = document.getElementById("percentAmount").value

    var total = principal * Math.pow((1 + rate / percentAmount), percentAmount * years)
    var benefit = total - principal
    document.getElementById("total").innerHTML = total;
    document.getElementById("benefit").innerHTML = benefit;
}

// Task 5 - Random Number Generator range [0;30]
function randomNumber() {
    document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 30);
}

// Task 6 - Random Number Generator range [a;b]
function randomNum() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var random = Math.floor(Math.random() * (b - a) + a)
    document.getElementById("generateNum").innerHTML = random;
}

// Task 7 - Random Table generator with random pics
function random_img() {

    img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",]
    r = Math.random() * img.length;
    url = "photos/" + img[Math.floor(r)];
    img = "<img class='img' src='" + url + "'></img>";

    return img;
}
function generateTable(row, column) {
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var row = document.getElementById("row").value
    var column = document.getElementById("column").value
    var img = document.getElementById("img").value

    for (var i = 0; i < row; i++) {
        var rowE = document.createElement("tr");
        for (var j = 0; j < column; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell in row " + i + ", column " + j);
            cell.appendChild(cellText);
            rowE.appendChild(cell);
        }
        tblBody.appendChild(rowE);
    }

    for (var k = 0; k < img; k++) {
        var images = document.createElement("img")
        cell.appendChild(images);
    }
    images.setAttribute("src", "photos/1.jpg")
    images.setAttribute("width", "70");
    images.setAttribute("height", "90");
    images.setAttribute("alt", "This is a photo!");

    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    tbl.setAttribute("width", "490")
    tbl.setAttribute("height", "500")
    tbl.setAttribute("border", "2")

    cell.setAttribute("border", "2")
    rowE.setAttribute("border", "2")
    document.getElementById("randomT").innerHTML = tbl;
}
// All you JavaScript code for assignment 4 should be in this file

function flagDisplay()
{
    document.querySelector("#flag-images").onclick = function()
    {
        for (var j = 0; j < countries.length; j++)
        {
            var img1 = document.createElement("img");
            var str = './flags/' + countries[j].Name + '-flag.png';
            img1.setAttribute('src', str);
            img1.setAttribute('alt', 'flagsTest');
            img1.setAttribute('width', 200);
            img1.setAttribute('height', 200);
            document.querySelector("#flags").appendChild(img1);
        }
        const parent = document.getElementById("links");
        const child = document.getElementById("flag-images");
        parent.removeChild(child);
    }
}


window.onload = function()
{
    var heading1 = document.createElement("h2");
    var countryName = document.createTextNode("Country List");
    heading1.appendChild(countryName);
    document.querySelector("#heading2").appendChild(heading1);

    var tbl = document.createElement("table");
    var tbth = document.createElement("th");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var text1 = document.createTextNode("Country");
    var text2 = document.createTextNode("Capital");
    td1.appendChild(text1);
    td2.appendChild(text2);
    tbth.appendChild(td1);
    tbth.appendChild(td2);
    tbl.appendChild(tbth);

    for (var i = 0; i < countries.length; i++)
    {
        var tbtr = document.createElement("tr");
        var trdr1 = document.createElement("td");
        var trdr2 = document.createElement("td");
        var textRow1 = document.createTextNode(countries[i].Name);
        var textRow2 = document.createTextNode(countries[i].Capital);

        trdr1.appendChild(textRow1);
        trdr2.appendChild(textRow2);
        tbtr.appendChild(trdr1);
        tbtr.appendChild(trdr2);
        tbl.appendChild(tbtr);
    }

    document.querySelector("#table").appendChild(tbl);
    document.querySelector("#table").style.border = "1px solid black";

    flagDisplay();
}
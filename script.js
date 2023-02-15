/*      
       .__                 
  ____ |__|_  _  _______   
 /  _ \|  \ \/ \/ /\__  \  
(  <_> )  |\     /  / __ \_
 \____/|__| \/\_/  (____  /
                        \/ 
*///////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("v").textContent = "v1.1";
});

////////////////////////////////

var flip = false;

var str = "";
var pos = 0;
var invert = false;

var name1 = "web designer";
var name2 = "oiwa.lol";

function loop() {
    var text = flip ? name1 : name2;

    if (pos > text.length) {
        invert = true;
    } else if (pos < 0) {
        if (invert) {
            flip = !flip;
            text = flip ? name1 : name2;

            pos = 0;
        }

        invert = false;
    }

    str = text.substring(0, pos);
    pos += (invert ? -1 : 1);

    if (isEven(str.length))
        str = `${str}_`;

    document.getElementsByTagName('title')[0].innerHTML = str;
}

function isEven(value) {
    return !(value % 2)
}

setInterval(loop, 333);

/////////////////////////////////////////////////////////////
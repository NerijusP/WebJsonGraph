var x = document.getElementsByClassName("on");
if (x.addEventListener) {                    // For all major browsers, except IE 8 and earlier
    x.addEventListener("click", function(){ alert("Hello World!"); });
} else if (x.attachEvent) {                  // For IE 8 and earlier versions
    x.attachEvent("onclick", function(){ alert("Hello!"); });
}
on.addEventListener("click", myFunction);





/* this is the search filter  */
/* "gi" is for global and case insensitive for the text input */
function searchFunction() {

    var matcher = new RegExp(document.getElementById("itemfilter").value, "gi");
    for (var i = 0; i < document.getElementsByClassName("card").length; i++) {

        if (matcher.test(document.getElementsByClassName("item-names")[i].innerHTML)) {
            document.getElementsByClassName("card")[i].style.display = "inline-block";
        }
        else {
            document.getElementsByClassName("card")[i].style.display = "none";
        }
    }
}

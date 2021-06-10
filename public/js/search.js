
/* this is the search filter  */
/* regular expression (RegExp) for text input matching. "gi" is for global case insensitive*/
/* the .test is matching item-names with itemfilter */
function searchFunction() {

    const matcher = new RegExp(document.getElementById("itemfilter").value, "gi");
    for (var i = 0; i < document.getElementsByClassName("card").length; i++) {

        if (matcher.test(document.getElementsByClassName("item-names")[i].innerHTML)) {
            document.getElementsByClassName("card")[i].style.display = "inline-block";
        }
        else {
            document.getElementsByClassName("card")[i].style.display = "none";
        }
    }
}

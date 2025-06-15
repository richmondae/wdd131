            function onClick(element) {
                document.getElementById("img01").src = element.src;
                document.getElementById("modal01").style.display = "block";
                document.getElementById("caption01").innerHTML = element.alt;
            }
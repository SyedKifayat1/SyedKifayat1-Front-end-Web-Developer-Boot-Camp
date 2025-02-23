console.log("Hello World!");
        document.write("<h2>This is a dynamically generated heading of lecture 3</h2>");
        // Changing the color of the heading
        document.querySelector("h1").style.color = "red";
        // Adding a new paragraph element
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph";
        document.body.appendChild(newParagraph);
        // Changing the text color of the new paragraph
        newParagraph.style.color = "green";
        // Removing the first paragraph element
        document.body.removeChild(document.querySelector("p"));
        // Changing the font size of the heading
        document.querySelector("h1").style.fontSize = "24px";
        // Changing the background color of the body
        document.body.style.backgroundColor = "yellow";
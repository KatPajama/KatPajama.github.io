// Function to increase the text siz
function makeBigger() {
    alert("Hello, world!");
    var textInput = document.getElementById("mainText");
    // Setting style to 24pt as requested
    textInput.style.fontSize = "24pt";
}

// Function to handle the radio button style changes
function changeStyle() {
    var textInput = document.getElementById("mainText");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        // Applying multiple styles for FancyShmancy
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        // Reverting styles for BoringBetty
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

// Function to uppercase text and add "-Moo" suffix
function mooText() {
    var textInput = document.getElementById("mainText");
    var str = textInput.value.toUpperCase();
    
    // Split by periods to find sentence ends, then join with the suffix
    var parts = str.split(".");
    // This adds -Moo to every sentence ending in a period
    textInput.value = parts.join("-Moo.");
}
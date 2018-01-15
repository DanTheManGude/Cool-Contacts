
function preview() {
    //update elements in the SVG with new values
    $("#initials").text($("#it").val());
    $(".cir").css("fill", $("#colur").val())
}

function submit() {
    //convert SVG to image and download
    saveSvgAsPng(document.getElementById("diagram"), "Cool-Contact-" + $("#it").val() + ".jpg");
}

function randColor() {
    //get a new random color
    newColor = randomColor( {luminosity: 'dark'} );
    //update the color picker with new values
    $("#colur").val(newColor);
    $("#colur").css("background-color", newColor);
    //update the contact with new value
    preview();
}


function preview() {
    $("#initials").text($("#it").val());
    $(".cir").css("fill", $("#colur").val())
}

function submit() {
    saveSvgAsPng(document.getElementById("diagram"), "Cool-Contact.jpg");
}

function randColor (){
    newColor = randomColor( {luminosity: 'dark'} );
    $("#colur").val(newColor);
    $("#colur").css("background-color", newColor);
    preview();
}

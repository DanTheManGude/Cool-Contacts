
function preview() {
    $("#initials").text($("#it").val());
    $(".cir").css("fill", $("#colur").val())
}

function submit() {
    saveSvgAsPng(document.getElementById("diagram"), "Cool-Contact.jpg");
}

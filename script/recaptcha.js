$('#first-check-rc').click(function () {
    $('#load-rc').fadeIn();
    document.getElementById('check-rc').style.visibility = 'hidden';
    setTimeout(displaySelImg, 800);
    $('#first-check-rc').css({
        "pointer-events": "none"
    });
})
function displaySelImg() {
    $('#load-rc').fadeOut();
    document.getElementById('check-rc').style.visibility = 'visible';
    $('#select-images-rc').fadeIn();
}
$(document).on('click', function (e) {
    if (!$(e.target).closest('#recaptcha-rc').length) {
        $('#select-images-rc').fadeOut();
        $('#first-check-rc').css({
            "pointer-events": "auto"
        });
    }
});
$('.check-rc').on('click', function () {
    document.getElementById('again-rc').style.display = 'none';
    var checkbox_id = $(this).attr("id");
    var checkbox_sel = document.getElementById(checkbox_id);
    if (checkbox_sel.checked) {
        $('#' + checkbox_id + '-img').css({
            "width": "70px",
            "height": "70px",
            "margin": "10px"
        });
        checkbox_sel.insertAdjacentHTML('afterend', '<span class="check-tick-rc" id="' + checkbox_id + '-tick">' + '<i class="ri-check-line"></i></span>');
    } else {
        $('#' + checkbox_id + '-img').css({
            "width": "92px",
            "height": "92px",
            "margin": "2px 0"
        });
        document.getElementById(checkbox_id + '-tick').remove();
    }
})
$('#decision-btn-rc').click(function () {
    for (var i = 1; i < 10; i++) {
        eval("tf" + i + " = document.getElementById('check-rc-" + i + "').checked;");
        eval("val" + i + " = $('#check-rc-" + i + "').val();");
        eval("valNu" + i + " = 	Number(val" + i + ");");
        eval("valBo" + i + " = Boolean(valNu" + i + ");");
    }
    if (tf1 == valBo1 && tf2 == valBo2 && tf3 == valBo3 && tf4 == valBo4 && tf5 == valBo5 && tf6 == valBo6 && tf7 == valBo7 && tf8 == valBo8 && tf9 == valBo9) {
        document.getElementById('check-rc').style.visibility = 'hidden';
        $('#success-rc').fadeIn();
        $('#select-images-rc').fadeOut();
        $('#recaptcha-judg-rc').val('true');
        $('#recaptcha-rc').css({
            "pointer-events": "none"
        });
    } else {
        document.getElementById('again-rc').style.display = 'block';
    }
})
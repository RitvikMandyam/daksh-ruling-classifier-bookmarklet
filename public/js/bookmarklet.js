var url = document.location.href;
$('head').append('<link rel="stylesheet" href="http://localhost:3000/css/style.css" />');
$('body').append('<div class="daksh-ai-wrapper"><div class="daksh-loader"></div></div>');

$('.daksh-ai-wrapper').load('http://localhost:3000/?case_url=' + url, function () {
    $('.daksh-loader').remove();
    $('.daksh-ai-wrapper').addClass('fix-dims');
});
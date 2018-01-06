$(document).ready(function () {
    $('.type').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.type',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 4000
        });
});

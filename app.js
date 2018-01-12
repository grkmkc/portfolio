$(document).ready(function () {
    $('.typo').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: false
        })
        .add({
            targets: '.typo',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 4000
        });
        $('.one').each(function () {
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({
                loop: false
            })
            .add({
                targets: '.one',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 4000
            });
            $('.anime').each(function () {
                $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
            });

            anime.timeline({
                    loop: false
                })
                .add({
                    targets: '.anime',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 4000
                });
});



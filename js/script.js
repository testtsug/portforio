//オープニング画面
$(function () {
    setTimeout(function () {
        $('.start p').fadeIn(1600);
    }, 700); //0.7秒後にロゴをフェードイン!
    setTimeout(function () {
        $('.start').fadeOut(500);
    }, 2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});




$(function () {
    var loader = $('.loader-wrap');

    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load', function () {
        loader.fadeOut();
    });

    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function () {
        loader.fadeOut();
    }, 3000);
});


$(function () {
    // 上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    // クリックで上に戻るボタン
    topBtn.click(function (event) {
        event.preventDefault(); // ページ内リンクの挙動をキャンセル
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});



//スクロールした時画像を下からふわっと表示させる方法「フェードイン」
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});
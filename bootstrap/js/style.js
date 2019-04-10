$(function()
{
    $('.login-btn').click(function()
    {
     $('.modal').map(function () {
         if (!$(this).is(":hidden")){
             $(this).modal('hide');
            $("body").removeClass('modal-open');
            $("body").css('padding-right','0px');
         }
     });
        $('#modal-login').modal();
    });

    $('.reg-btn').click(function()
    {
     $('.modal').map(function () {
         if (!$(this).is(":hidden")){
             $(this).modal('hide');
            $("body").removeClass('modal-open');
            $("body").css('padding-right','0px');
         }
     });
        $('#modal-register').modal();
    });

    $('.telreg-btn').click(function()
    {
     $('.modal').map(function () {
         if (!$(this).is(":hidden")){
             $(this).modal('hide');
            $("body").removeClass('modal-open');
            $("body").css('padding-right','0px');
         }
     });
        $('#modal-register-tel').modal();
    });

    $('.find-btn').click(function()
    {
     $('.modal').map(function () {
         if (!$(this).is(":hidden")){
             $(this).modal('hide');
            $("body").removeClass('modal-open');
            $("body").css('padding-right','0px');
         }
     });
        $('#modal-findpass').modal();
    });

    // 模态框关闭按钮事件
    $('#lclose').click(function()
    {

    });

    // 模态框登录按钮单击事件
    $('#login').click(function()
    {
        // 获取值
        var username = $('input[name=username]').val();
        var profile = $('input[name=profile]').val();
        tag = true;
        if (username == '') {
            alert('用户名不能为空!');
            tag = false;
        }
        if (profile == '') {
            alert('请选择聊天头像!');
            tag = false;
        }
        if (tag) {
            // 通过socket.io发送信息给服务器
            socket.emit('login', {username:username, profile:profile});
        } else {
            //window.location.reload()
        }
    });
})

$(window).scroll(function() {

    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav");
        $("#nav_left").addClass("hidden");
        $("#nav_search").removeClass("hidden");
        $("#logo").removeClass("shadow-btn");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav");
        $("#nav_left").removeClass("hidden");
        $("#nav_search").addClass("hidden");
        $("#logo").addClass("shadow-btn");
    }
})


document.getElementById('logo').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);
}

//点击收藏或取消收藏
$('.collect').click(function(){
    var _this = $(this);
    //文章id   用户id
    var artid = Number(_this.attr('artid'));
    var uid = Number(_this.attr('uid'));
    console.log(artid);
    console.log(uid);
    // if (isNaN(uid)) {
    //     layui.use('form', function () {
    //         layer.msg('用户须先登录才能收藏!', function () {
    //         //关闭后的操作
    //         });
    //     });
    //     return false;
    // }
    if(_this.attr('uid')&&_this.hasClass('collect-no')){
        // var uid = Number(_this.attr('uid'));
        // $.ajax({
        //     type: 'POST',
        //     headers: {
        //               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //           },
        //     dataType: 'html',
        //     url: 'collect',
        //     data: 'uid=' + uid + '&artid=' + artid + '&act=add',
        //     cache: false,
        //     success: function(){
        //         _this.children("span").text("已收藏");
        //         _this.addClass("collect-animate").attr("title","已收藏");
        //         setTimeout(function(){_this.removeClass('collect-animate').removeClass('collect-no').addClass('collect-yes');},500);
        //     }});
        // return false;
        _this.children("b").text("已收藏");
        _this.children("span").attr('class',"glyphicon glyphicon-star");
        _this.removeClass('btn-purple').addClass('btn-red');
        setTimeout(function(){_this.removeClass('collect-no').addClass('collect-yes');},500);
    }else if(_this.attr('uid')&&_this.hasClass('collect-yes')){
        // var uid = Number(_this.attr('uid'));
        // $.ajax({
        //     type: 'POST',
        //     headers: {
        //               'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //           },
        //     dataType: 'html',
        //     url: 'collect',
        //     data: 'uid=' + uid + '&artid=' + artid + '&act=remove',
        //     cache: false,
        //     success: function(){
        //         _this.children("span").text("点击收藏");
        //         _this.addClass("collect-animate").attr("title","点击收藏");
        //         setTimeout(function(){_this.removeClass('collect-animate').removeClass('remove-collect').removeClass('collect-yes').addClass('collect-no');},500);
        //     }
        // });
        // return false;
        _this.children("b").text("收藏");
        _this.children("span").attr('class',"glyphicon glyphicon-star-empty");
        _this.removeClass('btn-red').addClass('btn-purple');
        setTimeout(function(){_this.removeClass('collect-yes').addClass('collect-no');},500);
    }else{
        return;
    }
})

$(document).ready(function() {
    $('#b-main').children('div').each(function () {
        $(this).children('ul').children('li').eq(0).addClass('active');
        $(this).children('div').children('div').eq(0).css('display', 'block');

        $(this).children('ul').children('li').each(function () {
            $(this).click(function(){
                $(this).parent().children('li').removeClass('active');
                $(this).addClass('active');
                var index = $(this).index();
                $(this).parent().parent().children('div').children('div').each(function(){
                    $(this).css('display', 'none');
                });
                $(this).parent().parent().children('div').children('div').eq(index).css('display', 'block');
            });
        });
    });
});
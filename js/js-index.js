
$(document).ready(function() {
    // popup hide start
    $('.popup-hide').mouseleave(function() {
        $('.popup-block').hide()
    });
// popup hide end

    <!-- user city -->
    $.get("https://ipinfo.io", function (response) {
        if (response.country === 'RU') {
            $(".city").html("России");
        }else {
            $(".city").html("Страны СНГ");
        }
    }, "jsonp");
    <!-- user city end -->

    // day start
    let day = new Date();
    let fullPresentDay = `${day.getDate()}.0${day.getMonth()+1}.${day.getFullYear()}`;
    $('.currentDay').html(fullPresentDay);
    // end day

    // localStorage
    if(!localStorage.getItem('count')){
       localStorage.setItem('count','60')
    }
    const countBlock = $('.count');
    countBlock.html(localStorage.getItem('count'));
    const decrementInterval = setInterval(() => {
          const count = localStorage.getItem('count');
          if(count > 7) {
            localStorage.setItem('count',(Number(count) - 1).toString());
            countBlock.html(localStorage.getItem('count'))
          } else {
              clearInterval(decrementInterval);
          }
      },600000);
   // localStorage  end

   // <!-- location -->
   let callbackParam = new URLSearchParams(location.search).get('callback');
   if(callbackParam) {
     alert(`Есть параметр callback, со значением: ${callbackParam}`)
   }
    // <!-- location end-->

    // mask tell end
        $(".phone-mask").mask("+(374)99-99-99-99");
    // mask tell end
});
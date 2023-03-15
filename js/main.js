//Меняющийся фон
$(function () {
  bg_from = 1;
  bg_to = 3;
  bg_now = 1;
  bg_interval = 5;

  setInterval(function () {
    $('.banner__container').removeClass('bg' + bg_now);
    if (bg_now == bg_to) bg_now = 1;
    else bg_now++;
    $('.banner__container').addClass('bg' + bg_now);
  }, bg_interval * 1000);
});

//Корзина
jQuery(($) => {

  // Уменьшаем на 1
  $(document).on("click", ".input-number__minus", function () {
    let total = $(this).next();

    if (total.val() > 1) {
      total.val(+total.val() - 1);
    }
  }

  );

  // Увеличиваем на 1
  $(document).on("click", ".input-number__plus", function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
  }

  );

  $(document).on("input", ".input-number__input", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  }

  );
}

);
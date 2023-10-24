"use strict";

$(document).ready(function () {
  //Корзина
  function basketProcess(action) {
    //BX.showWait();
    var postData = {};

    switch (action) {
      case 'CLEAR_ALL':
        postData = {
          'TYPE': 'BASKET',
          'CLEAR_ALL': 'Y'
        };
        break;

      default:
        break;
    }

    BX.ajax({
      url: '/ajax/action_basket.php',
      method: 'POST',
      data: postData,
      dataType: 'html',
      onsuccess: function onsuccess(data) {
        $('#side_basket').html(data);
        setTimeout(function () {
          smallDeviceChange(smallDevice);
          tabletDeviceChange(tabletDevice, true);
          dextoptDeviceChange(dextoptDevice);
          BX.onCustomEvent('OnBasketChange');
        }, 500); //BX.closeWait();
      }
    });
    /*$.post("/ajax/action_basket.php", "TYPE=BASKET&CLEAR_ALL=Y", $.proxy(function( data ) {
        $('#side_basket').html(data);
    }));*/
  }

  $('body').on('click', '.btn-green._ct, ._card-btn [id$="add_basket_link"]', function (e) {
    setTimeout(basketProcess, 500);
  }); //END Корзина
});
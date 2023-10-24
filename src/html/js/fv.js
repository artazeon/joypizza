"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(document).ready(function () {
  // --- Инициализация стилизации полей input ---
  if ($('.styler').length) {
    $('.styler').styler({
      onFormStyled: function onFormStyled() {
        selectLoadImages();
      }
    });
  } // --- Инициализация вызова popup (ajax) ---


  $('body').on('click', '.js-ajax-popup', function (e) {
    e.preventDefault();
    var url = $(this).attr('data-href');
    var mainClass = $(this).attr('data-class') || '';
    $.magnificPopup.open({
      type: 'ajax',
      items: {
        src: url
      },
      overflowY: 'scroll',
      mainClass: mainClass,
      callbacks: {
        ajaxContentAdded: function ajaxContentAdded() {
          tabsCategory();

          if ($('.lazy').length) {
            var lazyLoadInstance = new LazyLoad({
              elements_selector: ".lazy",
              load_delay: 100
            });
          }

          if ($('.styler').length) $('.styler').styler({
            onFormStyled: function onFormStyled() {
              selectLoadImages();
              fileListcontroll();
            }
          });
          keyup_form();
          click_submit();
        }
      }
    });
  });
  $('.js-inline-popup').each(function () {
    var mainClass = $(this).attr('data-class') || '';
    $(this).magnificPopup({
      type: 'inline',
      mainClass: mainClass,
      callbacks: {
        beforeOpen: function beforeOpen() {}
      }
    });
  });
  keyup_form();
  click_submit();
}); // ------ Event's listners ------
// --- Переключение режима отображения пароля (показать) ---

$(document).on('mousedown', '.password-control', function () {
  if ($(this).siblings('input').attr('type') == 'password') {
    $(this).addClass('view');
    $(this).siblings('input').attr('type', 'text');
  }
}); // --- Переключение иконки флага страны ---

$(document).on('change', '.input-country select', function () {
  var $thisSelected = $(this).find(':selected'),
      $thisMask = $(this).attr('data-value'),
      $thisBlock = $(this).closest('.input-country'),
      $thisPlaceholder = $thisSelected.attr('data-placeholder'),
      $thisImg = $thisSelected.attr('data-img'),
      $this = $thisBlock.find('input[data-mask]');
  $this.val('');
  $this.inputmask('remove');
  $thisSelected.hasClass('no-mask') ? $this.attr({
    'placeholder': '_______',
    'data-mask': '',
    'data-placeholder': ''
  }) : ($thisBlock.find('.jq-selectbox__select-text').css('background-image', 'url(' + $thisImg + ')'), $this.attr({
    'placeholder': $thisPlaceholder,
    'data-mask': $thisMask,
    'data-placeholder': $thisPlaceholder
  }), inputMask(), inputMaskRequired());
}); // --- Удаление файлов из списка ---
// ------ Event's listners end ------
// ------ Function's ------
// --- Вывод текста ошибка ---

function popupForm_error($this, count) {
  if (count >= 1) {
    $this.closest('form').find('.fv__error').addClass('error');
    return false;
  } else {
    $this.closest('form').find('.fv__error').removeClass('error');
  }
} // --- Проверка ввода текстового поля ---


function required_input() {
  $(document).on('keyup', '.required--input input', function () {
    if ($(this).closest('div').hasClass('required--email')) {
      return false;
    } else {
      var input = $(this).val();

      if ($(this).attr('data-length')) {
        var inputLenght = $(this).attr('data-length') - 1;
      } else {
        var inputLenght = 3;
      }

      if (input.length > inputLenght) {
        $(this).closest('div').removeClass('error error-online').addClass('succes');
      } else {
        $(this).closest('div').removeClass('succes').addClass('error-online');
      }
    }
  });
} // --- Проверка ввода textarea ---


function required_textarea() {
  $(document).on('keyup', '.required--textarea textarea', function () {
    var textarea = $(this).val(),
        textareaLenght;

    if ($(this).attr('data-length')) {
      textareaLenght = $(this).attr('data-length') - 1;
    } else {
      textareaLenght = 3;
    }

    if (textarea.length > textareaLenght) {
      $(this).closest('div').removeClass('error error-online').addClass('succes');
    } else {
      $(this).closest('div').removeClass('succes').addClass('error-online');
    }
  });
} // --- Запрет ввода букв ---


function num_inset() {
  $(document).on("change keyup input click", '.num--inset input', function () {
    if (this.value.match(/[^0-9^+]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
} // --- Проверка ввода пароля (первый шаг) ---
/// --- Проверка ввода пароля (первый шаг) ---


var firstPasswordSucces = 0,
    firstPasswordValue = 0,
    secondPasswordSucces = 0,
    secondPasswordValue = 0;

function passwordControll() {
  if ($('.required--password').length) {
    if (!$('.required--password').hasClass('succes')) {
      $('.required--password').addClass(' _control error error-online');
    } else {
      $('.required--password').removeClass('_control error error-online');
      $('.required--password').find('.error').removeClass('error error-online');
    }
  }
}

function passwordView() {
  $('body').on('click', '.js-password-control', function () {
    var input = $(this).siblings('input');

    if (input.attr('type') == 'password') {
      input.attr('type', 'text');
    } else {
      input.attr('type', 'password');
    }
  });
}

function first_password() {
  $(document).on("change keyup input click", '.password-first input', function () {
    var mainBlock = $(this).closest('.required--password'),
        firstPassword = mainBlock.find('.password-first'),
        secondPassword = mainBlock.find('.password-second');
    var password = $(this).val(); // Получаем пароль из формы

    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре

    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре

    var digits = "0123456789"; // Цифры

    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы

    var is_s = false; // Есть ли в пароле буквы в нижнем регистре

    var is_b = false; // Есть ли в пароле буквы в верхнем регистре

    var is_d = false; // Есть ли в пароле цифры

    var is_sp = false; // Есть ли в пароле спецсимволы

    for (var i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }

    var rating = 0;
    var text = "";
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности

    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности

    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности

    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности

    if (password.length >= 6 && rating >= 3) {
      firstPassword.addClass('succes').removeClass('error-online');
      secondPassword.addClass('error-online').removeClass('succes').find('input').val('');
      mainBlock.removeClass('succes');
    } else {
      firstPassword.removeClass('succes').addClass('error-online');
      mainBlock.removeClass('succes');
      secondPassword.addClass('error-online');
      secondPassword.find('input').val('');
    }

    firstPasswordValue = this.value;
  });
} // --- Проверка ввода пароля (второй шаг) ---


function second_password() {
  $(document).on("change keyup input click", '.password-second input', function () {
    var mainBlock = $(this).closest('.required--password');
    var thisBlock = $(this).closest('.password-second');

    if ($(this).val() != firstPasswordValue) {
      mainBlock.removeClass('succes').addClass('error error-online');
      thisBlock.removeClass('succes').addClass('error error-online');
    } else {
      mainBlock.removeClass('error error-online').addClass('succes');
      thisBlock.removeClass('error error-online').addClass('succes');
    }
  });
} // --- Инит маски (если поле НЕ является обязательным) ---


function inputMask() {
  $('.input--mask input').each(function () {
    var $this = $(this);
    var $thisMask = $(this).attr('data-mask');
    var $thisPlaceholder = $(this).attr('data-placeholder');

    if ($thisPlaceholder == '' || !$thisPlaceholder) {
      $this.inputmask("" + $thisMask + "", {
        clearMaskOnLostFocus: true,
        "clearIncomplete": true
      });
    } else {
      if ($this.closest('.input--mask').hasClass('date')) {
        $this.inputmask($thisMask);
        return;
      }

      $this.inputmask("" + $thisMask + "", {
        clearMaskOnLostFocus: true,
        "clearIncomplete": true,
        placeholder: "" + $thisPlaceholder + ""
      });
    }
  });
} // --- Инит маски (если поле является обязательным) ---


function inputMaskRequired() {
  $('.input--mask--required input').each(function () {
    var $this = $(this),
        $thisDiv = $(this).closest('.input--mask--required'),
        $thisMask = $(this).attr('data-mask'),
        $thisPlaceholder = $(this).attr('data-placeholder');

    if ($thisPlaceholder == '' || !$thisPlaceholder) {
      $this.inputmask("" + $thisMask + "", {
        clearMaskOnLostFocus: true,
        "clearIncomplete": true,
        oncomplete: function oncomplete() {
          $thisDiv.removeClass('error error-online').addClass('succes');
        },
        oncleared: function oncleared() {
          $thisDiv.removeClass('succes').addClass('error-online');
        },
        onincomplete: function oncomplete() {
          $thisDiv.removeClass('succes').addClass('error-online');
        },
        onKeyValidation: function onKeyValidation(key, result) {
          console.log('onKeyValidation');
        }
      });
    } else {
      if ($this.closest('.input--mask').hasClass('date')) {
        $this.inputmask($thisMask);
        return;
      }

      $this.inputmask("" + $thisMask + "", {
        placeholder: "" + $thisPlaceholder + "",
        clearMaskOnLostFocus: true,
        "clearIncomplete": true,
        oncomplete: function oncomplete() {
          $thisDiv.removeClass('error error-online').addClass('succes');
        },
        oncleared: function oncleared() {
          $thisDiv.removeClass('succes').addClass('error-online');
        },
        onincomplete: function oncomplete() {
          $thisDiv.removeClass('succes').addClass('error-online');
        },
        onKeyValidation: function onKeyValidation(key, result) {
          console.log('onKeyValidation');
        }
      });
    }
  });
} // --- Проверка ввода необязательного поля с маской ---


function maskInputControl() {
  $('.mask-input-control input').each(function () {
    var $this = $(this),
        $thisDiv = $(this).closest('.mask-input-control'),
        $thisMask = $(this).attr('data-mask'),
        $thisPlaceholder = $(this).attr('data-placeholder');

    if ($thisPlaceholder == '' || !$thisPlaceholder) {
      $this.inputmask("" + $thisMask + "", {
        oncomplete: function oncomplete() {
          $thisDiv.removeClass('error error-online').addClass('succes');
        },
        oncleared: function oncleared() {
          $thisDiv.removeClass('error error-online succes');
        },
        onincomplete: function oncomplete() {
          if ($(this).val() !== "") $thisDiv.removeClass('succes').addClass('error-online');else return;
        },
        onKeyValidation: function onKeyValidation(key, result) {
          console.log('onKeyValidation');
        }
      });
    } else {
      if ($thisDiv.hasClass('date')) {
        $this.inputmask($thisMask);
        return;
      }

      $this.inputmask("" + $thisMask + "", {
        placeholder: "" + $thisPlaceholder + "",
        oncomplete: function oncomplete() {
          $thisDiv.removeClass('error error-online').addClass('succes');
        },
        oncleared: function oncleared() {
          $thisDiv.removeClass('error error-online succes');
        },
        onincomplete: function oncomplete() {
          if ($(this).val() !== "") $thisDiv.removeClass('succes').addClass('error-online');else return;
        },
        onKeyValidation: function onKeyValidation(key, result) {
          console.log('onKeyValidation');
        }
      });
    }
  });
}

function required_date() {
  $(document).on('change', '.input--mask--required.required--date input', function () {
    var thisDateBlock = $(this).closest('.required--date');

    if ($(this).val() != '') {
      thisDateBlock.removeClass('error error-online').addClass('succes');
    } else {
      thisDateBlock.remove('succes').addClass('error-online');
    }
  });
} // ---- Проверка ввода поля емайл ---


function required_email() {
  $(document).on('keyup', '.required--email input', function () {
    var email = $(this).val(),
        emailDiv = $(this).closest('div');

    if (email.length >= 0 && (email.match(/[a-z0-9A-Z]\@.+[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}/g) || []).length !== 1) {
      emailDiv.removeClass('succes').addClass('error-online');
    } else if (email == '') {
      emailDiv.removeClass('error error-online').addClass('succes');
    } else {
      emailDiv.removeClass('error error-online').addClass('succes');
    }
  });
} // --- Проверка ввода поля емайл ---


function emailInputControl() {
  $('.email-input-control input').keyup(function () {
    var email = $(this).val(),
        emailDiv = $(this).closest('div');

    if (email.length > 0 && (email.match(/[a-z0-9]\@.+[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}/g) || []).length !== 1 && !$(this).closest('div').hasClass('error-online')) {
      emailDiv.addClass('error-online required--email').append('<span class="email-input-error-text">Неверный email!</span>');
    } else if (email.length > 0 && (email.match(/[a-z0-9]\@.+[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}/g) || []).length !== 1 && $(this).closest('div').hasClass('error-online')) return;else if (email.length === 0) {
      emailDiv.removeClass('error-online error required--email succes');
      emailDiv.find('.email-input-error-text').remove();
    } else {
      emailDiv.removeClass('error-online error required--email').addClass('succes');
      emailDiv.find('.email-input-error-text').remove();
    }
  });
} // --- Проверка изминения радио баттона ---


function radioChange() {
  $(document).on('change', '.radio--required :radio', function () {
    var radiolDiv = $(this).closest('.radio--required');
    radiolDiv.removeClass('error').addClass('succes');
  });
} // --- Проверка изминения селекта ---


function selectChange() {
  $(document).on('change', '.required--select select', function () {
    var val = $(this).val(),
        selectDiv = $(this).closest('.required--select');

    if (_typeof(val) == 'object') {
      var lengthVal = val.length;

      if (val == 0) {
        selectDiv.removeClass('succes').addClass('error');
        return false;
      } else {
        selectDiv.removeClass('error').addClass('succes');
      }
    } else {
      if (val === 'Not selected') {
        selectDiv.removeClass('succes').addClass('error');
        return false;
      } else {
        selectDiv.removeClass('error').addClass('succes');
      }
    }
  });
}

function selectChangeMuliple() {
  $(document).on('change', '.required--select--multiple', function () {
    var selectReqMultiple = $(this);
    selectReqMultiple.each(function () {
      var sels = $(this).siblings('.js-selected-list').find('.selected-list--item');

      if (sels.length == '') {
        $(this).removeClass('succes').addClass('error');
        Errorcount++;
      } else {
        $(this).removeClass('error').addClass('succes');
      }
    });
  });
} // --- Проверка изминения одного чекбокса ---


function checkChange() {
  $(document).on('change', '.required--check :checkbox', function () {
    var val = $(this).prop('checked'),
        checkDiv = $(this).closest('.required--check');

    if (val) {
      checkDiv.removeClass('error').addClass('succes');
      $(this).closest('label').siblings().find(':checkbox').prop('checked', false);
    } else {
      checkDiv.removeClass('succes').addClass('error');
    }

    checkDiv.find('.styler').trigger('refresh');
  });
} // --- Проверка изминения множественного чебокса ---


function checkMoreChange() {
  $(document).on('change', '.check-more :checkbox', function () {
    var val = $(this).prop('checked'),
        checkDiv = $(this).closest('.check-more');

    if (val) {
      checkDiv.removeClass('error').addClass('succes');
    } else if (!$('.check-more :checked').length) {
      checkDiv.removeClass('succes').addClass('error');
    }
  });
} // --- Проверка изминения input file ---
// --- Датапикер ---


function datePicker() {
  $('.date-picker').each(function () {
    var $this = $(this);
    var dataLang = $(this).attr('data-lang');
    var dayNames, dayNamesShort, dayNamesMin, monthNames, monthNamesShort;
    var img = $(this).attr('data-src');
    var template = $(this).attr('data-template');
    $.getJSON("./temp/data.json", function (data) {
      if (dataLang == 'ru') {
        var lang = data.ru;
      }

      if (dataLang == 'en') {
        var lang = data.en;
      }

      for (var item in lang) {
        if (lang[item].dayNames) {
          dayNames = lang[item].dayNames;
        }

        if (lang[item].dayNamesShort) {
          dayNamesShort = lang[item].dayNamesShort;
        }

        if (lang[item].dayNamesMin) {
          dayNamesMin = lang[item].dayNamesMin;
        }

        if (lang[item].monthNames) {
          monthNames = lang[item].monthNames;
        }

        if (lang[item].monthNamesShort) {
          monthNamesShort = lang[item].monthNamesShort;
        }
      }
    }).done(function () {
      $this.datepicker({
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        yearRange: '1980:c+1',
        minDate: new Date(1980, 10 - 1, 25),
        showOn: "button",
        dateFormat: template,
        buttonImage: img,
        buttonImageOnly: true,
        dayNames: dayNames,
        dayNamesShort: dayNamesShort,
        monthNames: monthNames,
        dayNamesMin: dayNamesMin,
        monthNamesShort: monthNamesShort,
        showOtherMonths: true,
        afterShow: function afterShow(inst) {
          console.log('123');
          $('.ui-datepicker-title select').styler();
        }
      }).click(function () {
        $(this).datepicker('show');
      });
    });
  });
} // --- Пользовательское событие для для datepicker ---


$(function () {
  if ($('.date-picker').length) {
    $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;

    $.datepicker._updateDatepicker = function (inst) {
      $.datepicker._updateDatepicker_original(inst);

      var afterShow = this._get(inst, 'afterShow');

      if (afterShow) afterShow.apply(inst.input ? inst.input[0] : null);
    };
  }
});

function dateRange() {
  $('.date_range').each(function () {
    var $this = $(this);
    var dataLang = $(this).attr('data-lang');
    var dayNames, dayNamesShort, dayNamesMin, monthNames, monthNamesShort;
    var img = $(this).attr('data-src');
    var template = $(this).attr('data-template');
    $.getJSON("./temp/data.json", function (data) {
      if (dataLang == 'ru') {
        var lang = data.ru;
      }

      if (dataLang == 'en') {
        var lang = data.en;
      }

      for (var item in lang) {
        if (lang[item].dayNames) {
          dayNames = lang[item].dayNames;
        }

        if (lang[item].dayNamesShort) {
          dayNamesShort = lang[item].dayNamesShort;
        }

        if (lang[item].dayNamesMin) {
          dayNamesMin = lang[item].dayNamesMin;
        }

        if (lang[item].monthNames) {
          monthNames = lang[item].monthNames;
        }

        if (lang[item].monthNamesShort) {
          monthNamesShort = lang[item].monthNamesShort;
        }
      }
    }).done(function () {
      $this.datepicker({
        range: 'period',
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        yearRange: '1980:c+1',
        minDate: new Date(1980, 10 - 1, 25),
        showOn: "button",
        dateFormat: template,
        buttonImage: img,
        buttonImageOnly: true,
        dayNames: dayNames,
        dayNamesShort: dayNamesShort,
        monthNames: monthNames,
        dayNamesMin: dayNamesMin,
        monthNamesShort: monthNamesShort,
        showOtherMonths: true,
        onSelect: function onSelect(dateText, inst, extensionRange) {
          // extensionRange - объект расширения
          $('#' + inst.id).val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
        },
        afterShow: function afterShow(inst) {
          $('.ui-datepicker-title select').styler();
        }
      }).click(function () {
        $(this).datepicker('show');
      });
    });
  });
} // --- Загрузка иконок стран в select ---


function selectLoadImages() {
  var inputCountrySelect = $('.input-country select');

  if (inputCountrySelect.length) {
    inputCountrySelect.each(function () {
      $(this).find('option').each(function () {
        if (!$(this).hasClass('no-mask')) {
          var inputCountryDiv = $(this).closest('.input-country');
          inputCountryDiv.find('.jq-selectbox__dropdown ul li').eq($(this).index()).css('background-image', "url(\" ".concat($(this).attr('data-img'), " \")"));
          inputCountryDiv.find('.jq-selectbox__select-text').css('background-image', $('.input-country .selected.sel').css('background-image'));
        }
      });
    });
  }
} // --- Удаление выбранных файлов из input-file ---


var $inputFile = $('.required--file--multiple input[type="file"]'),
    $fileList = $('.input-file-list'),
    $input,
    object = {},
    i,
    j = 0;
$(document).on('click', '.input-file-list span', function () {
  delete object[$(this).closest('p').attr('id')];
  $(this).closest('p').remove();
  fileQuantity(object);
  $('.input-file-list').each(function () {
    if (!$(this).find('p').length) {
      $(this).addClass('hide');
    }
  });
});

function fileChange() {
  $(document).on('change', '.required--file input[type="file"]', function () {
    var val = $(this).val(),
        fileDiv = $(this).closest('.required--file');

    if (val === "") {
      fileDiv.removeClass('succes').addClass('error');
    } else {
      fileDiv.removeClass('error').addClass('succes');
    }
  });
} // --- Проверка изминения input file multiple ---


function fileChangeMultiple() {
  $(document).on('change', '.required--file--multiple input[type="file"]', function () {
    var fileDiv = $(this).closest('.required--file--multiple'),
        val = fileDiv.find('.input-file-list p').length,
        max = fileDiv.attr('data-max');

    if (val > max || val == 0) {
      fileDiv.removeClass('succes').addClass('error');
    } else {
      fileDiv.removeClass('error').addClass('succes');
    }
  });
}

function fileListcontroll() {
  $inputFile.styler({
    fileBrowse: '',
    filePlaceholder: '',
    fileNumber: ''
  });
  $inputFile.on('change', function (e) {
    $input = e.target;

    for (i = 0; i < $input.files.length; i++, j++) {
      $('<p id="' + j + '"><span class="name" title="' + $input.files[i].name + '">' + $input.files[i].name + '</span><span></span></p>').appendTo($fileList);
      object[j] = $input.files[i];
    }

    fileQuantity(object);
    $('.input-file-list').each(function () {
      if (!$(this).find('p').length) {
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
      }
    });
  });
}

function fileQuantity(object) {
  var length = $('.input-file-list p').length;

  if (Object.keys(object).length > $('.required--file--multiple').attr('data-max') || Object.keys(object).length == 0) {
    $('.required--file--multiple').removeClass('succes').addClass('error');
  } else {
    $('.required--file--multiple').removeClass('error').addClass('succes');
  }
}

$(document).on('change', 'select.js-value', function () {
  var block = $(this).closest('.js-phone'),
      select = block.find('select'),
      input = block.find('.input--main'),
      result = block.find('.input--hidden');
  var $thisSelected = $(this).find(':selected'),
      $thisPlaceholder = $thisSelected.attr('data-placeholder'),
      $thisMask = $thisSelected.attr('data-value'),
      $thisBlock = $(this).closest('.js-phone'),
      $thisInput = $thisBlock.find('input[data-mask]');
  $thisInput.val('');
  $(this).closest('.input--mask--required').removeClass('succes').addClass('error-online');
  $thisInput.inputmask('remove');

  if ($thisSelected.hasClass('no-mask')) {
    block.removeClass('input--mask--required error error-online');

    if ($thisBlock.hasClass('required')) {
      block.addClass('required--input');
    }

    $thisInput.attr({
      'placeholder': '_______',
      'data-mask': '',
      'data-placeholder': ''
    });
  } else {
    block.removeClass('required--input');

    if ($thisBlock.hasClass('required')) {
      block.addClass('input--mask--required');
    } else {
      block.addClass('input--mask');
    }

    $thisInput.attr({
      'placeholder': $thisPlaceholder,
      'data-mask': $thisMask,
      'data-placeholder': $thisPlaceholder
    });
    inputMask();
    inputMaskRequired();
  } // ($thisSelected.hasClass('no-mask')) ? (
  // 	block.removeClass('input--mask--required error error-online').addClass('required--input'),
  // 	$thisInput.attr({
  // 		'placeholder': '_______',
  // 		'data-mask': '',
  // 		'data-placeholder': ''
  // 	})
  // ) : (
  // 		block.removeClass('required--input').addClass('input--mask--required'),
  // 		$thisInput.attr({
  // 			'placeholder': $thisPlaceholder,
  // 			'data-mask': $thisMask,
  // 			'data-placeholder': $thisPlaceholder
  // 		}),
  // 		inputMask(),
  // 		inputMaskRequired()
  // 	)


  result.val(select.val() + ' ' + input.val());
  console.log(select.val() + ' ' + input.val());
}); // Input

$(document).on('input', 'input.js-value', function () {
  var block = $(this).closest('.js-phone'),
      select = block.find('select'),
      input = block.find('.input--main'),
      result = block.find('.input--hidden');
  result.val(select.val() + ' ' + input.val());
  console.log(select.val() + ' ' + input.val());
}); // --- Подсчет количества выбранных файлов ---

function click_submit() {
  $('body').on('click', '.required--sbmt', function (e) {
    var $this = $(this),
        $thisForm = $this.closest('form'),
        Errorcount = 0; // --- Проверка полей с паролем
    // --- Проверка инпутов на пустоту ---

    passwordControll();

    if ($('.required--password.error').length || $('.required--password.error-online').length) {
      Errorcount++;
    }

    var inputRequired = $thisForm.find('.required--input input');

    if (inputRequired.length) {
      inputRequired.each(function () {
        var inputValue = $(this).val();
        var $this = $(this);

        if (inputValue == '') {
          $this.closest('div').removeClass('succes').addClass('error');
          Errorcount++;
        } else if (!inputValue == '' && $this.closest('div').hasClass('error') && !$this.closest('div').hasClass('error-online')) {
          $this.closest('div').removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка textarea на пустоту ---


    var inputTextarea = $thisForm.find('.required--textarea textarea');

    if (inputTextarea.length) {
      inputTextarea.each(function () {
        var inputValue = $(this).val();
        var $this = $(this);

        if (inputValue == '') {
          $this.closest('div').removeClass('succes').addClass('error');
          Errorcount++;
        } else if (!inputValue == ' ' && $this.closest('div').hasClass('error') && !$this.closest('div').hasClass('error-online')) {
          $this.closest('div').removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка маски  ---


    var maskReq = $thisForm.find('.input--mask--required');
    maskReq.each(function () {
      if (!$(this).hasClass('succes')) {
        $(this).removeClass('succes').addClass('error');
        Errorcount++;
      }
    }); // --- Проверка маски  ---

    var maskReqTemp = $thisForm.find('.mask-input-control');
    maskReqTemp.each(function () {
      if ($(this).hasClass('error') || $(this).hasClass('error-online')) {
        Errorcount++;
      }
    }); // --- Проверка поля с email ---

    var emailtRequired = $thisForm.find('.required--email input');

    if (emailtRequired.length) {
      emailtRequired.each(function () {
        var inputValue = $(this).val();
        var $this = $(this);

        if (inputValue.length >= 0 && (inputValue.match(/.+?\@.+[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}/g) || []).length !== 1) {
          $this.closest('div').removeClass('succes').addClass('error');
          Errorcount++;
        } else if (inputValue == '') {
          $this.closest('div').removeClass('succes').addClass('error');
          Errorcount++;
        } else if (!inputValue == '' && $this.closest('div').hasClass('error') && !$this.closest('div').hasClass('error-online')) {
          $this.closest('div').removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка одиночного чекбокса ---


    var checkRequired = $thisForm.find('.required--check');

    if (checkRequired.length) {
      var checked = 0;
      checkRequired.each(function () {
        $(this).find(':checkbox').each(function () {
          if ($(this).prop('checked')) {
            checked++;
          }
        });

        if (checked > 0) {
          $(this).removeClass('error');
        } else {
          $(this).addClass('error');
          Errorcount++;
        }
      });
    } // --- Проверка нескольких чекбоксов ---


    var checkMore = $thisForm.find('.check-more');

    if (checkMore.length) {
      var _checked = 0;
      checkMore.each(function () {
        $(this).find(':checkbox').each(function () {
          if ($(this).prop('checked')) {
            _checked++;
          }
        });

        if (_checked != 0) {
          $(this).removeClass('error');
        } else {
          $(this).addClass('error');
          Errorcount++;
        }
      });
    } // --- Проверка радиобатона ---


    var radioReq = $thisForm.find('.radio--required');

    if (radioReq.length) {
      var _checked2 = 0;
      radioReq.each(function () {
        $(this).find(':radio').each(function () {
          if ($(this).prop('checked')) {
            _checked2++;
          }
        });

        if (_checked2 > 0) {
          $(this).removeClass('error error-online').addClass('succes');
        } else {
          $(this).removeClass('succes').addClass('error');
          Errorcount++;
        }
      });
    } // --- Проверка селекта (одиночный) ---


    var selectReq = $thisForm.find('.required--select');

    if (selectReq.length) {
      selectReq.each(function () {
        var select = $(this).find('select');
        var selectAttr = select.attr('multiple');
        var selectVal = select.val();
        var sel = $(this).find('select :selected');
        console.log(selectAttr == 'multiple');

        if (selectAttr == 'multiple') {
          if (selectVal.length == 0) {
            $(this).removeClass('succes').addClass('error');
            Errorcount++;
          } else {
            $(this).removeClass('error').addClass('succes');
          }
        } else {
          if (sel.val() === 'Not selected') {
            sel.closest('.required--select').removeClass('succes').addClass('error');
            Errorcount++;
          } else {
            sel.closest('.required--select').removeClass('error').addClass('succes');
          }
        }
      });
    } // --- Проверка селекта (multiple) ---


    var selectReqMultiple = $thisForm.find('.required--select--multiple');

    if (selectReqMultiple.length) {
      selectReqMultiple.each(function () {
        var sels = $(this).siblings('.js-selected-list').find('.selected-list--item');

        if (sels.length == '' || sels.length > maxLength) {
          $(this).removeClass('succes').addClass('error');
          Errorcount++;
        } else {
          $(this).removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка файла (одниночный) ---


    var fileReq = $thisForm.find('.required--file');

    if (fileReq.length) {
      fileReq.each(function () {
        var file = $(this).find('input');

        if (file.val() == '') {
          file.closest('.required--file').removeClass('succes').addClass('error');
          Errorcount++;
        } else {
          file.closest('.required--file').removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка файла (multiple) ---


    var fileReqMultiple = $thisForm.find('.required--file--multiple'),
        maxLength = fileReqMultiple.attr('data-max');

    if (fileReqMultiple.length) {
      fileReqMultiple.each(function () {
        var files = $(this).find('.input-file-list p');

        if (files.length == '' || files.length > maxLength) {
          fileReqMultiple.removeClass('succes').addClass('error');
          Errorcount++;
        } else {
          fileReqMultiple.removeClass('error').addClass('succes');
        }
      });
    } // --- Проверка date-picker ---


    var dataPicker = $thisForm.find('.required--date');
    dataPicker.each(function () {
      var val = $(this).find('input').val(),
          $thisDate = $(this).closest('.required--date');

      if (val == '') {
        $thisDate.removeClass('succes').addClass('error');
        Errorcount++;
      } else if (!val == '' && $thisDate.hasClass('error') && !$thisDate.hasClass('error-online')) {
        $thisDate.removeClass('error error-online').addClass('succes');
      }
    }); // --- Вывод ошибки вверху ---

    popupForm_error($this, Errorcount); // --- Отпралять или нет ---

    if (Errorcount > 0) {
      if ($(this).closest('form').length) {
        return false;
      }

      return false;
    }
  });
} // --- Функция общая функция для keyUp ---


function keyup_form() {
  num_inset();
  required_email();
  required_input();
  required_textarea();
  required_date();
  first_password();
  second_password();
  inputMask();
  inputMaskRequired();
  maskInputControl();
  radioChange();
  selectChange();
  selectChangeMuliple();
  checkChange();
  checkMoreChange();
  fileChange();
  emailInputControl();
} // ------ Function's end ------
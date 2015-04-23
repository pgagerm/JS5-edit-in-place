$(document).on('ready', function() {
  $('.edit').on('click', function(){

    var originalField = $(this);
    var input = $('<textarea class="edit-input" />');

    $(this).after(input);

    input.height($(this).height());
    $(this).hide();

    input.val($(this).text());

    input.focus();

    input.on('blur', function(){

      originalField.text(input.val());

      input.remove();

      originalField.show();

    });

  });

});
define([ 'jquery' ], function($) {
  var run = function(form) {

    var isValidate = true;

    // check required
    $(form).find('[data-required="true"]').each(function() {
      
      var type = $(this).attr('type');
      
      if (!type) {
        type = $(this).prop("tagName");
      }
      if (type == "checkbox" || type == "radio") {
        if (!$(this).is(':checked')) {
          addError(this, 'required');
          isValidate = false;
        }
      } else if (type == "text" || type == "textarea") {
        if ($(this).val() == "") {
          addError(this, 'required');
          isValidate = false;
        }
      }
      
    });

    return isValidate;
  };
  
  var addError = function(element, validateName) {
    $(element).addClass('parsley-validated parsley-error');
    
    // create error messages
    var errorMessage = $(element).attr('data-error-message-' + validateName);
    var errorElement = $('<ul>');
    errorElement.addClass('parsley-error-list');
    errorElement.html($('<li>').addClass('custom-error-message').css({
      'display': 'list-item'
    }).text(errorMessage));
    
    $(element).closest('.error-point').after(errorElement);
    errorElement.show();
  };

  return {
    run : run
  };
});
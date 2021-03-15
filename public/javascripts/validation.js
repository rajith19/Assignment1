$('#addMovie').submit(function (e) {
    $('.alert.alert-danger').hide();
    if (!$('input#name').val() || !$('input#cardImage').val() || !$('input#price').val() || !$('input#upcoming').val() || !$('input#genres').val() || !$('input#author').val() || !$('input#rating').val() || !$('input#reviewText').val() ) {
        if ($('.alert.alert-danger').length) {
            $('.alert.alert-danger').show();
        } else {
            $(this).prepend('<div role="alert" class="alert alert-danger">All fields required, please try again</div > ');
        } 
        return false;
    }
});
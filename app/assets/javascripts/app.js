/**
 * Created by danieljr on 13/09/16.
 */
$(document).ready(function () {
    $('select').material_select();
    $('.button-collapse').sideNav();

    $('#search').click(function () {
        $('#results').fadeIn();
    });
});
/**
 * Created by hellsigner on 13.07.15.
 */

$('body').on('click', '.grid-item-control-button', function(e) {
    var id = +$(e.target).closest('tr').find('.field-id').text();
    // todo: data-action
    $('#modal-books-save').modal('show');
});

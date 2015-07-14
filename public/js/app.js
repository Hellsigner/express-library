/**
 * Created by hellsigner on 13.07.15.
 */

window.App = {};
App.notify = function(message, level, position, timeout) {
    level = level || 'info';
    position = position || 'bottomLeft';
    timeout = timeout || 5000;
    return noty({
        text: message,
        type: level,
        dismissQueue: true,
        layout: position,
        theme: 'defaultTheme',
        timeout: timeout
    });
};
App.formatters = {
    author: function(authors)
    {
        return _.map(authors, function(author) {
            return author.name; // todo: as links
        }).join(', ');
    },
    remaining: function(item, row, other)
    {
        return '<div>'
            + item
            + ((row.remaining < 0) ? '' : ' <button class="btn btn-xs btn-success grid-item-control-button"><i class="glyphicon glyphicon-tags"></i></button>')
            + ((row.quantity == item) ? '' : ' <button class="btn btn-xs btn-info grid-item-control-button"><i class="glyphicon glyphicon-question-sign"></i></button>')
            + '</div>';
    },
    quantity: function(item)
    {
        return '<div>'
            + item
            + ' <button class="btn btn-xs btn-info grid-item-control-button"><i class="glyphicon glyphicon-edit"></i></button>'
            + '</div>';
    },
    actions: function()
    {
        return [
            '<button class="btn btn-xs btn-info grid-item-control-button"><i class="glyphicon glyphicon-pencil"></i></button>',
            '<button class="btn btn-xs btn-danger grid-item-control-button"><i class="glyphicon glyphicon-remove"></i></button>'
        ].join("\n");
    }
};

App.actions = {

};

/**
 * Created by hellsigner on 09.07.15.
 */

define([
    "dojo/_base/declare",
    'dgrid/GridFromHtml',
    "dgrid/Selection",
    "dgrid/Selector",
    'dojo/domReady!'
], function (declare, Grid, Selection, selector) {

    var data = [
        {
            id: 1,
            title: 'Farenheit 451',
            authors: [{id: 1, name: 'Ray Bradbury'}, {id: 2, name: '...'}],
            year: '1953',
            quantity: 100,
            remaining: 61
        },
        {
            id: 2,
            title: 'Война и мир',
            authors: [{id: 3, name: 'Tolstoy'}, {id: 4, name: '..'}],
            year: '1869',
            quantity: 50,
            remaining: 23
        }
    ];

    var BooksGrid = declare([Grid, Selection]);

    return function(options) {
        var grid = new BooksGrid({}, 'grid-books');
        grid.renderArray(data);
        return grid;
    };
});
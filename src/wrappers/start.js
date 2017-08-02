(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'handlebars/runtime', 'medium-editor', 'blueimp-file-upload'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = function () {
            if (typeof window === 'undefined') {
                throw new Error("medium-editor-insert-plugin runs only in a browser.")
            }

            Handlebars = require('handlebars/runtime');
            MediumEditor = require('medium-editor');
            require('blueimp-file-upload');

            factory(Handlebars, MediumEditor);
        };
    } else {
        factory(Handlebars, MediumEditor);
    }
}(function (Handlebars, MediumEditor) {

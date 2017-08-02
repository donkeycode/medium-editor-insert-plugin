/*! 
 * medium-editor-insert-plugin v2.4.1 - jQuery insert plugin for MediumEditor
 *
 * http://linkesch.com/medium-editor-insert-plugin
 * 
 * Copyright (c) 2014 Pavel Linkesch (http://linkesch.com)
 * Released under the MIT license
 */

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

this["MediumInsert"] = this["MediumInsert"] || {};
this["MediumInsert"]["Templates"] = this["MediumInsert"]["Templates"] || {};

this["MediumInsert"]["Templates"]["src/js/templates/core-buttons.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "            <li><button data-addon=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-action=\"add\" class=\"medium-insert-action\" type=\"button\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"medium-insert-buttons\" contenteditable=\"false\" style=\"display: none\">\n    <button class=\"medium-insert-buttons-show\" type=\"button\"><span>+</span></button>\n    <ul class=\"medium-insert-buttons-addons\" style=\"display: none\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.addons : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/core-caption.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<figcaption contenteditable=\"true\" class=\"medium-insert-caption-placeholder\" data-placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\"></figcaption>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/core-empty-line.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><br></p>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/embeds-toolbar.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <li>\n                        <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n        <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/embeds-wrapper.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"medium-insert-embeds\" contenteditable=\"false\">\n	<figure>\n		<div class=\"medium-insert-embed\">\n			"
    + ((stack1 = ((helper = (helper = helpers.html || (depth0 != null ? depth0.html : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"html","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n	</figure>\n	<div class=\"medium-insert-embeds-overlay\"></div>\n</div>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-fileupload.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input type=\"file\" multiple>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-image.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"medium-insert-images-progress\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<figure contenteditable=\"false\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" />\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.progress : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</figure>\n";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-progressbar.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<progress min=\"0\" max=\"100\" value=\"0\">0</progress>";
},"useData":true});

this["MediumInsert"]["Templates"]["src/js/templates/images-toolbar.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                <li>\n                    <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active\">\n		<ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    	</ul>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "        	        <li>\n        	            <button class=\"medium-editor-action\" data-action=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n        	        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active\">\n    <ul class=\"medium-editor-toolbar-actions clearfix\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.styles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
;(function (window, document) {

    'use strict';

    /** Default values */
    var pluginName = 'mediumInsert',
        defaults = {
            editor: null,
            enabled: true,
            addons: {
                images: true, // boolean or object containing configuration
                // embeds: false
            }
        };

    /**
     * Capitalize first character
     *
     * @param {string} str
     * @return {string}
     */

    function ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Core plugin's object
     *
     * Sets options, variables and calls init() function
     *
     * @constructor
     * @param {DOM} el - DOM element to init the plugin on
     * @param {object} options - Options to override defaults
     * @return {void}
     */

    function Core(el, options) {
        var editor;

        this.el = el;
        this.$el = el;
        this.templates = window.MediumInsert.Templates;

        if (options) {
            // Fix #142
            // Avoid deep copying editor object, because since v2.3.0 it contains circular references which causes jQuery.extend to break
            // Instead copy editor object to this.options manually
            editor = options.editor;
            options.editor = null;
        }
        this.options = Object.assign({}, options, defaults ); //
        this.options.editor = editor;
        if (options) {
            options.editor = editor; // Restore original object definition
        }

        this._defaults = defaults;
        this._name = pluginName;

        // Extend editor's functions
        if (this.options && this.options.editor) {
            if (this.options.editor._serialize === undefined) {
                this.options.editor._serialize = this.options.editor.serialize;
            }
            if (this.options.editor._destroy === undefined) {
                this.options.editor._destroy = this.options.editor.destroy;
            }
            if (this.options.editor._setup === undefined) {
                this.options.editor._setup = this.options.editor.setup;
            }
            this.options.editor._hideInsertButtons = this.hideButtons;

            this.options.editor.serialize = this.editorSerialize;
            this.options.editor.destroy = this.editorDestroy;
            this.options.editor.setup = this.editorSetup;

            if (this.options.editor.getExtensionByName('placeholder') !== undefined) {
                this.options.editor.getExtensionByName('placeholder').updatePlaceholder = this.editorUpdatePlaceholder;
            }
        }
    }

    /**
     * Initialization
     *
     * @return {void}
     */

    Core.prototype.init = function () {
        this.el.classList.add('medium-editor-insert-plugin');

        if (typeof this.options.addons !== 'object' || Object.keys(this.options.addons).length === 0) {
            this.disable();
        }

        this.initAddons();
        this.clean();
        this.events();
    };

    /**
     * Event listeners
     *
     * @return {void}
     */

    Core.prototype.events = function () {
        var that = this;

        this.el
            .addEventListener('dragover drop', function (e) {
                e.preventDefault();
            });

        function onClickTarget(target, callback) {
            return function(event) { 
                var res = Array.prototype.slice.call(this.querySelectorAll(target)).filter((a) => {  
                    if (a == event.target) {
                        return true; 
                    }
                    let recurseToChilds = function (r) {
                        if (r.childNodes.length) {
                            for (let e of r.childNodes) {
                                if (e == event.target) {
                                    return true;
                                }
                                recurseToChilds(e);
                            }
                        }
                        return false;
                    }
                    return recurseToChilds(a);
                
                });
                if (res.length) {
                    let e2 = Object.assign({}, event);
                    e2.currentTarget = res[0];
                    callback(e2);
                }
            };
        }
        this.el.addEventListener('keyup', (e) => {this.toggleButtons.apply(this, [e] )});
        this.el.addEventListener('click', (e) => {this.toggleButtons.apply(this, [e] )});
        this.el.addEventListener('selectstart', onClickTarget('.medium-insert, .medium-insert-buttons', (e) => { return this.disableSelection.apply(this, [e]) } ));
        this.el.addEventListener('mousedown', onClickTarget('.medium-insert, .medium-insert-buttons', (e) => { return this.disableSelection.apply(this, [e]) }));
        this.el.addEventListener('click', onClickTarget('.medium-insert-buttons-show', (e) => { return this.toggleAddons.apply(this, [e]) } ));
        this.el.addEventListener('click', onClickTarget('.medium-insert-action', (e) => { return this.addonAction.apply(this, [e]) } ));
        

        window.addEventListener('resize', (e) => { 
            this.positionButtons.apply(this, [null])
        });
    };

    /**
     * Return editor instance
     *
     * @return {object} MediumEditor
     */

    Core.prototype.getEditor = function () {
        return this.options.editor;
    };

    /**
     * Extend editor's serialize function
     *
     * @return {object} Serialized data
     */

    Core.prototype.editorSerialize = function () {
        var data = this._serialize();

        for( let key in data) {

            var $data = document.createElement('div');
            $data.innerHTML = data[key].value;

            let button = $data.querySelector('.medium-insert-buttons');
            if (button) {
                button.remove();
            }

            let active = $data.querySelector('.medium-insert-active');
            
            if(active) {
                active.classList.remove('medium-insert-active');
            }

            // Restore original embed code from embed wrapper attribute value.
            Array.prototype.slice.call($data.querySelectorAll('[data-embed-code]')).forEach(function(element) {
                html = document.createElement('div');
                html.innerHTML = element.attributes['data-embed-code'];
                html = html.innerText;
                element.innerHTML = html;
            });

            data[key].value = $data.innerHTML;
        }

        return data;
    };

    /**
     * Extend editor's destroy function to deactivate this plugin too
     *
     * @return {void}
     */

    Core.prototype.editorDestroy = function () {
        for (let el of this.elements) {
            if (el['plugin_' + pluginName] instanceof Core) {
                el['plugin_' + pluginName].disable();
            }
        }

        this._destroy();
    };

    /**
     * Extend editor's setup function to activate this plugin too
     *
     * @return {void}
     */

    Core.prototype.editorSetup = function () {
        this._setup();
        for (let el of this.elements) {
             if (el['plugin_' + pluginName] instanceof Core) {
                el['plugin_' + pluginName].enable();
            }
        }
    };

    /**
     * Extend editor's placeholder.updatePlaceholder function to show placeholder dispite of the plugin buttons
     *
     * @return {void}
     */

    Core.prototype.editorUpdatePlaceholder = function (el, dontShow) {
       
        let contents = Array.prototype.slice.call(el.children).filter(function (element) {
            return !element.classList.contains('medium-insert-buttons');
        }).map(function (element) {
            return Array.prototype.slice.call(element.childNodes);
        });
        contents = [].concat.apply([],contents);

        if (!dontShow && contents.length === 1 && contents[0].nodeName.toLowerCase() === 'br') {
            this.showPlaceholder(el);
            this.base._hideInsertButtons(el);
        } else {
            this.hidePlaceholder(el);
        }
    };

    /**
     * Trigger editableInput on editor
     *
     * @return {void}
     */

    Core.prototype.triggerInput = function () {
        if (this.getEditor()) {
            this.getEditor().trigger('editableInput', null, this.el);
        }
    };

    /**
     * Deselects selected text
     *
     * @return {void}
     */

    Core.prototype.deselect = function () {
        document.getSelection().removeAllRanges();
    };

    /**
     * Disables the plugin
     *
     * @return {void}
     */

    Core.prototype.disable = function () {
        this.options.enabled = false;
        if(this.el.querySelector('.medium-insert-buttons')) {
            this.el.querySelector('.medium-insert-buttons').classList.add('hide');
        }
    };

    /**
     * Enables the plugin
     *
     * @return {void}
     */

    Core.prototype.enable = function () {
        this.options.enabled = true;

        this.el.querySelector('.medium-insert-buttons').classList.remove('hide');
    };

    /**
     * Disables selectstart mousedown events on plugin elements except images
     *
     * @return {void}
     */

    Core.prototype.disableSelection = function (e) {
        
        if (e.target && (e.target.nodeName === 'IMG' || e.target.classList.contains('medium-insert-buttons-show'))) {
            e.preventDefault();
        }
    };

    /**
     * Initialize addons
     *
     * @return {void}
     */

    Core.prototype.initAddons = function () {
        var that = this;

        if (!this.options.addons || this.options.addons.length === 0) {
            return;
        }

        for(let addon in this.options.addons) {
            let options = this.options.addons[addon];
            var addonName = pluginName + ucfirst(addon);

            if (options === false) {
                delete that.options.addons[addon];
                return;
            }

            window[addonName](that.el, options);
            that.options.addons[addon] = that.el['plugin_' + addonName].options;
        };
    };

    /**
     * Cleans a content of the editor
     *
     * @return {void}
     */

    Core.prototype.clean = function () {
        var that = this,
            $buttons, $lastEl, $text;

        if (this.options.enabled === false) {
            return;
        }

        if (this.el.innerHTML.length === 0) {
            this.el.innerHTML = this.templates['src/js/templates/core-empty-line.hbs']().trim();
        }

        // Fix #29
        // Wrap content text in <p></p> to avoid Firefox problems
        let text = this.el.childNodes;

        text = [].concat.apply([],text);
        text = text.filter(function (element) {
            return (element.nodeName === '#text' && element.textContent && element.textContent.trim() !== '') || element.nodeName.toLowerCase() === 'br';
        });

        text.forEach(function (element) {
            let p = document.createElement('p');
            p.innerHTML = element.textContent;
            element.parentNode.replaceChild(p, element);
            // Fix #145
            // Move caret at the end of the element that's being wrapped
            // that.moveCaret(element.parentElement, element.textContent.length);
        });

        this.addButtons();

        $buttons = this.el.querySelector('.medium-insert-buttons');
        $lastEl = $buttons.previousSibling.previousSibling;
        if ($lastEl.attributes['class'] && $lastEl.attributes['class'].match(/medium\-insert(?!\-active)/)) {
            $buttons.parentElement.insertBefore(this.templates['src/js/templates/core-empty-line.hbs']().trim());
        }
    };

    /**
     * Returns HTML template of buttons
     *
     * @return {string} HTML template of buttons
     */

    Core.prototype.getButtons = function () {
        if (this.options.enabled === false) {
            return;
        }

        return this.templates['src/js/templates/core-buttons.hbs']({
            addons: this.options.addons
        }).trim();
    };

    /**
     * Appends buttons at the end of the $el
     *
     * @return {void}
     */

    Core.prototype.addButtons = function () {
        if (!this.el.querySelector('.medium-insert-buttons')) {
            let div = document.createElement('div');
            div.innerHTML = this.getButtons();
            this.el.appendChild(div.childNodes[0]);
        }
    };

    /**
     * Move buttons to current active, empty paragraph and show them
     *
     * @return {void}
     */

    Core.prototype.toggleButtons = function (e) {
        var $el = e.target,
            selection = window.getSelection(),
            that = this,
            range, $current, $p, activeAddon;

        if (this.options.enabled === false) {
            return;
        }

        if (!selection || selection.rangeCount === 0) {
            $current = $el;
        } else {
            range = selection.getRangeAt(0);
            $current = range.commonAncestorContainer.nodeName === "#text" ? range.commonAncestorContainer.parentElement : range.commonAncestorContainer;
        }

        // When user clicks on  editor's placeholder in FF, $current el is editor itself, not the first paragraph as it should
        if ($current.classList.contains('medium-editor-insert-plugin')) {
            $current = $current.querySelector('p:first-of-type');
        }

        
        let closest = function(element, match) {
            if (element.nodeName === match) {
                return element;
            }

            if (!element.parentElement) {
                return null;
            }

            return closest(element.parentElement, match);
        };

        let closestClass = function(element, match) {
            if (element.classList.contains(match)) {
                return element;
            }

            if (!element.parentElement) {
                return null;
            }

            return closestClass(element.parentElement, match);
        };

        $p = closest($current, 'P');

        this.clean();

        if ($el.classList.contains('medium-editor-placeholder') === false && !closestClass($el, 'medium-insert-buttons') && !closestClass($current, 'medium-insert-buttons')) {

            let active = this.el.querySelector('.medium-insert-active');

            if (active) {
                active.classList.remove('medium-insert-active');
            }

            for (let addon in this.options.addons) {
                if (closestClass($el, 'medium-insert-' + addon)) {
                    $current = $el;
                }
                if (closestClass($current, 'medium-insert-' + addon)) {
                    $p = closestClass($current, 'medium-insert-' + addon);
                    activeAddon = addon;
                }
            }

            if ($p && (($p.innerText.trim() === '' && !activeAddon) || activeAddon === 'images')) {
                $p.classList.add('medium-insert-active');

                if (activeAddon === 'images') {
                    this.el.querySelector('.medium-insert-buttons').attributes['data-active-addon'] = activeAddon;
                } else {
                    delete this.el.querySelector('.medium-insert-buttons').attributes['data-active-addon'];
                }

                // If buttons are displayed on addon paragraph, wait 100ms for possible captions to display
                setTimeout(function () {
                    that.positionButtons(activeAddon);
                    that.showButtons(activeAddon);
                }, activeAddon ? 100 : 0);
            } else {
                this.hideButtons();
            }
        }
    };

    /**
     * Show buttons
     *
     * @param {string} activeAddon - Name of active addon
     * @returns {void}
     */

    Core.prototype.showButtons = function (activeAddon) {
        var $buttons = this.el.querySelector('.medium-insert-buttons');

        $buttons.style.display = '';
        $buttons.querySelector('li').style.display  = '';

        if (activeAddon) {
            $buttons.querySelector('li').style.display = 'none';
            $buttons.querySelector('button[data-addon="' + activeAddon + '"]').parentElement.style.display = '';
        }
    };

    /**
     * Hides buttons
     *
     * @param {jQuery} $el - Editor element
     * @returns {void}
     */

    Core.prototype.hideButtons = function ($el) {
        $el = $el || this.el;

        $el.querySelector('.medium-insert-buttons').style.display = 'none';
        $el.querySelector('.medium-insert-buttons-addons').style.display = 'none';
        $el.querySelector('.medium-insert-buttons-show').classList.remove('medium-insert-buttons-rotate');
    };

    /**
     * Position buttons
     *
     * @param {string} activeAddon - Name of active addon
     * @return {void}
     */

    Core.prototype.positionButtons = function (activeAddon) {
        var $buttons = this.el.querySelector('.medium-insert-buttons'),
            $p = this.el.querySelector('.medium-insert-active'),
            $lastCaption = $p.classList.contains('medium-insert-images-grid') ? [] : $p.querySelector('figure:last-of-type figcaption'),
            elementsContainer = this.getEditor() ? this.getEditor().options.elementsContainer : document.body,
            elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
            position = {};


        if ($p) {
            position.left = this.el.getBoundingClientRect().left;
            position.top = $p.getBoundingClientRect().top + document.body.scrollTop;
            
            if (activeAddon) {
                position.left += $p.getBoundingClientRect().width - $buttons.querySelector('.medium-insert-buttons-show').getBoundingClientRect().width - 10;
                position.top += $p.getBoundingClientRect().height - 20 + ($lastCaption ? -$lastCaption.getBoundingClientRect().height - parseInt($lastCaption.style.marginTop, 10) : 10);
            } else {
                position.left -= 40;
            }

            if (elementsContainerAbsolute) {
                position.top += elementsContainer.scrollTop;
            }

            if (this.el.classList.contains('medium-editor-placeholder') === false && position.left < 0) {
                position.left = $p.getBoundingClientRect().left;
            }

            for (let p in position) {
                $buttons.style[p] = position[p] + 'px';
            };
        }
    };

    /**
     * Toggles addons buttons
     *
     * @return {void}
     */

    Core.prototype.toggleAddons = function () {
        if (this.el.querySelector('.medium-insert-buttons').attributes['data-active-addon'] === 'images') {
            this.el.querySelector('.medium-insert-buttons').querySelector('button[data-addon="images"]').click();
            return;
        }

        let addons = this.el.querySelector('.medium-insert-buttons-addons');

        addons.style.display = "inherit";
        if (addons.style.opacity == 1) {
            addons.style.opacity = 0;
        } else {
            addons.style.opacity = 1;
        }

        this.el.querySelector('.medium-insert-buttons-show').classList.toggle('medium-insert-buttons-rotate');
    };

    /**
     * Hide addons buttons
     *
     * @return {void}
     */

    Core.prototype.hideAddons = function () {
        this.el.querySelector('.medium-insert-buttons-addons').style.display = "none";
        this.el.querySelector('.medium-insert-buttons-show').classList.remove('medium-insert-buttons-rotate');
    };

    /**
     * Call addon's action
     *
     * @param {Event} e
     * @return {void}
     */

    Core.prototype.addonAction = function (e) {
        var $a = e.currentTarget,
            addon = $a.attributes['data-addon'].value,
            action = $a.attributes['data-action'].value;
        this.el['plugin_' + pluginName + ucfirst(addon)][action]();
    };

    /**
     * Move caret at the beginning of the empty paragraph
     *
     * @param {jQuery} $el Element where to place the caret
     * @param {integer} position Position where to move caret. Default: 0
     *
     * @return {void}
     */

    Core.prototype.moveCaret = function ($el, position) {
        var range, sel, el, textEl;

        position = position || 0;
        range = document.createRange();
        sel = window.getSelection();
        el = $el.get(0);

        if (!el.childNodes.length) {
            textEl = document.createTextNode(' ');
            el.appendChild(textEl);
        }

        range.setStart(el.childNodes[0], position);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    };

    /**
     * Add caption
     *
     * @param {jQuery Element} $el
     * @param {string} placeholder
     * @return {void}
     */

    Core.prototype.addCaption = function ($el, placeholder) {
        var $caption = $el.querySelector('figcaption');
        if (!$caption) {

            let div = document.createElement('div');
            div.innerHTML = this.templates['src/js/templates/core-caption.hbs']({
                placeholder: placeholder
            });
            $el.appendChild(div.childNodes[0]);
        }
    };

    /**
     * Remove captions
     *
     * @param {jQuery Element} $ignore
     * @return {void}
     */

    Core.prototype.removeCaptions = function ($ignore) {
        var $captions = Array.prototype.slice.call(this.el.querySelectorAll('figcaption'));

        if ($ignore) {
            $captions = $captions.filter(function(element) {
                return element != $ignore;
            });
        }

        $captions.forEach(function (element) {
            if (element.classList.contains('medium-insert-caption-placeholder') || element.innerText.trim() === '') {
                element.remove();
            }
        });
    };

    /**
     * Remove caption placeholder
     *
     * @param {jQuery Element} $el
     * @return {void}
     */

    Core.prototype.removeCaptionPlaceholder = function ($el) {
        var $caption = $el.nodeName == 'FIGCAPTION' ? $el : $el.querySelector('figcaption');

        if ($caption) {
            $caption.classList.remove('medium-insert-caption-placeholder');
            delete $caption.attributes['data-placeholder'];
        }
    };

    /** Plugin initialization */

    window.mediumInsert = function (node, options) {
        var that = node,
            textareaId;

        if (that.nodeName === 'TEXTAREA') {
            textareaId = that.attributes['medium-editor-textarea-id'];
            that = document.querySelector('[medium-editor-textarea-id="' + textareaId + '"]');
        }
        if (!that['plugin_' + pluginName]) {
            // Plugin initialization
            that['plugin_' + pluginName] = new Core(that, options)
            that['plugin_' + pluginName].init();
        } else if (typeof options === 'string' && that['plugin_' + pluginName][options]) {
            // Method call
            that['plugin_' + pluginName][options]();
        }
    };

})(window, document);

/*global MediumEditor*/

; (function (window, document, Util, undefined) {

    'use strict';

    /** Default values */
    var pluginName = 'mediumInsert',
        addonName = 'Images', // first char is uppercase
        defaults = {
            label: '<span class="fa fa-camera"></span>',
            deleteMethod: 'POST',
            deleteScript: 'delete.php',
            preview: true,
            captions: true,
            captionPlaceholder: 'Type caption for image (optional)',
            autoGrid: 3,
            fileUploadOptions: { // See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                url: null,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
            },
            fileDeleteOptions: {},
            styles: {
                wide: {
                    label: '<span class="fa fa-align-justify"></span>'
                    // added: function ($el) {},
                    // removed: function ($el) {}
                },
                left: {
                    label: '<span class="fa fa-align-left"></span>'
                    // added: function ($el) {},
                    // removed: function ($el) {}
                },
                right: {
                    label: '<span class="fa fa-align-right"></span>'
                    // added: function ($el) {},
                    // removed: function ($el) {}
                },
                grid: {
                    label: '<span class="fa fa-th"></span>'
                    // added: function ($el) {},
                    // removed: function ($el) {}
                }
            },
            actions: {
                remove: {
                    label: '<span class="fa fa-times"></span>',
                    clicked: function () {
                        var $event = $.Event('keydown');

                        $event.which = 8;
                        // $(document).trigger($event);
                    }
                }
            },
            sorting: function () {
                var that = this;

                // $('.medium-insert-images').sortable({
                //     group: 'medium-insert-images',
                //     containerSelector: '.medium-insert-images',
                //     itemSelector: 'figure',
                //     placeholder: '<figure class="placeholder">',
                //     handle: 'img',
                //     nested: false,
                //     vertical: false,
                //     afterMove: function () {
                //         that.core.triggerInput();
                //     }
                // });
            },
            messages: {
                acceptFileTypesError: 'This file is not in a supported format: ',
                maxFileSizeError: 'This file is too big: '
            }
            // uploadError: function($el, data) {}
            // uploadCompleted: function ($el, data) {}
        };

    /**
     * Images object
     *
     * Sets options, variables and calls init() function
     *
     * @constructor
     * @param {DOM} el - DOM element to init the plugin on
     * @param {object} options - Options to override defaults
     * @return {void}
     */

    function Images(el, options) {
        this.el = el;
        this.$el = el;
        this.$currentImage = null;
        this.templates = window.MediumInsert.Templates;
        this.core = this.el['plugin_' + pluginName];

        this.options = Object.assign({}, defaults, options);

        this._defaults = defaults;
        // this._name = pluginName;

        // // Allow image preview only in browsers, that support's that
        // if (this.options.preview && !window.FileReader) {
        //     this.options.preview = false;
        // }

        // // Extend editor's functions
        // if (this.core.getEditor()) {
        //     this.core.getEditor()._serializePreImages = this.core.getEditor().serialize;
        //     this.core.getEditor().serialize = this.editorSerialize;
        // }

        // this.init();
    }

    // /**
    //  * Initialization
    //  *
    //  * @return {void}
    //  */

    // Images.prototype.init = function () {
    //     var $images = this.$el.find('.medium-insert-images');

    //     $images.find('figcaption').attr('contenteditable', true);
    //     $images.find('figure').attr('contenteditable', false);

    //     this.events();
    //     this.backwardsCompatibility();
    //     this.sorting();
    // };

    // /**
    //  * Event listeners
    //  *
    //  * @return {void}
    //  */

    // Images.prototype.events = function () {
    //     $(document)
    //         .on('click', $.proxy(this, 'unselectImage'))
    //         .on('keydown', $.proxy(this, 'removeImage'))
    //         .on('click', '.medium-insert-images-toolbar .medium-editor-action', $.proxy(this, 'toolbarAction'))
    //         .on('click', '.medium-insert-images-toolbar2 .medium-editor-action', $.proxy(this, 'toolbar2Action'));

    //     this.$el
    //         .on('click', '.medium-insert-images img', $.proxy(this, 'selectImage'));

    //     $(window)
    //         .on('resize', $.proxy(this, 'autoRepositionToolbars'));
    // };

    // /**
    //  * Replace v0.* class names with new ones
    //  *
    //  * @return {void}
    //  */

    // Images.prototype.backwardsCompatibility = function () {
    //     this.$el.find('.mediumInsert')
    //         .removeClass('mediumInsert')
    //         .addClass('medium-insert-images');

    //     this.$el.find('.medium-insert-images.small')
    //         .removeClass('small')
    //         .addClass('medium-insert-images-left');
    // };

    // /**
    //  * Extend editor's serialize function
    //  *
    //  * @return {object} Serialized data
    //  */

    // Images.prototype.editorSerialize = function () {
    //     var data = this._serializePreImages();

    //     $.each(data, function (key) {
    //         var $data = $('<div />').html(data[key].value);

    //         $data.find('.medium-insert-images').find('figcaption, figure').removeAttr('contenteditable');
    //         $data.find('.medium-insert-images-progress').remove();

    //         data[key].value = $data.html();
    //     });

    //     return data;
    // };

    // /**
    //  * Add image
    //  *
    //  * @return {void}
    //  */

    Images.prototype.add = function () {
        let active = this.el.querySelector('.medium-insert-active');
        let div = document.createElement('div');
        div.classList.add('encadre')
        active.parentElement.insertBefore(div, active );
        this.core.hideButtons();
        let s = window.getSelection();
        let r = document.createRange();
        r.setStart(div, 0);
        r.setEnd(div, 0);
        s.removeAllRanges();
        s.addRange(r);
    }
    //     var that = this,
    //         $file = $(this.templates['src/js/templates/images-fileupload.hbs']()),
    //         fileUploadOptions = {
    //             dataType: 'json',
    //             add: function (e, data) {
    //                 $.proxy(that, 'uploadAdd', e, data)();
    //             },
    //             done: function (e, data) {
    //                 $.proxy(that, 'uploadDone', e, data)();
    //             }
    //         };

    //     // Only add progress callbacks for browsers that support XHR2,
    //     // and test for XHR2 per:
    //     // http://stackoverflow.com/questions/6767887/
    //     // what-is-the-best-way-to-check-for-xhr2-file-upload-support
    //     if (new XMLHttpRequest().upload) {
    //         fileUploadOptions.progress = function (e, data) {
    //             $.proxy(that, 'uploadProgress', e, data)();
    //         };

    //         fileUploadOptions.progressall = function (e, data) {
    //             $.proxy(that, 'uploadProgressall', e, data)();
    //         };
    //     }

    //     $file.fileupload($.extend(true, {}, this.options.fileUploadOptions, fileUploadOptions));

    //     $file.click();
    // };

    // /**
    //  * Callback invoked as soon as files are added to the fileupload widget - via file input selection, drag & drop or add API call.
    //  * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#add
    //  *
    //  * @param {Event} e
    //  * @param {object} data
    //  * @return {void}
    //  */

    // Images.prototype.uploadAdd = function (e, data) {
    //     var $place = this.$el.find('.medium-insert-active'),
    //         that = this,
    //         uploadErrors = [],
    //         file = data.files[0],
    //         acceptFileTypes = this.options.fileUploadOptions.acceptFileTypes,
    //         maxFileSize = this.options.fileUploadOptions.maxFileSize,
    //         reader;

    //     if (acceptFileTypes && !acceptFileTypes.test(file.type)) {
    //         uploadErrors.push(this.options.messages.acceptFileTypesError + file.name);
    //     } else if (maxFileSize && file.size > maxFileSize) {
    //         uploadErrors.push(this.options.messages.maxFileSizeError + file.name);
    //     }
    //     if (uploadErrors.length > 0) {
    //         if (this.options.uploadFailed && typeof this.options.uploadFailed === "function") {
    //             this.options.uploadFailed(uploadErrors, data);

    //             return;
    //         }

    //         alert(uploadErrors.join("\n"));

    //         return;
    //     }

    //     this.core.hideButtons();

    //     // Replace paragraph with div, because figure elements can't be inside paragraph
    //     if ($place.is('p')) {
    //         $place.replaceWith('<div class="medium-insert-active">' + $place.html() + '</div>');
    //         $place = this.$el.find('.medium-insert-active');
    //         if ($place.next().is('p')) {
    //             this.core.moveCaret($place.next());
    //         } else {
    //             $place.after('<p><br></p>'); // add empty paragraph so we can move the caret to the next line.
    //             this.core.moveCaret($place.next());
    //         }
    //     }

    //     $place.addClass('medium-insert-images');

    //     if (this.options.preview === false && $place.find('progress').length === 0 && (new XMLHttpRequest().upload)) {
    //         $place.append(this.templates['src/js/templates/images-progressbar.hbs']());
    //     }

    //     if (data.autoUpload || (data.autoUpload !== false && $(e.target).fileupload('option', 'autoUpload'))) {
    //         data.process().done(function () {
    //             // If preview is set to true, let the showImage handle the upload start
    //             if (that.options.preview) {
    //                 reader = new FileReader();

    //                 reader.onload = function (e) {
    //                     $.proxy(that, 'showImage', e.target.result, data)();
    //                 };

    //                 reader.readAsDataURL(data.files[0]);
    //             } else {
    //                 data.submit();
    //             }
    //         });
    //     }
    // };

    // /**
    //  * Callback for global upload progress events
    //  * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#progressall
    //  *
    //  * @param {Event} e
    //  * @param {object} data
    //  * @return {void}
    //  */

    // Images.prototype.uploadProgressall = function (e, data) {
    //     var progress, $progressbar;

    //     if (this.options.preview === false) {
    //         progress = parseInt(data.loaded / data.total * 100, 10);
    //         $progressbar = this.$el.find('.medium-insert-active').find('progress');

    //         $progressbar
    //             .attr('value', progress)
    //             .text(progress);

    //         if (progress === 100) {
    //             $progressbar.remove();
    //         }
    //     }
    // };

    // /**
    //  * Callback for upload progress events.
    //  * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#progress
    //  *
    //  * @param {Event} e
    //  * @param {object} data
    //  * @return {void}
    //  */

    // Images.prototype.uploadProgress = function (e, data) {
    //     var progress, $progressbar;

    //     if (this.options.preview) {
    //         progress = 100 - parseInt(data.loaded / data.total * 100, 10);
    //         $progressbar = data.context.find('.medium-insert-images-progress');

    //         $progressbar.css('width', progress + '%');

    //         if (progress === 0) {
    //             $progressbar.remove();
    //         }
    //     }
    // };

    // /**
    //  * Callback for successful upload requests.
    //  * https://github.com/blueimp/jQuery-File-Upload/wiki/Options#done
    //  *
    //  * @param {Event} e
    //  * @param {object} data
    //  * @return {void}
    //  */

    // Images.prototype.uploadDone = function (e, data) {
    //     $.proxy(this, 'showImage', data.result.files[0].url, data)();

    //     this.core.clean();
    //     this.sorting();
    // };

    // /**
    //  * Add uploaded / preview image to DOM
    //  *
    //  * @param {string} img
    //  * @returns {void}
    //  */

    // Images.prototype.showImage = function (img, data) {
    //     var $place = this.$el.find('.medium-insert-active'),
    //         domImage,
    //         that;

    //     // Hide editor's placeholder
    //     $place.click();

    //     // If preview is allowed and preview image already exists,
    //     // replace it with uploaded image
    //     that = this;
    //     if (this.options.preview && data.context) {
    //         domImage = this.getDOMImage();
    //         domImage.onload = function () {
    //             data.context.find('img').attr('src', domImage.src);

    //             if (this.options.uploadCompleted) {
    //                 this.options.uploadCompleted(data.context, data);
    //             }

    //             that.core.triggerInput();
    //         }.bind(this);
    //         domImage.src = img;
    //     } else {
    //         data.context = $(this.templates['src/js/templates/images-image.hbs']({
    //             img: img,
    //             progress: this.options.preview
    //         })).appendTo($place);

    //         $place.find('br').remove();

    //         if (this.options.autoGrid && $place.find('figure').length >= this.options.autoGrid) {
    //             $.each(this.options.styles, function (style, options) {
    //                 var className = 'medium-insert-images-' + style;

    //                 $place.removeClass(className);

    //                 if (options.removed) {
    //                     options.removed($place);
    //                 }
    //             });

    //             $place.addClass('medium-insert-images-grid');

    //             if (this.options.styles.grid.added) {
    //                 this.options.styles.grid.added($place);
    //             }
    //         }

    //         if (this.options.preview) {
    //             data.submit();
    //         } else if (this.options.uploadCompleted) {
    //             this.options.uploadCompleted(data.context, data);
    //         }
    //     }

    //     this.core.triggerInput();

    //     return data.context;
    // };

    // Images.prototype.getDOMImage = function () {
    //     return new window.Image();
    // };

    // /**
    //  * Select clicked image
    //  *
    //  * @param {Event} e
    //  * @returns {void}
    //  */

    // Images.prototype.selectImage = function (e) {
    //     var that = this,
    //         $image;

    //     if (this.core.options.enabled) {
    //         $image = e.target;

    //         this.$currentImage = $image;

    //         // Hide keyboard on mobile devices
    //         this.$el.blur();

    //         $image.classList.add('medium-insert-image-active');
    //         let closest = function(element, match) {
    //             if (element.nodeName === match) {
    //                 return element;
    //             }

    //             if (!element.parentElement) {
    //                 return null;
    //             }

    //             return closest(element.parentElement, match);
    //         };

    //         let closestClass = function(element, match) {
    //             if (element.classList.contains(match)) {
    //                 return element;
    //             }

    //             if (!element.parentElement) {
    //                 return null;
    //             }

    //             return closestClass(element.parentElement, match);
    //         };

    //         closestClass($image,'medium-insert-images').classList.add('medium-insert-active');


    //         setTimeout(function () {
    //             that.addToolbar();

    //             if (that.options.captions) {
    //                 that.core.addCaption(closest($image,'FIGURE'), that.options.captionPlaceholder);
    //             }
    //         }, 50);
    //     }
    // };

    // /**
    //  * Unselect selected image
    //  *
    //  * @param {Event} e
    //  * @returns {void}
    //  */

    // Images.prototype.unselectImage = function (e) {
    //     var $el = e.target,
    //         $image = this.el.querySelector('.medium-insert-image-active');

    //     if ($el.nodeName == 'IMG'  && $el.classList.contains('medium-insert-image-active')) {
    //         if ($image && $image !== $el) {
    //             $image.classList.remove('medium-insert-image-active');
    //         }
    //         Array.prototype.slice.call(document.querySelectorAll('.medium-insert-images-toolbar, .medium-insert-images-toolbar2'))
    //         .forEach(function (element) { element.remove() } );
    //         this.core.removeCaptions($el);
    //         return;
    //     }

    //     let closest = function(element, match) {
    //         if (element.nodeName === match) {
    //             return element;
    //         }

    //         if (!element.parentElement) {
    //             return null;
    //         }

    //         return closest(element.parentElement, match);
    //     };
    //     if ($image) {
    //         $image.classList.remove('medium-insert-image-active');
    //     }
        
    //     Array.prototype.slice.call(document.querySelectorAll('.medium-insert-images-toolbar, .medium-insert-images-toolbar2'))
    //     .forEach(function (element) { element.remove() } );

    //     if ($el.classList.contains('medium-insert-caption-placeholder')) {
    //         this.core.removeCaptionPlaceholder(closest($image, 'FIGURE'));
    //     } else if ($el.nodeName != 'FIGCAPTION') {
    //         this.core.removeCaptions();
    //     }
    //     this.$currentImage = null;
    // };

    // /**
    //  * Remove image
    //  *
    //  * @param {Event} e
    //  * @returns {void}
    //  */

    // Images.prototype.removeImage = function (e) {
    //     var images = [],
    //         $selectedImage = this.$el.find('.medium-insert-image-active'),
    //         $parent, $empty, selection, range, current, caretPosition, $current, $sibling, selectedHtml, i;

    //     if (e.which === 8 || e.which === 46) {
    //         if ($selectedImage.length) {
    //             images.push($selectedImage);
    //         }

    //         // Remove image even if it's not selected, but backspace/del is pressed in text
    //         selection = window.getSelection();
    //         if (selection && selection.rangeCount) {
    //             range = selection.getRangeAt(0);
    //             current = range.commonAncestorContainer;
    //             $current = current.nodeName === '#text' || current.nodeName === 'BR' ? $(current).parent() : $(current);
    //             caretPosition = MediumEditor.selection.getCaretOffsets(current).left;

    //             // Is backspace pressed and caret is at the beginning of a paragraph, get previous element
    //             if (e.which === 8 && caretPosition === 0) {
    //                 $sibling = $current.prev();
    //             // Is del pressed and caret is at the end of a paragraph, get next element
    //             } else if (e.which === 46 && caretPosition === $current.text().length) {
    //                 $sibling = $current.next();
    //             }

    //             if ($sibling && $sibling.hasClass('medium-insert-images')) {
    //                 images.push($sibling.find('img'));
    //             }

    //             // If text is selected, find images in the selection
    //             selectedHtml = MediumEditor.selection.getSelectionHtml(document);
    //             if (selectedHtml) {
    //                 $('<div></div>').html(selectedHtml).find('.medium-insert-images img').each(function () {
    //                     images.push($(this));
    //                 });
    //             }
    //         }

    //         if (images.length) {
    //             for (i = 0; i < images.length; i++) {
    //                 this.deleteFile(images[i].attr('src'));

    //                 $parent = images[i].closest('.medium-insert-images');
    //                 images[i].closest('figure').remove();

    //                 if ($parent.find('figure').length === 0) {
    //                     $empty = $parent.next();
    //                     if ($empty.is('p') === false || $empty.text() !== '') {
    //                         $empty = $(this.templates['src/js/templates/core-empty-line.hbs']().trim());
    //                         $parent.before($empty);
    //                     }
    //                     $parent.remove();
    //                 }
    //             }

    //             // Hide addons
    //             this.core.hideAddons();
    //             if (!selectedHtml && $empty) {
    //                 e.preventDefault();
    //                 this.core.moveCaret($empty);
    //             }

    //             $('.medium-insert-images-toolbar, .medium-insert-images-toolbar2').remove();
    //             this.core.triggerInput();
    //         }
    //     }
    // };

    // /**
    //  * Makes ajax call to deleteScript
    //  *
    //  * @param {String} file File name
    //  * @returns {void}
    //  */

    // Images.prototype.deleteFile = function (file) {
    //     if (this.options.deleteScript) {
    //         $.ajax($.extend(true, {}, {
    //             url: this.options.deleteScript,
    //             type: this.options.deleteMethod || 'POST',
    //             data: { file: file }
    //         }, this.options.fileDeleteOptions));
    //     }
    // };

    // /**
    //  * Adds image toolbar to editor
    //  *
    //  * @returns {void}
    //  */

    // Images.prototype.addToolbar = function () {
    //     var $image = this.$el.find('.medium-insert-image-active'),
    //         $p = $image.closest('.medium-insert-images'),
    //         active = false,
    //         mediumEditor = this.core.getEditor(),
    //         toolbarContainer = mediumEditor.options.elementsContainer || 'body',
    //         $toolbar, $toolbar2;

    //     $(toolbarContainer).append(this.templates['src/js/templates/images-toolbar.hbs']({
    //         styles: this.options.styles,
    //         actions: this.options.actions
    //     }).trim());

    //     $toolbar = $('.medium-insert-images-toolbar');
    //     $toolbar2 = $('.medium-insert-images-toolbar2');

    //     $toolbar.find('button').each(function () {
    //         if ($p.hasClass('medium-insert-images-' + this.attributes['data-action'].value)) {
    //             $(this).addClass('medium-editor-button-active');
    //             active = true;
    //         }
    //     });

    //     if (active === false) {
    //         $toolbar.find('button').first().addClass('medium-editor-button-active');
    //     }

    //     this.repositionToolbars();

    //     $toolbar.fadeIn();
    //     $toolbar2.fadeIn();
    // };

    // Images.prototype.autoRepositionToolbars = function () {
    //     setTimeout(function () {
    //         this.repositionToolbars();
    //         this.repositionToolbars();
    //     }.bind(this), 0);
    // };

    // Images.prototype.repositionToolbars = function () {
    //     var $toolbar = $('.medium-insert-images-toolbar'),
    //         $toolbar2 = $('.medium-insert-images-toolbar2'),
    //         $image = this.$el.find('.medium-insert-image-active'),
    //         elementsContainer = this.core.getEditor().options.elementsContainer,
    //         elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
    //         elementsContainerBoundary = elementsContainerAbsolute ? elementsContainer.getBoundingClientRect() : null,
    //         containerWidth = $(window).width(),
    //         position = {};

    //     if ($toolbar2.length) {
    //         position.top = $image.offset().top + 2;
    //         position.left = $image.offset().left + $image.width() - $toolbar2.width() - 4; // 4px - distance from a border

    //         if (elementsContainerAbsolute) {
    //             position.top += elementsContainer.scrollTop - elementsContainerBoundary.top;
    //             position.left -= elementsContainerBoundary.left;
    //             containerWidth = $(elementsContainer).width();
    //         }

    //         if (position.left + $toolbar2.width() > containerWidth) {
    //             position.left = containerWidth - $toolbar2.width();
    //         }

    //         $toolbar2.css(position);
    //     }

    //     if ($toolbar.length) {
    //         if ($image.closest('.medium-insert-images-grid-active').length) {
    //             $image = $image.closest('.medium-insert-images-grid-active');
    //         }

    //         position.top = $image.offset().top - $toolbar.height() - 8 - 2 - 5; // 8px - hight of an arrow under toolbar, 2px - height of an image outset, 5px - distance from an image
    //         position.left = $image.offset().left + $image.width() / 2 - $toolbar.width() / 2;

    //         if (elementsContainerAbsolute) {
    //             position.top += elementsContainer.scrollTop - elementsContainerBoundary.top;
    //             position.left -= elementsContainerBoundary.left;
    //         }

    //         if (position.top < 0) {
    //             position.top = 0;
    //         }

    //         $toolbar.css(position);
    //     }
    // };

    // /**
    //  * Fires toolbar action
    //  *
    //  * @param {Event} e
    //  * @returns {void}
    //  */

    // Images.prototype.toolbarAction = function (e) {
    //     var that = this,
    //         $button, $li, $ul, $lis, $p;

    //     if (this.$currentImage === null) {
    //         return;
    //     }

    //     $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button');
    //     $li = $button.closest('li');
    //     $ul = $li.closest('ul');
    //     $lis = $ul.find('li');
    //     $p = this.$el.find('.medium-insert-active');

    //     $button.addClass('medium-editor-button-active');
    //     $li.siblings().find('.medium-editor-button-active').removeClass('medium-editor-button-active');

    //     $lis.find('button').each(function () {
    //         var className = 'medium-insert-images-' + this.attributes['data-action'].value;
    //         if ($(this).hasClass('medium-editor-button-active')) {
    //             $p.addClass(className);
                
    //             console.log(that.options.styles[this.attributes['data-action'].value]);
    //             if (that.options.styles[this.attributes['data-action'].value].added) {
    //                 that.options.styles[this.attributes['data-action'].value].added($p);
    //             }
    //         } else {
    //             $p.removeClass(className);
    //             if (that.options.styles[this.attributes['data-action'].value].removed) {
    //                 that.options.styles[this.attributes['data-action'].value].removed($p);
    //             }
    //         }
    //     });

    //     this.core.hideButtons();

    //     this.core.triggerInput();
    // };

    // /**
    //  * Fires toolbar2 action
    //  *
    //  * @param {Event} e
    //  * @returns {void}
    //  */

    // Images.prototype.toolbar2Action = function (e) {
    //     var $button, callback;

    //     if (this.$currentImage === null) {
    //         return;
    //     }

    //     $button = $(e.target).is('button') ? $(e.target) : $(e.target).closest('button');
    //     callback = this.options.actions[$button['action']].clicked;

    //     if (callback) {
    //         callback(this.$el.find('.medium-insert-image-active'));
    //     }

    //     this.core.hideButtons();

    //     this.core.triggerInput();
    // };

    // /**
    //  * Initialize sorting
    //  *
    //  * @returns {void}
    //  */

    // Images.prototype.sorting = function () {
    //     $.proxy(this.options.sorting, this)();
    // };

    /** Plugin initialization */

    window[pluginName + addonName] = function (node, options) {
        if (!node['plugin_' + pluginName + addonName]) {
            node['plugin_' + pluginName + addonName] =  new Images(node, options);
        }
    };

})(window, document, MediumEditor.util);

}));

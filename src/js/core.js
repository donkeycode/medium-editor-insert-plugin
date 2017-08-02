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
                let res = Array.prototype.slice.call(this.querySelectorAll(target)).filter((a) => {  
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

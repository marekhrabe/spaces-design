/** @jsx React.DOM */
/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */


define(function (require, exports, module) {
    "use strict";

    var React = require("react"),
        Fluxxor = require("fluxxor"),
        FluxChildMixin = Fluxxor.FluxChildMixin(React),
        _ = require("lodash");
        
    var SplitButton = require("jsx!js/jsx/shared/SplitButton"),
        SplitButtonList = SplitButton.SplitButtonList,
        SplitButtonItem = SplitButton.SplitButtonItem;

    var RotateFlip = React.createClass({
        
        mixins: [FluxChildMixin],
        
        /**
         * Flips the layer horizontally
         * 
         * @private
         */
        _flipX: function () {
            this.getFlux().actions.transform.flipX(this.props.activeDocument, this.props.activeLayers);
        },
        
        /**
         * Flips the layer vertically
         * 
         * @private
         */
        _flipY: function () {
            this.getFlux().actions.transform.flipY(this.props.activeDocument, this.props.activeLayers);
        },
        
        render: function () {
            // disable the flip buttons if no layers are selected, or if the background or a locked layers is selected
            var activeLayers = this.props.activeLayers,
                flipDisabled = _.isEmpty(activeLayers) || _.some(activeLayers, "isBackground") || _.some(activeLayers, "locked");
            return (
                <SplitButtonList>
                    <SplitButtonItem 
                        id="ico-flip-horizontal"
                        selected={false}
                        disabled={flipDisabled}
                        onClick={this._flipX} />
                    <SplitButtonItem 
                        id="ico-flip-vertical"
                        selected={false}
                        disabled={flipDisabled}
                        onClick={this._flipY} />
                </SplitButtonList>
            );
        }
    });

    module.exports = RotateFlip;
});

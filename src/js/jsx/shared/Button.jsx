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
        classnames = require("classnames");

    var Button = React.createClass({
        mixins: [React.addons.PureRenderMixin],

        render: function () {
            var classNameSet = {
                "button-simple": true,
                "button-simple__disabled": this.props.disabled
            };

            if (this.props.hasOwnProperty("className")) {
                classNameSet[this.props.className] = true;
            }

            var className = classnames(classNameSet),
                handleClick = !this.props.disabled && this.props.onClick,
                handleDoubleClick = !this.props.disabled && this.props.onDoubleClick;

            return (
                <div {...this.props}
                    onClick={handleClick}
                    onDoubleClick={handleDoubleClick}
                    className={className}>
                    {this.props.children}
                </div>
            );
        }
    });

    module.exports = Button;
});

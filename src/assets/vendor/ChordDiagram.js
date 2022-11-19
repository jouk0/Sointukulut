"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordDiagram = void 0;
var ChordDiagram = /** @class */ (function () {
    function ChordDiagram() {
        this.error = null;
        this.CANVAS_WIDTH = 280;
        this.CANVAS_HEIGHT = 280;
        this.margin = 0;
        this.nFrets = 6;
        this.nameHeight = 0;
        this.nutThickness = 0;
        this.nStrings = 0;
        this.neckWidth = 0;
        this.neckHeight = 0;
        this.wdSpacing = 0;
        this.htSpacing = 0;
        this.dotRadius = 0;
        this.chWidth = 0;
        this.maxFret = 5;
        this.minFret = 5;
    }
    // Draw the diagram, after initializing the draw configuration based on options set by the caller.
    ChordDiagram.prototype.draw = function (options) {
        var config = {
            parentElement: options.parentElement,
            name: options.name || '',
            positions: options.positions || [],
            color: options.color || '#777',
            dotColor: options.dotColor || '#444',
        };
        try {
            if (config && config.parentElement && config.positions && config.positions.length > 0) {
                this.initialize(config);
                var canvas = document.createElement('canvas');
                canvas.setAttribute('class', 'chord-diagram');
                var context = canvas.getContext('2d');
                if (context) {
                    canvas.width = this.CANVAS_WIDTH;
                    canvas.height = this.CANVAS_HEIGHT;
                    this.drawNeck(config, context);
                    this.drawPositions(config, context);
                    config.parentElement.appendChild(canvas);
                }
            }
        }
        catch (exception) {
            console.warn('An error occurred in drawing a chord diagram.', config);
        }
    };
    // Calculate dimension values, based on requested configuration.
    ChordDiagram.prototype.initialize = function (config) {
        this.margin = Math.round(this.CANVAS_WIDTH / 7);
        this.nameHeight = Math.round(this.margin * 1.25);
        this.nutThickness = Math.round(this.margin / 5);
        this.nStrings = config.positions.length;
        this.neckWidth = this.CANVAS_WIDTH - (2 * this.margin);
        this.neckHeight = this.CANVAS_HEIGHT - (this.margin + this.nameHeight);
        this.wdSpacing = this.neckWidth / (this.nStrings - 1);
        this.htSpacing = this.neckHeight / (this.nFrets - 1);
        this.dotRadius = Math.round(this.htSpacing / 3);
        this.chWidth = this.htSpacing * 0.75;
        this.maxFret = Math.max.apply(Math, config.positions);
        this.minFret = this.maxFret;
        for (var _i = 0, _a = config.positions; _i < _a.length; _i++) {
            var pos = _a[_i];
            if (pos < this.minFret && pos > 0) {
                this.minFret = pos;
            }
        }
        if (this.maxFret <= 5) {
            this.maxFret = 5;
            this.minFret = 1;
        }
        else {
            if (this.maxFret - this.minFret > 5) {
                this.error = 'Too many frets: min=' + this.minFret + ', max=' + this.maxFret;
            }
            else {
                for (var i = 0; i < config.positions.length; i++) {
                    if (config.positions[i] > 0) {
                        config.positions[i] -= (this.minFret - 1);
                    }
                }
            }
        }
    };
    ChordDiagram.prototype.ordinal = function (n) {
        var j = n % 10;
        var k = n % 100;
        if (j === 1 && k !== 11) {
            return n + 'st';
        }
        if (j === 2 && k !== 12) {
            return n + 'nd';
        }
        if (j === 3 && k !== 13) {
            return n + 'rd';
        }
        return n + 'th';
    };
    ChordDiagram.prototype.drawNeck = function (config, context) {
        // Chord Name
        context.beginPath();
        context.strokeStyle = config.color;
        context.font = this.nameHeight + 'px Arial';
        var middle = (this.margin + (this.neckWidth / 2)) - (context.measureText(config.name).width / 2);
        context.fillText(config.name, middle, this.nameHeight - 4);
        context.stroke();
        // Fret number
        if (this.minFret > 1) {
            context.beginPath();
            context.strokeStyle = config.color;
            var fretNumSize = (this.htSpacing * 0.35);
            context.font = fretNumSize + 'px Courier';
            var midFirst = this.nameHeight + this.margin + (this.htSpacing / 2);
            context.fillText(this.ordinal(this.minFret), 1, midFirst);
            context.fillText('Fret', 1, midFirst + fretNumSize + 2);
            context.stroke();
        }
        // Nut
        context.beginPath();
        context.lineWidth = this.nutThickness;
        context.moveTo(this.margin - 1, this.margin + this.nameHeight + 1);
        context.lineTo(this.margin + this.neckWidth + 1, this.margin + this.nameHeight + 1);
        context.stroke();
        // Strings
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = config.color;
        for (var i = 0; i < this.nStrings; i++) {
            var x = this.margin + (i * this.wdSpacing);
            context.moveTo(x, this.nameHeight + this.margin + this.nutThickness - 2);
            context.lineTo(x, this.nameHeight + this.margin + this.nutThickness + this.neckHeight - 2);
            context.stroke();
        }
        // Frets
        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = config.color;
        for (var i = 1; i < this.nFrets; i++) {
            var y = this.nameHeight + this.margin + (i * this.htSpacing);
            context.moveTo(this.margin, y);
            context.lineTo(this.margin + this.neckWidth, y);
            context.stroke();
        }
    };
    ChordDiagram.prototype.drawPositions = function (config, context) {
        context.strokeStyle = config.dotColor;
        for (var i = 0; i < config.positions.length; i++) {
            var pos = config.positions[i];
            var ch = null;
            if (pos === -1) {
                pos = 0;
                ch = 'x';
            }
            else if (pos === 0) {
                ch = 'o';
            }
            var y = this.nameHeight + this.margin - (this.htSpacing / 2) + (pos * this.htSpacing);
            var x = (this.margin + (i * this.wdSpacing));
            context.beginPath();
            context.lineWidth = 1;
            context.moveTo(x, y);
            if (ch) {
                context.font = this.chWidth + 'px Monospace';
                context.fillStyle = config.dotColor;
                var chWd = context.measureText(ch).width;
                x -= chWd / 2;
                y += Math.round(this.chWidth / 3);
                context.fillText(ch, x, y);
            }
            else {
                context.arc(x, y, this.dotRadius, 0, 2 * Math.PI, false);
                context.fillStyle = (pos === 0 ? '#FFFFFF' : config.dotColor);
                context.fill();
                context.stroke();
            }
        }
    };
    return ChordDiagram;
}());
exports.ChordDiagram = ChordDiagram;
//# sourceMappingURL=ChordDiagram.js.map
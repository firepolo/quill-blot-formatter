'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Aligner = require('./Aligner');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LEFT_ALIGN = 'left';
var CENTER_ALIGN = 'center';
var RIGHT_ALIGN = 'right';

var DefaultAligner = function () {
  function DefaultAligner(options) {
    var _this = this,
        _alignments;

    _classCallCheck(this, DefaultAligner);

    this.alignments = (_alignments = {}, _defineProperty(_alignments, LEFT_ALIGN, {
      name: LEFT_ALIGN,
      icon: options.icons.left,
      apply: function apply(el) {
        return _this.setAlignment(el, LEFT_ALIGN);
      }
    }), _defineProperty(_alignments, CENTER_ALIGN, {
      name: CENTER_ALIGN,
      icon: options.icons.center,
      apply: function apply(el) {
        return _this.setAlignment(el, CENTER_ALIGN);
      }
    }), _defineProperty(_alignments, RIGHT_ALIGN, {
      name: RIGHT_ALIGN,
      icon: options.icons.right,
      apply: function apply(el) {
        return _this.setAlignment(el, RIGHT_ALIGN);
      }
    }), _alignments);
  }

  _createClass(DefaultAligner, [{
    key: 'getAlignments',
    value: function getAlignments() {
      return Object.values(this.alignments);
    }
  }, {
    key: 'clear',
    value: function clear(el) {
      el.classList.remove('qbf-align-center', 'qbf-align-left', 'qbf-align-right');
    }
  }, {
    key: 'isAligned',
    value: function isAligned(el, alignment) {
      return el.classList.contains('qbf-align-' + alignment.name);
    }
  }, {
    key: 'setAlignment',
    value: function setAlignment(el, value) {
      this.clear();
      el.classList.add('qbf-align-' + value);
    }
  }]);

  return DefaultAligner;
}();

exports.default = DefaultAligner;
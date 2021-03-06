// "use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectWithoutProperties")
);

var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("@material-ui/utils");

var _withStyles = _interopRequireDefault(
  require("@material-ui/core/styles/withStyles")
);

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _ButtonBase = _interopRequireDefault(
  require("@material-ui/core/ButtonBase")
);

var _helpers = require("@material-ui/core/utils/helpers");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0, _extends2.default)(
      {
        lineHeight: 1.75
      },
      theme.typography.button,
      {
        boxSizing: "border-box",
        minWidth: 64,
        padding: "6px 16px",
        height: 48,
        borderRadius: 48 / 2,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(
          ["background-color", "box-shadow", "border"],
          {
            duration: theme.transitions.duration.short
          }
        ),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (0, _colorManipulator.fade)(
            theme.palette.text.primary,
            theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          },
          "&$disabled": {
            backgroundColor: "transparent"
          }
        },
        "&$disabled": {
          color: theme.palette.action.disabled
        }
      }
    ),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: "100%",
      // assure the correct width for iOS Safari
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: "6px 8px"
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: (0, _colorManipulator.fade)(
          theme.palette.primary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: (0, _colorManipulator.fade)(
          theme.palette.secondary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flat: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatPrimary: {},

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    flatSecondary: {},

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: "5px 16px",
      border: "2px solid ".concat(
        theme.palette.type === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)"
      )
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "2px solid ".concat(
        (0, _colorManipulator.fade)(theme.palette.primary.main, 0.5)
      ),
      "&:hover": {
        border: "2px solid ".concat(theme.palette.primary.main),
        backgroundColor: (0, _colorManipulator.fade)(
          theme.palette.primary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "2px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "2px solid ".concat(
        (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.5)
      ),
      "&:hover": {
        border: "2px solid ".concat(theme.palette.secondary.main),
        backgroundColor: (0, _colorManipulator.fade)(
          theme.palette.secondary.main,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "2px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[0],
      // boxShadow: theme.shadows[2],
      "&$focusVisible": {
        boxShadow: theme.shadows[0]
        // boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[0]
        // boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="[contained | fab]"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raised: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedPrimary: {},
    // legacy

    /* Styles applied to the root element for backwards compatibility with legacy variant naming. */
    raisedSecondary: {},
    // legacy

    /* makes button into a cirlce */
    circled: {
      borderRadius: "50%",
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56
    },

    /* Styles applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },

    /* Styles applied to the root element if `mini={true}` & `variant="[fab | extendedFab]"`. */
    mini: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: "4px 8px",
      minWidth: 64,
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {
      padding: "8px 24px",
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    }
  };
};

exports.styles = styles;

function RoundedButton(props) {
  var _classNames;

  var children = props.children,
    classes = props.classes,
    classNameProp = props.className,
    color = props.color,
    disabled = props.disabled,
    disableFocusRipple = props.disableFocusRipple,
    focusVisibleClassName = props.focusVisibleClassName,
    fullWidth = props.fullWidth,
    mini = props.mini,
    size = props.size,
    variant = props.variant,
    circled = props.circled,
    other = (0, _objectWithoutProperties2.default)(props, [
      "children",
      "classes",
      "className",
      "color",
      "disabled",
      "disableFocusRipple",
      "focusVisibleClassName",
      "fullWidth",
      "mini",
      "size",
      "variant"
    ]);

  var contained = variant === "contained" || variant === "raised";
  var text = variant === "text" || variant === "flat";
  var className = (0, _classnames.default)(
    classes.root,
    ((_classNames = {}),
    (0, _defineProperty2.default)(_classNames, classes.circled, circled),
    (0, _defineProperty2.default)(_classNames, classes.mini, circled && mini),
    (0, _defineProperty2.default)(_classNames, classes.text, text),
    (0, _defineProperty2.default)(
      _classNames,
      classes.textPrimary,
      text && color === "primary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.textSecondary,
      text && color === "secondary"
    ),
    (0, _defineProperty2.default)(_classNames, classes.flat, text),
    (0, _defineProperty2.default)(
      _classNames,
      classes.flatPrimary,
      text && color === "primary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.flatSecondary,
      text && color === "secondary"
    ),
    (0, _defineProperty2.default)(_classNames, classes.contained, contained),
    (0, _defineProperty2.default)(
      _classNames,
      classes.containedPrimary,
      contained && color === "primary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.containedSecondary,
      contained && color === "secondary"
    ),
    (0, _defineProperty2.default)(_classNames, classes.raised, contained),
    (0, _defineProperty2.default)(
      _classNames,
      classes.raisedPrimary,
      contained && color === "primary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.raisedSecondary,
      contained && color === "secondary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.outlined,
      variant === "outlined"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.outlinedPrimary,
      variant === "outlined" && color === "primary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes.outlinedSecondary,
      variant === "outlined" && color === "secondary"
    ),
    (0, _defineProperty2.default)(
      _classNames,
      classes["size".concat((0, _helpers.capitalize)(size))],
      size !== "medium"
    ),
    (0, _defineProperty2.default)(_classNames, classes.disabled, disabled),
    (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth),
    (0, _defineProperty2.default)(
      _classNames,
      classes.colorInherit,
      color === "inherit"
    ),
    _classNames),
    classNameProp
  );
  return _react.default.createElement(
    _ButtonBase.default,
    (0, _extends2.default)(
      {
        className: className,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0, _classnames.default)(
          classes.focusVisible,
          focusVisibleClassName
        )
      },
      other
    ),
    _react.default.createElement(
      "span",
      {
        className: classes.label
      },
      children
    )
  );
}

process.env.NODE_ENV !== "production"
  ? (RoundedButton.propTypes = {
      /**
       * The content of the button.
       */
      children: _propTypes.default.node.isRequired,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css-api) below for more details.
       */
      classes: _propTypes.default.object.isRequired,

      /**
       * @ignore
       */
      className: _propTypes.default.string,

      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       */
      color: _propTypes.default.oneOf([
        "default",
        "inherit",
        "primary",
        "secondary"
      ]),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: _utils.componentPropType,

      /**
       * If `true`, the button will be disabled.
       */
      disabled: _propTypes.default.bool,

      /**
       * If `true`, the  keyboard focus ripple will be disabled.
       * `disableRipple` must also be true.
       */
      disableFocusRipple: _propTypes.default.bool,

      /**
       * If `true`, the ripple effect will be disabled.
       */
      disableRipple: _propTypes.default.bool,

      /**
       * @ignore
       */
      focusVisibleClassName: _propTypes.default.string,

      /**
       * If `true`, the button will take up the full width of its container.
       */
      fullWidth: _propTypes.default.bool,

      /**
       * The URL to link to when the button is clicked.
       * If defined, an `a` element will be used as the root node.
       */
      href: _propTypes.default.string,

      /**
       * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
       */
      mini: _propTypes.default.bool,

      /**
       * The size of the button.
       * `small` is equivalent to the dense button styling.
       */
      size: _propTypes.default.oneOf(["small", "medium", "large"]),

      /**
       * @ignore
       */
      type: _propTypes.default.string,

      /**
       * The variant to use.
       * __WARNING__: `flat` and `raised` are deprecated.
       * Instead use `text` and `contained` respectively.
       * Instead use `<Fab>` and `<Fab variant="extended">`
       */
      variant: (0, _utils.chainPropTypes)(
        _propTypes.default.oneOf([
          "text",
          "outlined",
          "contained",
          "fab",
          "extendedFab",
          "flat",
          "raised"
        ]),
        function(props) {
          if (props.variant === "flat") {
            return new Error(
              "Material-UI: the `flat` variant will be removed in the next major release. `text` is equivalent and should be used instead."
            );
          }

          if (props.variant === "raised") {
            return new Error(
              "Material-UI: the `raised` variant will be removed in the next major release. `contained` is equivalent and should be used instead."
            );
          }

          return null;
        }
      )
    })
  : void 0;
RoundedButton.defaultProps = {
  color: "default",
  component: "button",
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: "medium",
  type: "button",
  variant: "text"
};

var _default = (0, _withStyles.default)(styles, {
  name: "MuiButton"
})(RoundedButton);

exports.default = _default;

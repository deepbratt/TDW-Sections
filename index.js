'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@material-ui/core/styles');
var core = require('@material-ui/core');
var reactRouterDom = require('react-router-dom');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// import { Colors } from "../../../Theme/color.constants";
var useStyles = styles.makeStyles(function (theme) { return ({
    root: {
        boxShadow: "none",
        width: "100%",
        //   backgroundColor: WildSand,
    },
    appbarsolid: {
        boxShadow: "none",
        //   backgroundColor: WildSand,
        width: "100%",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        zIndex: 1,
        justifyContent: "space-between",
        transition: "all .5s linear",
        // borderBottom: `solid 3px ${Ash}`,
        padding: "0 !important",
    },
    menuButton: {
        paddingRight: theme.spacing(2),
    },
    toolbar: {
        display: "flex",
        // justifyContent: "space-around",
    },
    list: {
        display: "flex",
        whiteSpace: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        //   color: blackColor,
    },
    listItem: {
        marginRight: "20px",
        "&:hover": {
            // color: blackColor,
            cursor: "pointer",
        },
    },
    link: {
        // marginTop: "5px",
        textDecoration: "none",
        color: "black",
        textTransform: "uppercase",
    },
    active: {
    //   color: blackColor,
    },
    events: {
        textDecoration: "none",
        color: "black",
        textTransform: "uppercase",
        pointerEvents: "none"
    },
    logo: {
        width: "9rem",
        paddingLeft: "24px",
    },
    menu: {
        width: "300px",
        display: "flex",
        justifyContent: "center",
        transition: "all .5s linear",
        //   backgroundColor: WildSand,
    },
}); });

var Logo = require("../../assets/logo.png");
// import CustomButton from "../../../Components/CustomButton";
var Header = function () {
    var _a = useStyles(), logo = _a.logo, list = _a.list, appbarsolid = _a.appbarsolid, link = _a.link, root = _a.root, active = _a.active;
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(core.AppBar, { className: root, position: "sticky" },
            React__namespace.createElement(core.Toolbar, { className: appbarsolid },
                React__namespace.createElement("section", null,
                    React__namespace.createElement("img", { className: logo, alt: "logo", src: Logo })),
                React__namespace.createElement(core.Hidden, { smDown: true },
                    React__namespace.createElement(core.List, { className: list },
                        React__namespace.createElement(core.ListItem, null,
                            React__namespace.createElement(core.Button, { className: list },
                                React__namespace.createElement(reactRouterDom.NavLink, { activeClassName: active, className: link, to: "/home" },
                                    React__namespace.createElement(core.Typography, { variant: "caption" }, "HOME")))),
                        React__namespace.createElement(core.ListItem, null,
                            React__namespace.createElement(reactRouterDom.NavLink, { to: "/", activeClassName: active, className: link },
                                React__namespace.createElement(core.Button, null, "Post an Ad")))))))));
};

exports.Header = Header;
//# sourceMappingURL=index.js.map

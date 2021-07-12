import { makeStyles } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
// import { Colors } from "../../../Theme/color.constants";

const breakpoints = createBreakpoints({});

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    width: "100%",
    padding: "0px 90px 10px 80px",
    position: "relative",
    backgroundColor: "white",
    [breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  appbarsolid: {
    width: "100%",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "space-between",
    transition: "all .5s linear",
    padding: "0 !important",
    [breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  list: {
    display: "flex",
    whiteSpace: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  listItem: {
    marginRight: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  link: {
    textDecoration: "none",
    color: "white",
  },
  active: {
    // color: blackColor,
  },
  logo: {
    width: "8rem",
    padding: "10px 0px 0px 24px",
    [breakpoints.down("sm")]: {
      paddingLeft: "0px",
      width: "6rem",
    },
  },
  rec: {
    position: "absolute",
    right: "0px",
    height: "75px",
    [breakpoints.down("md")]: {
      width: "70%",
    },
    [breakpoints.down("sm")]: {
      width: "50%",
      height: "100%",
    },
  },
  // strip:{
  //   width: "30%",
  //   position: "absolute",
  //   right: "0px",
  //   zIndex: 1
  // }
}));

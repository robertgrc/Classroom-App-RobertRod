import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import "./Begin.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Begin = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="begin">
        <div className="container__img">
          <img
            className="center"
            src="https://www.gstatic.com/classroom/empty_states_home.svg"
            alt="imgBegin"
          />
        </div>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <span>
          <p className="add__class">Agrega una clase para empezar</p>
        </span>
        <div className="form__textfield">
          <TextField
            className="textfield class1"
            id="standard-basic"
            label="Crear una Clase"
          />
          <TextField
            className="textfield class2"
            id="filled-basic"
            label="Unirse a una Clase"
            variant="filled"
          />
        </div>
      </form>
    </div>
  );
};

export default Begin;

<h2 class="tLDEHd">
  <p class="asQXV">Agrega una clase para empezar</p>
  <div
    jsaction="rcuQ6b:npT2md;JIbuQc:Ckgp2b(Qx7uuf),dr4lkd(vAJl2)"
    jscontroller="RFXpNd"
  >
    <div
      jsshadow=""
      role="button"
      class="uArJ5e UQuaGc kCyAyd l3F1ye nfX1Z"
      jscontroller="VXdfxd"
      jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
      jsname="vAJl2"
      tabindex="0"
    >
      <div class="Fvio9d MbhUzd" jsname="ksKsZd"></div>
      <div class="e19J0b CeoRYc"></div>
      <span jsslot="" class="l4V7wb Fxmcue">
        <span class="NPEfkd RveJvd snByac">Crear clase</span>
      </span>
    </div>
    <div
      jsshadow=""
      role="button"
      class="uArJ5e UQuaGc Y5sE8d nfX1Z"
      jscontroller="VXdfxd"
      jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
      jsname="Qx7uuf"
      tabindex="0"
    >
      <div class="Fvio9d MbhUzd" jsname="ksKsZd"></div>
      <div class="e19J0b CeoRYc"></div>
      <span jsslot="" class="l4V7wb Fxmcue">
        <span class="NPEfkd RveJvd snByac">Unirse a una clase</span>
      </span>
    </div>
  </div>
</h2>;

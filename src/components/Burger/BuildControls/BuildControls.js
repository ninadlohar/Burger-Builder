import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: {props.price}</p>
    {controls.map((v, i) => {
      return (
        <BuildControl
          key={v.label}
          label={v.label}
          added={() => props.ingredientAdded(v.type)}
          remove={() => props.ingredientRemoved(v.type)}
          disabled={props.disabled[v.type]}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;

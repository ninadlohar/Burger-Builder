import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    loading: false,
    address: {
      street: "",
      postalCode: ""
    }
  };

  orderHandler = e => {
    e.preventDefault();
    this.setState({ loading: true });
    let order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customerData: {
        name: "max",
        address: {
          street: "test street",
          zipCode: 401602,
          country: "Germany"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postalCode"
          placeholder="Your PostalCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

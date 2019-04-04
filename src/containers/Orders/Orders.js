import React, { useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios";
import * as actions from "../../store/actions/index";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const orders = props => {
  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
  }, []);

  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.orders.map((v, i) => {
      return <Order key={i} ingredients={v.ingredients} price={+v.price} />;
    });
  }
  return <div>{orders}</div>;
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrder(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(orders, axios));

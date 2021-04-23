import React from "react";
import { connect } from "react-redux";
import { setCardText } from "../actions/cardActions";
import Card from "./styled-components/card";

const MainPage = ({ text, setCardText }) => {
  const handleChange = (e) => {
    setCardText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <Card>{text}</Card>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  text: state.card.text,
});

const mapDispatchtoProps = (dispatch) => ({
  setCardText: (text) => dispatch(setCardText(text)),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(MainPage);

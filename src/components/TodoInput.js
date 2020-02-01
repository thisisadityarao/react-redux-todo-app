import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { add } from './action/index';
import { bindActionCreators } from "redux";

const InputWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  padding: 0;
`;

const Input = styled.input`
  flex: 1;
  border: 0;
  border-radius: 4px 0 0 4px;
  outline: 0;
  color: #a3a3a3;
  background: #fff;
  font-size: 1.2rem;
  padding: 22px 18px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  border-radius: 0 4px 4px 0;
  outline: 0;
  cursor: pointer;
  min-width: 50px;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 22px 18px;
  background: #e91e63;
  transition: all 200ms ease-in;

  &:hover,
  &:active {
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.change = this.change.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  change = e => {
    this.setState({
      text: e.target.value
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    } else {
    this.props.add(this.state.text);
    this.setState({
      text: ""
    });
  }
  };

  render() {
    return (
      <form onClick={this.addTodo}>
        <InputWrapper>
          <Input
            type="text"
            value={this.state.text}
            placeholder="todo..."
            onChange={this.change}
          />
          <Button type="sunmit">ADD</Button>
        </InputWrapper>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      add
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(TodoInput);

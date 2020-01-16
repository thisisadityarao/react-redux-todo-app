import React from "react";
import styled from "styled-components/macro";
import { connect } from 'react-redux';
import { Done } from "styled-icons/material/Done";
import { Cancel } from "styled-icons/material/Cancel";
import { remove, completed }  from './action/index';
import { bindActionCreators } from "redux";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 3rem;
  width: 100%;

  & li {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  & li:last-child {
    margin-bottom: 0;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  }

  & li span {
    text-align: left;
    display: inline-block;
    width: 100%;
    padding-left: 0.5rem;
    line-height: 1.9;
  }
`;

const DoneIcon = styled(Done)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #404040;

  &:hover {
    color: #11dc19;
  }
`;

const CancelIcon = styled(Cancel)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: #404040;

  &:hover {
    color: #ff1100;
  }
`;

function TodoList(props) {
  return (
    <List>
      {props.list.map(todo => {
        return (
          <li key={todo.id}>
            <DoneIcon
              onClick={e => {
                props.completed(todo.id);
              }}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
            <CancelIcon
              onClick={e => {
                props.remove(todo.id);
              }}
            />
          </li>
        );
      })}
    </List>
  );
}

function mapStateToProps(state) {
  return {
    list: state
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      remove,
      completed
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
import React from "react";
import { useDispatch } from "react-redux";
import counterSlice from "../ducks/counter/slice";
import { useCounterState } from "../ducks/counter/selectors";
import styled from "styled-components";
import { asyncIncrementCounter } from "../ducks/counter/asyncAction";

const StyledMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const CounterPage = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  };

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  };

  const onClickAsyncIncrement = async () => {
    await dispatch(asyncIncrementCounter(10));
  };
  return (
    <div>
      <button onClick={onClickIncrement}>ふやす</button>
      <button onClick={onClickDecrement}>へらす</button>
      <button onClick={onClickAsyncIncrement}>非同期で10増やす</button>
      <p>数値:{state.count}</p>
      {state.loading ? <p>通信中</p> : ""}
      {state.error ? (
        <StyledMessage>問題が発生{state.errorMessage}</StyledMessage>
      ) : (
        ""
      )}
    </div>
  );
};

export default CounterPage;

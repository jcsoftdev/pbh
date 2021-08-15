import React, { useReducer, useEffect, forwardRef } from 'react';

import { validate } from '../../../utils/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      };
    }
    case 'SEND':{
      return {
        value: "",
        isValid: false
      }
    }
    default:
      return state;
  }
};

const Input = (props, ref) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH'
    });
  };

  const element =
    props.element === 'input' ? (
      (ref)?<input
      id={props.id}
      type={props.type}
      ref={ref}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
      className="input"
    />:<input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className="input"
      />
    ) : (
        <textarea
          id={props.id}
          // type={props.type || "text"}
          name={props.name}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
    );

  return (
    <div
      className={`${!inputState.isValid &&
        inputState.isTouched &&
        'form-control--invalid  ' } group ${props.className}`}
    >
      <label htmlFor={props.id} className="label">{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default forwardRef(Input);

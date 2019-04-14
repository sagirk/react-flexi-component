import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Flexi from './Flexi';
import { normalFlexiConfig, recursiveFlexiConfig } from '../flexiConfig';

it('invokes onSubmit when the form is submitted', () => {
  const onSubmit = jest.fn();
  const { getByDisplayValue } = render(
    <Flexi config={{ items: [] }} onSubmit={onSubmit} />
  );

  fireEvent.click(getByDisplayValue(/submit/i));
  expect(onSubmit.mock.calls.length).toEqual(1);
});

it('renders normal config', () => {
  const onSubmit = jest.fn();
  const { queryByLabelText, getByDisplayValue } = render(
    <Flexi config={normalFlexiConfig} onSubmit={onSubmit} />
  );

  expect(queryByLabelText(/person's name/i)).toBeInTheDocument();
  expect(queryByLabelText(/person's state/i)).toBeInTheDocument();

  fireEvent.click(getByDisplayValue(/submit/i));
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      name: expect.any(String),
      state: expect.any(String)
    })
  );
});

it('renders recursive config', () => {
  const onSubmit = jest.fn();
  const { queryByLabelText, getByDisplayValue } = render(
    <Flexi config={recursiveFlexiConfig} onSubmit={onSubmit} />
  );

  expect(queryByLabelText(/person's title/i)).toBeInTheDocument();
  expect(queryByLabelText(/person's name/i)).toBeInTheDocument();
  expect(queryByLabelText(/person's state/i)).toBeInTheDocument();
  expect(queryByLabelText(/person's hobbies/i)).toBeInTheDocument();

  fireEvent.click(getByDisplayValue(/submit/i));
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      title: expect.any(String),
      name: expect.any(String),
      state: expect.any(String),
      hobbies: expect.any(String)
    })
  );
});

it('receives user input', () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByDisplayValue } = render(
    <Flexi config={normalFlexiConfig} onSubmit={onSubmit} />
  );

  fireEvent.change(getByLabelText(/name/i), {
    target: { value: 'Sagir Khan' }
  });
  fireEvent.click(getByDisplayValue(/submit/i));
  expect(onSubmit).toBeCalledWith(
    expect.objectContaining({
      name: expect.stringContaining('Sagir Khan')
    })
  );
});

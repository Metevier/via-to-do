import React from 'react';
import { shallow } from 'enzyme';
import App from '@src/components/App';

test('App has content', () => {
  // Render a checkbox with label in the document
  const app = shallow(
    <App />
  );

  expect(app.text()).toEqual('VIA To-Do');

  expect(app.hasClass('app'));
});
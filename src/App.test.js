import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { configure } from '@testing-library/react';
configure({ adapter: new Adapter() });

it('should have one router', () => {
  const wrapper = shallow(<App />);
  const route = wrapper.find('Router');
  expect(route);
});

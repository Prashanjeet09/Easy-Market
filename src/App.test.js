import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { mount } from 'enzyme';
import './setupTests';
import { Router , Route } from 'react-router-dom';

// import Adapter from "enzyme-adapter-react-16";
// import { configure } from '@testing-library/react';
// configure({ adapter: new Adapter() });

it('should have one router', () => {
  const wrapper = mount(<App />);

  const radio = wrapper.find(Router).dive()
  expect(radio.children()).to.have.length(7)
});



import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import {
    shallow
} from 'enzyme';
import './../setupTests';


it('should render', () => {
    const wrapper = shallow(<Navbar />);
    const route = wrapper.find('div');
    expect(route.length).toBe(4);
    // expect(route);
});

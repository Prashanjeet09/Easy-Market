import React from 'react';
import Signin from './Signin';
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { configure } from '@testing-library/react';
configure({ adapter: new Adapter() });


it('should be render our signin',()=>{

    const wrapper = shallow(<Div />);
    const div = wrapper.find(h2);
    expect (div).toBe(2);

})
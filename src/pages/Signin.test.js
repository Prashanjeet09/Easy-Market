import React from 'react';
import './../setupTests';
import Signin from './Signin';
import { shallow } from 'enzyme';



it('should be render our signin',()=>{
    const wrapper = shallow(<Signin />);
    const div = wrapper.find("input");
    expect(div.length).toBe(5);   

})
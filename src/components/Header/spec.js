import React from 'react';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});
describe('Header Component', () => {
    it('Should render without errors', () => {
        const component = shallow(<Header/>);
        const wrapper = component.find('.top-banner');
        expect(wrapper.length).toBe(1);
    });
});
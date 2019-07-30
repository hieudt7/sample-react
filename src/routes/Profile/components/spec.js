import React from 'react';
import ProfileView from './ProfileView';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });
describe('ProfileView Component', () => {
    it('Should render without errors', () => {
        const component = shallow(<ProfileView />);
        const wrapper = component.find('.profile');
        expect(wrapper.length).toBe(1);
    });
    it('Check enter keydown', () => {
        var event = new KeyboardEvent('keydown', {'key': 37});
        document.dispatchEvent(event);
        const drink = jest.fn(); 
        const componentKey = shallow(<ProfileView />).instance();
        expect(componentKey.handelKeyDown(event))
    });
});
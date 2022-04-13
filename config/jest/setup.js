import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, render, mount } from 'enzyme';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.Enzyme = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;

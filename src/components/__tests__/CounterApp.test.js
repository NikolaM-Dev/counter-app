import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Tests in <CounterApp/>', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  it('should to show <CounterApp/> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should to show the counter value in 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe(String(value));
  });

  it('should increase with button +1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
  });

  it('should decrease with button -1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });
});

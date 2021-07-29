import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import FirstApp from '../FirstApp';

describe('Test in <FirstApp />', () => {
  // it('should to show the message "Hi, i\'m Nikola"', () => {
  //   const greeting = "Hi, i'm Goku";
  //   const { getByText } = render(<FirstApp greeting={greeting} />);
  //   expect(getByText(greeting)).toBeInTheDocument();
  // });

  it('should to show <FirstApp/> correctly', () => {
    const greeting = "Hi i'm Nikola";
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show the subtitle sent by props', () => {
    const greeting = "Hi i'm Nikola";
    const subtitle = 'Subtitle 😀';
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );

    const textParagraph = wrapper.find('p').text();

    expect(textParagraph).toBe(subtitle);
  });
});

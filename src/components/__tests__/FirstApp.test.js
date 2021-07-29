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

  const greeting = "Hi i'm Nikola";

  it('should to show <FirstApp/> correctly', () => {
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should to show the subtitle sent by props', () => {
    const subtitle = 'Subtitle 😀';
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );
    const textParagraph = wrapper.find('p').text();

    expect(textParagraph).toBe(subtitle);
  });
});

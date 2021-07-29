import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Test in <FirstApp />', () => {
  it('should to show the message "Hi, i\'m Nikola"', () => {
    const greeting = "Hi, i'm Goku";
    const { getByText } = render(<FirstApp greeting={greeting} />);

    expect(getByText(greeting)).toBeInTheDocument();
  });
});

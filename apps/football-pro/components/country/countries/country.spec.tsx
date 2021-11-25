import { render } from '@testing-library/react';

import Country from './countries';

describe('Country', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Country />);
    expect(baseElement).toBeTruthy();
  });
});

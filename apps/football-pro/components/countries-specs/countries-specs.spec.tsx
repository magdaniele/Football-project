import { render } from '@testing-library/react';

import CountriesSpecs from './countries-specs';

describe('CountriesSpecs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountriesSpecs />);
    expect(baseElement).toBeTruthy();
  });
});

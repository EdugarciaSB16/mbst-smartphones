import { render, screen } from '@testing-library/react';
import { ResultCount } from '../../phones/components/ResultCount';
import '@testing-library/jest-dom';

describe('ResultCount', () => {
  it('renders the number of results correctly', () => {
    render(<ResultCount count={3} />);
    expect(screen.getByText('3 RESULTS')).toBeInTheDocument();
  });

  it('renders 0 results correctly', () => {
    render(<ResultCount count={0} />);
    expect(screen.getByText('0 RESULTS')).toBeInTheDocument();
  });
});

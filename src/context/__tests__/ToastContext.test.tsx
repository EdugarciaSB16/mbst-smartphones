import { render, screen, act } from '@testing-library/react';
import { useToast, ToastProvider } from '../ToastContext';
import { waitForElementToBeRemoved } from '@testing-library/react';

function TestComponent() {
  const { showToast } = useToast();

  return (
    <button onClick={() => showToast('Test toast message')}>Show Toast</button>
  );
}

describe('ToastContext', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('shows and hides toast correctly', async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );

    act(() => {
      screen.getByText('Show Toast').click();
    });

    expect(screen.getByText('Test toast message')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Test toast message'),
    );
  });

  it('throws error when useToast is used outside ToastProvider', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const CallToastOutsideProvider = () => {
      useToast();
      return null;
    };

    expect(() => render(<CallToastOutsideProvider />)).toThrow(
      'useToast must be used within ToastProvider',
    );

    spy.mockRestore();
  });
});

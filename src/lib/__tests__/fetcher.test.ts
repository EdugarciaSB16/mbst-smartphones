import { fetcher } from '../fetcher';

describe('fetcher', () => {
  it('resolves JSON on successful response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 123 }),
      }),
    ) as any;

    const data = await fetcher('/api/test');
    expect(data).toEqual({ data: 123 });
  });

  it('throws error on failed response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false })) as any;

    await expect(fetcher('/api/fail')).rejects.toThrow('Error fetching data');
  });
});

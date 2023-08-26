import { act, renderHook } from '@testing-library/react';
import useStore from 'src/store';

describe('useStore', () => {
  beforeEach(() => {
    useStore.setState({ isLoading: false, ships: [] });
  });

  it('should fetch ships and update the state', async () => {
    const newShips = [
      {
        id: 1,
        built: 2017,
        name: 'OOCL Hong Kong',
        lengthMeters: 399.87,
        beamMeters: 58.8,
        maxTEU: 21413,
        owner: 'OOCL (Hong Kong)',
        grossTonnage: 210890,
      },
      {
        id: 2,
        built: 2017,
        name: 'OOCL Germany',
        lengthMeters: 399.87,
        beamMeters: 58.8,
        maxTEU: 21413,
        owner: 'OOCL (Hong Kong)',
        grossTonnage: 210890,
      },
    ];

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(newShips),
    });

    const { result } = renderHook(() => useStore());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.ships).toEqual([]);

    act(() => {
      result.current.fetchShips();
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.ships).toEqual(newShips);
  });

  it('should handle fetch error', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'));

    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.fetchShips();
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.ships).toEqual([]);
  });
});

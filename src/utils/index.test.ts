import { getCountryOfOrigin } from '.';

describe('getCountryOfOrigin test', () => {
  test('should return country of origin if owner has it', () => {
    const owner = 'MSC (Switzerland)';

    const country = getCountryOfOrigin(owner);

    expect(country).toBe('Switzerland');
  });

  test('should return null if owner dont have country of origin', () => {
    const owner = 'Mediterranean Shipping Company';

    const country = getCountryOfOrigin(owner);

    expect(country).toBeUndefined();
  });
});

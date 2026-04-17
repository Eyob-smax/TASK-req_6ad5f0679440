import { describe, expect, it } from 'vitest';
import { createPackage, MembershipServiceError } from '../../src/services/membership.service.js';

describe('membership.service', () => {
  it('createPackage rejects PUNCH packages without punchCount', async () => {
    await expect(
      createPackage(
        {} as never,
        {
          name: 'Punch Plan',
          type: 'PUNCH',
          price: 99,
        },
        'actor-1',
      ),
    ).rejects.toMatchObject<Partial<MembershipServiceError>>({
      code: 'VALIDATION_FAILED',
      message: 'PUNCH package requires punchCount',
    });
  });
});

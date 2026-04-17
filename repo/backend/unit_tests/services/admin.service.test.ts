import { describe, expect, it } from 'vitest';
import { addIpAllowlistEntry, AdminServiceError } from '../../src/services/admin.service.js';

describe('admin.service', () => {
  it('addIpAllowlistEntry rejects invalid CIDR format', async () => {
    await expect(
      addIpAllowlistEntry(
        {} as never,
        {
          cidr: 'invalid-cidr',
          routeGroup: 'admin',
        },
        'actor-1',
      ),
    ).rejects.toMatchObject<Partial<AdminServiceError>>({
      code: 'VALIDATION_FAILED',
    });
  });
});

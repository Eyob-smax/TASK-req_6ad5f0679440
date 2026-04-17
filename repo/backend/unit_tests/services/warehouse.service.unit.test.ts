import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/repositories/warehouse.repository.js', () => ({
  findFacilityByCode: vi.fn(),
  createFacility: vi.fn(),
}));

vi.mock('../../src/audit/audit.js', () => ({
  auditCreate: vi.fn(),
  auditUpdate: vi.fn(),
  auditTransition: vi.fn(),
}));

import { createFacility, WarehouseServiceError } from '../../src/services/warehouse.service.js';
import { findFacilityByCode } from '../../src/repositories/warehouse.repository.js';

const mockedFindFacilityByCode = vi.mocked(findFacilityByCode);

describe('warehouse.service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('createFacility rejects duplicate facility code', async () => {
    mockedFindFacilityByCode.mockResolvedValue({ id: 'fac-1' } as never);

    await expect(
      createFacility(
        {} as never,
        { name: 'Main', code: 'WH-001' },
        'actor-1',
      ),
    ).rejects.toMatchObject<Partial<WarehouseServiceError>>({
      code: 'CONFLICT',
    });
  });
});

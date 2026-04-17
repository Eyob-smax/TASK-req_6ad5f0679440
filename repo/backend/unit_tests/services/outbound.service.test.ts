import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/repositories/outbound.repository.js', () => ({
  createOutboundOrder: vi.fn(),
}));

vi.mock('../../src/repositories/warehouse.repository.js', () => ({
  findFacilityById: vi.fn(),
  findSkuById: vi.fn(),
  findInventoryLotById: vi.fn(),
}));

vi.mock('../../src/repositories/strategy.repository.js', () => ({
  findInventoryLotsForSku: vi.fn(),
}));

vi.mock('../../src/audit/audit.js', () => ({
  auditCreate: vi.fn(),
  auditUpdate: vi.fn(),
}));

import { createOutboundOrder, OutboundServiceError } from '../../src/services/outbound.service.js';
import { findFacilityById } from '../../src/repositories/warehouse.repository.js';

const mockedFindFacilityById = vi.mocked(findFacilityById);

describe('outbound.service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('createOutboundOrder throws NOT_FOUND when facility does not exist', async () => {
    mockedFindFacilityById.mockResolvedValue(null as never);

    await expect(
      createOutboundOrder(
        {} as never,
        {
          facilityId: 'missing-facility',
          type: 'STANDARD',
          lines: [],
        },
        'actor-1',
      ),
    ).rejects.toMatchObject<Partial<OutboundServiceError>>({
      code: 'NOT_FOUND',
      message: 'Facility not found',
    });
  });
});

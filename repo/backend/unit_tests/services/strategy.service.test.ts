import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/repositories/strategy.repository.js', () => ({
  findRulesetById: vi.fn(),
  findActiveRuleset: vi.fn(),
  findLocationsForFacility: vi.fn(),
  findRecentPickTasksAtLocation: vi.fn(),
  findInventoryLotsForSku: vi.fn(),
  findPickTasksForSimulation: vi.fn(),
  createRuleset: vi.fn(),
  listRulesets: vi.fn(),
  updateRuleset: vi.fn(),
}));

vi.mock('../../src/repositories/warehouse.repository.js', () => ({
  findFacilityById: vi.fn(),
  findSkuById: vi.fn(),
}));

vi.mock('../../src/repositories/outbound.repository.js', () => ({
  findPickTaskById: vi.fn(),
}));

vi.mock('../../src/audit/audit.js', () => ({
  auditCreate: vi.fn(),
  auditUpdate: vi.fn(),
}));

import { rankPutawayLocations, StrategyServiceError } from '../../src/services/strategy.service.js';
import { findFacilityById } from '../../src/repositories/warehouse.repository.js';

const mockedFindFacilityById = vi.mocked(findFacilityById);

describe('strategy.service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('rankPutawayLocations throws NOT_FOUND when facility does not exist', async () => {
    mockedFindFacilityById.mockResolvedValue(null as never);

    await expect(
      rankPutawayLocations(
        {} as never,
        {
          facilityId: 'missing-facility',
          skuId: 'sku-1',
          quantity: 1,
        },
        'actor-1',
      ),
    ).rejects.toMatchObject<Partial<StrategyServiceError>>({
      code: 'NOT_FOUND',
      message: 'Facility not found',
    });
  });
});

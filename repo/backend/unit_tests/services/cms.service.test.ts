import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../src/repositories/cms.repository.js', () => ({
  findArticleById: vi.fn(),
  findArticleBySlug: vi.fn(),
  updateArticle: vi.fn(),
  replaceArticleTags: vi.fn(),
  replaceArticleCategories: vi.fn(),
}));

vi.mock('../../src/audit/audit.js', () => ({
  auditCreate: vi.fn(),
  auditUpdate: vi.fn(),
  auditTransition: vi.fn(),
}));

import { updateArticle, CmsServiceError } from '../../src/services/cms.service.js';
import { findArticleById } from '../../src/repositories/cms.repository.js';

const mockedFindArticleById = vi.mocked(findArticleById);

describe('cms.service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('updateArticle rejects non-author non-reviewer actor', async () => {
    mockedFindArticleById.mockResolvedValue({
      id: 'article-1',
      authorId: 'author-1',
      state: 'DRAFT',
      title: 'T',
      slug: 's',
      body: 'b',
    } as never);

    await expect(
      updateArticle(
        {} as never,
        'article-1',
        { title: 'updated' },
        'other-user',
        ['WAREHOUSE_OPERATOR'],
      ),
    ).rejects.toMatchObject<Partial<CmsServiceError>>({
      code: 'FORBIDDEN',
    });
  });
});

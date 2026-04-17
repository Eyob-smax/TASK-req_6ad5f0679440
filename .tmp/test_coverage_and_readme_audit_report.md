# Test Coverage Audit

## Scope and Method
- Audit mode: static inspection only (no test execution, no container/script run).
- Endpoint source of truth: repo/backend/src/app.ts and repo/backend/src/routes/*.ts.
- Test source of truth: repo/backend/api_tests/*.ts and repo/backend/unit_tests/**/*.test.ts.
- README source of truth: repo/README.md and repo/run_tests.sh.

## Project Type Detection
- README does not provide an explicit top-line type tag from the required set (backend/fullstack/web/android/ios/desktop).
- Inferred project type: backend (evidence: backend-only repository structure and route-centric Fastify app).

## Backend Endpoint Inventory
]633;E;sed 's/^/- /' /tmp/endpoint_inventory.txt;a60a4d3f-6e01-4af0-a73c-9a4ac16bc67c]633;C- DELETE /api/admin/ip-allowlist/:entryId
- DELETE /api/admin/parameters/:key
- DELETE /api/membership/members/:memberId
- DELETE /api/warehouse/facilities/:facilityId
- GET /api/admin/backup
- GET /api/admin/backup/:snapshotId
- GET /api/admin/diagnostics
- GET /api/admin/ip-allowlist
- GET /api/admin/key-versions
- GET /api/admin/parameters
- GET /api/admin/parameters/:key
- GET /api/admin/retention/report
- GET /api/auth/me
- GET /api/cms/articles
- GET /api/cms/articles/:articleId
- GET /api/cms/categories
- GET /api/cms/categories/:categoryId
- GET /api/cms/tags
- GET /api/cms/tags/:tagId
- GET /api/cms/tags/cloud
- GET /api/cms/tags/trending
- GET /api/membership/members
- GET /api/membership/members/:memberId
- GET /api/membership/members/:memberId/enrollments
- GET /api/membership/packages
- GET /api/membership/packages/:packageId
- GET /api/membership/payments
- GET /api/membership/payments/:paymentId
- GET /api/outbound/orders
- GET /api/outbound/orders/:orderId
- GET /api/outbound/pick-tasks/:taskId
- GET /api/outbound/waves
- GET /api/outbound/waves/:waveId
- GET /api/strategy/rulesets
- GET /api/strategy/rulesets/:rulesetId
- GET /api/warehouse/appointments
- GET /api/warehouse/appointments/:appointmentId
- GET /api/warehouse/facilities
- GET /api/warehouse/facilities/:facilityId
- GET /api/warehouse/facilities/:facilityId/zones
- GET /api/warehouse/facilities/:facilityId/zones/:zoneId
- GET /api/warehouse/inventory-lots
- GET /api/warehouse/inventory-lots/:lotId
- GET /api/warehouse/locations
- GET /api/warehouse/locations/:locationId
- GET /api/warehouse/skus
- GET /api/warehouse/skus/:skuId
- GET /health
- PATCH /api/admin/ip-allowlist/:entryId
- PATCH /api/cms/articles/:articleId
- PATCH /api/cms/categories/:categoryId
- PATCH /api/membership/members/:memberId
- PATCH /api/membership/packages/:packageId
- PATCH /api/membership/payments/:paymentId/status
- PATCH /api/outbound/orders/:orderId/approve-partial
- PATCH /api/outbound/pick-tasks/:taskId
- PATCH /api/outbound/waves/:waveId/cancel
- PATCH /api/strategy/rulesets/:rulesetId
- PATCH /api/warehouse/facilities/:facilityId
- PATCH /api/warehouse/inventory-lots/:lotId
- PATCH /api/warehouse/locations/:locationId
- PATCH /api/warehouse/skus/:skuId
- POST /api/admin/backup
- POST /api/admin/backup/:snapshotId/restore
- POST /api/admin/ip-allowlist
- POST /api/admin/key-versions/rotate
- POST /api/admin/parameters
- POST /api/admin/retention/purge-billing
- POST /api/admin/retention/purge-operational
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/rotate-password
- POST /api/auth/users
- POST /api/cms/articles
- POST /api/cms/articles/:articleId/approve
- POST /api/cms/articles/:articleId/interactions
- POST /api/cms/articles/:articleId/publish
- POST /api/cms/articles/:articleId/reject
- POST /api/cms/articles/:articleId/schedule
- POST /api/cms/articles/:articleId/submit-review
- POST /api/cms/articles/:articleId/withdraw
- POST /api/cms/categories
- POST /api/cms/tags
- POST /api/cms/tags/:tagId/aliases
- POST /api/cms/tags/bulk-migrate
- POST /api/cms/tags/merge
- POST /api/membership/members
- POST /api/membership/members/:memberId/enrollments
- POST /api/membership/packages
- POST /api/membership/payments
- POST /api/outbound/orders
- POST /api/outbound/orders/:orderId/exceptions
- POST /api/outbound/orders/:orderId/handoff
- POST /api/outbound/orders/:orderId/pack-verify
- POST /api/outbound/waves
- POST /api/strategy/pick-path
- POST /api/strategy/putaway-rank
- POST /api/strategy/rulesets
- POST /api/strategy/simulate
- POST /api/warehouse/appointments
- POST /api/warehouse/appointments/:appointmentId/cancel
- POST /api/warehouse/appointments/:appointmentId/confirm
- POST /api/warehouse/appointments/:appointmentId/reschedule
- POST /api/warehouse/facilities
- POST /api/warehouse/facilities/:facilityId/zones
- POST /api/warehouse/inventory-lots
- POST /api/warehouse/locations
- POST /api/warehouse/skus
- PUT /api/admin/parameters/:key
- PUT /api/auth/users/:userId/roles

## API Test Mapping Table
| Endpoint | Covered | Test Type | Test Files | Evidence |
|---|---|---|---|---|
| DELETE /api/admin/ip-allowlist/:entryId | no | unit-only / indirect | none | no matching app.inject method+path |
| DELETE /api/admin/parameters/:key | no | unit-only / indirect | none | no matching app.inject method+path |
| DELETE /api/membership/members/:memberId | no | unit-only / indirect | none | no matching app.inject method+path |
| DELETE /api/warehouse/facilities/:facilityId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/admin/backup | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| GET /api/admin/backup/:snapshotId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/admin/diagnostics | yes | true no-mock HTTP | repo/backend/api_tests/admin.depth.test.ts, repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.depth.test.ts |
| GET /api/admin/ip-allowlist | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| GET /api/admin/key-versions | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| GET /api/admin/parameters | yes | true no-mock HTTP | repo/backend/api_tests/admin.depth.test.ts, repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.depth.test.ts |
| GET /api/admin/parameters/:key | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/admin/retention/report | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| GET /api/auth/me | yes | true no-mock HTTP | repo/backend/api_tests/auth.depth.test.ts, repo/backend/api_tests/auth.test.ts, repo/backend/api_tests/contract.test.ts | app.inject in repo/backend/api_tests/auth.depth.test.ts |
| GET /api/cms/articles | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| GET /api/cms/articles/:articleId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/cms/categories | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| GET /api/cms/categories/:categoryId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/cms/tags | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| GET /api/cms/tags/:tagId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/cms/tags/cloud | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/cms/tags/trending | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/membership/members | yes | true no-mock HTTP | repo/backend/api_tests/membership.depth.test.ts, repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.depth.test.ts |
| GET /api/membership/members/:memberId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/membership/members/:memberId/enrollments | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/membership/packages | yes | true no-mock HTTP | repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.test.ts |
| GET /api/membership/packages/:packageId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/membership/payments | yes | true no-mock HTTP | repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.test.ts |
| GET /api/membership/payments/:paymentId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/outbound/orders | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| GET /api/outbound/orders/:orderId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/outbound/pick-tasks/:taskId | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| GET /api/outbound/waves | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| GET /api/outbound/waves/:waveId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/strategy/rulesets | yes | true no-mock HTTP | repo/backend/api_tests/strategy.depth.test.ts, repo/backend/api_tests/strategy.test.ts | app.inject in repo/backend/api_tests/strategy.depth.test.ts |
| GET /api/strategy/rulesets/:rulesetId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/appointments | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| GET /api/warehouse/appointments/:appointmentId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/facilities | yes | true no-mock HTTP | repo/backend/api_tests/contract.test.ts, repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/contract.test.ts |
| GET /api/warehouse/facilities/:facilityId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/facilities/:facilityId/zones | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/facilities/:facilityId/zones/:zoneId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/inventory-lots | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| GET /api/warehouse/inventory-lots/:lotId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/locations | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| GET /api/warehouse/locations/:locationId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /api/warehouse/skus | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| GET /api/warehouse/skus/:skuId | no | unit-only / indirect | none | no matching app.inject method+path |
| GET /health | yes | true no-mock HTTP | repo/backend/api_tests/contract.test.ts, repo/backend/api_tests/health.test.ts | app.inject in repo/backend/api_tests/contract.test.ts |
| PATCH /api/admin/ip-allowlist/:entryId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/cms/articles/:articleId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/cms/categories/:categoryId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/membership/members/:memberId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/membership/packages/:packageId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/membership/payments/:paymentId/status | yes | true no-mock HTTP | repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.test.ts |
| PATCH /api/outbound/orders/:orderId/approve-partial | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/outbound/pick-tasks/:taskId | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| PATCH /api/outbound/waves/:waveId/cancel | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/strategy/rulesets/:rulesetId | yes | true no-mock HTTP | repo/backend/api_tests/strategy.test.ts | app.inject in repo/backend/api_tests/strategy.test.ts |
| PATCH /api/warehouse/facilities/:facilityId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/warehouse/inventory-lots/:lotId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/warehouse/locations/:locationId | no | unit-only / indirect | none | no matching app.inject method+path |
| PATCH /api/warehouse/skus/:skuId | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/admin/backup | yes | true no-mock HTTP | repo/backend/api_tests/admin.depth.test.ts, repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.depth.test.ts |
| POST /api/admin/backup/:snapshotId/restore | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| POST /api/admin/ip-allowlist | yes | true no-mock HTTP | repo/backend/api_tests/admin.depth.test.ts, repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.depth.test.ts |
| POST /api/admin/key-versions/rotate | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| POST /api/admin/parameters | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts, repo/backend/api_tests/validation-envelope.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| POST /api/admin/retention/purge-billing | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| POST /api/admin/retention/purge-operational | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| POST /api/auth/login | yes | true no-mock HTTP | repo/backend/api_tests/auth.depth.test.ts, repo/backend/api_tests/auth.test.ts, repo/backend/api_tests/contract.test.ts | app.inject in repo/backend/api_tests/auth.depth.test.ts |
| POST /api/auth/logout | yes | true no-mock HTTP | repo/backend/api_tests/auth.test.ts | app.inject in repo/backend/api_tests/auth.test.ts |
| POST /api/auth/rotate-password | yes | true no-mock HTTP | repo/backend/api_tests/auth.depth.test.ts, repo/backend/api_tests/auth.test.ts | app.inject in repo/backend/api_tests/auth.depth.test.ts |
| POST /api/auth/users | yes | true no-mock HTTP | repo/backend/api_tests/auth.test.ts | app.inject in repo/backend/api_tests/auth.test.ts |
| POST /api/cms/articles | yes | true no-mock HTTP | repo/backend/api_tests/cms.depth.test.ts, repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.depth.test.ts |
| POST /api/cms/articles/:articleId/approve | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/cms/articles/:articleId/interactions | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/articles/:articleId/publish | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/cms/articles/:articleId/reject | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/cms/articles/:articleId/schedule | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/articles/:articleId/submit-review | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/cms/articles/:articleId/withdraw | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/cms/categories | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/tags | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/tags/:tagId/aliases | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/tags/bulk-migrate | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/cms/tags/merge | yes | true no-mock HTTP | repo/backend/api_tests/cms.test.ts | app.inject in repo/backend/api_tests/cms.test.ts |
| POST /api/membership/members | yes | true no-mock HTTP | repo/backend/api_tests/membership.depth.test.ts, repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.depth.test.ts |
| POST /api/membership/members/:memberId/enrollments | yes | true no-mock HTTP | repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.test.ts |
| POST /api/membership/packages | yes | true no-mock HTTP | repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.test.ts |
| POST /api/membership/payments | yes | true no-mock HTTP | repo/backend/api_tests/membership.depth.test.ts, repo/backend/api_tests/membership.test.ts | app.inject in repo/backend/api_tests/membership.depth.test.ts |
| POST /api/outbound/orders | yes | true no-mock HTTP | repo/backend/api_tests/outbound.depth.test.ts, repo/backend/api_tests/outbound.test.ts, repo/backend/api_tests/validation-envelope.test.ts | app.inject in repo/backend/api_tests/outbound.depth.test.ts |
| POST /api/outbound/orders/:orderId/exceptions | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| POST /api/outbound/orders/:orderId/handoff | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| POST /api/outbound/orders/:orderId/pack-verify | yes | true no-mock HTTP | repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.test.ts |
| POST /api/outbound/waves | yes | true no-mock HTTP | repo/backend/api_tests/outbound.depth.test.ts, repo/backend/api_tests/outbound.test.ts | app.inject in repo/backend/api_tests/outbound.depth.test.ts |
| POST /api/strategy/pick-path | yes | true no-mock HTTP | repo/backend/api_tests/strategy.test.ts | app.inject in repo/backend/api_tests/strategy.test.ts |
| POST /api/strategy/putaway-rank | yes | true no-mock HTTP | repo/backend/api_tests/strategy.depth.test.ts, repo/backend/api_tests/strategy.test.ts | app.inject in repo/backend/api_tests/strategy.depth.test.ts |
| POST /api/strategy/rulesets | yes | true no-mock HTTP | repo/backend/api_tests/strategy.depth.test.ts, repo/backend/api_tests/strategy.test.ts, repo/backend/api_tests/validation-envelope.test.ts | app.inject in repo/backend/api_tests/strategy.depth.test.ts |
| POST /api/strategy/simulate | yes | true no-mock HTTP | repo/backend/api_tests/strategy.depth.test.ts, repo/backend/api_tests/strategy.test.ts | app.inject in repo/backend/api_tests/strategy.depth.test.ts |
| POST /api/warehouse/appointments | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.depth.test.ts, repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.depth.test.ts |
| POST /api/warehouse/appointments/:appointmentId/cancel | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/warehouse/appointments/:appointmentId/confirm | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/warehouse/appointments/:appointmentId/reschedule | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| POST /api/warehouse/facilities | yes | true no-mock HTTP | repo/backend/api_tests/validation-envelope.test.ts, repo/backend/api_tests/warehouse.depth.test.ts, repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/validation-envelope.test.ts |
| POST /api/warehouse/facilities/:facilityId/zones | no | unit-only / indirect | none | no matching app.inject method+path |
| POST /api/warehouse/inventory-lots | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| POST /api/warehouse/locations | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| POST /api/warehouse/skus | yes | true no-mock HTTP | repo/backend/api_tests/warehouse.test.ts | app.inject in repo/backend/api_tests/warehouse.test.ts |
| PUT /api/admin/parameters/:key | yes | true no-mock HTTP | repo/backend/api_tests/admin.test.ts | app.inject in repo/backend/api_tests/admin.test.ts |
| PUT /api/auth/users/:userId/roles | yes | true no-mock HTTP | repo/backend/api_tests/auth.test.ts | app.inject in repo/backend/api_tests/auth.test.ts |

## API Test Classification
1. True No-Mock HTTP
- Files: repo/backend/api_tests/auth.test.ts, repo/backend/api_tests/auth.depth.test.ts, repo/backend/api_tests/warehouse.test.ts, repo/backend/api_tests/warehouse.depth.test.ts, repo/backend/api_tests/outbound.test.ts, repo/backend/api_tests/outbound.depth.test.ts, repo/backend/api_tests/strategy.test.ts, repo/backend/api_tests/strategy.depth.test.ts, repo/backend/api_tests/membership.test.ts, repo/backend/api_tests/membership.depth.test.ts, repo/backend/api_tests/cms.test.ts, repo/backend/api_tests/cms.depth.test.ts, repo/backend/api_tests/admin.test.ts, repo/backend/api_tests/health.test.ts, repo/backend/api_tests/contract.test.ts, repo/backend/api_tests/validation-envelope.test.ts.
- Evidence: repeated buildApp(...) + app.inject(...) patterns with real route handlers (e.g., auth.test.ts and health.test.ts).
2. HTTP with Mocking
- File: repo/backend/api_tests/admin.depth.test.ts
- Test reference: it('fails closed with 500 when allowlist lookup errors')
- Mocked dependency: app.prisma.ipAllowlistEntry.findMany via vi.spyOn(...).mockRejectedValueOnce(...)
3. Non-HTTP (unit/integration without HTTP)
- API test suite: none (all API tests use app.inject HTTP layer).

## Mock Detection
- WHAT: Prisma allowlist repository call mocked to throw.
- WHERE: repo/backend/api_tests/admin.depth.test.ts
- Reference: vi.spyOn(app.prisma.ipAllowlistEntry, 'findMany').mockRejectedValueOnce(...)

## Coverage Summary
- Total endpoints: 110
- Endpoints with HTTP tests: 66
- Endpoints with TRUE no-mock API tests: 66
- HTTP coverage: 60.0%
- True API coverage: 60.0%

## Unit Test Summary
### Backend Unit Tests
- Unit test files detected: 29 files under repo/backend/unit_tests/.
- Modules covered:
  - Services/schedulers: appointment.scheduler, cms.scheduler
  - Security/auth primitives: password, session, encryption, ipallowlist, ratelimit, rbac, masking
  - Domain logic: strategy scoring, outbound pack verification/idempotency/shortage, warehouse appointment/location, CMS state + tag normalization, membership rules/invoice/payment transitions/package types, admin backup/retention/parameter key
  - Shared/core: enums, invariants, config, audit, logging
- Important backend modules NOT directly unit tested:
  - Route/controller layer: repo/backend/src/routes/*.ts
  - Repository layer: repo/backend/src/repositories/*.ts
  - Most service orchestration files as isolated unit targets (relying mainly on API-level coverage).

### Frontend Unit Tests
- Frontend test files: NONE
- Frameworks/tools detected for frontend tests: NONE
- Frontend components/modules covered: NONE
- Important frontend components/modules NOT tested: N/A (no frontend codebase detected)
- Mandatory verdict: Frontend unit tests: MISSING
- CRITICAL GAP trigger check (only for fullstack/web): NOT TRIGGERED (project inferred as backend).

### Cross-Layer Observation
- No frontend layer detected; cross-layer balance check is not applicable.

## API Observability Check
- Strong: tests usually specify explicit method+url and assert status/error envelope keys (e.g., contract/auth/admin suites).
- Weak spots: many negative-path tests assert primarily status code with minimal response-body semantics; limited success-path payload validation on numerous endpoints.

## Test Quality and Sufficiency
- Success paths: present but uneven (deeper in selected domains such as outbound, auth, strategy, warehouse, admin depth).
- Failure/validation/auth paths: strong and broad across all route groups.
- Edge cases: present in selected domains (idempotency conflict, tampered backup, illegal transitions).
- Integration boundaries: API tests use Fastify HTTP injection and real handlers; one explicit mocking exception noted.
- run_tests.sh check: Docker-based test execution is present and canonical (PASS for Docker-contained execution).

## End-to-End Expectations
- Fullstack FE↔BE E2E expectation: not applicable to inferred backend project.

## Tests Check
- Verdict: PARTIAL
- Rationale: API breadth exists, but only 66/110 endpoints receive direct HTTP coverage; major set of parameterized/detail, mutation, and lifecycle endpoints remain untested by exact method+path coverage.

## Test Coverage Score (0-100)
- Score: 58

## Score Rationale
- + Good real HTTP harness usage (buildApp + app.inject) across API suites
- + Broad negative-path and validation coverage
- - 40% of endpoints uncovered by exact method+path
- - One HTTP-with-mocking case in API suite
- - Sparse deep success assertions on many endpoints

## Key Gaps
- 44 uncovered endpoints, concentrated in:
  - Admin deletes/patch/details
  - CMS detail + lifecycle transitions
  - Membership detail/update/delete endpoints
  - Warehouse detail/mutation/zone transitions
  - Outbound detail + manager cancellation/approval mutations
- Limited endpoint-level success payload assertions for several covered routes.

## Confidence and Assumptions
- Confidence: high for endpoint inventory and method/path mapping (derived directly from route declarations and app.inject calls).
- Assumptions: dynamic URL construction in tests is treated as coverage when it resolves to the same normalized route template.

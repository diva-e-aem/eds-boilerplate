import { getUrlForEndpoint } from '../utils/getUrlForEndpoint';

jest.mock('../../helpers/sidekick/getOrigin', () => ({
  getOrigin: jest.fn(() => 'https://example.com'),
}));

describe('getUrlForEndpoint', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const testCases = [
    {
      description: 'should return the correct URL for a given endpoint',
      endpoint: '/api/users',
      codeBasePath: '',
      expectedUrl: 'https://example.com/api/users',
    },
    {
      description: 'should return the correct URL for a given endpoint with a codeBasePath',
      endpoint: '/api/users',
      codeBasePath: '/base/path/',
      expectedUrl: 'https://example.com/base/path/api/users',
    },
    {
      description: 'should return the correct URL for an endpoint that ends with a slash',
      endpoint: '/api/users/',
      codeBasePath: '/base/path/',
      expectedUrl: 'https://example.com/base/path/api/users/',
    },
    {
      description: 'should return the correct URL for an endpoint that does not start with a slash',
      endpoint: 'api/users',
      codeBasePath: '/base/path/',
      expectedUrl: 'https://example.com/base/path/api/users',
    },
    {
      description: 'should return the correct URL for an endpoint with a relative path',
      endpoint: './api/users',
      codeBasePath: '/base/path/',
      expectedUrl: 'https://example.com/base/path/api/users',
    },
  ];

  testCases.forEach(({ description, endpoint, codeBasePath, expectedUrl }) => {
    it(description, () => {
      window.hlx = {
        RUM_MASK_URL: '',
        codeBasePath,
        lighthouse: false,
      };

      const { href } = getUrlForEndpoint(endpoint);

      expect(href).toBe(expectedUrl);
    });
  });
});

// 100-weak.js
const weakMap = new WeakMap();

/**
 * Queries the API and tracks the number of calls for each endpoint.
 * @param {Object} endpoint - The API endpoint.
 * @throws {Error} - Throws an error if the number of queries is >= 5.
 */
function queryAPI(endpoint) {
  const calls = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, calls + 1);

  if (calls >= 4) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };

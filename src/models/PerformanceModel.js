/**
 * Creates a performance model from the provided data.
 *
 * @param {Object} data - Data related to user performance (kind and value)
 * @returns {Object} - Formatted performance model
 */
export function GetModelPerformance(data) {
  return {
    userId: data.userId,
    kind: Object.assign({}, data.kind),
    data: data.data.map((performance) => ({
      value: performance.value,
      kind: performance.kind,
    })),
  };
}
  
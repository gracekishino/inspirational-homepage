import quoteReducer from './quoteSlice';

describe('quote reducer', () => {
  const initialState = {
    value: 'All Shall Be Well',
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(quoteReducer(undefined, { type: 'unknown' })).toEqual({
      value: 'All Shall Be Well',
      status: 'idle',
    });
  });
});

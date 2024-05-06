// A mock function to mimic making an async request for data
export function fetchQuote() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ quote: {value: 'All Manner of Things Shall be Well', status: 'idle' } }), 500)
  );
}

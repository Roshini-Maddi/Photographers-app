// src/utils/filter.test.js
import { filterPhotographers } from './filter'; // Adjust the import to your actual file structure

const photographers = [
  { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
  { event_types: ['Corporate', 'Wedding'], zip_code: '67890' },
  { event_types: ['Birthday'], zip_code: '12345' },
];

describe('filterPhotographers', () => {
  test('filters correctly by event type', () => {
    const filtered = filterPhotographers('wedding', '');
    expect(filtered).toEqual([
      { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
      { event_types: ['Corporate', 'Wedding'], zip_code: '67890' },
    ]);
  });

  test('filters correctly by zip code', () => {
    const filtered = filterPhotographers('', '12345');
    expect(filtered).toEqual([
      { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
      { event_types: ['Birthday'], zip_code: '12345' },
    ]);
  });

  test('filters correctly by both event type and zip code', () => {
    const filtered = filterPhotographers('wedding', '12345');
    expect(filtered).toEqual([
      { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
    ]);
  });

  test('filters case-insensitively', () => {
    const filtered = filterPhotographers('WEDDING', '12345');
    expect(filtered).toEqual([
      { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
    ]);
  });

  test('returns empty array if no matches', () => {
    const filtered = filterPhotographers('anniversary', '00000');
    expect(filtered).toEqual([]);
  });
});

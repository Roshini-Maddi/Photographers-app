export const filterPhotographers = (eventType, zipCode) => {
    // Sample data of photographers; in a real application, this data would likely come from a database or API
    const photographers = [
      { event_types: ['Wedding', 'Birthday'], zip_code: '12345' },
      { event_types: ['Corporate', 'Wedding'], zip_code: '67890' },
      { event_types: ['Birthday'], zip_code: '12345' },
    ];
  
    // Convert the search criteria to lowercase for case-insensitive matching
    const eventTypeLower = eventType.toLowerCase();
    const zipCodeLower = zipCode.toLowerCase();
  
    // Filter photographers based on eventType and zipCode
    return photographers.filter(photographer => {
      const eventTypesMatch = photographer.event_types.some(
        et => et.toLowerCase().includes(eventTypeLower)
      );
      const zipCodeMatch = photographer.zip_code.includes(zipCodeLower);
  
      // Return true if either eventType or zipCode matches
      return (eventTypeLower === '' || eventTypesMatch) && (zipCodeLower === '' || zipCodeMatch);
    });
  };
  
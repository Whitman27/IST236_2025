class Country {
  // Unique identifier for the country
  id: string;
  // Name of the country
  name: string;
  // Color associated with the country
  color: string;

  // Constructor function to initialize Country instances
  constructor(id: string, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

export default Country;
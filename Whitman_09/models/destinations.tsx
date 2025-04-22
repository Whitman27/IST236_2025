class Destination {
  // Unique identifier for the destination
  id: string;
  // Identifier of the country to which the destination belongs
  countryId: string;
  // Name of the destination
  name: string;
  // Cost of visiting the destination
  costVisit: number;
  // Year the destination was founded
  foundedYear: number;
  // Rating of the destination
  rating: number;
  // Description of the destination
  description: string;
  // URL for the image of the destination
  imageUrl: string;

  // Constructor function to initialize Destination instances
  constructor(
    id: string,
    countryId: string,
    name: string,
    costVisit: number,
    foundedYear: number,
    rating: number,
    description: string,
    imageUrl: string
  ) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.costVisit = costVisit;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  // Method to create a string representation of the destination
  toString(): string {
    return `${this.name} was founded in ${this.foundedYear} - Average Day Cost to Visit: $ ${this.costVisit}, Average Rating: ${this.rating} Description: ${this.description}`;
  }
}

export default Destination;
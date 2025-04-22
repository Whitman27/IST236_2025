import Country from "../models/countries";
import Destination from "../models/destinations";

// Data for each country 
export const COUNTRIES = [
  new Country("c1", "Italy", "#f26358"), //Red
  new Country("c2", "Spain", "#e38c3a"), //Orange
  new Country("c3", "France", "#e2c94c"), //Yellow
  new Country("c4", "Greece", "#85d762"), //Green
  new Country("c5", "Switzerland", "#26f5f2"), //Aqua Blue
  new Country("c6", "Thailand", "#1980da"), //Blue
  new Country("c7", "Egypt", "#4c60d1"), //Dark Blue
  new Country("c8", "Japan", "#8543db"), //Purple
  new Country("c9", "Mexico", "#f526e0"), //Pink
  new Country("c10", "Costa Rica", "#e788e7"), //light Pink
];

// Data for each Destination
export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Venice Canals",
    300,
    "421 DC",
    4.6,
    "A gondola ride through the canals of Venice is a tradition that travelers have been participating in for centuries.",
    "https://media.vietravel.com/images/NewsPicture/Venice-Canals.jpg"
  ),
  new Destination(
    "d2",
    "c2",
    "Roman Theater of Mérida",
    250,
    "16 BC",
    4.3,
    "Still in excellent condition, its stage consists of two floors of blue-veined marble columns flanking a central arch. Between them are sculptures of Ceres, Pluto and Proserpina among other gods and characters.",
    "https://www.touropia.com/gfx/b/2011/07/roman_theatre_of_merida.jpg"
  ),
  new Destination(
    "d3",
    "c3",
    "Eiffel Tower",
    280,
    1889,
    4.7,
    "France's capital city is a year-round tourist destination with iconic attractions like the Louvre and the Eiffel Tower and incredible architecture.",
    "https://media.revistaad.es/photos/60c22383b5e4c2d4b6547b61/master/w_1600%2Cc_limit/278401.jpg"
  ),
  new Destination(
    "d4",
    "c4",
    "Athens",
    220,
    "3000 BC",
    4.4,
    "Athens is that perfect mix of traditional but trendy, ancient but modern, full of nature but cosmopolitan at the very same time.",
    "https://media.timeout.com/images/105237758/750/422/image.webp"
  ),
  new Destination(
    "d5",
    "c5",
    "Jungfraujoch: The Top of Europe",
    350,
    1912,
    4.5,
    "It offers panoramic views of the UNESCO-recognized Jungfrau region that will make your jaw drop." +
      "perched 3,454 meters above sea level, is the best place to see the magnificent Aletsch Glacier and the 4,000-meter peaks that flank it.",
    "https://www.planetware.com/photos-large/CH/switzerland-jungfraujoch-top-of-europe.jpg"
  ),
  new Destination(
    "d6",
    "c6",
    "Chiang Mai",
    180,
    1296,
    4.3,
    "Chiang Mai is usually used as base for travelers looking to explore the stunning hills of the surrounding areas.",
    "https://travelbud.com/wp-content/uploads/2018/10/wat-phra-1470478_1280-e1540207463136.jpg"
  ),
  new Destination(
    "d7",
    "c7",
    "Pyramids of Giza",
    200,
    "2560 BCE",
    4.7,
    "The last surviving wonder of the Seven Wonders of the Ancient World, the Pyramids of Giza are one of the world's most recognizable landmarks.",
    "https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza.jpg"
  ),
  new Destination(
    "d8",
    "c8",
    "Tokio",
    250,
    1868,
    4.5,
    "This metropolis is a feast for the senses.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBBWkHf4Rgp8nNlfaZHBL52O8gqzMxLmINw&usqp=CAU"
  ),
  new Destination(
    "d9",
    "c9",
    "Chichen Itza",
    150,
    "700 AD",
    4.7,
    "The largest of the Maya cities in the Yucatan Peninsula and one of Mexico most visited tourist destinations.",
    "https://www.touropia.com/gfx/b/2010/06/chichen_itza-1.jpg"
  ),
  new Destination(
    "d10",
    "c10",
    "Arenal Volcano and La Fortuna",
    180,
    1900,
    4.2,
    "La Fortuna is home to the famous Arenal Volcano, but it is also the adventure capital of Costa Rica. It has a beautiful rainforest, impressive waterfalls, and abundant wildlife.",
    "https://www.vacationscostarica.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fvacationscostarica-com%2Fimage%2Fupload%2Fc_scale%2Cw_908%2Cq_auto%2Cf_webp%2Fsangregado_lodge_arenal_volcano_33d1ed5660.jpg&w=1200&q=75"
  ),
  new Destination(
    "d11",
    "c1",
    "Cinque Terre",
    200,
    1901,
    4.5,
    "Cinque Terre, which translates as Five Villages, is a lovely coastal region with steep oceanside cliffs and hills.",
    "https://media.vietravel.com/images/NewsPicture/Cinque-Terre.jpg"
  ),
  new Destination(
    "d12",
    "c2",
    "Prado Museum, Madrid",
    200,
    1785,
    4.1,
    "the Neoclassical-style museums endless galleries display tens of thousands of paintings, prints and sculptures.",
    "https://www.touropia.com/gfx/b/2011/07/prado_museum_madrid.jpg"
  ),
  new Destination(
    "d13",
    "c3",
    "Bordeaux",
    220,
    "300 BCE",
    4.3,
    "Famed as a wine growing region, Bordeaux is one of the lively cities and among the important places to visit in France. Half of this port city is declared as one of the largest World Heritage Sites by UNESCO.",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Bordeaux_20th-jun-400x229.jpg"
  ),
  new Destination(
    "d14",
    "c4",
    "Crete",
    200,
    421,
    4.6,
    "You will need a car to explore Greeces biggest island, but if you are after golden beaches, crumbly old towns, world-class museums and UNESCO Heritage sites, Crete ticks every box.",
    "https://media.timeout.com/images/105237820/750/422/image.webp"
  ),
  new Destination(
    "d15",
    "c5",
    "Chateau de Chillon, Montreux",
    300,
    1100,
    4.2,
    "On the shores of Lake Geneva, near Montreux, the Chateau de Chillon (Chillon Castle) has inspired artists and writers for centuries.",
    "https://www.planetware.com/photos-large/CH/switzerland-the-chillon-castle.jpg"
  ),
  new Destination(
    "d16",
    "c6",
    "Bangkok",
    180,
    1782,
    4.6,
    "It is the economic, cultural and financial hub of Thailand. Even with it is bustling city vibe, there is still so much soul and authenticity in this interesting metropolis. ",
    "https://travelbud.com/wp-content/uploads/2018/10/bundo-kim-501570-unsplash-e1540209020601.jpg"
  ),
  new Destination(
    "d17",
    "c7",
    "Luxor's Temples & Tombs",
    220,
    "2055 BCE",
    4.6,
    "Famed for the Valley of the Kings, Karnak Temple, and the Memorial Temple of Hatshepsut, the Nile-side town of Luxor in Upper Egypt has a glut of tourist attractions." +
      "This is ancient Thebes, the power base of the New Kingdom pharaohs, and home to more sights than most can see on one visit.",
    "https://www.planetware.com/photos-large/EGY/egypt-luxor-karnak-temple-at-night.jpg"
  ),
  new Destination(
    "d18",
    "c8",
    "Kyoto",
    220,
    "794 during the Heian period",
    4.3,
    "Travelers most interested in Japan's history and traditions should head to Kyoto. Centrally located on the archipelago, Kyoto has long been considered the cultural capital of Japan.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eQjNL-xbIXyh_W_D9CgXnJRWmA38yuGJpg&usqp=CAU"
  ),
  new Destination(
    "d19",
    "c9",
    "Teotihuacan",
    120,
    "In the 2nd century BC a new civilization arose in the valley of Mexico.",
    4.6,
    "This civilization built the flourishing metropolis of Teotihuacán and it is huge pyramids. The Pyramid of the Sun was built around 100 AD and is the largest pyramid in Teotihuacán and all of Mexico.",
    "https://www.touropia.com/gfx/b/2010/06/teotihuacan.jpg"
  ),
  new Destination(
    "d20",
    "c10",
    "Corcovado National Park",
    180,
    1975,
    4.4,
    "It protects some 164 square miles (424 square km) of a virgin, primary tropical rainforest.",
    "https://www.vacationscostarica.com/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fvacationscostarica-com%2Fimage%2Fupload%2Fc_scale%2Cw_908%2Cq_auto%2Cf_webp%2Fcorcovado_national_park_day_trip_spider_monkey_family_close_up_607e39a2f6.jpg&w=1200&q=75"
  ),
];
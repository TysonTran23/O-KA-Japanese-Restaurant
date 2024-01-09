CREATE DATABASE oka_db;

\c oka_db

DROP TABLE IF EXISTS menu_items;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    review TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5)
);

INSERT INTO reviews (name, review, rating) VALUES
('Tyson Tran', 'Sushi was Great!', 5);

CREATE TABLE inbox (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(20),
    message TEXT
);

INSERT INTO inbox (name, email, phone_number, message) VALUES
('Tyson Tran', 'tysontran@email.com', '123-456-7890', 'Creating a website would be great to have for us customers!');

CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2)
);

INSERT INTO menu_items (name, description, price) VALUES 
('Edamame', 'Steamed Soybeans', 7.00),
('Ohitashi', 'Spinach With Sweet Sauce', 7.00),
('Agedashi', 'Deep Fried Tofu', 8.50),
('Spicy Agedashi', 'Deep Fried Tofu With Chilli Garlic', 9.50),
('Gyoza', 'Pan Fried Pork Dumplings (6 PCS)', 9.00),
('Prawn Gyoza', 'Pan Fried Pork & Prawn Dumplings (6 PCS)', 17.00),
('Yakitori', '2 Chicken Skewers', 12.00),
('Soft Shell Crab Tempura', 'Lightly Battered & Deep Fried Crab', 8.50),
('Beef Asparagus', 'Thinly Sliced Beef Wrapped Around Asparagus', 14.00),
('Squid Karaage', 'Lightly Battered & Deep Fried Squid', 14.00),
('Chicken Karaage', 'Deep Fried Chicken Wings (8 PCS)', 17.00),
('Kushiyaki', '2 Grilled Scallops & Prawns Skewers', 18.00),
('Shrimp Salad Rolls', 'Lettuce, Vermicelli Noodles & Shrimp Served With Peanut Sauce (2 Rolls)', 9.00),
('Crispy Wontons', 'Deep Fried Mixed Pork & Prawn Wontons (7 PCS)', 9.00),
('Seaweed Salad', 'Wakame Sesame Salad', 7.00),
('Takoyaki', 'Deep Fried Octopus Balls With Mayo, Katsu Sauce & Bonito Flakes (6 PCS)', 9.00),
('Spring Rolls', 'Pork & Veggies Mix Spring Rolls With Fish Sauce (2 Rolls)', 9.00),
('Veggie Spring Rolls', 'Mix Veggies With Sweet Chili Sauce', 9.00),
('Veggie Tempura (5 PCS)', 'Lightly Battered Deep Fried Vegetables', 7.50),
('Veggie Tempura (10 PCS)', 'Lightly Battered Deep Fried Vegetables', 14.00),
('Prawn Tempura (4 PCS)', 'Lightly Battered Deep Fried Shrimps', 8.00),
('Prawn Tempura (8 PCS)', 'Lightly Battered Deep Fried Shrimps', 15.50),
('Assorted Tempura (7 PCS)', 'Lightly Battered Deep Fried Veggies and Shrimp', 8.50),
('Assorted Tempura (11 PCS)', 'Lightly Battered Deep Fried Veggies and Shrimp', 16.00),
('Deep Fried Banana', 'Battered & Fried Banana Served With Vanilla Ice Cream & Topped With Chocolate Syrup', 10.00),
('Rice SM', 'Small Bowl of Rice', 3.00),
('Rice LG', 'Large Bowl of Rice', 4.00),
('Miso Soup SM', 'Small Bowl of Miso Soup With Tofu & Green Onions', 3.00),
('Miso Soup LG', 'Karge Bowl of Miso Soup With Tofu & Green Onions', 4.00),
('Sunomono Salad SM', 'Choice of: Shrimp, Octopus, Crab or Veggies', 3.00),
('Sunomono Salad LG', 'Choice of: Shrimp, Octopus, Crab or Veggies', 3.00),
('Seafood Sunomono SM', 'Shrimp, Octopus & Crab', 5.50),
('Seafood Sunomono LG', 'Shrimp, Octopus & Crab', 9.00),
('Tempura Lunch Box', 'Includes Miso Soup, 4 PCS Veggies & 2 PCS Prawn Tempura, 4 PCS California Roll & Teriyaki on Rice w/ Choice of Protein: Chicken, Beef, Pork, Cod Tofu, Salmon or Chicken Karaage', 17.00),
('Sashimi Lunch Box', 'Includes Miso Soup, 4 PCS Tuna Sashimi, 4 PCS California Roll & Teriyaki on Rice w/ Choice of Protein: Chicken, Beef, Pork, Cod Tofu, Salmon or Chicken Karaage', 17.00),
('Chicken Udon Soup', 'Grilled Chicken Breast & Veggies', 18.00),
('Beef Udon Soup', 'Thinly Sliced Beef & Veggies', 18.00),
('Veggie Udon Soup', 'Assorted Steamed Vegetables & Deep Fried Tofu', 18.00),
('Tempura Udon Soup', 'Assorted Vegetables & Prawn Tempura', 18.00),
('Seafood Udon Soup', 'Assorted Seafood & Veggies', 20.00),
('Nabeyaki Udon Soup', 'Prawn Tempura, Chicken, One Boiled Egg & Veggies', 20.00),
('Wonton Soup', 'Mixed Pork & Prawn Wontons With Veggies', 18.00),
('Wonton Noodle Soup', 'Mixed Pork & Prawn Wontons With Veggies & Egg Noodles', 18.00), 
('Tonkotsu Ramen', 'Boiled Egg, BBQ Pork, Bean Sprouts, & Green Onions', 18.00), 
('Pho', 'Beef Broth Soup Topped With Thinly Sliced Beef, Beef Balls & Bean Sprouts', 18.00),
('Spicy Noodle Soup (Bun Bo Hue)', 'Spicy Beef Broth Soup Topped With Sliced Beef, Beef Balls & Fried Pork Ham', 19.00),
('Vermicelli Bowl (Bun Ba Mau)', 'Chopped Lettuce Mixed With Basil Leaf & Bean Sprouts, Served With Vermicelli Noodles & Fish Sauce, A: Spring Roll, BBQ Pork & Marinated Pork, B: Spring Roll, Marinated Chicken & Beef, C: Spring Rolls Only, D: Spring Roll, Marinated Pork, Chicken & Beef (4 Colour)', 21.00),
('Donburi', 'Rice Bowl Dish Consisting of Fish, Meat, Vegetables, or Other Indegredients Simmered Together & Served Over Rice, All Dishes Include Miso Soup, Choice of Protein: Chicken, Beef, Pork, Tofu, Tempura Or Eel', 23.00),
('Teriyaki On Rice', 'Teriyaki On Rice With Stir-Fry Veggies, All Dishes Includes Miso Soup, Choice of Protein: Chicken, Beef, Cod, Salmon, Pork or Tofu', 18.00),
('Katsu', 'Fried Meat or Seafood with Panko Crumbs & Served with Egg Noodles, All Dishes Include Miso Soup, Choice of Protein: Chicken, Pork or Cod', 19.00),
('Yakisoba', 'Stir-Fry Egg Noodles With Veggies & Teriyaki Sauce, All Dishes Include Miso Soup, Choice of Protein: Chicken, Beef, Veggie, Pork or Shrimp', 19.00),
('Yaki-Udon', 'Stir-Fry Udon Noodles With Veggies & Oyster Sauce, All Dishes Include Miso Soup, Choice of Protein: Chicken, Beef, Pork, Veggie or Shrimp', 19.00),
('Teriyaki Hot Plate', 'Pan Fried Veggies on a Hot Plate All Dishes, Include Miso Soup & Side of Rice, Choice of Protein: Chicken, Beef, Pork, Cod, Tofu, or Salmon', 20.00),
('Japanese Curry', 'Curry Rice With Mixed Veggies, All Dishes Include Miso Soup, Choice of Protein: Chicken, Beef, Tofu, Pork or Seafood', 20.00),
('Combination for One', 'Pan Fried Veggies on a Hot Plate with Teriyaki Sauce, All Dishes Include Miso Soup, Sunomono Salad, Side of Rice & Assorted Tempura (5Pcs Veggies & 2PCS Prawn), Choice of Protein: Chicken, Beef, Cod, Tofu, Salmon, Pork or Chicken Karaage', 26.00),
('Combination for Two', 'Stir-Fry Veggies with Teriyaki Sauce, All Dishes Include Miso Soup, Sunomono Salad, Side of Rice, Assorted Tempura (7 PCS Veggies & 4 PCS Prawn) & Appies, Appetizers include: California Rolls, Chicken Karaage, or Gyoza / Choice of Two Types of Protein That Includes: Chicken, Beef, Salmon, Tofu, Cod, Pork, Chicken Karaage', 49.00),
('Sushi Box', 'Includes California Roll (4 PCS), Salmon Roll (6 PCS), Tuna Sashimi (4 PCS), 1 Piece of Ebi Nigiri, Tuna Nigiri, Salmon Nigiri and Snapper Nigiri', 26.00),
('Kappa Roll', 'Cucumber Roll', 4.50),
('Avocado Roll', 'Avocado', 4.50),
('Salmon Roll', 'Sockeye Salmon', 5.50),
('Tuna Roll', 'Tuna', 5.50),
('Spicy Tuna Roll', 'Tuna w/ Spicy Mayo', 5.50),
('Spicy Salmon Roll', 'Salmon w/ Spicy Mayo', 5.50),
('Negitoro Roll', 'Tuna Belly & Green Onions', 5.50),
('California Roll', 'Imitation Crab & Avocado', 6.50),
('Smoked Salmon Roll', 'Smoked Salmon, Cucumber & Avocado', 7.00),
('Chicken Teriyaki Roll', 'Chicken and Cucumber w/ Teriyaki Sauce', 6.50),
('Beef Teriyaki Roll', 'Beef and Cucumber w/ Teriyaki Sauce', 6.50),
('Yam Roll', 'Yam Tempura', 6.50),
('Crunchy Spicy Tuna Roll', 'Tuna w/ Spicy Mayo and Tempura Flakes on Top', 7.50),
('Spicy Chopped Scallop Roll', 'Chopped Scallop w/ Spicy Mayo', 8.50), 
('Chopped Scallop Roll', 'Chopped Scallop', 8.00),
('Mushroom Roll', 'Shitake Sweet Mushrooms & Avocado', 6.50),
('Sockeye Roll', 'Salmon & Avocado', 7.50),
('Chicken Roll', 'Chicken Tempura & Cucumber', 6.50),
('Ebi Ebi Roll', 'Prawn Tempura & Cucumber', 6.50),
('BC Roll', 'BBQ Salmon & Cucumber', 6.50),
('Unagi Roll', 'BBQ Eel & Cucumber', 7.00),
('Veggie Roll', 'Avocado, Cucumber & Carrots', 6.50),
('Spicy Veggie Roll', 'Avocado, Cucumber, Yam Tempura & Spicy Mayo on Top', 6.50),
('Atlantic Roll', 'Salmon Tempura, Cucumber & Avocado', 7.00),
('Philadelphia Roll', 'Smoked Salmon, Cream Cheese, Cucumber, Avocado', 7.50),
('Katsu Roll', 'Prawn Tempura, Cucumber, Cream Cheese, Spicy Mayo on Top & Deep Fried', 7.50),
('Crazy Cali Roll', 'Imitation Crab, Avocado, Deep Fried & Spicy Mayo on Top', 7.50),
('Deluxe Spicy Tuna Roll', 'Spicy Tuna & Cucumber', 7.50),
('California Temaki', 'Imitation Crab & Avocado Cone', 5.50),
('Ebi Temaki', 'Prawn Tempura & Cucumber Cone', 5.50),
('Eel Temaki', 'BBQ Eel & Cucumber Cone', 5.50),
('Spicy Tuna Temaki', 'Spicy Tuna & Cucumber Cone', 5.50),
('Chop Scallop Temaki', 'Chopped Scallop, Fish Eggs & Cucumber Cone', 5.50),
('Spicy Salmon Temaki', 'Spicy Salmon & Cucumber Cone', 5.50),
('Negitoro Temaki', 'Tuna Belly & Green Onions Cone', 5.50),
('BC Temaki', 'BBQ Salmon & Cucumber Cone', 5.50),
('Kappa Temaki', 'Cucumber Cone', 4.50),
('Veggie Temaki', 'Veggie Cone', 4.50),
('Avocado Temaki', 'Avocado Cone', 4.50),
('Yam Temaki', 'Yam Cone', 4.50),
('O-KA Roll', 'Imitation Crab, Avocado, Cucumber & Smoked Salmon on Top', 8.50),
('Crispy Crispy Roll', 'Prawn & Yam Tempura, Imitation Crab, Cucumber, Avocado, Topped w/ Spicy Mayo & Tempura Flakes', 9.50),
('LA Roll', 'Salmon & Prawn Tempura, Imitation Crab, Cucumber, Avocado, Cream Cheese & Fish Eggs on Top', 9.50),
('Tokyo Roll', 'BBQ Eel, Imitation Crab, Cucumber & Avocado', 8.50),
('Arigato Roll', 'Spicy Tuna, Salmon, Ebi, Imitation Crab, Cucumber & Fish Eggs (House Roll)', 9.50),
('Monster Roll', 'Spicy Tuna, Salmon, Ebi, Imitation Crab, Cucumber, Cream Cheese & Deep Fried', 10.00),
('Spider Roll', 'Soft Shell Crab Tempura, Cucumber, Avocado & Fish Eggs', 9.00),
('Dragon Roll', 'Yam Tempura, Avocado & Avocado on Top', 12.50),
('Tempura Onion Roll', 'Onion Tempura, Avocado & Avocado/Spicy Mayo on Top', 12.50),
('Dynamic Maki', 'Prawn Tempura, Cucumber, Avocado, Tamago & Shitake', 13.00),
('Volcano Roll', 'Imitation Crab, Avocado, Cucumber, Topped w/ Spicy Tuna, Unagi Sauce & Tempura Flakes', 13.00),
('Rainbow Roll', 'Prawn Tempura, Imitation Crab, Avocado, Cucumber, Topped w/ Avocado, Tuna & Salmon', 13.00),
('Tiger Roll', 'Prawn Tempura, Avocado, Cucumber, Topped w/ Ebi & Teriyaki Sauce', 13.00),
('Dancing Eel Roll', 'Prawn Tempura, Avocado, Cucumber, Topped with Unagi & Avocado', 14.00),
('Super Pump Roll', 'Imitation Crab, Cucumber, Avocado, & Sockeye Salmon on Top', 13.00),
('Energy Roll', 'Imitation Crab, Cucumber, Avocado, & Tuna on Top', 13.00),
('Tray A', 'California Roll, Ebi Roll, & Smoked Salmon Roll (24 PCS)', 19.00),
('Tray B', 'California Roll, Ebi Roll, BC Roll (24 PCS)', 19.00),
('Tray C', 'California Roll, Ebi Roll, Yam Roll & Chicken Roll (32 PCS)', 25.00),
('Tray D', 'California Roll, Ebi Roll, Yam Roll, & Spider Roll (29 PCS)', 28.00),
('Tray E', 'Spicy Tuna Roll, Spicy Salmon Roll, Spicy Chopped Scallop Roll, 2 PCS of Each Nigiri: Ebi, Tuna & Salmon (30 PCS)', 39.00),
('Veggie Tray', 'Kappa Roll, Avocado Roll, Yam Roll, & Veggie Roll (28 PCS)', 21.00),
('Teriyaki Tray', 'Chicken, Beef & Salmon Teriyaki Rolls (24 PCS)', 19.00),
('Speciality Tray', 'Energy Roll, Tiger Roll & Super Pump Roll (24 PCS)', 37.00),
('Deep Fried Tray', 'Crazy Cali Roll, Katsu Roll & Monster Roll', 24.50),
('Tuna Sashimi (4 PCS)', 'Sliced Tuna', 9.00),
('Tuna Sashimi (8 PCS)', 'Sliced Tuna', 18.00),
('Salmon Sashimi (4 PCS)', 'Sliced Sockeye Salmon', 9.50),
('Salmon Sashimi (8 PCS)', 'Sliced Sockeye Salmon', 18.50),
('Tuna/Salmon (4 PCS)', 'Tuna & Salmon Slices', 9.50),
('Tuna/Salmon (8 PCS)', 'Tuna & Salmon Slices', 18.50),
('Hokki Sashimi (4 PCS)', 'Surf Clam', 9.00),
('Hokki Sashimi (8 PCS)', 'Surf Clam', 18.00),
('Tuna Tataki', 'Seared Tuna with Ponzu Sauce', 19.00),
('Blackened Tuna', 'Cajun Seasoning, Seared Tuna with Ponzu Sauce', 19.00),
('Assorted Sashimi', 'Mixed Sashimi', 20.00),
('Spicy Tuna Sashimi', 'Spicy Tuna Sashimi Salad', 21.00),
('Spicy Salmon Sashimi', 'Spicy Salmon Sashimi Salad', 21.00),
('Mix Spicy Tuna & Salmon Sashimi', 'Spicy Salmon & Spicy Tuna Sashimi Salad', 21.00),
('Tuna Don', 'Tuna Sashimi (8 PCS), Served on Top of Sushi Rice', 20.00),
('Salmon Don', 'Salmon Sashimi (8 PCS), Served on Top of Sushi Rice', 21.00),
('Chirashi Don', 'Assorteed Sashimi Served on Top of Sushi Rice', 23.00),
('Nigiri A', '1 Piece Each of: Tuna, Salmon, Tako, Ebi, Hokki Nigiri & 1 California Roll', 23.00),
('Nigiri B', '1 Piece Each of: Tuna, Salmon, Tako, Ebi, Hokki Nigiri & 1 Spicy Tuna', 22.00),
('Nigiri C', '1 Piece Each of: Tuna, Salmon, Tako, Ebi, Hokki Nigiri & 1 Salmon Roll', 22.00),
('Tuna Nigiri', 'Served on Top of Rice', 4.00),
('Snapper Nigiri', 'Served on Top of Rice', 4.00),
('Kani Nigiri', 'Imitation Crab', 3.00),
('Tamago Nigiri', 'Sweet Egg', 3.00),
('Inari Nigiri', 'Bean Curd', 3.00),
('Salmon Nigiri', 'Served on Top of Rice', 4.00),
('Scallop Nigiri', 'Served on Top of Rice', 4.00),
('Smoked Salmon Nigiri', 'Served on Top of Rice', 4.00),
('Toro Nigiri', 'Tuna Belly', 4.00),
('Chopped Scallop Nigiri Nigiri', 'Served on Top of Rice', 4.00),
('Ebi Nigiri', 'Served on Top of Rice', 4.00),
('Tako Nigiri', 'Octopus', 4.00),
('Spicy Tuna Nigiri', 'Served on Top of Rice', 4.00),
('Masago Nigiri', 'Fish Eggs', 4.00),
('Unagi Nigiri', 'BBQ Eel', 4.00),
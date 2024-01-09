

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
('Agedashi', 'Deep Fried Tofu', 8.50);
//Necessary Import
import React, { useEffect, useState } from "react";

//MenuList Component
import MenuList from "./MenuList";

//Function that sends a get request to retrieve all menu items from database
import fetchMenuItems from "./menuService";

//Footer component
import Footer from "../../Footer/Footer";

const Menu = () => {
  //States used to render specific parts of the menu, each state is a specific category on the menu in which we set the state in the "useEffect" to show what to display
  const [appetizers, setAppetizers] = useState([]);
  const [sideOrders, setSideOrders] = useState([]);
  const [dishesBowls, setDishesBowls] = useState([]);
  const [sushiMaki, setSushiMaki] = useState([]);
  const [sushiTemaki, setSushiTemaki] = useState([]);
  const [sushiSpeciality, setSushiSpeciality] = useState([]);
  const [sushiTray, setSushiTray] = useState([]);
  const [sushiSashimi, setSushiSashimi] = useState([]);
  const [sushiNigiri, setSushiNigiri] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      //Items acquires all the menu items from the database
      const items = await fetchMenuItems();
      //The database is set up in order so we are able to choose a specific set of items from the database that translate to each category
      setAppetizers(items.slice(0, 25));
      setSideOrders(items.slice(25, 33));
      setDishesBowls(items.slice(33, 56));
      setSushiMaki(items.slice(56, 85));
      setSushiTemaki(items.slice(85, 97));
      setSushiSpeciality(items.slice(97, 113));
      setSushiTray(items.slice(113, 122));
      setSushiSashimi(items.slice(122, 139));
      setSushiNigiri(items.slice(139, 157));
    };

    //Call the function above
    getMenuItems();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <h2>ALLERGEN ALERT:</h2>
      <p className="allergy-alert">
        Our kitchen offers products containing gluten, eggs, shellfish and
        dairy. While we take steps to minimize the risk of cross contamination,
        we cannot guarantee that any of our dishes are safe to consume for
        guests with severe allergies to wheat, shellfish, dairy or eggs. Items
        marked gluten friendly are made with no gluten-containing ingredients.
        However, there is always a risk of contamination. We understand that for
        some of our guests cross contamination is not an option and to be safe
        we unfortunately do not recommend dining at our restaurant as your
        health and well being is our main priority. -Thank you for your
        understanding
      </p>
      <h2>O-KA Japanese Restaurant</h2>
      <section>
        <h2>Appetizers</h2>
        <MenuList items={appetizers} layout="fourPerRow" />
      </section>
      <section>
        <h2>Side Orders</h2>
        <MenuList items={sideOrders} />
      </section>
      <section>
        <h2>Dishes & Bowls</h2>
        <MenuList items={dishesBowls} />
      </section>
      <section>
        <h2>Maki Sushi</h2>
        <MenuList items={sushiMaki} />
      </section>
      <section>
        <h2>Temaki Sushi "Hand Rolled"</h2>
        <MenuList items={sushiTemaki} />
      </section>
      <section>
        <h2>Speciality Rolls</h2>
        <MenuList items={sushiSpeciality} />
      </section>
      <section>
        <h2>Sushi Tray's</h2>
        <MenuList items={sushiTray} />
      </section>
      <section>
        <h2>Sashimi</h2>
        <MenuList items={sushiSashimi} />
      </section>
      <section>
        <h2>Nigiri Platter & Pieces</h2>
        <MenuList items={sushiNigiri} />
      </section>
      <Footer />
    </div>
  );
};

export default Menu;

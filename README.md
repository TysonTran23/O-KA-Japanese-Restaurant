## API

http://localhost:3001/menu/menu-items
http://localhost:3001/contact/reviews
http://localhost:3001/contact/inbox

Main URL to use the API is http://localhost:3001 with additional parameters at the end of the link to access certain information from the API
This API was created by myself, and was not a third party API

#### Title of Site and Link to the URL Deployed

#### Website Description
This website was created for customers and other travelers that would like to learn more about the restaurant and what it has to offer. The website is meant to able to provide a user friendly interface for additionally information about the restaurant menu items, backstory, location and features to communicate with the owners of the restaurant. There is also direct links to ordering online and through links to third party delivering services.

#### Features
The main idea of this website was to be user friendly. Being able to navigate around the website whether it was through a phone or computer, the sizing and code is custom to adjust for those purposes. It also is friendly enough for all ages to utilize it efficiently. I have also added in menu items and descriptions, and forms that can provide feedback directly to the owners of the business instead of using third party websites like google. So information can be sent directly to the owners. 
I also added in small features using carousel component given from react, which allows to rotate between images that the restaurant has to offer.
There are also direct links to very popular third party delivering apps such as Skip the Dishes, Uber Eats, and DoorDash to simplify the act of ordering from the restaurant.

#### Test files
The main parts to test for this website/application was the backend, as this was the most important part of the website functionality. Making sure all the routes are tested and can run without errors was important for the features of the website to work efficiently. The front end section was mainly rendering components and html/css and JS. As long as the backend portion was up to date, the get/post request from the front end should work as intended.

#### Standard Flow
- The first page of the website involves the home page, providing a carousel wheel of photos, information about the website and a button to show the nearest location and a about page button that sends over to the additional information of the restaurant 
- Next on the nav bar would be the Menu tab, which displays a allergy alert to warn customers for potential allergies. A big list of the menu items, with description and pricing. This is categorize into appetizers, side orders, dishes and bowls and Sushi. All the information about the menu can be found.
- Next would be the Location tab with a display of the location, and a button that will send you over to a online takeout page
- A Contact page that has a button to bring you to the location page, 2 forms that allow for feedback directly sent to the owners database. This includes a feedback form, for any additional concerns or constructive criticism, and a reviews page to give the owners a idea of what was done well or needs improvement.
- A simple about us page listing back story of the restaurant and owners
- A online takeout page that can send you directly to popular third party delivering apps for easy access
  
#### Technology Stack
- Used React to create the majority of the website
- Node.js and Express was used to create the backend portion of the website, creating my own API to function with the front end
- HTML and CSS was heavily used to make sure styling and proper class names were used on all pages
- PostgreSQL was used for the database portion and connecting it to node/express
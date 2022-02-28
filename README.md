## How I worked on this project

My goal was to build an online marketplace for used items. This would include mobile applications for iOS and Android platforms.

- I React Native for this mobile app.
- And I used Node.js, Express.js and MongoDB for the backend of the marketplace

## How to navigate this project

### Frontend

- Navigation: [Click here](https://github.com/Lambertyubin/marketplace_mobile_app/blob/main/app/navigation/AppNavigator.js#L21)
- Some stateful logic: [Click here](https://github.com/Lambertyubin/marketplace_mobile_app/blob/main/app/screens/ListingEditScreen.js#L36)
- Styling: [Click here](https://github.com/Lambertyubin/marketplace_mobile_app/blob/main/app/screens/ViewImageScreen.js#L26)
- Contact Form: [Click here](https://github.com/Lambertyubin/marketplace_mobile_app/blob/main/app/components/ContactSellerForm.js#L17)
- Shopping Cart component: [Click here]()
- The application fetches data from a backend API that I built as part of the project.
- API to backend: [Click here](https://github.com/Lambertyubin/marketplace_mobile_app/blob/main/app/api/client.js#L18)

### Backend

- Link to the backend: [Click here](https://github.com/Lambertyubin/marketplace_backend)

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.

### Backend

- I choose Node.js due to it does a great job at handling concurrent requests due to its asynchronous event-driven IO. A backend that is fast at processing requests and providing responses without blocking incoming requests was critical for a marketplace service.
- I also used Express.js due to its popularity at managing middleware needed to manipulate the request and response objects during a request-response cycle. With express, I was able to build a fast RESTful API with all CRUD operations linking to the database.
- MongoDB was used because I needed some flexibility in type of data to store for each product, as well as scalability as the system grow.

Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-operational marketplace with content.
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress

## Available Scripts

### Frontend

- `npm start` to run the mobile app
- `npm ios` to run the mobile application on iOS
- `npm android` to run the app application on android

### Backend

- `npm start` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017

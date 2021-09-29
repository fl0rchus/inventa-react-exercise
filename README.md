# React Exercise - Inventa

React exercise for the Frontend Developer job position at Inventa  

## Tech Stack

- React
- styled-components
- React Router
- ViteJS
- Vercel


  
## Components 
- Inside the views folder are the two project pages: Home and Boleto, which are declared within the router found in App.jsx
- Inside the components folder there are four components that make up the popup:
    - **PopUp.jsx**: render the popup content and create the portal
    - **Header.jsx**: popup header with the corresponding information
    - **Content.jsx**: content of the popup, contains an array with the information of the items, performs the reverse function that changes the position of the items through an onClick event on the "Buy now" button and renders the Circles.jsx component that shows the items.
    - **Circles.jsx**: receives the information of each item and renders the component, it also checks if the item will have a link to Ticket or not. 

  
## Features

### Reverse the items
A state with an initial value of false is used and through a function that is executed with a click event, the state changes to true and the reverse () method is applied to the array of items. 

```javascript
const [reverse, setReverse] = useState(false);
const handleReverse = () => {
    setReverse(!reverse);
    ICON_CIRCLES.reverse();
  };
```
The handleReverse function performs a toggle of the state.

### Navigate to /boleto
The item with the "$" icon is a link to the route /boleto that renders a simple component that contains an h1 element and the title "Buy na Inventa".

I also thought it was a good idea to add a button that allows you to go back to home. 
## Demo

[Live version](https://inventa-react-exercise.vercel.app)
  

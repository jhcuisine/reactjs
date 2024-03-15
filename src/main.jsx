import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';

// import ReactDOM from 'react-dom';

// const myContainer = document.querySelector('#root');

// const myElement = React.createElement(
//   'h1',
//   {
//     style: {
//       color: 'white',
//       backgroundColor: '#000015',
//       padding: '10px 20px',
//       textAlign: 'center',
//       borderRadius: '5px',
//       fontFamily: 'cursive',
//     },
//   },
//   'Hello World'
// );

// ReactDOM.render(myElement, myContainer);

// console.log(myElement);

// const products = [
//   { id: 1, name: 'Product 1' },
//   { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' },
// ];

// const ProductList = () => {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// };

// console.log(ProductList());

// import React from 'react';

// const element = (
//   <h1 className="heading" tabIndex={0}>
//     Hello World
//   </h1>
// );

// console.log(element);

// const element = {
//   type: 'h1',
//   props: {
//     className: 'heading',
//     tabindex: 0,
//     children: 'Hello World',
//     style: {
//       color: 'red',
//     },
//   },
// };

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('🔵 main.jsx is loading...');
console.log('React:', React);
console.log('ReactDOM:', ReactDOM);

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  console.log('✅ React app rendered!');
} else {
  console.error('❌ ROOT ELEMENT NOT FOUND!');
}

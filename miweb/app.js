const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return React.createElement(
    'main',
    { className: 'container' },
    React.createElement(
      'section',
      { className: 'hero' },
      React.createElement('h1', null, 'Bienvenido a tu página de inicio React'),
      React.createElement(
        'p',
        null,
        'Esta página usa React con JavaScript sin configuración adicional. Agrega tus componentes y sigue creando.'
      )
    ),
    React.createElement(
      'section',
      { className: 'card' },
      React.createElement('h2', null, 'Inicio rápido'),
      React.createElement(
        'p',
        null,
        'Puedes usar este proyecto como base para una landing page, un dashboard o cualquier página interactiva.'
      ),
      React.createElement(
        'button',
        {
          onClick: () => {
            alert('¡Empezamos con React!');
          },
        },
        'Explorar'
      )
    ),
    React.createElement(
      'section',
      { className: 'feature-list' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('h3', null, 'Componentes'),
        React.createElement('p', null, 'Estructura tu interfaz con componentes reutilizables y fáciles de mantener.')
      ),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('h3', null, 'React 18'),
        React.createElement('p', null, 'Usa la versión moderna de React con raíces y renderizado declarativo.')
      ),
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement('h3', null, 'Sin build'),
        React.createElement('p', null, 'Puedes ejecutar esta página directamente en el navegador usando CDN para React.')
      )
    )
  );
}

root.render(React.createElement(App));

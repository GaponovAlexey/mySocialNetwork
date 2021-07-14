import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
    render(
        <React.Fragment>
          <BrowserRouter>
            <Provider>
              <App />
            </Provider>
          </BrowserRouter>
        </React.Fragment>,
    );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

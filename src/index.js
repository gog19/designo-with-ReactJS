import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from './Components/Theme/ThemeContext';
import { Language } from './Components/Language/Language';

ReactDOM.render(
            <ThemeProvider>
                <Language>
                    <App />
                </Language>
            </ThemeProvider>,
            document.getElementById('root')
        );
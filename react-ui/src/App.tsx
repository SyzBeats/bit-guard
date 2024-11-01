import { ApolloProvider, ApolloClient, from } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import config from '~/config';
import { theme } from '~/style/themes/theme-brand';
import Dashboard from '~/components/pages/dashboard/Dashboard';
import { HomePage } from '~/components/pages/home/HomePage';
import { RevealPage } from '~/components/pages/reveal/RevealPage';
import { Dataprotection } from '~/components/pages/dataprotection/Dataprotection';
import { Imprint } from '~/components/pages/imprint/Imprint';
import ProtectedRoute from '~/routes/Protected';
import PublicOnlyRoute from '~/routes/PublicOnly';
import Login from '~/components/authentication/Login';
import SignUp from '~/components/authentication/Signup';

import './style/App.css';

const client = new ApolloClient({
  link: from([config.apollo.errorLink, config.apollo.authLink.concat(config.apollo.httpLink)]),
  cache: config.apollo.cache,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            {/** Basic application routes */}
            <Route path='/' element={<HomePage />} />
            <Route path='dataprotection' element={<Dataprotection />} />
            <Route path='imprint' element={<Imprint />} />

            {/** routes for public reveals */}
            <Route path='reveal' element={<RevealPage isPublic={false} />} />
            <Route path='reveal/:secret/:key' element={<RevealPage isPublic={false} />} />
            <Route path='reveal/public/' element={<RevealPage isPublic={true} />} />
            <Route path='reveal/public/:secret/:key' element={<RevealPage isPublic={true} />} />

            {/* These features are under development */}
            {config.environment.MODE === 'development' && (
              <>
                <Route
                  path='/login'
                  element={
                    <PublicOnlyRoute>
                      <Login />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path='/signup'
                  element={
                    <PublicOnlyRoute>
                      <SignUp />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path='/dashboard'
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </>
            )}

            {/* Fallback route to homepage */}
            <Route path='*' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;

import { PropsWithChildren } from 'react';
import { Layout } from './components/Layout';
import { Store } from './pages/Store';

function App() {
  return (
    <Layout>
      <Store />
    </Layout>
  );
}

export default App;

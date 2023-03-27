import { PropsWithChildren } from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { IProduct } from './models/application.model';

const products: IProduct[] = [
  { id: 1, name: 'Sushi sapi', price: 10000 },
  { id: 2, name: 'Sushi ayam', price: 10000 },
  { id: 3, name: 'Sushi bebek', price: 90000 },
  { id: 4, name: 'Sushi Kambing', price: 15000 },
  { id: 5, name: 'Sushi susanti', price: 365000 },
  { id: 6, name: 'Sushi domba', price: 80000 },
  { id: 7, name: 'Sushi kerbau', price: 80000 },
  { id: 8, name: 'Sushi buaya', price: 80000 },
  { id: 9, name: 'Sushi cacing', price: 80000 },
  { id: 10, name: 'Sushi cicak', price: 80000 },
  { id: 11, name: 'Sushi ular', price: 80000 },
  { id: 12, name: 'Sushi tikus', price: 80000 },
];

const Layout = ({ children }: PropsWithChildren) => (
  <div className="relative flex flex-row min-h-screen">{children}</div>
);

function App() {
  return (
    <Layout>
      <ProductList products={products} />
      <Cart />
    </Layout>
  );
}

export default App;

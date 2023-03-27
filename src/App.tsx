import { ReactElement } from 'react';
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';
import { IProduct } from './models/application.model';
import { Navigation } from './components/Navigation';

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

interface LayoutProp {
  top?: ReactElement;
  right: ReactElement;
  left: ReactElement;
}

const Layout = ({ top, left, right }: LayoutProp) => (
  <div className="relative flex flex-row min-h-screen">
    <nav className="w-full fixed top-0 left-0 h-8 bg-orange-500 drop-shadow-lg z-10 py-2 px-5">
      {top}
    </nav>
    <main
      role="main"
      className="mt-8 md:w-[calc(100vw-300px)] w-full p-4 bg-yellow-50"
    >
      {left}
    </main>
    <aside className="fixed top-8 right-0 w-[300px] bg-orange-100 hidden md:block min-h-full overflow-auto">
      {right}
    </aside>
  </div>
);

function App() {
  return (
    <Layout
      top={<Navigation />}
      left={<ProductList products={products} />}
      right={<Cart />}
    />
  );
}

export default App;

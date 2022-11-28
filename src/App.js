import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div >
        <Navbar/>
        {/* <Product/> */}
        <Products/>
      </div>
    </QueryClientProvider>
  
  );
}

export default App;

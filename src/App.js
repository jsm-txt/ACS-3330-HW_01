import logo from './logo.svg';
import './App.css';
import data, {categoriesUnique, categoriesWithCounts, allCategories} from './data'
import { useState } from 'react'


function App() {
  const [category, setCategory] = useState('All')
  data.filter((item) => {
    return item.category === category || category === 'All'
  })
  
  
  return (
    <div className="App">
      {categoriesUnique.map( category => <button> {category} {categoriesWithCounts[category]} </button>)}
      <div className="product">
        {data.map( product =>(
          <div> <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <h4>{product.category}</h4>
          <p>{product.description}</p>
          <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

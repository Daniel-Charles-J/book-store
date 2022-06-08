import Book from "./components/Book";
import './App.css';
import { data } from "./components/data";

const App = function(){
  return(
<section className="book-store">
  <div className="main-title">
   <h1>My Book Store</h1>
  </div>
  <div className="books">
  {data.map((book)=>{
    return <Book key ={book.id} book={book}/>
  })}
  </div>
</section>
  ) 
}

export default App;
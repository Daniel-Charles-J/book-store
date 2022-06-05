import Book from "./components/Book";
import './App.css';
const App = function(){
  const book = {
    image : 'https://m.media-amazon.com/images/I/61MLInWDeJL._AC_UL480_FMwebp_QL65_.jpg',
    title : 'How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships',
    author : 'Lilly',
    prize : '₹200'
  }
  const secondBook = {
    image : 'https://images-eu.ssl-images-amazon.com/images/I/41F8ATXoMOL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title : 'Attitude Is Everything: Change Your Attitude ... Change Your Life!',
    author : 'Christain',
    prize : '₹300'
  }
  return(
<section className="book-store">
  <div className="main-title">
   <h1>My Book Store</h1>
  </div>
  <div className="books">
  <Book image={book.image} title = {book.title} author = {book.title} prize = {book.prize}/>
  <Book image={secondBook.image} title = {secondBook.title} author = {secondBook.title} prize = {secondBook.prize}/>
  </div>
</section>
  ) 
}

export default App;
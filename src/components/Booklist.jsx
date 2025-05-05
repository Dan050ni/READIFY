const BookList = () => {
    const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
  
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BookList;
  
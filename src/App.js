import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/NavBar";
import Booklist from "./components/BookList";
import NewBookForm from "./components/NewBookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

import cats from "./data/catsArr";
import Header from "./components/Header";
import CatCard from "./components/CatCard";

import "./App.css";

function App() {
  console.log(cats);
  return (
    <div className="main">
      <Header />
      <div className="container">
        {cats.map((cat) => {
          const { id } = cat;
          return <CatCard key={id} catObj={cat} />;
        })}
      </div>
    </div>
  );
}

export default App;

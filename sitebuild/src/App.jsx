import cats from "./data/catsArr";
import Header from "./components/Header";
import CatCard from "./components/CatCard";

function App() {
  console.log(cats);
  return (
    <div>
      <Header />
      {cats.map((cat) => {
        const { id } = cat;
        return <CatCard key={id} catObj={cat} />;
      })}
    </div>
  );
}

export default App;

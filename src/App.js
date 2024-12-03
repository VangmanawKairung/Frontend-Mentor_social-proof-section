import "./App.scss";
import Header from "./components/Header";
import ReviewAspectCard from "./components/ReviewAspectCard";
import ReviewCard from "./components/ReviewCard";

function App() {
  return (
    <main className="container">
      <Header />
      <ReviewAspectCard />
      <ReviewCard />
    </main>
  );
}

export default App;

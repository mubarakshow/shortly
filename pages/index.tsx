import NextHeader from "../components/NextHeader";
import HomePage from './home/index'

function Home() {
  return (
    <div>
      <NextHeader />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default Home;

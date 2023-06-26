import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import { resList } from "./utils/mockData";

function App() {
  return (
    <>
      <Navbar />
      <RestaurantList data={resList} />
    </>
  );
}

export default App;

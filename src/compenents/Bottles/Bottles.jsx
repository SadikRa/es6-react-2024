import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottle, setBottle] = useState([]); // Initialize as an empty array

  console.log(bottle);

  useEffect(() => {
    fetch('bottles.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setBottle(data))
      .catch((error) => console.error('Error fetching bottle data:', error)); // Add error handling
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {/* You can add code here to display the bottle data */}
      {bottle.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)}
    </div>
  );
};

export default Bottles;

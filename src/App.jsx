
import Watch from "./compenents/Watch"


function App() {


  const watch = [
    {
      "id": 1,
      "brand": "Rolex",
      "model": "Submariner",
      "price": 10500,
      "features": {
        "movement": "Automatic",
        "water_resistance": "300m",
        "material": "Stainless Steel",
        "dial_color": "Black"
      }
    },
    {
      "id": 2,
      "brand": "Omega",
      "model": "Seamaster",
      "price": 7500,
      "features": {
        "movement": "Automatic",
        "water_resistance": "300m",
        "material": "Titanium",
        "dial_color": "Blue"
      }
    },
    {
      "id": 3,
      "brand": "Tag Heuer",
      "model": "Carrera",
      "price": 4500,
      "features": {
        "movement": "Automatic",
        "water_resistance": "100m",
        "material": "Stainless Steel",
        "dial_color": "Silver"
      }
    },
    {
      "id": 4,
      "brand": "Seiko",
      "model": "Prospex",
      "price": 1200,
      "features": {
        "movement": "Quartz",
        "water_resistance": "200m",
        "material": "Stainless Steel",
        "dial_color": "Green"
      }
    },
    {
      "id": 5,
      "brand": "Casio",
      "model": "G-Shock",
      "price": 150,
      "features": {
        "movement": "Digital",
        "water_resistance": "200m",
        "material": "Resin",
        "dial_color": "Black"
      }
    }
  ]
  

  return (
    <>
      <div className="container mx-auto">
      <h1>my name is sadik</h1>

      {
        watch.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      </div>
    </>
  )
}

export default App

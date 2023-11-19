import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
function App() {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex justify-between">
            <div className="">
              <img src={logo} />
            </div>
            <div className="">
              <ul className="sm:flex hidden gap-5">
                <li>Home</li>
                <li>Discover</li>
                <li>Activities</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="">
              <button className="mr-5">Register</button>
              <button className="bg-primary">Sign In</button>
            </div>
          </div>
        </div>

        <div className="container py-10">
          <div className="bg-hero flex flex-col justify-center items-center p-20 ">
            <p>Enjoy Your Dream Vacation</p>
            <p>
              Plan and book our perfect trip with expert advice, travel tips,
              destination <br /> information and inspiration from us
            </p>
          </div>
        </div>

        <div className="container">
          <div className="flex justify-center ">
            <button className="bg-white border rounded p-3 mb--20">
              <label className="bg-white border rounded mr-3">
                <input type="text" placeholder="Where are you going"></input>
              </label>
              <label>
                <input type="text" placeholder="Check in date"></input>
              </label>
              <label>
                <input type="text" placeholder="Check out date"></input>
              </label>
              <label>
                <input type="text" placeholder="Guest"></input>
              </label>
              <button>Search</button>
            </button>
          </div>
        </div>

        <div className="">
          <p>Enjoy your vacation</p>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>

        <div className="">
          <p>Enjoy your vacation</p>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>

        <div className="">
          <p>Enjoy your vacation</p>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>

        <div className="">
          <p>Get inspiration for your next trip</p>
        </div>

        <div className="">
          <p>Popular hostels</p>
        </div>

        {/* footer */}
        <div className="py-20">
          <div className="container">
            <div className="">
              <p>Explore the world with my Dream place</p>
              <div className="">
                <h1>my Dream Place</h1>
                <p>Your next go to companion for travel </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

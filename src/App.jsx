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
              <ul className="flex gap-5">
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

        <div className="bg-hero flex flex-col justify-center items-center p-20 ">
          <p>Enjoy Your Dream Vacation</p>
          <p>
            Plan and book our perfect trip with expert advice, travel tips,
            destination <br /> information and inspiration from us
          </p>
        </div>

        <button className="bg-white">
          <label>
            <input type="text" placeholder="Where are you going"></input>
          </label>

          <button>Search</button>
        </button>
      </div>
    </>
  );
}

export default App;

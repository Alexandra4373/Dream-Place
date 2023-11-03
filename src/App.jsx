import logo from "./assets/logo.png";
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
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

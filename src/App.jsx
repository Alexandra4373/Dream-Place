import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="">
            <img src={logo} />
          </div>

          <div className="">
            <ul className="flex">
              <li>Home</li>
              <li>Discover</li>
              <li>Activities</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="">
            <button>Register</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import "./Navbar.css"

let flexBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

function Navbar({ user }) {
  return (
    // di dlm return ada JSX
    <header className="border-black">
      <div>
        <h1>Zan</h1>
      </div>

      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        <li className="border-black">Home</li>
        <li className="border-black">About</li>
        <li className="border-black">Contact</li>
      </ul>

      <div>
        {user.name ? <button>{user.name}</button> : <button>Login</button>}
      </div>
    </header>
  );
}

export default Navbar;

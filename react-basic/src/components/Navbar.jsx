function Navbar({ user }) {
  return (
    <header>
      <div>
        <h1>Zan</h1>
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div>
        {user.name ? 
          <button>{user.name}</button> : 
          <button>Login</button>
        }
      </div>
    </header>
  );
}

export default Navbar;

import { Link, Outlet } from "react-router-dom";

function PageTemplate () {
  return (
    <>
      {/* Navigasi */}
      <header className="flex justify-between p-4 bg-gray-400">
        <div>
          <h1>Zan</h1>
        </div>

        <nav className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/pokemon">Pokemon</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>


      {/* Konten sesuai dgn alamat */}
      <div className="m-20">
        <Outlet />

      </div>

      {/* Footer */}
      <footer>
        <span>By me</span>
      </footer>
    </>
  )
}

export default PageTemplate
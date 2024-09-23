function App() {
  return (
    <div className="">
      <header className="flex justify-between items-center container mx-auto p-10 md:bg-slate-400">
        <div>
          <h1>Logo</h1>
        </div>

        <nav>
          <ul className="hidden md:flex justify-between items-start gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <p className="inline md:hidden">|||</p>
        </nav>
      </header>

      <h1 className="text-3xl font-bold underline">Hallo</h1>
    </div>
  );
}

export default App;

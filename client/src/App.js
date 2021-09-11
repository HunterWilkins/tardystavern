import './App.css';

function App() {
  return (
    <div id = "content">
      <h1>Welcome to Tardy's Tavern</h1>
      <header>
        <h2>Articles</h2>
        <nav>
          <a href = '/'>Articles</a>
          <a href = '/'>Videos</a>
          <a href = '/'>Gallery</a>
        </nav>
      </header>

      <main>
        <section id = "articles">
          <p>loremipsum</p>
          <p>lorempigsum</p>
        </section>
        <aside>
          <p>Lorem (aside) ipsum</p>
        </aside>
      </main>
    </div>
  );
}

export default App;

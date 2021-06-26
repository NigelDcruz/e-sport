import './App.scss';
import SectionHeader from './Components/SectionHeader/SectionHeader';
import Card from './Components/Card/Card';
import TournamentTable from './Components/TournamentTable/TournamentTable';

function App() {
  return (
    <>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
              <img src="https://www.globalesports.com/assets/img/geprofile.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
              E-sport
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#featured-games">Featured Games</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tournament">Tournament</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#teams">Teams</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="banner">
          <img src="https://www.mobigaming.com/wp-content/uploads/2020/11/pubg-helmet-girl-4k-wallpaper-8434701579105416-1200x675-1.jpg" alt="Main Banner" className="banner__image" />
        </section>
        <section id="featured-games" className="section my-5">
          <SectionHeader
            title="Featured Games"
            description="this is some random description for the title that needs to be long or skipped all together"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Card
                  imageUrl="https://cdn.mos.cms.futurecdn.net/MMwRCjVEaoJPP4dBBugWFY.jpg"
                  title="Card Title"
                  description="This is the card description"
                />
              </div>
              <div className="col-md-3">
                <Card
                  imageUrl="https://cdn.mos.cms.futurecdn.net/XNkFV6uyYBeX5NLwjnomig.jpg"
                  title="Card Title"
                  description="This is the card description"
                />
              </div>
              <div className="col-md-3">
                <Card
                  imageUrl="https://pbs.twimg.com/media/EEqAd6RW4AAINRw.jpg"
                  title="Card Title"
                  description="This is the card description"
                />
              </div>
              <div className="col-md-3">
                <Card
                  imageUrl="https://cdn.mos.cms.futurecdn.net/MMwRCjVEaoJPP4dBBugWFY.jpg"
                  title="Card Title"
                  description="This is the card description"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tournament" className="section my-5">
          <SectionHeader
            title="Upcoming Tournaments"
            description="this is some random description for the title that needs to be long or skipped all together"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <TournamentTable />
              </div>
            </div>
          </div>
        </section>
        <section id="teams" className="section my-5">
          <SectionHeader
            title="Featured Teams"
            description="this is some random description for the title that needs to be long or skipped all together"
          />

          <div className="container">
            <div className="row">
              <div className="col-12 text-center">

                <input id="original" type="radio" name="team" checked />
                <label for="original">Pub G</label>

                <input id="force" type="radio" name="team" />
                <label for="force">Fortnite</label>

                <input id="factor" type="radio" name="team" />
                <label for="factor">Mortalkombat-X</label>

                <input id="hellfire" type="radio" name="team" />
                <label for="hellfire">FAU-G</label>
                <ul className="characters">
                  <li id="angel" data-teams="original force factor hellfire">
                    <h2>Angel</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-angel.png" alt="" />
                  </li>
                  <li id="beast" data-teams="original factor">
                    <h2>Beast</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-beast.png" alt="" />
                  </li>
                  <li id="cyclops" data-teams="original force factor">
                    <h2>Cyclops</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-cyclops.png" alt="" />
                  </li>
                  <li id="emma-frost" data-teams="hellfire">
                    <h2>Emma Frost</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-emma-frost.png" alt="" />
                  </li>
                  <li id="iceman" data-teams="original factor">
                    <h2>Iceman</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-iceman.png" alt="" />
                  </li>
                  <li id="jean-grey" data-teams="original factor">
                    <h2>Jean Grey</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-jean-grey.png" alt="" />
                  </li>
                  <li id="magneto" data-teams="hellfire">
                    <h2>Magneto</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-magneto.png" alt="" />
                  </li>
                  <li id="nightcrawler" data-teams="force">
                    <h2>Nightcrawler</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-nightcrawler.png" alt="" />
                  </li>
                  <li id="professor-x" data-teams="original">
                    <h2>Professor X</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-professor-x.png" alt="" />
                  </li>
                  <li id="psylocke" data-teams="force hellfire">
                    <h2>Psylocke</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-psylocke.png" alt="" />
                  </li>
                  <li id="quicksilver" data-teams="factor">
                    <h2>Quicksilver</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-quicksilver.png" alt="" />
                  </li>
                  <li id="rictor" data-teams="force factor">
                    <h2>Rictor</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-rictor.png" alt="" />
                  </li>
                  <li id="storm" data-teams="force hellfire">
                    <h2>Storm</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-storm.png" alt="" />
                  </li>
                  <li id="sunspot" data-teams="force hellfire">
                    <h2>Sunspot</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-sunspot.png" alt="" />
                  </li>
                  <li id="tithe" data-teams="hellfire">
                    <h2>Tithe</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-tithe.png" alt="" />
                  </li>
                  <li id="wolverine" data-teams="force">
                    <h2>Wolverine</h2>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77020/ct-wolverine.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="bg-dark">
        <p className="text-center text-white mb-0 py-2 mt-5">
          &copy; 2021
        </p>
      </footer>
    </>
  );
}

export default App;

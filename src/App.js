import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1>Milan Chauhan</h1>
        <ul className="nav">
          <li><a href="https://github.com/milanxchauhan" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/milanxchauhan" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/MilanxChauhan" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://milanxchauhan.substack.com/" target="_blank" rel="noreferrer">Substack</a></li>
        </ul>
        <p>Yo! I'm Milan - cs undergrad currently learning web dev, product design and core cs fundamentals.</p>
        <p>If you're upto something cool, I'd love to hear about it. Even if you're not and just want to hang out and chill, i'm pretty much active on <a href="https://twitter.com/MilanxChauhan">twitter</a>.</p>
        <div class="goku">
          <img className='goku-img' src="images/goku-img.jpeg" alt="" />
          <p>Dare to dream. Dare to build.</p>
          <hr />
        </div>
        <h1>Projects</h1>
        <ul className="projects">
          <li><p><a className="project-title" href="https://movieland-reactapp.vercel.app/" target="_blank" rel="noreferrer">Movieland</a> - first Reactjs project, used the omdb api to fetch movie list, images and details of each movie </p><a href="https://github.com/milanxchauhan/movieland" target="_blank" rel="noreferrer">[GitHub]</a></li>
          <li><p><a className="project-title" href="https://milanxchauhan.github.io/nft-marketplace-landing-page/" target="_blank" rel="noreferrer">Landing Page - NFT Marketplace</a> - website created as part of gdsc club selections (task round) </p><a href="https://github.com/milanxchauhan/nft-marketplace-landing-page" target="_blank" rel="noreferrer">[GitHub]</a></li>
          <li><p><a className="project-title" href="https://milanxchauhan.github.io/snazzy/" target="_blank" rel="noreferrer">Snazzy</a> - website created as part of a university project </p><a href="https://github.com/milanxchauhan/snazzy" target="_blank" rel="noreferrer">[GitHub]</a></li>
        </ul>
        <hr />
        <h1>Blogs</h1>
        <ul>
          <li><a href="https://open.substack.com/pub/milanxchauhan/p/duolingos-product-and-community-led?utm_campaign=post&utm_medium=web" target="_blank" rel="noreferrer">Duolingo's product and community led growth</a></li>
          <li><a href="https://open.substack.com/pub/milanxchauhan/p/the-fence-paradox?utm_campaign=post&utm_medium=web" target="_blank" rel="noreferrer">The Fence Paradox</a></li>
          <li><a href="https://open.substack.com/pub/milanxchauhan/p/nash-equilibrium-game-theory?utm_campaign=post&utm_medium=web" target="_blank" rel="noreferrer">Nash Equilibrium - Game Theory</a></li>
          <li><a href="https://open.substack.com/pub/milanxchauhan/p/how-communities-can-build-you-an?utm_campaign=post&utm_medium=web" target="_blank" rel="noreferrer">How communities can build you an unfair advantage!</a></li>
          <li><a href="https://open.substack.com/pub/milanxchauhan/p/what-is-social-commerce-the-604-billion?utm_campaign=post&utm_medium=web" target="_blank" rel="noreferrer">What is Social Commerce - The $604 billion projected market.</a></li>
        </ul>
        <hr />
        <p>Avatars of me made by training a custom stable diffusion model - fun little afternoon project</p>
        <img className="avatar-img" src="images/avatar-01.png" alt="" />
        <img className="avatar-img" src="images/avatar-02.png" alt="" />
      </div>
    </div>
  );
}

export default App;

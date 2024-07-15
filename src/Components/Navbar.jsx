import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MKVCinemas</div>
      <div className="separator"></div>
      <ul className="nav-links">
        <li><a href="#">FORUM</a></li>
        <li><a href="#">ANIME MOVIE</a></li>
        <li><a href="#">BOLLYWOOD</a></li>
        <li><a href="#">HOLLYWOOD</a></li>
        <li><a href="#">CATEGORY</a></li>
        <li><a href="#">GENER</a></li>
        <li><a href="#">TOP IMDB</a></li>
        <li><a href="#">HOW TO DOWNLOAD</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
      </div>
    </nav>
  );
};

export default Navbar;

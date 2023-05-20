import { NavLink } from "react-router-dom";
import "./style.css";

let ArtistItem = (props) => {
  let { oneArtist } = props;
  return (
    <div className="artist-item">
      <div className="card" key={oneArtist.id} id="artistCard">
    
        <NavLink
              style={{textDecoration:"none",zIndex:"1"}}
              to={`/artists/${oneArtist.id}`}
              exact
            >
              <img
          src={process.env.PUBLIC_URL + `/assets/covers/${oneArtist.cover}.jpg`}
          alt="thumbnail"
        />
        </NavLink>
        <div className="info">
          <h5>{oneArtist.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;

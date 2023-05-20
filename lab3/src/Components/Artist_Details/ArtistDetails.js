import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

let ArtistDetails = () => {
  let { id } = useParams(); //{}
  let [artist, setArtist] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3500/artists/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="artist-card">
        <div className="container">
          <img
            src={process.env.PUBLIC_URL + `/assets/covers/${artist.cover}.jpg`}
            alt="thumbnail"
            className="cover"
            width="200px"
            height="250px"
          />

          <div className="hero">
            <div className="details">
              <div className="title1">{artist.name}</div>

              <div className="title2">American Singer-Songwriter</div>
            </div>
          </div>

          <div className="description">
            <div className="column1"></div>

            <div className="column2">
              <p>{artist.bio}</p>
            </div>
            <div className="albums">
              {artist.albums &&
                artist.albums.map((album, index) => (
                  <div key={index} className="card-wrapper">
                    <div class="card">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/albums/${album.cover}.jpg`
                        }
                        alt="thumbnail"
                      />
                      <div class="card-body">
                        <h5>{album.title}</h5>
                        <p>{album.year}</p>
                        <p>{album.price}$</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;

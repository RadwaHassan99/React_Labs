import { Component } from "react";
import ArtistItem from "../ArtistCard/ArtistItem";
import "./style.css";

class Artists extends Component{
    constructor(){
        super();
        this.state = {
            AllArtists:[]
        }
    }
    RenderArtists = ()=>{
        return this.state.AllArtists.map((artist)=>{
            return (
                
                    <ArtistItem oneArtist={artist} key={artist.id}/>
                
                
            )
        })
    }
    render(){
        return(
            <div id="allArtists">
                {this.RenderArtists()}
            </div>
        )
    }
    componentDidMount(){
        fetch("http://localhost:3500/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            console.log(data);
            this.setState({AllArtists:data});
        })
        .catch((err)=>{console.log(err)});
    }
}

export default Artists;
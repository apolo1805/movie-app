import React from 'react';
import './ActorsPage.css';
import ActorModel from '../../Models/Actor/ActorModel';
import ActorGallery from '../../Components/ActorGallery/ActorGallery';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function ActorsPage() {

    const [filterInput, changeFilter] = React.useState("");
    const [sortBy, changeSort] = React.useState("fname");
    const [actors, setActors] = React.useState([]);
    const [filteredActors, setFilteredActors] = React.useState([]);
    const history = useHistory();
    

    React.useState(() => {
      axios.get("actors.json").then(response => {
        setActors(response.data.map(plainActor => new ActorModel(plainActor.fname, plainActor.lname, plainActor.birthday, plainActor.actorImage, plainActor.imdbLink)));
      });
    }, []);
    
    React.useEffect(() => {
      setFilteredActors(actors.filter(actor => (actor.getFullName().toLowerCase().includes(filterInput.toLowerCase()))));
      console.log(actors)
    }, [filterInput]);
    
    actors.sort((actor1, actor2) => {
        if (actor1[sortBy] > actor2[sortBy]) {
          return 1;
        } else if (actor1[sortBy] < actor2[sortBy]) {
          return -1;
        } else {
          return 0;
        }
      });

    function filterActors(e) {
        changeFilter(e.target.value);
      }

    return (
        <div className="p-actors">
            <Button onClick={() => history.goBack()}>Back</Button>
            <h1>Actor Gallery</h1>
            <div className="search-filter">
              <input type="text" value={filterInput} placeholder="Filter by first name or last name" onChange={(e) => filterActors(e)}/>
              Sort By:
              <select id="sortBy" value={sortBy} onChange={(e) => changeSort(e.target.value)}>
                <option value="fname">First Name</option>
                <option value="lname">Last Name</option>
              </select>
            </div>
            <ActorGallery actorsArray={filterInput !== "" ? filteredActors : actors}/>
        </div>
    );
}

export default ActorsPage;
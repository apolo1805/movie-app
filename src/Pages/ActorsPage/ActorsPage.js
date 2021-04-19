import React from 'react';
import './ActorsPage.css';
import ActorModel from '../../Models/Actor/ActorModel';
import ActorGallery from '../../Components/ActorGallery/ActorGallery';

function ActorsPage(props) {

    const [filterInput, changeFilter] = React.useState("");
    const [sortBy, changeSort] = React.useState("fname");

    const actorArray = [
        new ActorModel("Brad", "Pitt", "1963-12-18", "M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "nm0000093/?ref_=fn_al_nm_1"),
        new ActorModel("Gal", "Gadot", "1985-04-30", "M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg", "nm2933757/?ref_=fn_al_nm_1"),
        new ActorModel("Angelina", "Jolie", "1975-06-04", "M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "nm0001401/?ref_=fn_al_nm_1"),
        new ActorModel("David", "Schwimmer", "1966-11-02", "M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_UX214_CR0,0,214,317_AL_.jpg", "nm0001710/?ref_=nv_sr_srsg_0"),
        new ActorModel("Danny", "DeVito", "1944-11-17", "M/MV5BMTE5MjM5MzM3M15BMl5BanBnXkFtZTYwOTEzOTY0._V1_UY317_CR6,0,214,317_AL_.jpg", "nm0000362/?ref_=fn_al_nm_1"),
        new ActorModel("Bruce", "Willis", "1955-03-19", "M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg", "nm0000246/?ref_=fn_al_nm_1"),
        new ActorModel("Jennifer", "Aniston", "1969-02-11", "M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg", "nm0000098/?ref_=nv_sr_srsg_0"),
        new ActorModel("Harrison", "Ford", "1942-07-13", "M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", "nm0000148/?ref_=fn_al_nm_1"),
        new ActorModel("Daniel", "Craig", "1968-03-02", "M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UX214_CR0,0,214,317_AL_.jpg", "nm0185819/?ref_=fn_al_nm_1"),
        new ActorModel("Matthew", "Perry", "1969-08-19", "M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY317_CR17,0,214,317_AL_.jpg", "nm0001612/?ref_=nv_sr_srsg_1"),
        new ActorModel("Courteney", "Cox", "1964-06-15", "M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg", "nm0001073/?ref_=nv_sr_srsg_0"),
        new ActorModel("Matt", "LeBlanc", "1967-07-25", "M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "nm0001455/?ref_=fn_al_nm_1")
    ];

    actorArray.sort((actor1, actor2) => {
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
            <h1>Actor Gallery</h1>
            <input type="text" value={filterInput} placeholder="Filter by first name or last name" onChange={(e) => filterActors(e)}/>
            Sort By:
            <select id="sortBy" value={sortBy} onChange={(e) => changeSort(e.target.value)}>
                <option value="fname">First Name</option>
                <option value="lname">Last Name</option>
            </select>
            <ActorGallery actors={filterInput !== "" ? actorArray.filter(actor => (actor.getFullName().toLowerCase().includes(filterInput.toLowerCase()))) : actorArray}/>
        </div>
    );
}

export default ActorsPage;
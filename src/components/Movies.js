import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';


class Movies extends React.Component {


    render() {
        return (
            <>
{
                   this.props.showCard && 
                    this.props.movies.map(element => {
                        return (
                             < Movie movieDetails= {element}></Movie>
                        )
                    })
                }
            </>

        )

    }

}






export default Movies;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'


class Movie extends React.Component {


    render() {
        return (
            <>
              <Card style={{ border: 'groove', width: '500px' }} >
                            <Card.Header  as="h5">
                                {this.props.movieDetails.title}
                            </Card.Header>
                            <Card.Header  as="h5">
                                <img src = {this.props.movieDetails.image_url}></img>
                            </Card.Header>
                            <Card.Header  as="h5">
                               Overview : {this.props.movieDetails.overview}
                            </Card.Header>
                           
                            <Card.Header  as="h5">
                               Average votes : {this.props.movieDetails.average_votes}
                            </Card.Header>
                            <Card.Header  as="h5">
                              Total votes :  {this.props.movieDetails.total_votes}
                            </Card.Header>
                          
                            <Card.Header  as="h5">
                              Popularity :  {this.props.movieDetails.popularity}
                            </Card.Header>

                            <Card.Header  as="h5">
                              Released on :  {this.props.movieDetails.released_on}
                            </Card.Header>
                        </Card>

            </>

        )

    }

}






export default Movie;
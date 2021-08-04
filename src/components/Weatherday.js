import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'


class Weatherday extends React.Component {


    render() {
        return (
            <>
                <Card style={{ border: 'groove', width: '500px' }} >
                    <Card.Header as="h5">
                        {this.props.weatherDetails.date}
                    </Card.Header>
                    <Card.Header as="h5">
                        {this.props.weatherDetails.description}
                    </Card.Header>
                </Card>

            </>

        )

    }

}






export default Weatherday;
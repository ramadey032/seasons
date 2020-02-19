import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';


class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> error: {this.state.errorMessage} </div>;
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div> <Loader message="Please Allow to read the location..."/> </div>;
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}




ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
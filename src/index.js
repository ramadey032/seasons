import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';


const App = () => {

    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <div> <Loader message="Please Allow to read the location..." /> </div>;
    }

    return <div className="border red">{content}</div>
};


// class based component approach
/*
class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> error: {this.state.errorMessage} </div>;
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div> <Loader message="Please Allow to read the location..." /> </div>;
    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
*/

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
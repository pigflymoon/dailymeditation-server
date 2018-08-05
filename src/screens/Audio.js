import React from 'react';
import PropTypes from 'prop-types';


import withAuthorization from '../components/withAuthorization';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'slide',
            side: 'left'
        };
    }


    render() {
        return (
            <div>
                <Title>Audio</Title>
            </div>
        );


    }
}
Audio.contextTypes = {
    authUser: PropTypes.object,
};
const authConditon = (authUser) => !!authUser;

export default withAuthorization(authConditon)(Audio);
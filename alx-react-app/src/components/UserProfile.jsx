import PropTypes from 'prop-types'
const UserProfile = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};
UserProfile.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    bio: PropTypes.string,
}

export default UserProfile;
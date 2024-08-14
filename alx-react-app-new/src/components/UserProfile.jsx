import PropTypes from 'prop-types'
const UserProfile = (props) => {
    return(
        <div style={{border:'1px solid gray', padding: '10px', margin: '10px'}}>
            <h2 style={{color: 'blue'}}>{props.name}</h2>
            <p>Age: <span style={{fontWeight: 'bold'}}>{props.age}</span></p>
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
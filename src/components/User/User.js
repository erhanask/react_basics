import PropTypes from "prop-types";

function User({name, surname, age, friends, salary}) {
    return (
        <>
            <h1>
                {name} {surname} - {age}
            </h1>
            <br/>
            <br/>
            {
                friends.map((friend, index) =>
                    <span key={index}>
                        - {index} - {friend}
                    </span>)
            }

            <br/>
            {salary}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
}

User.defaultProps= {
    salary: 10000
}

export default User;

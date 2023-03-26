import React from 'react';
import pt from 'prop-types';

class UserInfo extends React.Component {
    render() {
        const { avatar_url, name, location, bio } = this.props.data;
        const { repos } = this.props;

        if (repos === null) {
        return <p>Loading...</p>;
        }

        if (repos.message) {
        return (
            <div>
                <h3>User not found!</h3>
                <button className='search-another' onClick={this.props.resetData}>
                Search another user</button>
            </div>
        );
        }

        return (
        <div className='info'>
            <header>
                <img src={avatar_url} alt='name' />
                <h1>{name}</h1>
            </header>
            <div className='sub-header'>
                <p>
                    <strong>BIO: </strong>
                    {bio}
                </p>
                <p>
                    <strong>LOCATION: </strong>
                    {location}
                </p>
                <p>
                    <strong>REPOSITORIES:</strong>
                </p>
            </div>
            <div className='repos'>
                {repos.map((repo) => {
                    return <p key={repo.id}>{repo.name}</p>;
                })}
            </div>
            <button onClick={this.props.resetData}>Reset</button>
        </div>
        );
    }
}

UserInfo.propTypes = {
    repos: pt.array,
    data: pt.object,
    resetData: pt.func,
};

export default UserInfo;

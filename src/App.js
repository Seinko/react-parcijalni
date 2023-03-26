import { useState, useEffect } from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import { fetchData, fetchRepos } from './services/fetchData';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');

  const onInputChange = (e) => {
    setUser(e.target.value);
  };

  const fetchAllData = (event) => {
    event.preventDefault();
    if (user.trim() === '') {
      alert('Write something!');
    } else if (data === null && repos === null) {
      fetchData(user, setData, setError);
      fetchRepos(user, setRepos, setError);
    }
  };

  const resetData = () => {
    setData(null);
    setRepos(null);
    setUser('');
  };

  useEffect(() => {
    console.log('data', data);
    console.log('repos', repos);
    console.log('error', error);
  }, [data, repos, error]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div id='container'>
      {data === null && error === null ? (
        <Form fetchData={fetchAllData} onInputChange={onInputChange} />
      ) : (
        <UserInfo repos={repos} data={data} resetData={resetData} />
      )}
    </div>
  );
}

export default App;

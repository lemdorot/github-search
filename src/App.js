import React, { useEffect, useState } from 'react';
import './styles/App.css';
import RepoService from './API/RepoService';
import { useFetching } from './hooks/useFetching';
import SearchInput from './components/SearchInput';

function App() {
  const [repos, setRepos] = useState([])
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

    const [fetchRepos, isReposLoading, RepoError] = useFetching(async (value, page) => {
      const response = await RepoService.getAll(value, page);
      setRepos(response.data)
      console.log(response.data)
    })

    useEffect(() => {
      fetchRepos(value, page)
    }, [page])

    const getSearchValue = value => {
      fetchRepos(value, page)
    }

  return (
    <div className="App">
      <SearchInput getValue={getSearchValue} />
    </div>
  );
}

export default App;

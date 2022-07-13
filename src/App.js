import React, { useEffect, useState } from 'react';
import './styles/App.css';
import RepoService from './API/RepoService';
import { useFetching } from './hooks/useFetching'
function App() {
  const [repos, setRepos] = useState([])
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

    const [fetchRepos, isReposLoading, RepoError] = useFetching(async (value, page) => {
      debugger;
      const response = await RepoService.getAll(value, page);
      setRepos(response.data)
      const totalCount = response.headers['x-total-count']
    })

    useEffect(() => {
      debugger;
      fetchRepos(value, page)
    }, [page])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

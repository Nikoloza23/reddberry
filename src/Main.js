import React, { useState, useEffect } from 'react';
import PostsList from './PostsList';
import { Content, Loading } from './App.styles';
import { getUsers } from './API';


//Infinite Scrolling
const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  //es nishnavs rom tu shesrulda funqica romelic getUsers akmayofileebs wamoigos axali monacemebi Apidan romelic me maq dafetchili
  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    }
    loadUsers();
  }, [page])

  
  return (
    <div>
      <Content onScroll={handleScroll}>
        {users && users.map(user => <PostsList key={user.id} user={user} />)}
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  )
}

export default Main;
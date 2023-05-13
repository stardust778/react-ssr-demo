import React, { FC, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import routes from '../router';
import { useAppSelector, useAppDisaptch } from '@/store';
import { addCount, getIndexList } from '@/store/indexSlice';


const App: FC = function() {
  const { count, title, list } = useAppSelector((state) => state.index);
  const dispatch = useAppDisaptch();

  useEffect(() => {
    dispatch(getIndexList());
  }, [dispatch]);

  return (
    <div>
      App { title }
      <p>count: { count }</p>
      <button onClick={() => dispatch(addCount({ count: 1 }))}>count + 1</button>
      <Link to={'/'}>Home组件</Link>
      <Link to={'/about'}>About组件</Link>
      <Routes>
        {routes?.map((item, index) => 
          <Route path={item.path} Component={item.element} key={index} />
        )}
      </Routes>

      <div>
        <ul>
          {list.map((item, index) => 
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App;
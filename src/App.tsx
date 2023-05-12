import React, { FC, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import routes from './router';
import { useAppSelector, useAppDisaptch } from '@/store';
import { addCount } from '@/store/indexSlice';


const App: FC = function() {
  // const [count, setCount] = useState<number>(0);
  const { count, title } = useAppSelector((state) => state.index);
  const dispatch = useAppDisaptch();
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
    </div>
  )
}

export default App;
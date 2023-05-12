import React, { FC, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import routes from './router';

type Props = {
  title: string
}

const App: FC<Props> = function(props) {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      App { props.title }
      <p>count: { count }</p>
      <Button count={count} setCount={setCount} />
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
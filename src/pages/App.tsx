import React, { FC, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAppSelector, useAppDisaptch, RootState, AppDispatch } from '@/store';
import { addCount, getIndexList } from '@/store/indexSlice';


const App: FC & ISSRFunction = function(props) {
  const { count, title, list } = useAppSelector((state) => state.index);
  const dispatch = useAppDisaptch();

  // 客户端异步请求
  useEffect(() => {
    if (list.length === 0) {
      dispatch(getIndexList());
    }
  }, [dispatch]);

  return (
    <div>
      App { title }
      <p>count: { count }</p>
      <button onClick={() => dispatch(addCount({ count: 1 }))}>count + 1</button>
      <Link to={'/'}>Home组件</Link>
      <Link to={'/about'}>About组件</Link>
      {/* 展示子路由 */}
      <Outlet />
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

App.getInitProps = (store: any) => store.dispatch(getIndexList());


export default App;
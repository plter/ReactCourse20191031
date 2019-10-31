import React from 'react';
import { Button,Pagination } from 'antd';
// import Button from 'antd/es/button'; 
// import 'antd/es/button/style/css';
// import Pagination from 'antd/es/pagination'; 
// import 'antd/es/pagination/style/css';

function App() {

    function pageChange(page, pageSize){
        console.log(page, pageSize);
        // 网络请求
    }

    return (
        <div className="App">
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>
            <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={ pageChange }/>
        </div>
    );
}

export default App;

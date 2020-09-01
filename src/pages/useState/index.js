import { useState } from 'react';
import { Link } from 'alita';
import { Button } from 'antd-mobile';

export default function List({ history }) {
    const [list, setList] = useState(['step1', 'step2', 'step3', 'step4']);
    const [name, setName] = useState('learn alita');
    const delay = () => new Promise(resolve => {
        setTimeout(resolve, 1000);
    })
    const deleteItem = async item => {
        await delay()
        list.splice(list.findIndex(e => e === item), 1)
        setList([...list])
    }
    return (
        <div>
            <h1 style={{ color: "white" }}>{name}</h1>
            <Button type="primary" onClick={() => {
                setName('alita 入门教程')
            }}>Click Me!</Button>
            <Link to="/">Go to index page</Link>
            <ul>{list.map(i => (<li key={i}><Button onClick={() => {
                deleteItem(i)
            }}>删除{i} </Button></li>))}</ul>
        </div>
    )
}

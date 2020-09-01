import { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';

export default function List({ history }) {
    const [name, setName] = useState('learn alita');
    const [effect, setEffect] = useState('no');
const [count, setCount] = useState(0);

    useEffect(() => {
        setEffect(name === 'alita 入门教程'?'yes':'no')
    }, [name])
    useEffect(() => {
        console.log('page init');
        const timekey = setInterval(() => {
            console.log('每秒调用一次');
            setCount(count=>count+1);
        }, 1000);
        return () => {
            // 清除
            clearInterval(timekey);
          };
    }, [])
    return (
        <div>
            <h1 style={{ color: "white" }}>count:{count}</h1>
            <h1 style={{ color: "white" }}>{name}</h1>
            <h1 style={{ color: "white" }}>name change:{effect}</h1>
            <Button type="primary" onClick={() => {
                setName('alita 入门教程')
            }}>Click Me!</Button>
        </div>
    )
}

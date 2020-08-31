import { Link, Helmet, connect } from 'alita';
import { Button } from 'antd-mobile';

const IndexPage = ({ global, dispatch }) => {
    const { name, list = [] } = global;
    return (
        <div>
            <h1 style={{ color: "white" }}>{name}</h1>
            <Helmet>
                <title>alita 入门教程</title>
            </Helmet>
            <Button type="primary" onClick={() => {
                dispatch({
                    type: 'global/changeName',
                    payload: {
                        name: 'alita 入门教程'
                    }
                })
            }}>Click Me!</Button>
            <Link to="/list">Go to list page</Link>
            <ul>{list.map(i => (<li key={i}><Button onClick={() => {
                dispatch({
                    type: 'global/deleteItem',
                    payload: i
                })
            }}>删除{i} </Button></li>))}</ul>
        </div>)
};
export default connect(({ global }) => ({ global }))(IndexPage);

export default function List({ history }) {
    return (
        <div>
            <h1>list</h1>
            <button onClick={() => history.goBack()}>go back!</button>
            <button onClick={() => history.push('/')} >go to index!</button>
        </div>
    )
}

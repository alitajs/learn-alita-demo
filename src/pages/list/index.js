import LogoImg from '@/assets/logo.png';

export default function List({ history }) {
    return (
        <div>
            <img src={LogoImg} width={150} />
            <h1>list</h1>
            <button onClick={() => history.goBack()}>go back!</button>
            <button onClick={() => history.push('/')} >go to index!</button>
        </div>
    )
}

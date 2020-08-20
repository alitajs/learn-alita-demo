import { Link, Helmet } from 'alita';

export default () => (
    <div>
        <Helmet>
            <title>alita 入门教程</title>
        </Helmet>
        <Link to="/list">Go to list page</Link>
    </div>);

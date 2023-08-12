import {useParams} from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    return (
        <div className="blog">
            <h2>Blog Detail - {id}</h2> 
        </div>
    );
}

export default BlogDetail;
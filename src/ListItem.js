import {Link} from "react-router-dom"

function ListItem({data}) {

    return (
        <Link className="post_container" to={`/users/${data.id}`}>
           <img className="photo" alt='user'  src={`${data.imageUrl}?q=${data.id}`} />
           <div className="name">{data.prefix} {data.name} {data.lastName}</div>
           <div className="title">{data.title}</div>
        </Link>
       
    )
}

export default ListItem;

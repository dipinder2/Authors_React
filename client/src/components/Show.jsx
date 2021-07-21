import {useState,useEffect} from 'react';
import {Link} from '@reach/router'
import axios from 'axios'
const Show = (props) => {
	const [authors,setAuthors] = useState([])
	useEffect(() =>{
			axios.get(`http://localhost:8000/api/authors`)
			.then(res=>setAuthors(res.data))
			.catch(err=>console.log(err.response.data))
	},)
	const handleDelete = (id) =>{
			axios.delete(`http://localhost:8000/api/authors/${id}`)
			.then(res=>console.log(res))
			.catch(err=>console.log(err.response.data))
	}
  return (
    <>
    	<h1>Favorite Authors</h1>
    	<Link to="/new">Add an author</Link>
    	<h5>We have quotes by:</h5>
    	<table className="table">
    		  <thead>
			    <tr>
			      <th scope="col">Author</th>
			      <th scope="col">Actions</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		authors.map(author=>{

			  			return( <>
			  						  	<tr keys={author._id}>
			  						  			<td>{author.name}</td>
			  						  			<td><Link className="btn btn-secondary" to={`/edit/${author._id}`}>Edit</Link><button onClick={() =>handleDelete(author._id)} class="btn btn-danger">Delete</button></td>
			  						  	</tr>			
			  						  			</>)
			  		})
				   } 
			  </tbody>

    	</table>

    </>
  )
}

export default Show;
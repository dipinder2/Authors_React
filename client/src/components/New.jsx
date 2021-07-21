import {useState} from 'react';
import axios from 'axios'
import {Link,navigate} from '@reach/router'
const New = (props) => {
	const [author,setAuthor] = useState({})
	const [error,setError] = useState({})
	const handleChange = e =>{
			const {name,value} = e.target
			setAuthor({...author,[name]:value})
	} 
	const handleSubmit = e =>{
			e.preventDefault()
			const {name,value} = e.target
			axios.post(`http://localhost:8000/api/authors`,author)
			.then(res=>{
				setAuthor({
				name:""
			})
				navigate('/')
			})
			.catch(err=>{
				const {errors} = err.response.data
				setError(errors)
			})
	} 
  return (
    <>
	    <h1>Favorite authors</h1>
	    	<Link to="/">Home</Link>
	    <form onSubmit={handleSubmit}>
	    	<h4>Add a new author:</h4>
	    	<p>Name:
	    	<br/>
	    		<input value={author.name} onChange={handleChange} type="text" name="name"/>
	    		{ error.name ? <p style={{color:"red"}}>{error.name.message}</p>: null}
	    		<br/>
	    		<Link to="/" className="btn btn-danger">cancel</Link>
	    		<input className="btn btn-success" type="submit" value="create"/>
	    	</p>
	    </form>
    </>
  )
}

export default New;
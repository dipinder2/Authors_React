import {useState,useEffect} from 'react';
import {Link,navigate} from '@reach/router'
import axios from 'axios'

const Edit = ({id}) => {
		const [author,setAuthor] = useState()
		const [err,setErr] = useState(true)
		useEffect(() =>{
			axios.get(`http://localhost:8000/api/authors/${id}`)
			.then(res=>{
				setAuthor(res.data)
				setErr(false)})
			.catch(err=>setErr(true))
	},[])
		const handleSubmit = (e) =>{
			e.preventDefault()
			axios.put(`http://localhost:8000/api/authors/${id}`,author)
			.then(res=>{
				console.log(res)
				navigate("/")
			})
			.catch(err=>console.log(err))
		}
		const handleChange = e =>{
			const {name,value} = e.target
			setAuthor({...author,[name]:value})
	} 
  return (
    <>
	    <h1>Favorite authors</h1>
	    	<Link to="/">Home</Link>
	    	{
	    		err==true ? null
	    		:
	    <form onSubmit={handleSubmit}>
	    	<h4>Edit this author:</h4>

	    	<p>Name:
	    	<br/>
	    		<input onChange={handleChange} type="text" name="name" value={author.name}/>
	    		<br/>
	    		<br/>
	    		<Link to="/" className="btn btn-danger">cancel</Link>

	    		<input className="btn btn-primary" type="submit" value="update"/>
	    	</p>
	    </form>
	  }
    </>
  )
}

export default Edit;

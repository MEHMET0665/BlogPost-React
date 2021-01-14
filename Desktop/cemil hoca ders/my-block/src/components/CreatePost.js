function CreatePost(){
  return (<form >
     <h2>Create a Post</h2>
     <label htmlFor="">Title</label><br/>
     <input type="text"/>
     <br/><br/>
     <label htmlFor="">Body</label><br/>
     <textarea name="" id="" cols="30" rows="10"></textarea>
     <br/><br/>
     <button>Create</button>
     </form>
     )
}
export default CreatePost;
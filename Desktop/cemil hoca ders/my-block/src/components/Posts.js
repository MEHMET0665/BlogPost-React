function Posts(props){
  return( <div>
 <section>
        {props.Posts.map((globe)=>{
         return( <article>
<h2>{globe.title}</h2>
<p>{globe.body}</p>
</article>)
      })}
      </section>
  </div>)

}

export default Posts
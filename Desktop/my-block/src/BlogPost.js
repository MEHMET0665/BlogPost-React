

const myBlogPosts = [
  {
    title: 'My first blog',
    body: 'lorem ipsum dolor sit amet..',
    published: false
  },
  {
    title: 'My second blog',
    body: 'lorem ipsum dolor sit amet..',
    published: true
  },
  {
    title: 'My third blog',
    body: 'lorem ipsum dolor sit amet..',
    published: false
  },
  {
    title: 'My fourth blog',
    body: 'lorem ipsum dolor sit amet..',
    published: true
  }
]

function publishThePost(e) {
  if(e.target.innerText === 'Publish') {
    e.target.innerText = 'Unpublish';
    e.target.parentElement.querySelector('.blog-title').style.color = 'green';
  } else {
    e.target.innerText = 'Publish'
    e.target.parentElement.querySelector('.blog-title').style.color = 'red';
  }
}

const blogPost = myBlogPosts.map((myBlogPost,index) => {
  return (
    <div key={'post_' + index}>
      <h1 className={(myBlogPost.published ? 'green' : 'red') + ' blog-title'}>{myBlogPost.title}</h1>
      <p>{myBlogPost.body}</p>
      <button onClick={publishThePost}>{myBlogPost.published ? 'Unpublish' : 'Publish'}</button>
      <img src="" alt="" />
      <hr/>
    </div>
    
  );
})
//Stateless functional component
export function BlogPost(){
  return blogPost;
}
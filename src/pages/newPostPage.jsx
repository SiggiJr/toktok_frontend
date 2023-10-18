function NewPostPage() {
  return (
    <section>
      <form>
        <div>
          <p>BackButton</p>
          <h1>New Post</h1>
          <input type="text" name="title" />
          <label htmlFor="location">Add location</label>
          <input type="text" name="location" />
        </div>
        <div>
          <h2>Also post to</h2>
          <label htmlFor="facebook"></label>
          <input type="radio" name="facebook" />
          <label htmlFor="x"></label>
          <input type="radio" name="x" />
          <label htmlFor="tumblr"></label>
          <input type="radio" name="tumblr" />
        </div>
        <button>Advanced Settings</button>
      </form>
    </section>
  )
}

export default NewPostPage

const Contact = () => {
  return (
    <section className="contact">
      <h1>Sagad sa Work?</h1>
      <div className="container">
      <h3> Call me Baybee!!</h3>
        <form>
        
          <input type="text" placeholder="Title ng Tsismis" />
          <textarea cols="30" rows="10" placeholder="Mga Kwento ng Rant Mo"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
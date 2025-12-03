export const Contact = ()=>{
    const handleFormSubmit =(formData)=>{
        // console.log(formData.entries()); 
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="section-conatct">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                <input type="text" className="form-control" required autoComplete="false" placeholder="Enter your name" name=" username"/>
                <input type="email" className="form-control" required autoComplete="false" placeholder="Enter your email" name=" email"/>
                <textarea className="form-control" name="message" rows="10" placeholder="Enter your message" required autoComplete="off"></textarea>
                <button type="submit" value="send">Send</button>
            </form>
            </div>
        </section>
    )   
}; 
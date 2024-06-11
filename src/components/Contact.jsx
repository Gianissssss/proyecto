const Contact = ()=>{
    return (
        <div id="Contact" className="contacto">
            <h1>Contactame</h1>
            <form action="" className="form-contact">
                <div className="lg:flex gap-9">
                    <input className="input-form"  placeholder="Ingresa tu nombre" type="text" />
                    <input className="input-form" placeholder="Ingresa tu email"  type="text" />
                </div>
                <textarea className="text-area"  placeholder="Ingresa tu mensaje" name="" id="" cols={20} rows={10}></textarea>
                <button className="neno-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
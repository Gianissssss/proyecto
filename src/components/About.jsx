import img from '../assets/logoflores.png'
const About = () => {
    return (
        <div id="About" className="">
            <div className="banner">
                <div className="banner-content">
                    <h1 className="titulo">Sobre mí</h1>
                    <p className="subtitulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti dolorum vel at est, exercitationem nam necessitatibus, laudantium esse, voluptatem suscipit reprehenderit laborum iusto molestiae animi a ratione iure quibusdam!</p>
                    <div className="flex mt-8 gap-2">
                        <button className="neno-button ">Resume</button>
                    </div>
                </div>
                <img src="" width={290} height={290} alt="" />
            </div>
        </div>
    );
};

export default About;
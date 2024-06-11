import { AiFillGithub } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="titulo">Bienvenido a mi Portfolio <span>Gianinna Campos</span> </h1>
        <p className="subtitulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti dolorum vel at est, exercitationem nam necessitatibus, laudantium esse, voluptatem suscipit reprehenderit laborum iusto molestiae animi a ratione iure quibusdam!</p>
        <div className="img-banner" >
          <div className="items-banner">
            <div className="items-banner-icons">
              <a href="" className="icons-a"></a>
              <AiFillGithub className="a-icon" />
              <a href="" className="icons-a"></a>
              <AiFillGithub className="a-icon" />
              <a href="" className="icons-a"></a>
              <AiFillGithub className="a-icon" />
            </div>
          </div>
        </div>
      </div>
      <img src="" width={290} height={290} alt="" />
    </div>
  )
}

export default Banner;
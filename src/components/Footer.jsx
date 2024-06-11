import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3x1 font-semibold text-fuchsia-800 py-2 uppercase">LOGO</span>
                    <p className="text-[16px] my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam nostrum sint iusto odio fugiat nihil totam explicabo illo magnam praesentium saepe non, eos corrupti maxime ea reiciendis at doloribus!</p>
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Servicios</h2>
                    <ul className="text-[16px] my-4">
                        <li  className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contacto</h2>
                    <p className="text-[16px] my-4">Email: gianicpos@gmail.com</p>
                    <p className="text-[16px] my-4">Telefono: 2996279444</p>
                </div>
                <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">Redes</h2>
                <div className="flex-space-x-4">
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaGithub />
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaLinkedinIn />
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaTwitter />
                    </a>
                    <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
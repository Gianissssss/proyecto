import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav.jsx';
import Banner from './components/banner.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Proyects from './components/Proyects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const App = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {
                loading ?
                   <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
                     <BallTriangle 
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true} 
            />
            </div>
            :
            <div>
                <Nav />
                <Banner />
                <About />
                <Services />
                <Proyects />
                <Contact />
                <Footer />
            </div>

        }
        </>
    );
};

export default App;
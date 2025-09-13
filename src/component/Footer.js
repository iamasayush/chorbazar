import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className = "flex justify-center bg-black text-white text-xs lg:text-xl mt-20 gap-10 p-5">
            <p>&copy; Copywrite</p>
            <p>|</p>

            <Link to="/contact" className="nav">Contact</Link>

            <p>|</p>
            
            <p>Ayush Dwivedi</p>
        </footer>
    )
}

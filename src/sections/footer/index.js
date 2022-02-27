import {Container, Row, Col} from 'react-bootstrap'

import './footer.css';

function Footer() {
    const y = new Date()
    return (
        <div className='footer'>
            <p>© all reserved {y.getFullYear()}, made by etKhalil</p>
        </div>
    );
}

export default Footer;
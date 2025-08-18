import {Link} from 'react-router-dom';

function CVLink(props) {
    return (
        <>
            <Link to = "/" >Personal Info</Link>
            <Link to = "/education" >Education</Link>
            <Link to = "/xp" >Professional Experience</Link>
            <Link to = "/languages" >Languages</Link>
            <Link to = "/certs" >Licences and Certificates</Link>
            <Link to = "/portfolio" >Portfolio</Link>
        </>
    );
}

export default CVLink;
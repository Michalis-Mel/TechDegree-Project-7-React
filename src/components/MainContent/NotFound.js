import React  from 'react';
import { FaSadCry } from "react-icons/fa";

function NotFound(){
        return(
            <div className="not-found">
                <h1>No Results Found</h1>
                <h3>That search did not return any results,please try again!</h3>
                <FaSadCry className="logo"/>
            </div>
        );
    }

export default NotFound;
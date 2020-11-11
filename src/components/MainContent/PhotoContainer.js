import React  from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Container = props => {
        const results = props.data;
        let images;

        // display results when the user inputs a search value, otherwise display the NotFound component.

        if (results.length > 0){
            images = results.map((image) => (
                <Photo 
                    key = {image.id} 
                    id = {image.id}
                    server = {image.server} 
                    secret = {image.secret} 
                    title={image.title} 
                />
            ))
        }else{
            images = <NotFound />
        }

        return(
            <div className="photo-container">
                <ul>
                    {images}
                </ul>
            </div>
        );
}

export default Container;
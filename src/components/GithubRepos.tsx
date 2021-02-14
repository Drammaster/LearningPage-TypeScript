import React from 'react';

import Fade from '@material-ui/core/Fade';

function Github() {
    console.log(fetch('https://api.github.com/users/drammaster/repos')
        .then(response => {
            return response.json();
        }))

    return(
        <Fade in={true} timeout={1000}>
            <p>
            Github
            </p>
        </Fade>
    )
}

export default Github;
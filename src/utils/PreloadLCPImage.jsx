import React from 'react';
import { Helmet } from 'react-helmet';

const PreloadLCPImage = ({imageSource}) => (
    <Helmet>
        <link rel='preload' as="image" href={imageSource} />
    </Helmet>
)

export default PreloadLCPImage;
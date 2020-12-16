import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={380}
        height={440}
        viewBox="0 0 350 440"
        backgroundColor="#d4d4d4"
        foregroundColor="#ffffff"
        {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="400" height="250" />
        <rect x="52" y="280" rx="0" ry="0" width="300" height="20" />
        <rect x="52" y="310" rx="0" ry="0" width="150" height="20" />
        <rect x="52" y="340" rx="0" ry="0" width="80" height="25" />
    </ContentLoader>
);

export default MyLoader;

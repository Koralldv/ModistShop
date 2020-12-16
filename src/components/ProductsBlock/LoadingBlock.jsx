import React from 'react';
import ContentLoader from 'react-content-loader';

function ProductsLoading() {
    return (
        <ContentLoader
            speed={2}
            width={284.99}
            height={569.28}
            viewBox="0 0 284.99 569.28"
            backgroundColor="#d4d4d4"
            foregroundColor="#ffffff">
            <rect x="0" y="0" rx="0" ry="0" width="255" height="383" />
            <rect x="0" y="401" rx="0" ry="0" width="255" height="24" />
            <rect x="0" y="448" rx="0" ry="0" width="78" height="26" />
            <rect x="92" y="448" rx="0" ry="0" width="78" height="26" />
            <rect x="-2" y="497" rx="0" ry="0" width="112" height="29" />
            <circle cx="242" cy="510" r="15" />
        </ContentLoader>
    );
}

export default ProductsLoading;

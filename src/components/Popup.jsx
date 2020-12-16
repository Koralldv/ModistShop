import React from 'react';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline';
function Popup({ onClickPopup }) {
    return (
        <div className="popupBg">
            <div className="popupBody">
                <IosCloseCircleOutline className="popupOff" onClick={() => onClickPopup()} />
                <iframe
                    title="popup"
                    src="https://www.youtube.com/embed/YIdlwYeDWcM?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Popup;

import React from 'react';

function Map() {
    return (
        <div className="col-md-6 d-flex mapBg">
            <div id="map" className="bg-white">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.0766870604543!2d127.52076391555549!3d50.271826708100754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e894101731d0209%3A0x33a0de162e666ca1!2z0JHQu9Cw0LPQvtCy0LXRidC10L3RgdC6LCDQkNC80YPRgNGB0LrQsNGPINC-0LHQuy4sIDY3NTAxMQ!5e0!3m2!1sru!2sru!4v1603478499866!5m2!1sru!2sru"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
            </div>
        </div>
    );
}

export default Map;

import React from 'react';

class InfoContact extends React.Component {
    render() {
        const { infoItems } = this.props;
        return (
            <div className="row d-flex mt-5 contact-info">
                <div className="w-100"></div>
                {infoItems.map((item, i) => (
                    <div className="col-md-3 d-flex" key={`item_${i}`}>
                        <div className="info bg-white p-4">
                            <p>
                                <span>{item.title}:</span>
                                {item.isLink === 1 ? (
                                    <a href="/"> {item.content} </a>
                                ) : (
                                    item.content
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default InfoContact;

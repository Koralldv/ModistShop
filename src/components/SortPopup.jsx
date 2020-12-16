import React from 'react';
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown';

const SortPopup = React.memo(function SortPopup({ items, activeSortBy, onSelectSortBy }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    const activeLabel = items.find((obj) => obj.type === activeSortBy).name;

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    const onSelectItem = (index) => {
        if (onSelectSortBy) {
            onSelectSortBy(index);
        }
        setVisiblePopup(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="sortPopup sort" ref={sortRef}>
            <span className="sortPopup-link" onClick={toggleVisiblePopup}>
                <b> Сортировка по: </b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
                <MdArrowDropdown className={visiblePopup ? 'arrowT' : 'arrowB'} fontSize="20px" />
            </span>
            <ul className="sortPopup-nav">
                {visiblePopup && (
                    <div className="sortPopup-li">
                        {items &&
                            items.map((obj, index) => (
                                <li
                                    onClick={() => onSelectItem(obj)}
                                    className={
                                        activeSortBy === obj.type
                                            ? 'actived sortPopup-items'
                                            : 'sortPopup-items'
                                    }
                                    key={`${obj.type}_${index}`}>
                                    {obj.name}
                                </li>
                            ))}
                    </div>
                )}
            </ul>
        </div>
    );
});

export default SortPopup;

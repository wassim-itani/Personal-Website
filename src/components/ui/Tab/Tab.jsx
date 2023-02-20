import './Tab.css';

const Tab = ({ label, index, isActive, onClick }) => {
    return (
        <button
            id={`tab-${index}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${index}`}
            className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Tab;
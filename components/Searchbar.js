import './Searchbar.css';

const Searchbar = (props) => {
    return (
        <input
            type="text"
            className="search-input"
            value={ props.value }
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder={"Type here to search"}
        />
        
    );
}
 
export default Searchbar;
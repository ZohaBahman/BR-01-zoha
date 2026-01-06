function SearchBar({ searchText, setSearchText, onSearch }) {
    return (
        <div className="input-group my-4">
            <input
                className="form-control"
                placeholder="Search recipes..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={onSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
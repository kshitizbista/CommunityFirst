const searchTextKey = "_searchText";

class Search {

    setSearchText(searchText) {
        window.sessionStorage.setItem(searchTextKey, searchText);
    }

    getSearchText() {
        return window.sessionStorage.getItem(searchTextKey);
    }
}

export default new Search();

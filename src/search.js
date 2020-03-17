import React from "react"
import Alert from './alert'
import axios from "axios"
class Search extends React.Component {
    //pass state from app down here
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            filter: "",
            printType: "",
            sortBy: "",
            search: "",
            spec: "",
            empty: false
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleSpecChange = this.handleSpecChange.bind(this)
        this.search = this.search.bind(this)
        this.delete = this.delete(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handlePrintChange = this.handlePrintChange.bind(this)
        this.handleSortChange = this.handleSortChange.bind(this)
        this.handleQueryChange = this.handleQueryChange.bind(this)
    }
    handleQueryChange(event) {
        this.setState({
            query: event.target.value
        })
    }
    handleSearchChange(event) {
        this.setState({
            search: event.target.value
        })
    }
    handleSpecChange(event) {
        this.setState({
            spec: event.target.value
        })
    }
    handleFilterChange(event) {
        this.setState({
            filter: event.target.value
        })
    }
    handlePrintChange(event) {
        this.setState({
            printType: event.target.value
        })
    }
    handleSortChange(event) {
        this.setState({
            sortBy: event.target.value
        })
    }
    delete() {
        this.setState({
          query: '',
          filter: '',
          printType: '',
          sortBy: '',
          search: '',
          spec: '',
          empty: true
        });
    }
    async search(e) {
        e.preventDefault()
        if (!/\S/.test(this.state.search)) {
            this.setState({
                empty: true
            })
        }
        else {
            this.setState({
              empty: false
            });
            this.props.updateLoading();
            console.log('working');
            let baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
            let search = this.state.search;
            let query =
                this.state.query === ''
                ? ''
                : '+' + this.state.query + ':' + this.state.spec;
            let filter =
                this.state.filter === '' ? '' : '&filter=' + this.state.filter;
            let print =
                this.state.printType === ''
                ? ''
                : '&printType=' + this.state.printType;
            let sort =
                this.state.sortBy === '' ? '' : '&orderBy=' + this.state.sortBy;
            console.log(baseUrl + search + query + filter + print + sort);
            const res = await axios.get(
              `${baseUrl}${search}${query}${filter}${print}${sort}&startIndex=0&maxResults=40`
            );
            console.log(res);
            this.props.updateLoading();
            this.props.updateResults(res.data.items);
        }
    }
    render(){
        return (
            <div className="s007">
                <form id="form">
                    <Alert empty={this.state.empty}/>
                    <div className="basic-search">
                        <input
                            onChange={this.handleSearchChange}
                            id="searchbox"
                            type="text"
                            placeholder="Enter Title" />
                    </div>
                    <div className="advance-search">
                        <span className="desc">Advanced Search</span>
                        <div className="row">
                            <input
                                onChange={this.handleSpecChange}
                                id="specbox"
                                type="text"
                                placeholder="Enter Specifics" />
                            <div className="input-field" id="query">
                                <div className="input-select">
                                    <select
                                        onChange={this.handleQueryChange}
                                    >
                                        <option placeholder="YYYY" value="intitle">TITLE</option>
                                        <option value="inauthor">AUTHOR</option>
                                        <option value="isbn">ISBN</option>
                                        <option value="inpublisher">PUBLISHER</option>
                                        <option value="subject">SUBJECT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <div className="input-select">
                                    <select
                                        onChange={this.handleFilterChange}
                                    >
                                        <option placeholder="YYYY" value="">FILTER</option>
                                        <option value="partial">PARTIAL</option>
                                        <option value="full">FULL</option>
                                        <option value="free-ebooks">FREE-EBOOKS</option>
                                        <option value="paid-ebooks">PAID-EBOOKS</option>
                                        <option value="ebooks">EBOOKS</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="input-select">
                                    <select
                                        onChange={this.handlePrintChange}
                                    >
                                        <option placeholder="" value=""> PRINT TYPE</option>
                                        <option value="all">ALL</option>
                                        <option value="books">BOOKS</option>
                                        <option value="magazines">MAGAZINES</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="input-select">
                                    <select
                                        onChange={this.handleSortChange}
                                    >
                                        <option placeholder="" value="">SORT BY</option>
                                        <option value="relevance">RELEVANCE</option>
                                        <option value="newest">NEWEST</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row third">
                            <div className="input-field">
                                <button id="btn-search" className="btn" onClick={this.search}>Search</button>
                                <button id="btn-delete" className="btn" onClick={this.delete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default Search
import React from 'react';
import Header from './header';
import Search from './search'
import Bookview from './bookview'
import defaultData from './defaults'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: defaultData,
      loading:false
    }
    this.updateResults = this.updateResults.bind(this)
    this.updateLoading = this.updateLoading.bind(this);
  }

  updateResults(results) {
    this.setState({
      results:[...results]
    })
  }
  updateLoading() {
    this.setState({ loading: !this.state.loading });
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Search updateLoading={this.updateLoading} updateResults={this.updateResults}/>
        <Bookview loading={this.state.loading} results={this.state.results}/>
      </div>
    );
  }
  
}

export default App;

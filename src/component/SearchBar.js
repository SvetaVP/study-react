import React from 'react';

class SearchBar extends React.Component {
    state={ term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <fieldset>
                        <label htmlFor="search-input">Image Search</label>
                        <input id="search-input" 
                               type="text" 
                               onChange={(e) => this.setState({ term: e.target.value })}
                               value={this.state.term}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default SearchBar;
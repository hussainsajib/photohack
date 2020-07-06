import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            searchResult: [],
            pageNumber: 1,
        };
        this.getData = this.getData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.key === "Enter") {
            this.setState({ searchString: e.target.value }, (i) =>
                this.getData()
            );
        }
    }

    getData() {
        const options = {
            headers: {
                Authorization:
                    "Client-ID " + process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
            },
        };
        axios
            .get(
                "https://api.unsplash.com/search/photos?page=1&query=office",
                options
            )
            .then((res) => res.data.results)
            .then((results) => {
                const data = results.map((item) => {
                    const parsedData = {};
                    parsedData.src = item.urls.thumb;
                    parsedData.width = item.width;
                    parsedData.height = item.height;
                    parsedData.large = item.urls.regular;
                    return parsedData;
                });
                return data;
            })
            .then((parsedData) => {
                this.setState({ searchResult: parsedData }, () =>
                    console.log(this.state.searchResult)
                );
            })
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Search Image</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Search images"
                        onKeyPress={this.handleChange}
                    />
                </InputGroup>
            </div>
        );
    }
}

export default Home;

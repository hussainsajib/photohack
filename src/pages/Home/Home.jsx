import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import Gallery from "react-grid-gallery";

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
                `https://api.unsplash.com/search/photos?page=1&query=${this.state.searchString}&per_page=30`,
                options
            )
            .then((res) => res.data.results)
            .then((results) => {
                const data = results.map((item) => {
                    const parsedData = {};
                    parsedData.thumbnail = item.urls.thumb;
                    parsedData.thumbnailWidth = item.width;
                    parsedData.thumbnailHeight = item.height;
                    parsedData.src = item.urls.regular;
                    return parsedData;
                });
                return data;
            })
            .then((parsedData) => {
                this.setState({ searchResult: parsedData });
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
                {this.state.searchResult.length === 0 ? null : (
                    <Gallery
                        images={this.state.searchResult}
                        enableImageSelection={false}
                        direction={"column"}
                    />
                )}
            </div>
        );
    }
}

export default Home;

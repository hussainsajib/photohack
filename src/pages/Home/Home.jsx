import React, { Component } from "react";
import TextInput from "../../components/TextInput/TextInput";
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
    }

    getData() {
        axios
            .get("https://api.unsplash.com/search/photos?page=1&query=office")
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div>
                <TextInput />
                {this.getData()}
            </div>
        );
    }
}

export default Home;

import { React, Component } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import logo from "./images/logo.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetshedData = await fetchData();
    this.setState({ data: fetshedData });
  }

  handleCountryChange = async (country) => {
    const fetshedData = await fetchData(country);
    this.setState({ data: fetshedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.app}>
        <img className={styles.image} src={logo} alt="Covid 19 Logo"></img>

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;

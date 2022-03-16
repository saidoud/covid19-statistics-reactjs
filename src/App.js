import { React, Component } from "react";
import { Container } from "@material-ui/core";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetshedData = await fetchData();
    this.setState({ data: fetshedData });
    console.log(fetshedData);
  }

  handleCountryChange = async (country) => {
    const fetshedData = await fetchData(country);
    this.setState({ data: fetshedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <Header />
        <Container>
          <main className={styles.app}>
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Charts data={data} country={country} />
          </main>
        </Container>

        <Footer />
      </>
    );
  }
}

export default App;

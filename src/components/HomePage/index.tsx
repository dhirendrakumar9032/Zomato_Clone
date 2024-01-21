import styles from "./index.module.scss";
import app from "../../resources/icons/app.svg";
import zomatoText from "../../resources/icons/zomato_text.png";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import location from "../../resources/icons/location-icon.svg";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className={styles.homePage}>
      <nav className={styles.nav}>
        <div className={styles.getApp}>
          <img src={app} alt="app" />
          Get the App
        </div>
        <ul>
          <li>Investor Relations</li>
          <li>Add Restaurant</li>
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </nav>
      <section className={styles.searchContainer}>
        <img className={styles.title} src={zomatoText} alt="zomato" />
        <div className={styles.subtitle}>
          Discover the best food & drinks in <span>Hyderabad</span>
        </div>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className={styles.locationSearch}>
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <img src={location} alt="zomato" />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, width: "200px" }}
              placeholder="Select Location"
              inputProps={{ "aria-label": "Search for restaurants, cuisine or dish" }}
            />
          </div>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <div className={styles.restaurantSearch}>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 2, flex: 1, }}
              placeholder="Search for restaurants, cuisine or dish"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </div>
        </Paper>
      </section>
    </div>
  );
};

export default HomePage;

import axios from "axios";

axios.defaults.baseURL = "https://ishtar-market.ot.engineering/api/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("token");
import axios from "axios";

class Utils {
  static getImages = () => {
    return axios.get(
      "https://raw.githubusercontent.com/zile028/fake-db/main/slider_images.json"
    );
  };
}

export default Utils;

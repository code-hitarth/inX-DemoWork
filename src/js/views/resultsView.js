import icons from "../../img/icons.svg"; //Parcel 1
import View from "./View.js";
import previewView from "./previewView.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _message = "";
  _errorMessage = `No recipies found for your query!Please try again ;)`;

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();

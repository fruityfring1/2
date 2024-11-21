// Import necessary functions from app.js
import { maxline, randid } from '/app.js';

// Get the 'id' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

if (id) {
  const list = id.split("-");
  id = list[0];

  if (isNaN(id) || id < 0 || id > maxline()) {
    id = randid();
  }
} else {
  id = randid();
}

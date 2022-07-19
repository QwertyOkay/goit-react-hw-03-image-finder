const { default: axios } = require('axios');

const URL = 'https://pixabay.com/api/';
const KEY = '?key=27488629-df5ceed35024f27a803c81bf6';
const TYPE = '&image_type=photo&orientation=horizontal';
const PER_PAGE = '&per_page=12';
const PAGE = page => `&page=${page}`;
const SEARCH = text => `&q=${text}`;

const searchURL = (page, text) => {
  if (text) {
    return URL + KEY + TYPE + PER_PAGE + PAGE(page) + SEARCH(text);
  }
  return URL + KEY + TYPE + PER_PAGE + PAGE(page);
};

export const fetchData = async (page, text) =>
  await axios.get(searchURL(page, text));
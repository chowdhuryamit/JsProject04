const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");
const showMore = document.getElementById("showMore");

const accessKey = "G3IKVAyJqABZns974lFLE5sM_72sFDnVPVwZcPcHwKc";
let keyWord = "";
let page = 1;

async function getImage(params) {
  keyWord = searchBox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=15`;
  const response = await fetch(url);
  const data = await response.json();
  const result = data.results;
  result.map((indx) => {
    const image = document.createElement("img");
    image.src = indx.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = indx.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  showMore.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page=1;
  searchResult.innerHTML='';
  getImage();
});
showMore.addEventListener("click", (e) => {
  page++;
  getImage();
});

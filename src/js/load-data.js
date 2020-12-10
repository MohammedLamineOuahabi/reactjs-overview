//console.log(Books);
function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '&hellip;' : str;
}
function productTemplate(product) {
  return `
     
  <div class="product-card">
    <div class="product-image">
     <a href="${product.affiliate_link}"> <img src="${product.img_link}"></a>
    </div>
    <div class="product-info">
      <h4>${truncate(product.author, 20)}</h4>
      <div class="price-rating">
        <h5>$${product.price}</h5>
        <h6>${product.rating}/5</h6>
      </div>
     </div>
    </div>  
      
`;
}

function insertProducts(list) {
  /** */ document.getElementById('product-filter').innerHTML = `
  
  <h1> Books found : <span> ${list.length}</span></h1>
 
  <div class="sort">

    <!-- 
    <div class="collection-sort">
      <label>Filter by</label>
      <select>
      <option value="/">All Books</option>
      <option value="/">Price</option>
      <option value="/">Rate</option>
      </select>
    </div>-->

    <div class="collection-sort">
      <label>Sort by</label>
      <select>
      <option value="/">All Books</option>
      <!--
      <option value="/">Price</option>
      <option value="/">Rate</option>
      -->
      </select>
    </div>

  </div> 
  
  `;

  document.getElementById('products').innerHTML = `
  
  ${list.map(productTemplate).join('')}
  
`; /**/
}

var l = Books.filter(b => parseFloat(b.rating).toFixed(2) >= 4);
insertProducts(l);

const searchInput = document.getElementById('searchInput');
const svg = document.getElementById('svg');

//filter products
searchInput.addEventListener('input', function (evt) {
  l = Books.filter(
    b =>
      b.title.toLowerCase().includes(this.value.toLowerCase()) &&
      parseFloat(b.rating).toFixed(2) >= 4
  );
  insertProducts(l);
  // if (l.length > 0) {
  //   svg.classList.add("hide");
  // }
});

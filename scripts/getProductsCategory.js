const getProductsCategory = async (category, eleParent) => {
  try {
    const res = await fetch(`/api/products?category=${category}`);
    const data = await res.json();
    console.log(data.data);
    if (data) {
      eleParent.innerHTML += `<div class="products">
                    ${data.data.map(
                      (item) => `<div>
                      <a href="/product.html?sanpham=${item.title}&_id=${item["_id"]}">
                                <div class="top">
                                    <div class="image-container"> 
                                        <img src="${item.image_bg}" alt="${
                        item.title
                      }"/>
                                    </div>    
                                </div>

                                <div class="infor">
                                    <p>${item.title}</p>
                                    <div>
                                        <span>${item.price_origin} đ</span>
                                        <p>${
                                          item.price_origin -
                                          (item.price_origin / 100) * item.sale
                                        } đ</p>      
                                    </div>
                                </div>
                                </a>
                            </div>`
                    )}
                </div>`;
    }
  } catch (error) {
    console.log("error getProductsCategory", error);
  }
};

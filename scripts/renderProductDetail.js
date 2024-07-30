async function renderProductDetail(id, eleParent, eleName) {
  try {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    if (data.meta.success) {
      const { category, image_bg, imagesDetail, price_origin, sale, title } =
        data.data;
      const galleryImages = [image_bg, ...imagesDetail];
      eleParent.innerHTML += `
                <div>
                    <div class="image_content">
                        <div class="img_container">
                            <img id="show" src="${image_bg}" alt="${title}"/>
                            <div class="gallery">
                                ${galleryImages
                                  .map(
                                    (item) =>
                                      `<img id="select" src="${item}" />`
                                  )
                                  .join("")}
                            </div>
                        <div>
                    </div>
                    <div class="infor_content">
                    <p>${title}</p>
                    <div>
                        <span>${price_origin} đ</span>
                        <p>${
                          price_origin -
                          (price_origin / 100) * sale
                        } đ</p>      
                    </div>
                    </div>
                </div>
            `;
      eleName.textContent = data.data.title;
    }
  } catch (error) {
    console.log("error renderProductDetail", error);
  }
}

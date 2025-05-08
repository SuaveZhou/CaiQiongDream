// 产品图片切换
function changeImage(element) {
    // 获取主图片元素
    const mainImage = document.getElementById('main-product-image');
    // 设置主图片的src为点击的缩略图的src
    mainImage.src = element.src;
    
    // 移除所有缩略图的active类
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });
    
    // 为当前点击的缩略图添加active类
    element.classList.add('active');
}

// 数量选择器
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < parseInt(quantityInput.max)) {
        quantityInput.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > parseInt(quantityInput.min)) {
        quantityInput.value = currentValue - 1;
    }
}

// 标签页切换
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 为当前点击的按钮添加active类
            this.classList.add('active');
            
            // 获取对应的标签页ID
            const tabId = this.getAttribute('data-tab');
            
            // 隐藏所有标签页内容
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
            });
            
            // 显示对应的标签页内容
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 添加到购物车按钮点击事件
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = document.getElementById('quantity').value;
            alert(`已将 ${quantity} 件商品添加到购物车`);
            // 这里可以添加实际的购物车逻辑
        });
    }
    
    // 立即购买按钮点击事件
    const buyNowBtn = document.querySelector('.buy-now');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const quantity = document.getElementById('quantity').value;
            alert(`正在跳转到结算页面，购买 ${quantity} 件商品`);
            // 这里可以添加跳转到结算页面的逻辑
        });
    }
    
    // 图片放大效果
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            // 创建遮罩层
            const overlay = document.createElement('div');
            overlay.classList.add('image-overlay');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '1000';
            
            // 创建大图
            const largeImage = document.createElement('img');
            largeImage.src = this.src;
            largeImage.style.maxWidth = '90%';
            largeImage.style.maxHeight = '90%';
            largeImage.style.objectFit = 'contain';
            
            // 添加关闭按钮
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '20px';
            closeBtn.style.right = '20px';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = 'white';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.cursor = 'pointer';
            
            // 点击关闭
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // 添加元素到页面
            overlay.appendChild(largeImage);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);
        });
    }
});

// 页面滚动时固定产品信息
window.addEventListener('scroll', function() {
    const productInfo = document.querySelector('.product-info');
    const productGallery = document.querySelector('.product-gallery');
    const productContent = document.querySelector('.product-content');
    
    if (window.innerWidth > 992) {  // 只在大屏幕上应用
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const galleryHeight = productGallery.offsetHeight;
        const infoHeight = productInfo.offsetHeight;
        
        if (infoHeight < galleryHeight) {  // 只有当信息区域比图片区域短时才固定
            const contentTop = productContent.offsetTop;
            const maxScroll = contentTop + galleryHeight - infoHeight;
            
            if (scrollTop > contentTop && scrollTop < maxScroll) {
                productInfo.style.position = 'fixed';
                productInfo.style.top = '20px';
                productInfo.style.width = productInfo.offsetWidth + 'px';
            } else if (scrollTop >= maxScroll) {
                productInfo.style.position = 'absolute';
                productInfo.style.top = (galleryHeight - infoHeight) + 'px';
                productInfo.style.width = productInfo.offsetWidth + 'px';
            } else {
                productInfo.style.position = 'static';
                productInfo.style.top = 'auto';
                productInfo.style.width = 'auto';
            }
        }
    } else {
        // 重置移动设备上的样式
        productInfo.style.position = 'static';
        productInfo.style.top = 'auto';
        productInfo.style.width = 'auto';
    }
});
// 产品筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    // 筛选函数
    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        
        productCards.forEach(card => {
            let showCard = true;
            
            // 分类筛选
            if (selectedCategory !== 'all' && card.dataset.category !== selectedCategory) {
                showCard = false;
            }
            
            // 价格筛选
            if (selectedPrice !== 'all' && showCard) {
                const productPrice = parseInt(card.dataset.price);
                
                if (selectedPrice === '0-100' && (productPrice < 0 || productPrice > 100)) {
                    showCard = false;
                } else if (selectedPrice === '100-300' && (productPrice < 100 || productPrice > 300)) {
                    showCard = false;
                } else if (selectedPrice === '300-500' && (productPrice < 300 || productPrice > 500)) {
                    showCard = false;
                } else if (selectedPrice === '500+' && productPrice < 500) {
                    showCard = false;
                }
            }
            
            // 显示或隐藏产品卡片
            card.style.display = showCard ? 'block' : 'none';
        });
        
        // 排序产品
        sortProducts();
    }
    
    // 排序函数
    function sortProducts() {
        const sortValue = sortFilter.value;
        const productGrid = document.querySelector('.product-grid');
        const products = Array.from(productCards).filter(card => card.style.display !== 'none');
        
        if (sortValue === 'price-low') {
            products.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
        } else if (sortValue === 'price-high') {
            products.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
        } else if (sortValue === 'newest') {
            // 这里假设有data-date属性，实际项目中可以根据需要调整
            products.sort((a, b) => new Date(b.dataset.date || 0) - new Date(a.dataset.date || 0));
        }
        
        // 重新排列DOM
        products.forEach(product => {
            productGrid.appendChild(product);
        });
    }
    
    // 添加事件监听器
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    sortFilter.addEventListener('change', sortProducts);
    
    // 初始化
    filterProducts();
});

// 产品卡片悬停效果
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#c41230';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#e0e0e0';
    });
});

// 分页功能
document.addEventListener('DOMContentLoaded', function() {
    const paginationLinks = document.querySelectorAll('.pagination a');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            paginationLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // 添加活动状态到当前点击的链接
            if (!this.classList.contains('next')) {
                this.classList.add('active');
            }
            
            // 这里可以添加AJAX加载新页面的代码
            // 或者重定向到新页面
            // window.location.href = this.href;
            
            // 滚动到页面顶部
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});
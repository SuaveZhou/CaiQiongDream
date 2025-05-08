// 页面滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 产品图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        productImages.forEach(img => {
            if (img.getAttribute('data-src')) {
                imageObserver.observe(img);
            }
        });
    } else {
        // 回退方案，直接加载所有图片
        productImages.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
        });
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// 产品卡片动画效果
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#c41230';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#e0e0e0';
    });
});

// 移动端菜单切换
function setupMobileMenu() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // 创建汉堡菜单按钮
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.style.display = 'none';
    
    header.querySelector('.container').appendChild(menuButton);
    
    // 响应式处理
    function handleResize() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            nav.classList.add('mobile-nav');
            nav.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            nav.classList.remove('mobile-nav');
            nav.style.display = 'block';
        }
    }
    
    // 切换菜单显示
    menuButton.addEventListener('click', function() {
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'block';
            menuButton.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            nav.style.display = 'none';
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // 初始化和窗口大小变化时调用
    handleResize();
    window.addEventListener('resize', handleResize);
}

// 当DOM加载完成后初始化移动端菜单
document.addEventListener('DOMContentLoaded', setupMobileMenu);

// 主页和通用JavaScript功能

// 导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        // 当滚动位置大于50px时添加scrolled类，否则移除
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 确保页面加载时也检查一次滚动位置
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header');
        // 页面加载时检查滚动位置
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 移动端导航菜单
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // 创建移动端菜单按钮
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
    
    // 将按钮添加到header
    header.querySelector('.container').appendChild(mobileMenuBtn);
    
    // 获取导航菜单
    const nav = header.querySelector('nav');
    
    // 添加点击事件
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // 点击导航链接后关闭菜单
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
    
    // 窗口大小变化时处理
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// 滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animatedElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // 检查元素是否在视口中
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
});

// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const dotsContainer = slider.querySelector('.slider-dots');
        const sliderContainer = slider.querySelector('.slider-container');
        let currentIndex = 0;
        const slideCount = slides.length;

        // 创建指示器
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // 确保视频自动播放
        const heroVideo = slider.querySelector('#hero-video');
        if (heroVideo) {
            heroVideo.muted = true; // 确保静音以符合自动播放政策
            heroVideo.play().catch(e => {
                console.log('视频自动播放失败:', e);
                // 尝试添加用户交互后播放
                document.addEventListener('click', () => {
                    heroVideo.play();
                }, { once: true });
            });
        }

        // 滑动到指定幻灯片
        function goToSlide(index) {
            currentIndex = index;
            sliderContainer.style.transform = `translateX(-${index * 100}vw)`;
            const dots = dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        // 初始化位置
        sliderContainer.style.transform = `translateX(0vw)`;

        // 自动轮播
        let interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);
        }, 3000);

        // 鼠标悬停时暂停轮播
        slider.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });

        // 鼠标离开时恢复轮播
        slider.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                let nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, 3000);
        });
    });
    
    // 滚动时改变导航栏样式
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 页面加载时检查滚动位置
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
});

// 返回顶部按钮
document.addEventListener('DOMContentLoaded', function() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    // 滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 点击事件
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    function lazyLoad() {
        lazyImages.forEach(img => {
            if (isInViewport(img)) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 300 &&
            rect.bottom >= 0
        );
    }
    
    // 初始检查
    lazyLoad();
    
    // 滚动时检查
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    }
});

// 视频声音控制
document.addEventListener('DOMContentLoaded', function() {
    // 处理第一个视频
    const video = document.getElementById('hero-video');
    const soundToggle = document.getElementById('sound-toggle');
    
    if (video && soundToggle) {
        // 初始状态是静音
        video.muted = true;
        
        soundToggle.addEventListener('click', function() {
            // 切换静音状态
            video.muted = !video.muted;
            
            // 更新图标
            if (video.muted) {
                soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
    }
    
    // 处理第二个视频
    const video2 = document.getElementById('hero-video-2');
    const soundToggle2 = document.getElementById('sound-toggle-2');
    
    if (video2 && soundToggle2) {
        // 初始状态是静音
        video2.muted = true;
        
        soundToggle2.addEventListener('click', function() {
            // 切换静音状态
            video2.muted = !video2.muted;
            
            // 更新图标
            if (video2.muted) {
                soundToggle2.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                soundToggle2.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
    }
});
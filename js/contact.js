// 表单验证和提交
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 验证邮箱格式
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的电子邮箱地址');
                return;
            }
            
            // 模拟表单提交
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = '提交中...';
            
            // 这里可以添加实际的表单提交逻辑，如AJAX请求
            setTimeout(function() {
                alert('感谢您的留言，我们会尽快回复您！');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = '提交留言';
            }, 1500);
        });
    }
    
    // 常见问题切换
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // 关闭其他所有FAQ项
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切换当前FAQ项的状态
            item.classList.toggle('active');
        });
    });
    
    // 地图加载
    const mapPlaceholder = document.querySelector('.map-placeholder');
    const mapOverlay = document.querySelector('.map-overlay');
    
    if (mapPlaceholder && mapOverlay) {
        mapOverlay.addEventListener('click', function() {
            // 这里可以添加实际的地图加载逻辑
            // 例如替换为百度地图或高德地图的iframe
            
            // 模拟地图加载
            mapOverlay.style.display = 'none';
            
            // 创建iframe元素
            const mapIframe = document.createElement('iframe');
            mapIframe.src = 'https://map.baidu.com/'; // 替换为实际的地图嵌入链接
            mapIframe.width = '100%';
            mapIframe.height = '100%';
            mapIframe.frameBorder = '0';
            mapIframe.style.border = 'none';
            
            // 清空占位符内容并添加iframe
            mapPlaceholder.innerHTML = '';
            mapPlaceholder.appendChild(mapIframe);
        });
    }
});

// 表单输入动画效果
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        // 初始检查是否有值
        if (input.value) {
            input.classList.add('has-value');
        }
        
        // 输入时添加类
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // 焦点事件
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});
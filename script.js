let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.slide').length;
        const slider = document.getElementById('slider');
        const thumbnailContainer = document.getElementById('thumbnailContainer');
        const slides = document.querySelectorAll('.slide img');
        
        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentIndex);
            });
        }
        
        function createThumbnails() {
            for (let i = 0; i < totalSlides; i++) {
                let thumb = document.createElement('img');
                thumb.src = slides[i].src;
                thumb.classList.add('thumbnail');
                if (i === currentIndex) thumb.classList.add('active');
                thumb.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                thumbnailContainer.appendChild(thumb);
            }
        }
        
        function autoSlide() {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            }, 5000);
        }
        
        createThumbnails();
        autoSlide();

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
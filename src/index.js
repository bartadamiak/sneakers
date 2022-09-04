
const mainPhotos = document.querySelector('.main-photos');
const smallPhotos = document.querySelectorAll('.small-photos img');

smallPhotos.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.choosen').classList.remove('choosen')
        element.classList.add('choosen');
        
        let src = element.src

        if (src.includes('1')) {
            mainPhotos.src = 'images/1.jpg'
        }

        if (src.includes('2')) {
            mainPhotos.src = 'images/2.jpg'
        }

        if (src.includes('3')) {
            mainPhotos.src = 'images/3.jpg'
        }

        if (src.includes('4')) {
            mainPhotos.src = 'images/4.jpg'
        }

    })
});
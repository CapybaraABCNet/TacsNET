const im = [
    "https://i.pinimg.com/736x/31/9d/08/319d084e36983e51b5ca7447322dea68.jpg",
    "https://i.pinimg.com/736x/aa/14/54/aa1454c0bb69498c763f791352ddd274.jpg",
    "https://i.pinimg.com/736x/d3/d9/4f/d3d94f32b3f034d71ccff7ad3978eab8.jpg",
    "https://img.gazeta.ru/files3/727/18387727/shutterstock_1856255107-pic_32ratio_900x600-900x600-27878.jpg",
    "https://i.pinimg.com/736x/3c/f2/91/3cf2910a4701f54f2f35ff3015e3aa5f.jpg",
    "https://image.petmd.com/files/inline-images/dachshund-4.jpg?VersionId=bhrmbaqTi06GazW7eI8psvESrb0XlQH6"
];

function getRandom() {
    const randomIm = Math.floor(Math.random() * im.length);
    return im[randomIm]; 
}


document.getElementById('randomImage').src = getRandom();



const facts = [
    "Таксы могут быть отличными домашними питомцами, но их содержание требует внимания к их особенностям и потребностям.",
    " Таксы не требуют много места, но им нужно достаточно пространства для игры и передвижения. Убедитесь, что у вас есть безопасное место для их активности.",
    "Несмотря на свои короткие ноги, таксы нуждаются в регулярных физических нагрузках. Прогулки и игры помогут поддерживать их здоровье и предотвратить проблемы с весом.",
    "Регулярные визиты к ветеринару важны для предотвращения заболеваний, особенно связанных с позвоночником. Следите за весом вашей собаки и избегайте избыточной нагрузки.",
    "Таксы могут быть упрямыми, поэтому важно начать обучение с раннего возраста. Используйте положительное подкрепление, чтобы мотивировать их."

];

        document.getElementById('factButton').addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * facts.length);
            document.getElementById('factDisplay').innerText = facts[randomIndex];
        });
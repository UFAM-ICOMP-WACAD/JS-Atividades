const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = ['perfil1.jpg', 'Perfil.jpg', 'cmm.png', 'Neil$Eva.png', 'app.png'];
const imageAlt = ['imagem1', 'imagem2', 'imagem3', 'imagem4', 'imagem5']

/* Declaring the alternative text for each image file */

/* Looping through images */

for(i = 0; i < imageNames.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageNames[i]);
    newImage.setAttribute('alt', imageAlt[i]);
    newImage.setAttribute('id', i);
    newImage.setAttribute('onclick', 'imageView(this)');
    thumbBar.appendChild(newImage);

}

function imageView(element)
{
    displayedImage.setAttribute('src', element.src);
}

/* Wiring up the Darken/Lighten button */
function switchClass()
{
    if (btn.className == "dark")
    {
        btn.setAttribute("class", 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else
    {
        btn.setAttribute("class", 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }

}

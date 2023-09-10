let myImage = document.querySelector('img');

myImage.onclick = function() {
 let imgSrc = myImage.getAttribute('src')
 if(imgSrc == 'img.jpeg'){
    myImage.setAttribute('src','jpeg-home.jpg');
 } else{
    myImage.setAttribute('src','img.jpeg');
 }
}

/*
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/img2.jpeg');{
      myImage.setAttribute('src','images/img2.jpeg');
    } else {
        myImage.setAttribute('src','images/img1.jpeg');
    }*/   


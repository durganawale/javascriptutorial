document.title="test page"
'test page'
document.body.style="black"
'black'
document.body.style.color="red"
'red'
let h1Elmt=document.createElement("h1")
undefined
h1Elmt.style.textAlign = "center"
'center'
h1Elmt.innerText = "this is My Faist Web Page"
'this is My Faist Web Page'
document.body.appendChild(h1Elmt)

<h1 style=​"text-align:​ center;​">​this is My Faist Web Page​</h1>​

document.body.style.backgroundColor="#282c34";
'#282c34'
let headding=document.createElement("h1");
undefined
headding.textContent="Welcome To My Dinamic Web Page";
'Welcome To My Dinamic Web Page'
headding.style.color="white";
'white'
headding.style.textAlign="center";
'center'
headding.style.fontSize="2.5rem";
'2.5rem'
headding.style.marginTop="20px";
'20px'
document.body.appendChild(headding);

<h1 style=​"color:​ white;​ text-align:​ center;​ font-size:​ 2.5rem;​ margin-top:​ 20px;​">​Welcome To My Dinamic Web Page​</h1>​
let img = document.createElement("img");
img.src="https://static.vecteezy.com/system/resources/thumbnails/049/855/771/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg" ;
img.style.width="100vW";
'100vW'
img.style.height="50vh";
'50vh'
img.style.objectFit="cover";
'cover'
img.style.display="block";
'block'
img.style.margin="0 auto";
'0 auto'
document.body.appendChild(img);
<img src=​"https:​/​/​static.vecteezy.com/​system/​resources/​thumbnails/​049/​855/​771/​small/​nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg" style=​"width:​ 100vw;​ height:​ 50vh;​ object-fit:​ cover;​ display:​ block;​ margin:​ 0px auto;​">​
let para= document.createElement("p");
undefined
para.textContent="This page is fully created using Javascript in the consol!";
'This page is fully created using Javascript in the consol!'
para.style.color="#ddd"
'#ddd'
para.style.fontSize="1.2rem";
'1.2rem'
para.style.textAlign="center";
'center'
para.style.maxWidth="600px";
'600px'
para.style.margin="20px auto";
'20px auto'
para.style.lineHeight="1.6";
'1.6'
document.body.appendChild(para);
<p style=​"color:​ rgb(221, 221, 221)​;​ font-size:​ 1.2rem;​ text-align:​ center;​ max-width:​ 600px;​ margin:​ 20px auto;​ line-height:​ 1.6;​">​This page is fully created using Javascript in the consol!​</p>​
let button=document.createElement("button")
undefined
button.textContent="Click Me";
'Click Me'
button.style.display="block"
'block'
button.style.margin="20px auto"
'20px auto'
button.style.padding="12px 24px";
'12px 24px'
button.style.fontSize="1.2rem";
'1.2rem'
button.style.border="none"
'none'
button.style.bordearRadius="8px";
'8px'
button.style.cursor="pointer";
'pointer'
button.style.backgroundColor="#ff9800";
'#ff9800'
button.style.color="white"
'white'
button.style.boxShadow="2px 2px 10px rgba(0,0,0,0.3)";
'2px 2px 10px rgba(0,0,0,0.3)'
document.body.appendChild(button);
<button style=​"display:​ block;​ margin:​ 20px auto;​ padding:​ 12px 24px;​ font-size:​ 1.2rem;​ border-width:​ medium;​ border-style:​ none;​ border-color:​ currentcolor;​ border-image:​ none;​ cursor:​ pointer;​ background-color:​ rgb(255, 152, 0)​;​ color:​ white;​ box-shadow:​ rgba(0, 0, 0, 0.3)​ 2px 2px 10px;​">​Click Me​</button>​
button.addEventListener("mouseover",function () {
    button.style.backgroundColor="#65100";
});
button.addEventListener("mouseout",function(){ button.style.backgroundColor="#ff9800";});
let card=document.createElement("div");
undefined
card.style.width="300px"
'300px'
card.style.margin="20px auto";
'20px auto'
card.style.padding="20px";
'20px'
card.style.borderRadius="12px";
'12px'
card.style.boxShadow="0 5px 15px  rgb (0,0,0,0.2)";
'0 5px 15px  rgb (0,0,0,0.2)'
let card=document.createElement("div");
undefined
card.style.width="300px"
'300px'
card.style.margin="20px auto";
'20px auto'
card.style.padding="20px";
'20px'
card.style.borderRadius="12px";
'12px'
card.style.boxShadow="0 5px 15px  rgb (0,0,0,0.2)";
'0 5px 15px  rgb (0,0,0,0.2)'
card.style.backgroundColor="#333";
'#333'
card.style.textAlign="center";
'center'
document.body.appendChild(card);
<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ border-radius:​ 12px;​ background-color:​ rgb(51, 51, 51)​;​ text-align:​ center;​">​</div>​
let cardTitle=document.createElement("h2");
undefined
cardTitle.textContent="Javascriptn Rocks";
'Javascriptn Rocks'
cardTitle.style.color="#ff9800";
'#ff9800'
document.body.appendChild(cardTitle)
<h2 style=​"color:​ rgb(255, 152, 0)​;​">​Javascriptn Rocks​</h2>​
let cardText=document.createElement("p);
VM6009:1 Uncaught SyntaxError: Invalid or unexpected token (at VM6009:1:37)
let cardText=document.createElement("p");
undefined
cardText.textContent="This Card Was Created Using Javascript!";
'This Card Was Created Using Javascript!'
cardText.style.color="white";
'white'
cardText.style.fontSize="1 rem";
'1 rem'
cardText.style.marginTop="10px";
'10px'
document.body.appendChild(cardText);
<p style=​"color:​ white;​ margin-top:​ 10px;​">​This Card Was Created Using Javascript!​</p>​
document.body.style.display="flex";
'flex'
document.body.style.flexDirection="column";
'column'
document.body.style.alignItems="center";
'center'
document.body.style.justifyContent="center"
'center'
document.body.style.height="100vh";
'100vh'
document.body.style.fontFamily="Arial,sans-serif";
'Arial,sans-serif'



let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");
let imgList = document.getElementById("imgList");


addButton.addEventListener("click",()=>{
  fetch("https://dog.ceo/api/breeds/image/random")
  .then ((response)=> {
    if (response.status && response.status) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((data)=>{
     const image=`<img src="${data.message}"/>`;
     document.getElementById("imgList").innerHTML="<li>"+image+"</li>"
  })  
})
.catch((error) => {
    // Handle the error
    console.log(error);
  });
  
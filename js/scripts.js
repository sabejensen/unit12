// what is the path to the JSON file?
const apiURL = "../hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    let myPage = document.getElementById('card-container')
    
    console.log(myList.length)

    let i;
    for (i = 0; i < myList.length; i++) {

      let mySection = document.createElement('section')

      let myImg = document.createElement('img')
      myImg.src = myList[i].photo

      let myFigCaption = document.createElement('figcaption')
      myFigCaption.textContent = myList[i].name

      let myFigure = document.createElement('figure')
      myFigure.appendChild(myImg)
      myFigure.appendChild(myFigCaption)

      let myAddress1 = document.createElement('p')
      let myAddress2 = document.createElement('p')
      let myPhone = document.createElement('p')
      myAddress1.textContent = myList[i].address[0]
      myAddress2.textContent = myList[i].address[2]
      myPhone.textContent = myList[i].phone

      let myIcon1 = document.createElement('i')
      let myIcon2 = document.createElement('i')
      myIcon1.classList.add('icon', 'ion-md-car')
      myIcon2.classList.add('icon', 'ion-md-call')

      let mySpan1 = document.createElement('span')
      let mySpan2 = document.createElement('span')

      let myInfoDiv = document.createElement('div')
      myInfoDiv.classList.add('info-div')

      mySpan1.appendChild(myIcon1)
      mySpan1.appendChild(myAddress1)
      mySpan1.appendChild(myAddress2)

      mySpan2.appendChild(myIcon2)
      mySpan2.appendChild(myPhone)

      myInfoDiv.appendChild(mySpan1)
      myInfoDiv.appendChild(mySpan2)

      mySection.appendChild(myFigure)
      mySection.appendChild(myInfoDiv)


      
      
      myPage.appendChild(mySection)

    }

    
    
    
    
    
}); //end of "then" fat arrow function
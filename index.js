
// read more buttons for home page
let noOfCharac = 120;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    if ( content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else {
        let displayText = content.textContent.slice (0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class = "dots">. . .</span>
        <span class = "hide more">${moreText}</span>`;
    }
});

// reade more for popular////////////////////////
let noOfCharacp = 50;
let contentp = document.querySelectorAll(".contentz");
contentp.forEach(contentz => {
    if ( contentz.textContent.length < noOfCharacp){
        contentz.nextElementSibling.style.display = "none";
    }
    else {
        let displayText = contentz.textContent.slice (0,noOfCharacp);
        let moreText = contentz.textContent.slice(noOfCharacp);
        contentz.innerHTML = `${displayText}<span class = "dots">. . .</span>
        <span class = "hide more">${moreText}</span>`;
    }
});

function readMore(btn) {
    let catering = btn.parentElement;
    catering.querySelector(".dots").classList.toggle("hide");
    catering.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

//---for the image filter tag seelctor
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

  for( let i = 0; i < list.length; i++) {
      list[i].addEventListener('click', function() {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            this.classList.add('active');
            
            let dataFilter = this.getAttribute('data-filter');

            for (let k=0; k<itemBox.length; k++){
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');

                if( itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                        itemBox[k].classList.remove('hide');
                        itemBox[k].classList.add('active');
                }
            }

      })
  }


  //---------popup
  function togglePopup() {
      document.getElementById("popup-1").classList.toggle("active");
  }

  /*--------------body mass index-----------*/
  let buttan = document.getElementById('btn');

  buttan.addEventListener('click', () => {
      const heightbm = parseInt(document.getElementById('height').value);
      const weightbm = parseInt(document.getElementById('weight').value);
      const resultbm = document.getElementById('output');
      let heightbm_status=false, weightbm_status=false;
      
      if(heightbm === '' || isNaN(heightbm) || (heightbm <= 0)){
          document.getElementById('height_error').innerHTML = 'Please Provide a valid Height';
      }else{
          document.getElementById('height_error').innerHTML = '';
          heightbm_status=true; 
      }

      
      if(weightbm === '' || isNaN(weightbm) || (weightbm <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please Provide a valid Weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weightbm_status=true; 
    }

    if(heightbm_status && weightbm_status) {
        const bmi = (weightbm / ((heightbm*heightbm)/10000)).toFixed(2);

        if(bmi < 18.6) {
            resultbm.innerHTML = 'Underweight : ' + bmi + " " + ' &#128128';
        }else if(bmi >= 18.6 && bmi < 24.9) {
            resultbm.innerHTML = 'Normal weight : ' + bmi + " " + ' &#128524';
        }else {
            resultbm.innerHTML = "Panda-size : " + bmi + " " + ' &#128060';
        }
    }
  });

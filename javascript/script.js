function togglePopup() {
    var popup = document.getElementById('popupForm');
    var overlay = document.getElementById('overlay');
    popup.classList.add('show-popup');
    overlay.style.display = 'block';
    setTimeout(function () {
      overlay.style.opacity = '1';
    }, 10);
  }

  function closePopup() {
    var popup = document.getElementById('popupForm');
    var overlay = document.getElementById('overlay');
    popup.classList.remove('show-popup');
    overlay.style.opacity = '0';
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 300); // Ensure the overlay is hidden after the animation
  }

  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted!');
    closePopup();
  });


      function whatsapp(){
      const  name = document.getElementById("name").value;
      const  email = document.getElementById("email").value;
      const  phone = document.getElementById("phone").value;
      const  message = document.getElementById("message").value;
       
      const  url = "https://wa.me/9315211973?text="
      +"*Name :* "+name+"%0a"
      +"*Email :* "+email+"%0a"
      +"*Phone :* "+phone+"%0a"
      +"*Message :* "+message;
       
      window.open(url,'_blank').focus();
      }
      function toggle(){
          whatsapp();
      }
      const btn = document.getElementById('btn')
      btn.addEventListener('click',toggle)

      
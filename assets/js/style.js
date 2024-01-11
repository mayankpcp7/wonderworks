
        let mybutton = document.getElementById("topBtn");
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
       

      // JavaScript to handle the responsive navigation menu
      function show() {
        document.getElementById("navMenu").classList.add("!start-0");
        document.body.classList.add("overflow-hidden");
      }

      function hide() {
        document.getElementById("navMenu").classList.remove("!start-0");
        document.body.classList.remove("overflow-hidden");
      }
   
    
    function mydata() {
      let a = document.getElementById("n1").value;
      let b = document.getElementById("n2").value;
      let c = document.getElementById("n3").value;
      let d = document.getElementById("n4").value;
      let e = document.getElementById("n5").value;

      if (a == "" || b == "" || c == "" || d == "" || e == "") { event.preventDefault()
        alert("Fill all informations");
        return false;
      }
      else {
        true;
      }
    }
  document.getElementById('currentYear').innerText = new Date().getFullYear();
 


      
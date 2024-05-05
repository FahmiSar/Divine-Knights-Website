      // FUNCTIONS
      function updatePageContent(){
        var hasVisitedValimar = localStorage.getItem("visitedValimar");
        var hasVisitedOrdine = localStorage.getItem("vistedOrdine");
        var hasVistedTestaRossa = localStorage.getItem("vistedTestaRossa");
        var hasVisitedZector = localStorage.getItem("visitedZector");
        var hasVisitedArgrion = localStorage.getItem("vistedArgrion");
        var hasVisitedIshmelga = localStorage.getItem("visitedIshmelga");
        var hasVisitedElPrado = localStorage.getItem("visitedElPrado");

        var ordineLink = document.querySelector('a[href = "HTML Files/About Ordine.html"]');
        var testaRossaLink = document.querySelector('a[href = "HTML Files/About Testa Rossa.html"]');
        var argreionLink = document.querySelector('a[href = "HTML Files/About Argreion.html"]');
        var zectorLink = document.querySelector('a[href = "HTML Files/About Zector.html"]');
        var elPradoLink = document.querySelector('a[href = "HTML Files/About El Prado.html"]');
        var ishmelgaLink = document.querySelector('a[href = "HTML Files/About Ishmelga.html"]');
        
        var greatOneDiv = document.querySelector(".great-one");

        if(hasVisitedValimar){
          ordineLink.style.display = 'inline';
        }

        if(hasVisitedOrdine){
          testaRossaLink.style.display = "inline";
        }

        if(hasVistedTestaRossa){
          zectorLink.style.display = "inline";
        }

        if(hasVisitedZector){
          argreionLink.style.display = "inline";
        }

        if(hasVisitedArgrion){
          ishmelgaLink.style.display = "inline";
        }

        if(hasVisitedIshmelga){
          elPradoLink.style.display = "inline";
        }

        if(hasVisitedElPrado){
          greatOneDiv.style.display = "inline";
        }

      }


      // EVENTS //
      // this event will run the moment all DOM content has been loaded
      document.addEventListener("DOMContentLoaded", function(){
        updatePageContent();
      });
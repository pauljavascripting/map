  
    window.onload = function(e){

        loadData(0);

       setHouseType(0);

       defineHouses();

       moveCar();

       showInfoStart(null);

       // close on click
       document.getElementsByClassName('houseInfo-section')[0].addEventListener('click', hideInfo);

       // hide
    //    document.addEventListener('click', hideDander);

       // resize
       document.addEventListener('resize',enableNavButtons);

       enableNavButtons();

   };
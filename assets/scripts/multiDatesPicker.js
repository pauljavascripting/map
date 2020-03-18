$( function() {
    $( "#visitDate" ).multiDatesPicker({
      dateFormat: "dd/mm/yy",
      showButtonPanel: true,
      addDisabledDates: ['31/08/2020','25/05/2020'],
      minDate: new Date(2020,04,01),
      maxDate: new Date(2020,11,01),
      maxPicks: 3,
      beforeShowDay: $.datepicker.noWeekends
  });
});
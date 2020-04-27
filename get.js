$.getJSON("https://spreadsheets.google.com/feeds/list/16ksjbTPL11gn5QFxKHXtKiFVa3CLKOhACn7YTwjKWCg/3/public/values?alt=json", function(dataT) {

  var sheetData = dataT.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {

    var a1 = dataT.feed.entry[i]['gsx$areaorigenfuente']['$t'];
    var a2 = dataT.feed.entry[i]['gsx$actividadessuceso']['$t'];
    var a3 = dataT.feed.entry[i]['gsx$subprocesouoperacióndetalles']['$t'];

    document.getElementById('datos').innerHTML += (

      '<tr>' +
      '<td>' +
      a1 +
      '</td>' +
      '<td>' +
      a2 +
      '</td>' +
      '<td>' +
      a3 +
      '</td>' +
      '</tr>'
    );
  }
});

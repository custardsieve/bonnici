$(document).ready(function () {
    // Sheetrock.js 1.0 Example 2
    // https://chriszarate.github.io/sheetrock/
    // Let’s look at switch hitters and rank them by batting average. 
    // We’ll only grab the columns we care about and fetch just the 
    // top ten to help focus the reader’s attention.
    // Define spreadsheet URL.
    var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';
    var david = 'https://docs.google.com/spreadsheets/d/17UQkaIPaq023wtG06CR31-fxG4em3LRp2Pas6TgsQNc/edit#gid=0'
        // Load top ten switch hitters.
    $('#cooling-fans').sheetrock({
        url: david
        , query: "select A,B where B > 0 "
        , fetchSize: 100
    });
    $('#dispenser').sheetrock({
        url: david
        , query: "select A,C where C > 0 "
        , fetchSize: 100
    });
})
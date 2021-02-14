//Import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
   //Clear out any existing data.
   tbody.html(""); 

   //Loop through each object in data
   //append a row and cells for each value in row.
   data.forEach((dataRow)=>{
      // Append row to the table body.
      let row = tbody.append("tr");

      //Loop through each field in the dataRow and add 
      //each value as a table cell (td)
      Object.values(dataRow).forEach((val) =>{
         let cell = row.append("td");
         cell.text(val);
         }
      );
   });

   function handleClick(){
      //Grab datetime value from the filter
      let date = d3.select("#datetime.").property("value"); 
      let filteredData = tableData;

      //Check to see if a date was entered and filter the
      //data using that date
      if(date){
         //Apply 'filter' to the table data to only keep the
         // rows where the 'datetime' value matches the filter vaue
         filteredData = filteredData.filter(row => row.datetime === date);
      };

      //Rebuld table using the filtered data
      //@NOTE: If no date was entered, then filteredData will
      //just be the original tableData.
      buildTable(filteredData);
   }

   //Attach event to listen for the form button
   d3.selectAll("#filter-btn").on("click",handleClick);

   //Buld the table when the page loads.
   buildTable(tableData);
}
var keyword_clustering_data = "/keyword_clustering_data"

d3.json(keyword_clustering_data).then((importedData) => {
    var click_rate = importedData.CTR;
    var clicks = importedData.Clicks;
    var cluster_name = importedData["Cluster Name"];
    var cluster_number = importedData["Cluster Number"];
    var impressions = importedData.Impressions;
    var position = importedData.Position;
    var top_queries = importedData["Top queries"];
    console.log(importedData);

    
    // var myArray = [
    //     {'name':Object.values(click_rate)[0], 'age':clicks, 'birthdate':impressions},
    //     {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    //     {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    //     {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    //     {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    //     {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
    // ]
    
    // buildTable(myArray)



    // function buildTable(data){
    //     var table = document.getElementById('myTable')

    //     for (var i = 0; i < data.length; i++){
    //         var row = `<tr>
    //                         <td>${data[i].name}</td>
    //                         <td>${data[i].age}</td>
    //                         <td>${data[i].birthdate}</td>
    //                   </tr>`
    //         table.innerHTML += row


    //     }
    // }



    

    
});









    


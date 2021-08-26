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

    
});









    


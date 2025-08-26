# SEO Keyword Clusters (Legacy)

This repository contains the original 4-year-old application using Machine Learning to automatically create clusters of queries from Google Search Console (GSC). The clusters are also named automatically by the ML model. The results are being displayed with Google Data Studio and Tableau. Note: the current data set is from an NDIS company, so the keywords are related to disability services.

**Note**: This version is now legacy. For the upgraded Streamlit-based application with enhanced features, visit the the live app at [https://seo-cluster-ai.streamlit.app/](https://seo-cluster-ai.streamlit.app/).

The repository can be downloaded and you can use your own dataset. However, you will need to make a few steps:
- Your website needs to be connected to Google Search Console
- You need to create a new Google Spreadsheet (named 'keyword_clustering' in our case, feel free to use a different name)
- Google credentials JSON file (named 'default.json' in our Jupyter Notebook, feel free to choose a different name) and Google Search Console "Queries.csv" to be added / replaced in the repository.

Here is a guide to create the Google Spreadsheet and access the credentials (to be kept locally!): [https://towardsdatascience.com/google-sheets-pandas-dataframe-6b8666f9cf6](https://towardsdatascience.com/google-sheets-pandas-dataframe-6b8666f9cf6)


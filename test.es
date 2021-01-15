GET /bri_corpu_users/_search

GET /bri_corpu_users/_search
{
    "from": 0,
    "size": 100,
    "sort" : [{ "name.keyword" : "asc" }]
}

GET /bri_corpu_roles/_search
{
    "from": 0,
    "size": 2,
    "query": {
        "wildcard": {
            "name": "*IL*"
        }
        // atch: {"name": searchText.trim()}
    }
}






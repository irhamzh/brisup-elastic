GET /bri_corpu_users/_search
{
  "from": 0,
  "size": 10,
  "query": {
    "bool": {
      "must": [
        {
          "terms": {
            "division.keyword": [
              "All"
            ]
          }
        }
        // {
        //   "wildcard": {
        //     "name": "*Am*"
        //   }
        // },{
        //   "wildcard": {
        //     "email": "*sss*"
        //   }
        // }
      ]
    }
  }
}


GET /bri_corpu_users/_search
{
  "from": 0,
  "size": 100,
  "sort": [
    {
      "name.keyword": "asc"
    }
  ]
}

GET /bri_corpu_roles/_search
{
    "from": 0,
    "size": 2,
    "query": {
            "bool": {
              "must": [
              ]}
        // "wildcard": {
        //     "name": "*IL*"
        // }
        // atch: {"name": searchText.trim()}
    }
}






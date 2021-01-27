GET /bri_corpu_users/_doc/GCAtXZrB8OPtjkulp8VYfAjJE0m1

{
  "from": 0,
  "size": 10,
  "query": {
    "bool": {
      "must": [
        {
          "wildcard": {
            "email":"*budi*"
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


GET /bri_corpu_fa_payments/_search
{
  "size": 10,
  "from": 0,
  "sort": [
    {
      "createdAt": "desc"
    }
  ],
  "query": {
    "bool": {
      "must": [
        {
          "wildcard": {
            "seksi": "*general*"
          }
        },
        {
          "wildcard": {
            "seksi": "*affair*"
          }
        }
      ]
    }
  }
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






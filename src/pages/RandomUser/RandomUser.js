import { Avatar, Typography, Button, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function RandomUser() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //on page load
    getData();
  }, []); //if you don't put the empty array here, you will get ALL the name fields overwriting.

  function getData() {
    setLoading(true);
    //This is a [GET] method as default
    fetch("https://randomuser.me/api/")
      .then(x => x.json())
      .then(response => {
        setLoading(false);
        setUsers(response.results[0]); //to get 1 user
      });
  }

  return (
    <div>
      <Button variant="contained" onClick={getData}>
        Refresh Person
      </Button>
      <div>RandomUser</div>
      {loading == true 
        ? (
            <div>
                <Skeleton variant='circular' width={200} height={200} />
                <br />
                <Skeleton height={20} />
                <br />
                <Skeleton height={20} />
                </div>
        ) 
        : (
            <>
                <Avatar
                    sx={{ height: "200px", width: "200px" }}
                    src={users?.picture?.thumbnail}
                    alt="api image"
                />
                <br />
                <Typography>
                    {users?.name?.title} {users?.name?.first} {users?.name?.last}
                </Typography>
                <br />
                <Typography>{users?.location?.postcode}</Typography>

            </>

        )
      }
    </div>
  );
}

//jsonformatter.org to format json objects

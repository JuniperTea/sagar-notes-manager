import { Skeleton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJoke } from "../../data/jokeSlice";

export default function Jokes() {
  const dispatch = useDispatch();
  const jokeSetup = useSelector(store => store.joke.setup);
  const jokePunchLine = useSelector(store => store.joke.punchLine);
  const loadingJoke = useSelector(store => store.joke.loadingJoke);

  function loadJoke() {
    dispatch(getJoke());
  }

  function delayPunchline(){
    setTimeout(() => {
     return jokePunchLine;

    }, 1000);
  }

  return (
    <div>
      jokes
      <div>
        <button onClick={loadJoke}>Load Joke</button>
        <hr />
        {loadingJoke ? (
          <Skeleton height={50} />
        ) : (
          <div>
            <p>{jokeSetup}</p>
            <p>{jokePunchLine}</p>
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}

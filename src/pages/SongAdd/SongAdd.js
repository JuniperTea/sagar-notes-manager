import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addSong } from "../../data/songSlice";

export default function SongAdd() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  function save(formData) {
    //add song to redux state.
    dispatch(addSong(formData));
  }
  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <TextField label="Name" {...register("songName")} />
        <TextField label="rating" {...register("rating")} />
        <br />
        <br />
        <button variant="contaned" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

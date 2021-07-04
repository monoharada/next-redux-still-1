import { createAsyncThunk } from "@reduxjs/toolkit";

const sleep = (microsecond: number) =>
  new Promise((resolve) => setTimeout(resolve, microsecond));

export const asyncIncrementCounter = createAsyncThunk<number, number>(
  "counter/asyncIncrementCounter",
  async (args: number): Promise<number> => {
    await sleep(1000);

    const randNum = Math.floor(Math.random() * Math.floor(10));

    if (randNum === 0 || randNum === 5 || randNum === 1) {
      return Promise.reject(new Error("asyncIncrementCounter error"));
    }

    return args;
  }
);

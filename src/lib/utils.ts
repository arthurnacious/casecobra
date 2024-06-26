import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitArray<T>(array: Array<T>, numParts: number) {
  const res: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!res[index]) {
      res[index] = [];
    }
    res[index].push(array[i]);
  }

  return res;
}

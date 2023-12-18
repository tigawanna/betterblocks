//  check if an object has an empty values
export function checkIfEmpty<T = unknown>(obj: T) {
  for (const key in obj) {
    if (typeof obj[key as keyof T] === "string" && obj[key as keyof T] === "") {
      // console.log(key," string field  is empty")
      return { empty: true, value: key + " field of type string is empty" };
    }
    if (typeof obj[key as keyof T] === "number" && obj[key as keyof T] === 0) {
      // console.log(key, "  number field is empty")
      return { empty: true, value: key + " field of type number is empty" };
    }
    if (obj[key as keyof T] instanceof File && !obj[key as keyof T]) {
      // console.log(key,"  file field is empty")
      return { empty: true, value: key + " field of type File is empty" };
    }
  }
  return { empty: false, value: "fields not empty" };
}

import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  description: z.string({ required_error: "Description is required" }),
  category: z.string({ required_error: "Category is required" }),
  /* price: z.number({ required_error: "Price is required" }), */
});


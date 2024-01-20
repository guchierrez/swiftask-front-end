import { z } from "zod";

export const TaskFormSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter a title before submitting.")
    .max(30, "Title must have less than 30 characters."),
  description: z
    .string()
    .min(1, "Please enter a description before submitting.")
    .max(50, "Description must have less than 150 characters."),
});

export type TTaskFormSchema = z.infer<typeof TaskFormSchema>;

import { z } from "zod";

export const landSchema = z.object({
    title: z.string({
      required_error: 'Please enter a title',
    }),
    desc: z.string({
        required_error: 'Please enter the property description',
      }),
    type: z.string({
        required_error: 'Please enter the property type',
    }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    }),
    dimensions: z.string({
        required_error: 'Please enter the dimensions',
    }),
    area: z.number({
        required_error: "Please enter the area"
    }),
    pictures: z
    .instanceof(File, { message: 'Please upload a file.'})
    .refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
    .array()
  })

  export const propertySchema = z.object({
    title: z.string({
      required_error: 'Please enter a title',
    }),
    desc: z.string({
        required_error: 'Please enter the property description',
      }),
    type: z.string({
        required_error: 'Please enter the property type',
    }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number",
    }),
    area: z.number({
        required_error: "Please enter the area"
    }),
    beds: z.number({
      required_error: "Please enter the number of bedrooms"
  }),
  baths: z.number({
    required_error: "Please enter the number of bathrooms"
}),
    pictures: z
    .instanceof(File, { message: 'Please upload a file.'})
    .refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
    .array()
  })
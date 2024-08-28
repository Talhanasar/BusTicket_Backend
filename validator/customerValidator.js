const z = require('zod');

const seatBookingSchema = z.object({
    seatBooked: z.array(z.string()).nonempty({ message: "At least one seat must be booked" }),
    name: z.string().min(3, { message: "Name should be more than 3 characters" }),
    phone: z.string({required_error:"Name is required"})
        .trim()
        .min(11, { message: "Phone number must be exactly 11 digits" })
        .max(11, { message: "Phone number must be exactly 11 digits" })
        .regex(/^01/, { message: "Enter a valid Bangladesh number" }),
    email: z
        .string()
        .trim()
        .email({message:"Invalid email address"})
        .min(10,{message:"Email must be at least of 10 characters"})
        .max(155,{message:"Email must not be more than 155 characters"})
        .optional(),
});

module.exports = seatBookingSchema;

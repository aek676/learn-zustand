import * as z from 'zod'

export const weddingInvitationSchema = z.object({
    firstName: z.string()
        .min(3, { message: "El nombre debe de ser al menos de 3 caracteres" })
        .max(50, { message: "El nombre debe de ser máximo de 50 caracteres" }),
    lastName: z.string()
        .min(3, { message: "El apellido debe de ser al menos de 3 caracteres" })
        .max(50, { message: "El apellido debe de ser máximo de 50 caracteres" }),
    guestNumber: z.number()
        .min(1, { message: "El número de invitados debe ser al menos 1" })
        .max(5, { message: "El número de invitados debe ser máximo 5" }),
    eventDate: z.string()
        .refine(dob => new Date(dob).toString() !== 'Invalid Date', {
            message: "La fecha del evento es inválida",
        }),
    eventTime: z.iso.time({ message: "El tiempo es obligatorio" }),
    isComing: z.enum(['yes', 'no'], { message: "Debe de especificar si asistirá o no" }),
});
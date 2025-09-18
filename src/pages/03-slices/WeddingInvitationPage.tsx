import { SubmitHandler, useForm } from 'react-hook-form';
import { WhiteCard } from '../../components';
import { useWeedingInvitation } from '../../hooks/useWeddingInvitation';
import { zodResolver } from '@hookform/resolvers/zod';
import { weddingInvitationSchema } from '../../schemas/weddingInvitation.schema';

type Inputs = {
  firstName: string;
  lastName: string;
  guestNumber: number;
  isComing: 'yes' | 'no';
  eventTime: string;
  eventDate: string;
}

export const WeddingInvitationPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(weddingInvitationSchema)
  });

  const {
    firstName, lastName, guestNumber, isComing, eventTime, eventDate,
    handleOnChangeFirstName, handleOnChangeLastName, handleOnChangeGuestNumber,
    handleOnChangeIsComing, handleOnChangeEventTime, handleOnChangeEventDate,
  } = useWeedingInvitation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Invitación de Boda</h1>
      <p>Zustand segmentado en slices</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Primer Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Primer Nombre"
                    {...register("firstName", { value: firstName, onChange: handleOnChangeFirstName })}
                  />
                  {errors.firstName?.message && <p className='text-red-600'>{errors.firstName?.message}</p>}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Apellido"
                    {...register("lastName", { value: lastName, onChange: handleOnChangeLastName })}
                  />
                  {errors.lastName?.message && <p className='text-red-600'>{errors.lastName?.message}</p>}
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                ¿Cuántos invitados traerá?
              </label>
              <input
                type="number"
                id="guestNumber"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                {...register("guestNumber", { value: guestNumber, onChange: handleOnChangeGuestNumber, valueAsNumber: true })}
              />
              {errors.guestNumber?.message && <p className='text-red-600'>{errors.guestNumber?.message}</p>}
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Fecha de evento
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register("eventDate", { value: eventDate, onChange: handleOnChangeEventDate })}
                  />
                  {errors.eventDate?.message && <p className='text-red-600'>{errors.eventDate?.message}</p>}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Hora del evento
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register("eventTime", { value: eventTime, onChange: handleOnChangeEventTime })}
                  />
                  {errors.eventTime?.message && <p className='text-red-600'>{errors.eventTime?.message}</p>}
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                ¿Tu también vendrás?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="isComingYes"
                    className="h-5 w-5"
                    value='yes'
                    {...register("isComing", { value: isComing, onChange: handleOnChangeIsComing })}
                  />
                  <label
                    htmlFor="isComingYes"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="isComingNo"
                    className="h-5 w-5"
                    value="no"
                    {...register("isComing", { value: isComing, onChange: handleOnChangeIsComing })}
                  />
                  <label
                    htmlFor="isComingNo"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
              {errors.isComing?.message && <p className='text-red-600'>{errors.isComing?.message}</p>}
            </div>

            <div>
              <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Enviar
              </button>
            </div>
          </form>
          <div>{JSON.stringify(watch(), null, 2)}</div>
        </div>
      </WhiteCard>
    </>
  );
};
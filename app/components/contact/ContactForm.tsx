import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[min(100%,_550px)] mr-auto bg-white-lg space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            First Name*
          </label>
          <input
            {...register("firstName", { required: true })}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Company Name*
        </label>
        <input
          {...register("companyName", { required: true })}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Email Address*
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Phone Number*
        </label>
        <input
          type="tel"
          {...register("phone", { required: true })}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Subject*
        </label>
        <select
          {...register("subject", { required: true })}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        >
          <option value="general-inquiry">General Inquiry</option>
          <option value="complaints">Complaints</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={3}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary text-white py-2 hover:bg-[#b98a3a] transition cursor-pointer"
      >
        SUBMIT
      </button>
    </form>
  );
}

import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  aircraftType: string;
  partNumber: string;
  quantity: number;
  priority: string;
  description: string;
  fileMain: FileList;
  fileAdditional: FileList;
  confirmDetails: boolean;
  agreeTerms: boolean;
};

export default function RFQForm() {
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
      className="max-w-md mx-auto bg-white-lg space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name*</label>
          <input
            {...register("firstName", { required: true })}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">Required</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            {...register("lastName")}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Company Name*</label>
        <input
          {...register("companyName", { required: true })}
          className="w-full border border-[#dfdfdf] p-2 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email Address*</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border border-[#dfdfdf] p-2 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Phone Number*</label>
        <input
          type="tel"
          {...register("phone", { required: true })}
          className="w-full border border-[#dfdfdf] p-2 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Country / Region*</label>
        <select
          {...register("country", { required: true })}
          className="w-full border border-[#dfdfdf] p-2 bg-grey"
        >
          <option value="">-- Select Country/Region --</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">
            Aircraft Type / Model
          </label>
          <input
            {...register("aircraftType")}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Part Number(s)</label>
          <input
            {...register("partNumber")}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Quantity Required</label>
          <input
            type="number"
            {...register("quantity")}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Priority</label>
          <select
            {...register("priority")}
            className="w-full border border-[#dfdfdf] p-2 bg-grey"
          >
            <option value="">-- Select Priority --</option>
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">
          Description of Part(s)
        </label>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full border border-[#dfdfdf] p-2 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Upload your parts list / RFP
        </label>
        <input type="file" {...register("fileMain")} className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Upload your parts list / RFP - additional
        </label>
        <input type="file" {...register("fileAdditional")} className="w-full" />
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("confirmDetails", { required: true })}
          />
          <span>I confirm all part details are correct</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("agreeTerms", { required: true })}
          />
          <span>
            I agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </span>
        </label>
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

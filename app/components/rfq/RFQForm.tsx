import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import CountryCombobox from "../ui/CountryCombobox";

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

export default function RFQForm(formClass: { formClass?: string }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const { ref: mainFileRef, ...mainFileRest } = register("fileMain");
  const { ref: additionalFileRef, ...additionalFileRest } =
    register("fileAdditional");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const [mainFileName, setMainFileName] = useState<string>("");
  const [additionalFileName, setAdditionalFileName] = useState<string>("");

  const { field: countryField } = useController({
    name: "country",
    control,
    rules: { required: true },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-[min(100%,_550px)] bg-white-lg space-y-4 relative ${formClass}`}
    >
      <div className="grid grid-cols-2 gap-6">
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
        {errors.companyName && (
          <p className="text-red-500 text-xs mt-1">Required</p>
        )}
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
        {errors.email && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          {...register("phone", { required: true })}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Country / Region*
        </label>
        <CountryCombobox
          value={countryField.value}
          onChange={countryField.onChange}
          onBlur={countryField.onBlur}
          error={!!errors.country}
          placeholder="-- Select Country/Region --"
          name="country"
        />
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">Required</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            Aircraft Type / Model
          </label>
          <input
            {...register("aircraftType")}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            Part Number(s)
          </label>
          <input
            {...register("partNumber")}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            Quantity Required
          </label>
          <input
            type="number"
            {...register("quantity")}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#464646] mb-2">
            Priority
          </label>
          <select
            {...register("priority")}
            className="w-full border border-[#dfdfdf] p-3 bg-grey"
          >
            <option value="">-- Select Priority --</option>
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Description of Part(s)
        </label>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full border border-[#dfdfdf] p-3 bg-grey"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Upload your parts list / RFP
        </label>
        <div className="flex items-center gap-3">
          <label className="px-4 py-1 bg-[#dadada] text-[rgb(70,70,70)] rounded cursor-pointer hover:bg-[#bbbbbb] transition">
            Choose File
            <input
              type="file"
              {...mainFileRest}
              ref={mainFileRef}
              onChange={(e) => {
                mainFileRest.onChange(e);
                const file = e.target.files?.[0];
                setMainFileName(file ? file.name : "");
              }}
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-600">
            {mainFileName || "No file chosen"}
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#464646] mb-2">
          Upload your parts list / RFP - additional
        </label>
        <div className="flex items-center gap-3">
          <label className="px-4 py-1 bg-[#dadada] text-[rgb(70,70,70)] rounded cursor-pointer hover:bg-[#bbbbbb] transition">
            Choose File
            <input
              type="file"
              {...additionalFileRest}
              ref={additionalFileRef}
              onChange={(e) => {
                additionalFileRest.onChange(e);
                const file = e.target.files?.[0];
                setAdditionalFileName(file ? file.name : "");
              }}
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-600">
            {additionalFileName || "No file chosen"}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("confirmDetails", { required: true })}
          />
          <span className="ml-2 text-[#464646]">
            I confirm all part details are correct
          </span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("agreeTerms", { required: true })}
          />
          <span className="ml-2 text-[#464646]">
            I agree to the{" "}
            <a href="/terms_of_conditions" className="text-black underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-black underline">
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

import { send } from '@emailjs/browser';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosSend } from 'react-icons/io';

// Define the input fields and their types
interface InputField {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  // Extracting environment variables using Vite's import.meta.env
  const serviceid = import.meta.env.VITE_SERVICE_ID;
  const templateid = import.meta.env.VITE_TEMPLATE_ID
  const publickey = import.meta.env.VITE_PUBLIC_KEY

  // Destructuring form-related functions from react-hook-form
  const { register, handleSubmit, formState: { errors }, reset, setValue, trigger } = useForm<InputField>();

  // Form submission function
  const onSubmit: SubmitHandler<InputField> = (data) => {

    // Sending email using the emailjs library with toast
    toast.promise(
      send(serviceid, templateid, { form_name: data.firstName + " " + data.lastName, form_email: data.email, message: data.message }, publickey), {
      loading: 'Sending Message',
      success: 'Message Sent Successfully',
      error: 'Error in sending message',
    })

    // Resetting the form after successful submission
    reset();
  };

  // Handling input change for real-time validation
  const handleInputChange = (name: "firstName" | "lastName" | "email" | "message", value: string) => {
    setValue(name, value);
    trigger(name);
  };

  return (
    <div className='w-full h-[86%] flex justify-evenly flex-col p-4'>
      <h2 className=' font-bold w-11/12 mx-auto md:text-2xl lg:text-4xl'>Contact Form</h2>
      <form
        method='post'
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-wrap justify-between w-full h-5/6'
      >
        {/* First Name Input */}
        <input
          {...register('firstName', { required: true, maxLength: 20, minLength: 3 })}
          className={'bg-transparent focus:outline-none text-sm p-2 mx-auto my-3 border rounded-xl w-11/12 md:h-16 md:px-5 md:py-2 md:text-lg lg:w-5/12 lg:h-1/6 ' + (errors.firstName ? "border-red-500" : "border-[#b59947]")}
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
        {/* Last Name Input */}
        <input
          {...register('lastName', { required: true, maxLength: 20, minLength: 3 })}
          className={'bg-transparent focus:outline-none  mx-auto my-3 p-2 text-sm  border rounded-xl w-11/12 md:h-16 md:px-5 md:py-2 md:text-lg lg:w-5/12  lg:h-1/6 ' + (errors.lastName ? "border-red-500" : "border-[#b59947]")}
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
        {/* Email Input */}
        <input
          {...register('email', { required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i })}
          className={'bg-transparent focus:outline-none w-11/12 h-1/6 mx-auto my-3 p-2  text-sm border rounded-xl md:h-16 md:px-5 md:py-2 md:text-lg lg:h-1/6 ' + (errors.email ? "border-red-500" : "border-[#b59947]")}
          type='email'
          name='email'
          placeholder='Email Address'
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {/* Message Input */}
        <textarea
          {...register('message', { required: true, maxLength: 200, minLength: 10 })}
          className={'bg-transparent focus:outline-none w-11/12 h-40 resize-none mx-auto my-3 p-2   border rounded-xl md:text-lg md:px-5 md:py-2 ' + (errors.message ? "border-red-500" : "border-[#b59947]")}
          name='message'
          placeholder='Message'
          onChange={(e) => handleInputChange("message", e.target.value)}
        ></textarea>
        {/* Submit Button */}
        <button
          type='submit'
          className='ml-auto  w-fit p-2  flex gap-2 justify-center items-center  font-bold h-[50px] text-[#ae9753] rounded-xl shadow-iconShadow mr-4 md:text-xl md:mr-6 md:px-5 lg:mr-20'
        >
          <IoIosSend />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;

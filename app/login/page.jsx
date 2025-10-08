"use client";
import React, { use } from "react";
import { Form, Input, Button, addToast } from "@heroui/react";
import { EyeIcon, EyeSlashIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "@/lib/axios";
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    console.log("submit")
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const response = await axios.post(`/authenticate`, data)
      console.log(response)
      if (response.status === 200) {
        addToast({
          title: "Login Successful",
          description: "Welcome back!",
          color: "success",
          classNames: {
            closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
          },
        })
        router.push('/')
      }
    } catch (error) {
      const status = error?.response?.status;

      if (status === 401) {
        addToast({
          title: 'Login Failed',
          description: 'Invalid credentials',
          color: 'danger',
          classNames: {
            closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
          },
        });
      }
      else if (status === 500) {
        addToast({
          title: 'Login Failed',
          description: 'Error during authentication',
          color: 'danger',
          classNames: {
            closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
          },
        });
      } else if (status === 404) {
        addToast({
          title: 'Login Failed',
          description: 'User not found',
          color: 'danger',
          classNames: {
            closeButton: 'opacity-100 absolute right-4 top-1/2 -translate-y-1/2',
          },
        });
      }
    }
  }


  return (
    <div className="flex h-screen flex-col relative bg-[url('/img/bg/login_bg.svg')] bg-cover justify-between">
      <div>
       LOGO
      </div>
      <Form
        className="mb-20 mx-3 flex flex-col gap-4 px-5 py-10 bottom-15 bg-white backdrop-blur-xs rounded-4xl "
        onSubmit={handleSubmit}
      >

        <div className="flex flex-col justify-center items-center w-full">
        <p className="font-extrabold text-2xl">Welcome Back!</p>
        <div className="text-slate-400 font-extrabold">Please Log in to continue</div>
        </div>
        <Input
        classNames={{
            label: "text-black dark:text-white/90",
            input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "cursor-text!",
          ],
          }}
          isClearable
          className=""
          name="email"
          defaultValue="test@test.com"
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
          size="lg"
          labelPlacement="outside-top"
          isRequired={true}
        />

        <Input
          classNames={{
            label: "text-black dark:text-white/90",
            input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "cursor-text!",
          ],
          }}
          
          variant="faded"
          labelPlacement="outside-top"
          size="lg"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-solid outline-transparent"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashIcon className="w-5 text-slate-800" />
              ) : (
                <EyeIcon className="w-5 text-slate-800" />
              )}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          isRequired={true}
          name="password"
        />

        <div className="flex gap-2 w-full pt-2">
          <Button color="primary" type="submit" className="w-full" variant="shadow" size="lg">
            Log In
          </Button>
        </div>
      </Form>
    </div>
  );
}


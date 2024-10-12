import React, { FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface HookFormData {
    name: string
    pwd: string
    email: string
}

export function HookForm () {
    const { register, handleSubmit, formState: {errors}} = useForm<HookFormData>();
    const formSubmit: SubmitHandler<HookFormData> = (data) => {
        console.log(data);    
    }
    // if we get some "default values" from somewhere, we can put it into the form inputs as a def value
    const defaultValue = {
        name: "some def name",
        pwd: "some def pwd",
        email: "some def email"
    }
    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <label>
                <span>Name:</span>
                <input 
                    type="text"
                    placeholder="name"
                    {...register("name", {
                        required: "this field is required",
                        pattern: {
                            value: /^.{6,12}$/,
                            message: "name should be beetween 6 to 12 letters"
                        }
                    })}
                />
            </label>
            { errors.name &&  <span>{errors.name.message}</span>}
            <label>
                <span>Password:</span>
                <input
                    placeholder="password"
                    defaultValue={defaultValue.pwd || ""}
                    {...register("pwd", {
                        required: "password is required",
                        pattern: {
                            value: /^.{6,12}$/,
                            message: "password should be beetween 6 to 12 letter"
                        }
                    })}
                />
            </label>
            {errors.pwd && <span>{errors.pwd.message}</span>}
            <label>
                <span>Email:</span>
                <input
                    placeholder="email"
                    {...register("email", {
                        required: "email is required",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "invalid email"
                        }
                    })}
                />
            </label>
            {errors.email && <span>{errors.email.message}</span>}
            <button type="submit">Complete</button>
        </form>
    )
}
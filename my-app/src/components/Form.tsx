import React, { FormEvent, useState } from "react";

interface FormData {
    name: string
    pwd: string
    email: string
}

export function Form () {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        pwd: "",
        email: ""
    });
    const formSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={formSubmit}>
            <label>
                <span>Name:</span>
                <input value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
            </label>
            <label>
                <span>Password:</span>
                <input type="password" value={formData.pwd} 
                    onChange={(e) => setFormData({...formData, pwd: e.target.value})}
                />
            </label>
            <label>
                <span>Email:</span>
                <input type="email" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </label>
            <button type="submit">Complete</button>
        </form>
    )
}
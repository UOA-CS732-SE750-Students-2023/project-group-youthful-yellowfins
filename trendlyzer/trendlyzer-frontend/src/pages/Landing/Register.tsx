import React, { useState } from "react";

interface RegisterProps {
onFormSwitch: (form: string) => void;
}

export const Register: React.FC<RegisterProps> = ({ onFormSwitch }) => {
const [email, setEmail] = useState<string>('');
const [pass, setPass] = useState<string>('');
const [name, setName] = useState<string>('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(email);
}

return (
<div className="auth-form-container">
<h2>Register</h2>
<form className="register-form" onSubmit={handleSubmit}>
<label htmlFor="name">Full name</label>
<input
value={name}
name="name"
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
id="name"
placeholder="full Name"
/>
<label htmlFor="email">email</label>
<input
value={email}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
type="email"
placeholder="youremail@gmail.com"
id="email"
name="email"
/>
<label htmlFor="password">password</label>
<input
value={pass}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
type="password"
placeholder="********"
id="password"
name="password"
/>
<button type="submit">Log In</button>
</form>
<button className="link-btn" onClick={() => onFormSwitch('login')}>
Already have an account? Login here.
</button>
</div>
);
};
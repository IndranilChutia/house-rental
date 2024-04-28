import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_HOST}/api/rental-app/partnerLogin`, formData)

            localStorage.setItem("partnerToken", response.data.data)
            toast.success("Login Successful");
            navigate("/admin/dashboard");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.error); // Handle unexpected errors
        }
    };

    useEffect(() => {
        const login = localStorage.getItem("partnerToken");
        if (login) {
            navigate("/admin/dashboard");
        }
    });
    useEffect(() => {
        if (formData.email.length > 0 && formData.password.length >= 6) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [formData]);
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center p-6 bg-slate-100">
            <h1 className="font-bold text-xl mb-4">Home Rental <span className="font-light text-slate-800">| Partner Login</span></h1>

            <form
                onSubmit={formSubmit}
                className="w-full rounded-md bg-white border p-8 h-fit md:w-96 flex flex-col gap-4 justify-center "
            >
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold">Nice to see you again</h1>
                    <h3 className="text-sm mt-1">Login back to your account</h3>
                </div>

                <div className="flex flex-col w-full ">
                    <label htmlFor="email" className="font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-2 my-2 py-2 px-2 rounded"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </div>

                <div className="flex flex-col w-full ">
                    <label htmlFor="password" className="font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="border-2 my-2 py-2 px-2 rounded "
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                </div>

                <button
                    disabled={buttonDisabled}
                    className="disabled:bg-gray-300 border px-10 py-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white rounded"
                    type="submit"
                >
                    Login
                </button>
            </form>

            <p className="mt-4">
                Not yet registered?{" "}
                <Link
                    to={""}
                    className="font-medium text-blue-500 hover:text-blue-600"
                >
                    Register now!
                </Link>
            </p>
        </div>
    );
};

export default AdminLogin;

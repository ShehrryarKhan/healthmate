import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-green-50 to-green-100">
      {/* LEFT SIDE: Greeting */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 md:py-0 bg-white md:rounded-r-[4rem] shadow-md">
        <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-4">
          HealthMate <span className="text-green-500">💚</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md leading-relaxed">
          Your personal health companion,helping you understand your medical reports, 
          track vitals, and stay healthier every day.  
          Let’s simplify healthcare, one report at a time.
        </p>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="password"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold shadow-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

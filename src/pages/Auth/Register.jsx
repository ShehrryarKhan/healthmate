import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      alert("✅ Account created! Please login.");
      navigate("/login");
    } else {
      alert("Please fill in all fields.");
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
          Join the HealthMate family today!  
          Store, analyze, and understand your medical reports with the power of AI.  
          Your health journey starts here.
        </p>
      </div>

      {/* RIGHT SIDE: Register Form */}
      <div className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Create Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="e.g."
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
              </div>
            </div>

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
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

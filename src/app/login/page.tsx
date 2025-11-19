"use client";

import { useState, useEffect } from "react";
import { Heart, Mail, Lock, User, ArrowRight, Sparkles, Star } from "lucide-react";
import { login, register, getCurrentUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Se já estiver logado, redirecionar
    const user = getCurrentUser();
    if (user) {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const result = login(email, password);
        if (result.success) {
          router.push("/");
        } else {
          setError(result.message);
        }
      } else {
        if (!name.trim()) {
          setError("Por favor, preencha seu nome");
          setLoading(false);
          return;
        }
        const result = await register(name, email, password);
        if (result.success) {
          // Fazer login automático após registro
          login(email, password);
          router.push("/");
        } else {
          setError(result.message);
        }
      }
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=1080&fit=crop"
          alt="Casal feliz"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-300/30 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-5 rounded-3xl inline-block mb-5 shadow-2xl animate-bounce-slow">
            <Heart className="w-14 h-14 text-white" fill="white" />
          </div>
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              <span className="text-sm font-bold text-gray-800">Conselhos Profissionais</span>
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-3 drop-shadow-lg">
            Psicólogo do Amor
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            {isLogin ? "Entre na sua conta" : "Crie sua conta grátis"}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10 border border-pink-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="animate-slideIn">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-pink-600" />
                  Nome completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition-all duration-300 text-gray-800 font-medium hover:border-pink-300"
                    placeholder="Seu nome"
                  />
                </div>
              </div>
            )}

            <div className="animate-slideIn delay-100">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-600" />
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition-all duration-300 text-gray-800 font-medium hover:border-pink-300"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="animate-slideIn delay-200">
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-pink-600" />
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:outline-none transition-all duration-300 text-gray-800 font-medium hover:border-pink-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl animate-shake">
                <p className="text-sm text-red-800 font-semibold">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processando...
                </>
              ) : (
                <>
                  {isLogin ? "Entrar" : "Criar Conta"}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-pink-600 hover:text-pink-700 font-bold text-sm hover:underline transition-all duration-300"
            >
              {isLogin
                ? "Não tem conta? Cadastre-se grátis"
                : "Já tem conta? Faça login"}
            </button>
          </div>

          {!isLogin && (
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-5 animate-pulse-slow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-green-600" />
                <p className="text-sm font-bold text-green-800">
                  100% GRATUITO
                </p>
                <Sparkles className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-xs text-green-700 text-center font-medium">
                Acesso completo a todos os conselhos de relacionamento sem pagar nada!
              </p>
            </div>
          )}
        </div>

        {/* Depoimento visual */}
        <div className="mt-8 text-center animate-fadeIn delay-500">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop"
                alt="Casal 1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=100&h=100&fit=crop"
                alt="Casal 2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=100&h=100&fit=crop"
                alt="Casal 3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm font-bold text-gray-800">
              +1.000 casais felizes
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-slideIn { animation: slideIn 0.6s ease-out; }
        .animate-shake { animation: shake 0.5s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}

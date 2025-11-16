"use client";

import { useState, useEffect } from "react";
import { adviceCategories, type AdviceCategory, type Advice } from "@/lib/advice-data";
import { Heart, CheckCircle, ArrowRight, MessageCircle, LogOut, Shield } from "lucide-react";
import Link from "next/link";
import { getCurrentUser, logout, type User } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<AdviceCategory | null>(null);
  const [selectedAdvice, setSelectedAdvice] = useState<Advice | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
      return;
    }
    setUser(currentUser);
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const handleAdviceClick = (advice: Advice) => {
    setSelectedAdvice(advice);
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 sm:p-3 rounded-2xl">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Psicólogo do Amor
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">Olá, {user.name}!</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {user.isAdmin && (
                <Link
                  href="/admin"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 sm:px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs sm:text-sm flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="p-2 sm:p-3 hover:bg-gray-100 rounded-xl transition-colors"
                title="Sair"
              >
                <LogOut className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Hero Section */}
        {!selectedCategory && (
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transforme seu relacionamento 💕
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Conselhos profissionais de psicologia para conquistar, manter e fortalecer relacionamentos
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base px-4">
              <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-gray-700">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-gray-700">Fácil de usar</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-gray-700">Conselhos práticos</span>
              </div>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {adviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-left group"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-pink-600 font-semibold text-sm sm:text-base">
                  Ver conselhos
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Advice List */}
        {selectedCategory && !selectedAdvice && (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 sm:mb-8 text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2 text-sm sm:text-base"
            >
              ← Voltar às categorias
            </button>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{selectedCategory.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{selectedCategory.title}</h2>
              <p className="text-base sm:text-lg text-gray-600">{selectedCategory.description}</p>
            </div>

            <div className="space-y-4">
              {selectedCategory.advices.map((advice) => (
                <button
                  key={advice.id}
                  onClick={() => handleAdviceClick(advice)}
                  className="w-full bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left group relative overflow-hidden"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                        {advice.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">Clique para ver a resposta completa →</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Advice Detail */}
        {selectedAdvice && (
          <div>
            <button
              onClick={() => setSelectedAdvice(null)}
              className="mb-6 sm:mb-8 text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2 text-sm sm:text-base"
            >
              ← Voltar aos conselhos
            </button>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {selectedAdvice.question}
                </h2>
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    {selectedAdvice.answer}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  Dicas Práticas
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {selectedAdvice.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-pink-500 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
                <p className="text-xs sm:text-sm text-yellow-800">
                  <strong>💡 Lembre-se:</strong> Cada relacionamento é único. Adapte esses conselhos à sua realidade e sempre priorize o respeito mútuo e a comunicação honesta.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

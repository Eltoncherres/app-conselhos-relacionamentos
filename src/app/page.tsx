"use client";

import { useState, useEffect } from "react";
import { adviceCategories, type AdviceCategory, type Advice } from "@/lib/advice-data";
import { Heart, CheckCircle, ArrowRight, MessageCircle, LogOut, Shield, Sparkles, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-pink-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 p-2.5 sm:p-3 rounded-2xl shadow-lg animate-pulse">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Psicólogo do Amor
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-yellow-500" />
                  Olá, {user.name}!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {user.isAdmin && (
                <Link
                  href="/admin"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 sm:px-4 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="p-2 sm:p-3 hover:bg-rose-100 rounded-xl transition-all duration-300 hover:scale-110"
                title="Sair"
              >
                <LogOut className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Hero Section com Imagem */}
        {!selectedCategory && (
          <div className="relative mb-12 sm:mb-20 overflow-hidden rounded-3xl">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop"
                alt="Casal feliz"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-blue-500/30"></div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center py-16 sm:py-24 px-4">
              <div className="inline-block mb-4 sm:mb-6">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full shadow-lg">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" fill="currentColor" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">Conselhos Profissionais</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" fill="currentColor" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 drop-shadow-lg">
                Transforme seu relacionamento 💕
              </h2>
              <p className="text-lg sm:text-2xl text-gray-800 max-w-3xl mx-auto mb-8 sm:mb-10 px-4 font-medium drop-shadow">
                Conselhos profissionais de psicologia para conquistar, manter e fortalecer relacionamentos
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm sm:text-base px-4">
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 sm:px-7 py-3 sm:py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <span className="text-gray-800 font-semibold">100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 sm:px-7 py-3 sm:py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <span className="text-gray-800 font-semibold">Fácil de usar</span>
                </div>
                <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 sm:px-7 py-3 sm:py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  <span className="text-gray-800 font-semibold">Conselhos práticos</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Galeria de Casais Felizes */}
        {!selectedCategory && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Relacionamentos que inspiram ✨
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop"
                  alt="Casal feliz 1"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop"
                  alt="Casal feliz 2"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=400&h=400&fit=crop"
                  alt="Casal feliz 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/50 to-transparent"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop"
                  alt="Casal feliz 4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {adviceCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-left group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 sm:mb-5 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">{category.description}</p>
                  <div className="flex items-center text-pink-600 font-bold text-sm sm:text-base">
                    Ver conselhos
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
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
              className="mb-6 sm:mb-8 text-pink-600 hover:text-pink-700 font-bold flex items-center gap-2 text-sm sm:text-base hover:gap-3 transition-all duration-300"
            >
              ← Voltar às categorias
            </button>
            
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-6 sm:p-10 mb-6 sm:mb-8 border border-pink-100">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">{selectedCategory.icon}</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{selectedCategory.title}</h2>
              <p className="text-base sm:text-xl text-gray-700">{selectedCategory.description}</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {selectedCategory.advices.map((advice, index) => (
                <button
                  key={advice.id}
                  onClick={() => handleAdviceClick(advice)}
                  className="w-full bg-white p-5 sm:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-left group relative overflow-hidden hover:scale-[1.02]"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors leading-relaxed">
                        {advice.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-pink-600 font-semibold flex items-center gap-2">
                        Clique para ver a resposta completa 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </p>
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
              className="mb-6 sm:mb-8 text-pink-600 hover:text-pink-700 font-bold flex items-center gap-2 text-sm sm:text-base hover:gap-3 transition-all duration-300"
            >
              ← Voltar aos conselhos
            </button>

            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-14 border border-pink-100">
              <div className="mb-8 sm:mb-10">
                <div className="inline-block mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 sm:px-6 py-2 rounded-full">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                    <span className="text-xs sm:text-sm font-bold text-pink-700">Conselho Profissional</span>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                  {selectedAdvice.question}
                </h2>
                <div className="prose prose-sm sm:prose-base lg:prose-xl max-w-none">
                  <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    {selectedAdvice.answer}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-pink-200 shadow-inner">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  Dicas Práticas
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {selectedAdvice.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-lg text-gray-800 leading-relaxed font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 sm:mt-10 p-5 sm:p-7 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-r-2xl shadow-md">
                <p className="text-xs sm:text-base text-yellow-900 leading-relaxed">
                  <strong className="flex items-center gap-2 mb-2 text-sm sm:text-lg">
                    <Sparkles className="w-5 h-5 text-yellow-600" />
                    Lembre-se:
                  </strong>
                  Cada relacionamento é único. Adapte esses conselhos à sua realidade e sempre priorize o respeito mútuo e a comunicação honesta.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

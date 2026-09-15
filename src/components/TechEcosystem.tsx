import React, { useState } from 'react';
import { Card3D } from './Card3D';
import { Cpu, Users, Layers, ShieldCheck, Activity, Globe, ArrowUpRight } from 'lucide-react';

export const TechEcosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'analytics' | 'automation'>('ecosystem');

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0806] overflow-hidden">
      {/* Subtle tech ambient grid / glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f160e15_1px,transparent_1px),linear-gradient(to_bottom,#1f160e15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c140e] border border-[#c88a2c]/35 mb-4 text-xs uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">
            <Cpu className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>TECHNOLOGY + HUMAN CAPITAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#faf6ee] tracking-tight mb-5 leading-tight">
            Where HR Expertise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706]">
              Meets Technology
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#ccbdae] leading-relaxed max-w-2xl mx-auto">
            Desert Candles combines seasoned HR expertise with cutting-edge e-services to deliver innovative strategies tailored to the needs of modern organizations.
          </p>
        </div>

        {/* 3D Conceptual Digital HR Ecosystem Interface */}
        <div className="max-w-5xl mx-auto">
          <Card3D depth={8}>
            <div className="rounded-3xl bg-gradient-to-br from-[#1b1510]/95 via-[#130f0c] to-[#0c0907] border border-[#c88a2c]/35 p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              {/* Top Bar: Simulated Holographic HR Interface Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#c88a2c]/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] animate-ping" />
                  <span className="text-xs uppercase font-mono tracking-widest text-[#f5ecd5]">
                    DIGITAL HR ECOSYSTEM // ARCHITECTURE
                  </span>
                </div>

                {/* Conceptual Mode Switcher */}
                <div className="flex items-center p-1 rounded-xl bg-[#201812] border border-[#c88a2c]/30">
                  <button
                    onClick={() => setActiveTab('ecosystem')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'ecosystem'
                        ? 'bg-[#c88a2c] text-black font-semibold shadow'
                        : 'text-[#bfb09d] hover:text-white'
                    }`}
                  >
                    Human Capital
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'analytics'
                        ? 'bg-[#c88a2c] text-black font-semibold shadow'
                        : 'text-[#bfb09d] hover:text-white'
                    }`}
                  >
                    E-Services Hub
                  </button>
                  <button
                    onClick={() => setActiveTab('automation')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'automation'
                        ? 'bg-[#c88a2c] text-black font-semibold shadow'
                        : 'text-[#bfb09d] hover:text-white'
                    }`}
                  >
                    Governance
                  </button>
                </div>
              </div>

              {/* Conceptual Interactive Holographic Dashboard Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                {/* Left Panel: Organizational Node Hierarchy */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-[#140e0b]/80 border border-[#c88a2c]/20">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#a99986] mb-4 font-mono">
                      <span>ORGANIZATIONAL TOPOLOGY</span>
                      <span className="text-[#f59e0b]">ACTIVE SYNERGY</span>
                    </div>

                    {/* Nodes visualization */}
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-[#221912] border border-[#f59e0b]/40 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#faf6ed]">Talent & Leadership Core</p>
                            <p className="text-[11px] text-[#b3a28f]">Strategic capability alignment</p>
                          </div>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b]">
                          Aligned
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#1c140f] border border-[#c88a2c]/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#c88a2c]/20 flex items-center justify-center text-[#c88a2c]">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#faf6ed]">E-Service Automation</p>
                            <p className="text-[11px] text-[#b3a28f]">Digital workflows & self-service</p>
                          </div>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#c88a2c]/20 text-[#c88a2c]">
                          Integrated
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#1c140f] border border-[#c88a2c]/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#d97706]/20 flex items-center justify-center text-[#d97706]">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#faf6ed]">Regulatory Standards</p>
                            <p className="text-[11px] text-[#b3a28f]">Saudi labor compliance framework</p>
                          </div>
                        </div>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#d97706]/20 text-[#d97706]">
                          Secured
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9d8d7b]">
                    <span>Guidance Light Vector</span>
                    <span className="text-[#f59e0b] font-serif">Desert Candles Est.</span>
                  </div>
                </div>

                {/* Right Panel: Conceptual Ecosystem Diagram / Pulse */}
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#140e0b]/80 border border-[#c88a2c]/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#a99986] mb-4 font-mono">
                      <span>ECOSYSTEM TELEMETRY</span>
                      <span className="flex items-center gap-1 text-[#f59e0b]">
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        Continuous Optimization
                      </span>
                    </div>

                    {/* Futuristic Data Nodes Flow */}
                    <div className="grid grid-cols-2 gap-4 my-4">
                      <div className="p-4 rounded-xl bg-[#1f1711] border border-[#c88a2c]/20">
                        <p className="text-xs text-[#9d8d7b]">Workforce Alignment</p>
                        <p className="text-xl sm:text-2xl font-serif font-bold text-[#fde68a] mt-1">
                          Seamless
                        </p>
                        <p className="text-[11px] text-[#7d6e5d] mt-1">
                          Strategy to individual contributor
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#1f1711] border border-[#c88a2c]/20">
                        <p className="text-xs text-[#9d8d7b]">E-Service Pipeline</p>
                        <p className="text-xl sm:text-2xl font-serif font-bold text-[#f59e0b] mt-1">
                          Automated
                        </p>
                        <p className="text-[11px] text-[#7d6e5d] mt-1">
                          Paperless digital workflows
                        </p>
                      </div>
                    </div>

                    {/* Conceptual Philosophy Statement */}
                    <div className="p-4 rounded-xl bg-[#261c14]/60 border border-[#c88a2c]/30">
                      <p className="text-xs sm:text-sm text-[#e5d8c6] italic leading-relaxed">
                        "Technology empowers scale, but seasoned human insight shapes direction. Our e-services eliminate administrative friction so human talent can flourish."
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9d8d7b]">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#c88a2c]" />
                      Modern Enterprise Readiness
                    </span>
                    <span className="text-[#f59e0b] font-medium">Customized Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

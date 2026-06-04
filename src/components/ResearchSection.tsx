import React from 'react';
import { FileText, Download, ExternalLink, Calendar, Tag } from 'lucide-react';
import paperAsset from '@/assets/revenge-porn-nepal-research.pdf.asset.json';

const ResearchSection = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Research Papers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">My published research in cybersecurity & digital rights</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 p-8 flex items-center justify-center">
              <FileText size={96} className="text-neon-blue" />
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-md bg-neon-blue/10 text-neon-blue">Cybersecurity</span>
                <span className="text-xs px-2 py-1 rounded-md bg-neon-purple/10 text-neon-purple">Digital Rights</span>
                <span className="text-xs px-2 py-1 rounded-md bg-neon-green/10 text-neon-green">Nepal</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                Revenge Porn (Non-Consensual Intimate Image Sharing) in Nepal: Recent Trends, Legal Challenges, and Societal Impact (2023–2025)
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1"><Calendar size={14} /><span>2025</span></div>
                <div className="flex items-center gap-1"><Tag size={14} /><span>Research Paper</span></div>
                <div className="flex items-center gap-1"><FileText size={14} /><span>~9,500 words</span></div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A comprehensive mixed-method review of non-consensual intimate image sharing (NCIIS) in Nepal during 2023–2025. The paper analyzes police cybercrime statistics, judicial records and civil society documentation, evaluates the adequacy of the Electronic Transaction Act 2008, benchmarks Nepal's response against India, the UK, Australia, the US and the Philippines, and proposes targeted legal and policy reforms.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={paperAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(paperAsset.url, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue text-neon-blue transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <ExternalLink size={16} />
                  Read Paper
                </a>
                <a
                  href={paperAsset.url}
                  download="Revenge-Porn-Nepal-Prachit-Regmi-2025.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple text-neon-purple transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
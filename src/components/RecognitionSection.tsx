import React from 'react';
import { ExternalLink, Download, Calendar } from 'lucide-react';
import letterAsset from '@/assets/nasa-letter-of-recognition.pdf.asset.json';
import letterImage from '@/assets/nasa-letter.png.asset.json';

const LETTER_URL = letterAsset.url;

const RecognitionSection = () => {
  const openLetter = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(LETTER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="recognition" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Recognition & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Honors received for contributions to cybersecurity
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-3xl mx-auto">
          <div className="bg-gray-50 p-4">
            <img
              src={letterImage.url}
              alt="NASA Letter of Recognition awarded to Prachit Regmi"
              className="w-full h-auto max-h-80 object-contain rounded-md shadow-md cursor-pointer mx-auto"
              onClick={openLetter}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-md bg-neon-blue/10 text-neon-blue">NASA VDP</span>
              <span className="text-xs px-2 py-1 rounded-md bg-neon-purple/10 text-neon-purple">
                Responsible Disclosure
              </span>
              <span className="text-xs px-2 py-1 rounded-md bg-neon-green/10 text-neon-green">
                Cybersecurity
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              NASA Letter of Recognition
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>Awarded by NASA</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Officially recognized by NASA's Vulnerability Disclosure Program for responsibly
              identifying and reporting a security vulnerability in NASA systems. This recognition
              acknowledges contributions toward strengthening the security of NASA's digital
              infrastructure through ethical security research and responsible disclosure.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={LETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openLetter}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue text-neon-blue transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                <ExternalLink size={16} />
                View Letter
              </a>
              <a
                href={LETTER_URL}
                download="NASA-Letter-of-Recognition-Prachit-Regmi.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple text-neon-purple transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
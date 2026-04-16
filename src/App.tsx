import { Folder, FileCode, CheckCircle, Download, LayoutTemplate, Palette, CodeXml } from 'lucide-react';

export default function App() {
  const files = [
    { name: 'style.css', desc: 'Theme header & base styles' },
    { name: 'functions.php', desc: 'Theme setup, enqueues, customizer' },
    { name: 'index.php', desc: 'Main fallback template' },
    { name: 'front-page.php', desc: 'Custom homepage template' },
    { name: 'header.php', desc: 'Site header & nav' },
    { name: 'footer.php', desc: 'Site footer' },
    { name: 'page-templates/template-portfolio.php', desc: 'Portfolio grid page' },
    { name: 'inc/customizer.php', desc: 'Customizer settings & controls' },
    { name: 'assets/css/custom.css', desc: 'Additional component styles' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5] flex flex-col font-sans">
      {/* Hero Section */}
      <header className="flex flex-col py-10 px-6 md:px-[48px] border-b border-[#2a2a3a] bg-[#0a0a0f]/80 relative shrink-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/obsidian/1920/1080?blur=10')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 w-full pt-10">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-[#c9a44a] w-5 h-5" />
            <h2 className="text-[#c9a44a] font-bold tracking-[1px] uppercase text-[10px]">Generation Complete</h2>
          </div>
          <h1 className="text-[52px] leading-[1.1] mb-4 max-w-[600px] font-bold text-[#f0f0f5] tracking-tight">
            Obsidian Theme <br/> is Ready.
          </h1>
          <p className="text-[18px] text-[#9999aa] max-w-[500px] leading-[1.6] mb-10">
            Your premium dark-mode presentation theme has been fully generated following WordPress best practices. All 29 files are now available in the <code className="bg-[#1a1a26] text-[#e0c472] px-1.5 py-0.5 rounded font-mono border border-[#2a2a3a] text-[14px]">obsidian/</code> directory.
          </p>
          <div className="flex items-center gap-4">
            <button 
              className="bg-[#c9a44a] text-[#0a0a0f] px-6 py-2.5 rounded text-[13px] font-bold uppercase tracking-[1px] border-none flex items-center gap-2 hover:bg-[#e0c472] transition-colors"
              onClick={() => window.alert("To download, click the 'Project' export button in AI Studio's settings menu (top right), or download the folder from the file explorer.")}
            >
              <Download className="w-5 h-5" />
              How to Download
            </button>
            <a 
              href="#files"
              className="bg-transparent text-[#f0f0f5] px-6 py-2.5 rounded text-[13px] font-bold uppercase tracking-[1px] border border-[#2a2a3a] flex items-center gap-2 hover:border-[#c9a44a] transition-colors"
            >
              <Folder className="w-5 h-5" />
              View File Structure
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-[40px] px-6 md:px-[48px]">
        {/* Features Grid */}
        <section className="flex-1 flex flex-col mb-[40px]">
          <h2 className="text-[24px] font-bold mb-6 text-[#f0f0f5]">Theme Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
            <div className="bg-[#1a1a26] border border-[#2a2a3a] rounded-lg flex flex-col p-[20px]">
              <LayoutTemplate className="w-8 h-8 text-[#c9a44a] mb-[20px]" />
              <h3 className="text-[18px] font-semibold mb-2 text-[#e0c472]">Custom Templates</h3>
              <p className="text-[14px] text-[#9999aa] leading-[1.5]">Includes front-page, portfolio grid, contact, and full-width layouts configured with proper template hierarchy.</p>
            </div>
            <div className="bg-[#1a1a26] border border-[#2a2a3a] rounded-lg flex flex-col p-[20px]">
              <Palette className="w-8 h-8 text-[#c9a44a] mb-[20px]" />
              <h3 className="text-[18px] font-semibold mb-2 text-[#e0c472]">Live Customizer</h3>
              <p className="text-[14px] text-[#9999aa] leading-[1.5]">Full integration with WP Customizer for updating colors, hero content, footer layout, and blog styles in real-time.</p>
            </div>
            <div className="bg-[#1a1a26] border border-[#2a2a3a] rounded-lg flex flex-col p-[20px]">
              <CodeXml className="w-8 h-8 text-[#c9a44a] mb-[20px]" />
              <h3 className="text-[18px] font-semibold mb-2 text-[#e0c472]">Production Ready</h3>
              <p className="text-[14px] text-[#9999aa] leading-[1.5]">Zero unneeded plugins required. Built with vanilla JS for performance, accessible markup, and clean PHP syntax.</p>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section id="files" className="mb-[40px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[24px] font-bold text-[#f0f0f5]">Generated Files</h2>
            <span className="bg-[#c9a44a] text-[#0a0a0f] px-2 py-1 rounded font-bold uppercase tracking-[1px] text-[10px]">
              29 Files
            </span>
          </div>
          
          <div className="bg-[#1a1a26] border border-[#2a2a3a] rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#12121a] px-5 py-4 border-b border-[#2a2a3a] flex items-center gap-3">
              <Folder className="text-[#c9a44a] w-5 h-5" />
              <span className="font-mono text-[14px] font-semibold text-[#e0c472]">/obsidian</span>
            </div>
            <div className="flex flex-col">
              {files.map((file, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 border-b border-[#2a2a3a] last:border-0 gap-4">
                  <div className="flex items-center gap-3 w-full md:w-1/2">
                    <FileCode className="w-5 h-5 text-[#9999aa] shrink-0" />
                    <span className="font-mono text-[14px] text-[#f0f0f5] truncate">{file.name}</span>
                  </div>
                  <div className="w-full md:w-1/2 text-[14px] text-[#9999aa] leading-[1.5]">
                    {file.desc}
                  </div>
                </div>
              ))}
              <div className="p-5 text-[14px] text-[#9999aa] leading-[1.5] text-center border-t border-[#2a2a3a] bg-[#12121a] italic">
                ...and 20+ more supporting files & templates.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="min-h-[100px] shrink-0 bg-[#12121a] border-t border-[#2a2a3a] flex flex-col sm:flex-row items-center justify-between px-6 md:px-[48px] py-6 sm:py-0 gap-6">
        <div className="flex gap-10">
           <div className="text-center">
             <span className="block text-[20px] font-bold text-[#c9a44a]">100%</span>
             <span className="text-[10px] uppercase text-[#9999aa] tracking-[1px]">Ready</span>
           </div>
           <div className="text-center">
             <span className="block text-[20px] font-bold text-[#c9a44a]">29</span>
             <span className="text-[10px] uppercase text-[#9999aa] tracking-[1px]">Files</span>
           </div>
        </div>
        <div className="text-[12px] text-[#9999aa] text-center sm:text-right max-w-sm">
          Built with AI Studio. The files are securely saved in your project container.
        </div>
      </footer>
    </div>
  );
}

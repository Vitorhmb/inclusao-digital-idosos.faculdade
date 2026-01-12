
// ===== Acessibilidade rápida =====
const STATE = { fontPx: 18, contrast: false };
function applyA11y() {
  document.documentElement.style.setProperty('--base-font', STATE.fontPx + 'px');
  document.body.classList.toggle('high-contrast', STATE.contrast);
}
document.addEventListener('DOMContentLoaded', () => {
  applyA11y();
  const inc = document.getElementById('btn-font-inc');
  const dec = document.getElementById('btn-font-dec');
  const con = document.getElementById('btn-contrast');
  const top = document.getElementById('btn-topo');
  if (inc) inc.onclick = () => { STATE.fontPx = Math.min(STATE.fontPx + 2, 26); applyA11y(); };
  if (dec) dec.onclick = () => { STATE.fontPx = Math.max(STATE.fontPx - 2, 14); applyA11y(); };
  if (con) con.onclick = () => { STATE.contrast = !STATE.contrast; applyA11y(); };
  if (top) top.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});

const TUTORIAIS = {
  whatsapp: {
    titulo: 'WhatsApp',
    videoMain: '_G7aN0KM_Ag',
    extras: [
      { id: 'ZigZ8bGQUdw', titulo: 'Criar e configurar grupo' },
      { id: 'x7PM_5maZ6I', titulo: 'Enviar mensagem de vídeo' },
      { id: 'SXYcrR4-8VI', titulo: 'Chamada de vídeo no PC (WhatsApp Desktop)' }
    ],
    passos: [
      'Abra o WhatsApp e toque em Conversas.',
      'Escolha um contato e digite a mensagem.',
      'Para vídeo, toque no ícone de câmera na conversa.'
    ]
  },
  youtube: {
    titulo: 'YouTube',
    videoMain: 'Yi1QJSPMT30',
    extras: [
      { id: 'QFZK_oqHsVk', titulo: 'Funções essenciais no celular' },
      { id: '9YXDHXbgUf8', titulo: 'Ativar o sininho' }
    ],
    passos: [
      'Abra o YouTube e use a barra de pesquisa.',
      'Toque em Inscrever-se e ative o sininho.',
      'Ajuste legendas e velocidade nas configurações do player.'
    ]
  },
  camera: {
    titulo: 'Câmera',
    videoMain: '8ypKiN_tutE',
    extras: [
      { id: '8bPxrpq-LEc', titulo: 'Configuração essencial (Samsung)' }
    ],
    passos: [
      'Abra a câmera e toque para focar.',
      'Tire a foto (botão circular) ou grave vídeo (modo Vídeo).',
      'Use boa iluminação e evite zoom digital exagerado.'
    ]
  },
  galeria: {
    titulo: 'Google Fotos',
    videoMain: 'fcEZVsngq4o',
    extras: [
      { id: 'j9Gv4ZTGQdo', titulo: 'Configurar backup corretamente' }
    ],
    passos: [
      'Abra o Google Fotos e conceda permissões.',
      'Ative o backup e escolha a qualidade.',
      'Crie álbuns e compartilhe quando precisar.'
    ]
  }
};

function iframeHTML(id, titulo) {
  return `
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/${id}"
        title="${titulo}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
               <div class="video-item">
          <h4>${e.titulo}</h4>
          <button type="button" data-replace="${appKey}" data-video="${e.id}">Assistir</button>
        </div>
      ).join('')}
    </div>
  `;
}
function buildGuide(appKey) {
  const { titulo, passos } = TUTORIAIS[appKey];
  return `
    <div class="guide">
      <h3>${titulo} — Guia passo a passo</h3>
      <ol>${passos.map(p => `<li>${p}</li>`).join('')}</ol>
    </div>
  `;
}


function wireExtras(area, appKey) {
    area.querySelectorAll('button[data-replace]').forEach(b => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-video');
        const player = area.querySelector('.video-wrapper');
        if (player) player.outerHTML = iframeHTML(id, 'Vídeo extra');
        area.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
  
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest('a.video-link, button');
  
    if (!el) return;
  
    if (el.matches('a.video-link[data-app]')) {
      const app = el.getAttribute('data-app');
  
      const isNewTabGesture =
        ev.ctrlKey || ev.metaKey || ev.button === 1;
  
      if (!isNewTabGesture) {
        ev.preventDefault(); 
        const area = document.getElementById(`tutorial-${app}`);
        const { titulo, videoMain } = TUTORIAIS[app];
        area.innerHTML = `
          <h3>${titulo} — Vídeo principal</h3>
          ${iframeHTML(videoMain, titulo)}
          ${extrasHTML(app)}
          ${guideHTML(app)}
        `;
        wireExtras(area, app);
        area.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
  
    if (el.matches('button[data-guide]')) {
      const app = el.getAttribute('data-guide');
      const area = document.getElementById(`tutorial-${app}`);
      area.innerHTML = guideHTML(app);
      area.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  
  });
  

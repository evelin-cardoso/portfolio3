
/* Professional interactions: modal, project click, CTA scroll */
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalImages = document.getElementById('modal-images');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.querySelector('.modal-close');

  const projects = {
    p1: {
      title: 'Portfólio Pessoal',
      desc: 'Site pessoal com apresentação, responsivo e deploy em Netlify. Organizei estrutura, design e deploy.',
      imgs: ['assets/p1.png'],
      link: 'https://genuine-sunburst-722653.netlify.app/'
    },
    p2: {
      title: 'Consciência Negra',
      desc: 'Site educativo com conteúdo informativo e interações. Responsável pelo desenvolvimento front-end.',
      imgs: ['assets/p2.png'],
      link: 'https://evelin-cardoso.github.io/consciencianegratudosobre/index.html'
    },
    p3: {
      title: 'Dashboard — Power BI',
      desc: 'Dashboard interativo criado no Power BI com indicadores e análises visuais.',
      imgs: ['assets/p3.png'],
      link: 'https://power-bi-dashboards-3zws.bolt.host/?authuser=1'
    }
  };

  function openProject(key){
    const p = projects[key];
    if(!p) return;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalImages.innerHTML = p.imgs.map(src=>'<img src="'+src+'" style="width:100%;margin-top:10px;border-radius:8px">').join('');
    modalLink.href = p.link;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  }

  document.querySelectorAll('.showcase-card').forEach(card=>{
    card.addEventListener('click', ()=> openProject(card.dataset.project));
  });

  closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  });

  modal.addEventListener('click', (e)=>{
    if(e.target === modal) { modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); }
  });

  const cta = document.getElementById('cta-portfolio');
  if(cta){
    cta.addEventListener('click', ()=> { window.location.href = 'projects.html'; });
  }

  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value || '';
    const email = document.getElementById('email').value || '';
    const message = document.getElementById('message').value || '';
    const subject = encodeURIComponent('Contato site - ' + name);
    const body = encodeURIComponent(message + "\n\nContato: " + email);
    window.location.href = 'mailto:cienciadedados.evelin@gmail.com?subject=' + subject + '&body=' + body;
  };
});

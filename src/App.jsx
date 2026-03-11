import React from 'react';
import './App.css';

const heroImages = [
  '/assets/deck_hero.png',
  '/assets/ai_wood_1.png',
  '/assets/wood_texture_2.png',
  '/assets/modern_wood_3.png'
];

function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const productList = [
    {
      id: 1,
      name: "Prancha p/ Andaime Grapada",
      spec: "30, 20, 15 cm de largura",
      description: "Tachi, Tavari, Cambará, Pinus e Eucalipto. Comprimentos variados sob consulta com grapas de segurança.",
      image: "/assets/prancha_andaime_real.png"
    },
    {
      id: 2,
      name: "Tábua para Rodapé",
      spec: "20 cm - Padrão Andaime",
      description: "Cortes precisos e madeira selecionada para máxima segurança em estruturas de andaime.",
      image: "/assets/tabua_rodape_real.png"
    },
    {
      id: 3,
      name: "Dormentes Grapados",
      spec: "Resistência Excepcional",
      description: "Tratamento de alta durabilidade com reforço metálico para projetos ferroviários e paisagismo robusto.",
      image: "/assets/dormente_real.png"
    },
    {
      id: 4,
      name: "Caibro 5x7 e 5x5",
      spec: "Serrado com Precisão",
      description: "Madeira estrutural para telhados e armações com secagem controlada e dimensões exatas.",
      image: "/assets/caibro_real.png"
    },
    {
      id: 5,
      name: "Viga 5 x 15",
      spec: "Estruturação Pesada",
      description: "Vigas robustas para suporte de carga, coberturas e grandes vãos arquitetônicos.",
      image: "/assets/viga_real.png"
    },
    {
      id: 6,
      name: "Tábua 30 cm",
      spec: "Largura Especial",
      description: "Peças largas com acabamento reto, ideal para fechamentos, formas e mobiliário rústico.",
      image: "/assets/tabua_30cm_real.png"
    },
    {
      id: 7,
      name: "Estiva",
      spec: "Madeira Industrial",
      description: "Peças de alta densidade para suporte de carga pesada, logística e bases industriais.",
      image: "/assets/estiva_real.png"
    },
    {
      id: 8,
      name: "Mourão Convencional",
      spec: "Durabilidade Rural",
      description: "Madeira tratada para cercamentos, delimitação de áreas e estruturas expostas ao tempo.",
      image: "/assets/mourao_convencional_real.png"
    },
    {
      id: 9,
      name: "Mourão Peças Especiais",
      spec: "Sob Medida",
      description: "Projetos personalizados com cortes e acabamentos específicos para atender necessidades exclusivas.",
      image: "/assets/mourao_especial_real.png"
    }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <nav className={`header-light ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span>Madeireira</span>
          <h2>CENTRAL DO VALE</h2>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#segmentos">Segmentos Atendidos</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-full">
        <div className="hero-image-container">
          <div className="dark-overlay"></div>
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Lumber ${index}`}
              className={`hero-main-img ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-title-container">
            <h1>Tudo em Madeira<br />para sua obra</h1>
          </div>
          <p className="hero-subtitle">
            Alta qualidade em madeiras certificadas para elevar sua construção e projetos arquitetônicos.
          </p>
        </div>
      </section>


      {/* Sobre a Madeireira Section */}
      <section id="sobre" className="about-section">
        <div className="section-container">
          <div className="about-header">
            <h2 className="section-title">SOBRE A MADEIREIRA</h2>
            <div className="title-divider"></div>
          </div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">+30</div>
              <h3>ANOS DE ATUAÇÃO</h3>
              <p>Nossos profissionais acumulam mais de 30 anos de experiência profissional no mercado brasileiro de madeiras.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3>ATENDIMENTO NACIONAL</h3>
              <p>Entregamos em todo território Brasileiro, com rastreamento nas coletas até destino final.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              </div>
              <h3>MADEIRAS CERTIFICADAS</h3>
              <p>Trabalhamos com madeira de lei certificada junto ao IBAMA e madeira de reflorestamento de pinus e eucalipto.</p>
            </div>
          </div>

          <div id="segmentos" className="segments-box">
            <h2 className="segment-main-title">SEGMENTOS ATENDIDOS</h2>
            <div className="segments-grid">
              <div className="segment-column">
                <h3>MADEIRAS ACABADAS</h3>
                <ul>
                  <li>Construção</li>
                  <li>Infraestrutura</li>
                  <li>Edificações</li>
                </ul>
              </div>
              <div className="segment-column">
                <h3>MADEIRAS PARA ESTRUTURAS</h3>
                <ul>
                  <li>Industrial</li>
                  <li>Refinaria</li>
                  <li>Petroquímica</li>
                  <li>Química</li>
                  <li>Papel e Celulose</li>
                </ul>
              </div>
              <div className="segment-column">
                <h3>MADEIRAS DE COBERTURA</h3>
                <ul>
                  <li>Madeiras Especiais</li>
                  <li>Naval</li>
                  <li>Estaleiros</li>
                  <li>Plataformas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" style={{ padding: '0' }}>
        <div style={{ textAlign: 'left', padding: '6rem 4rem 2rem', background: 'white' }}>
          <h2 className="section-title">PRODUTOS</h2>
        </div>

        <div className="product-grid">
          {productList.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info-box">
                <span className="product-spec-tag">{product.spec}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" style={{ background: 'var(--moss-green)', color: 'white', padding: '6rem 4% 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', maxWidth: '1400px', margin: '0 auto' }}>
          <div>
            <div className="logo" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', letterSpacing: '-1px' }}>Central do Vale</h2>
            </div>
            <p style={{ opacity: 0.9, lineHeight: '1.8', marginBottom: '2rem' }}>
              Entre em contato com a Central do Vale através de nosso WhatsApp ou E-mail.
            </p>
            <a href="https://wa.me/5512981703543" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.7 27.2 106.2 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 445.5c-33.1 0-65.4-8.9-93.5-25.7l-6.7-4-69.5 18.2 18.5-67.8-4.4-7c-18.4-29.4-28.1-63.3-28.1-98.2 0-101.7 82.8-184.5 184.5-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.4 0 101.7-82.8 184.5-184.5 184.5zm103.5-141.6c-5.7-2.8-33.6-16.6-38.9-18.5-5.3-1.9-9.1-2.8-13 2.8-3.8 5.7-14.8 18.5-18.2 22.3-3.3 3.8-6.7 4.3-12.4 1.5-5.6-2.8-23.8-8.8-45.3-28-16.8-15-28.1-33.4-31.4-39.1-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.5 5.7-6.6 8.6-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10-1.4-2.8-13-31.4-17.7-42.9-4.7-11.2-9.4-9.7-13-9.7H173c-4.3 0-11.5 1.6-17.5 8.1-6.1 6.6-23.1 22.6-23.1 55.1 0 32.5 23.6 63.8 26.9 68.3 3.3 4.5 46.5 71 112.7 99.5 15.7 6.8 28 10.8 37.5 13.9 15.8 5 30.1 4.3 41.5 2.6 12.7-1.9 33.6-13.7 38.2-27 4.7-13.3 4.7-24.7 3.3-27z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div>
            <h4 style={{ color: 'var(--giomar-yellow)', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '1px' }}>Navegação</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#home" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.3s' }}>Home</a>
              <a href="#produtos" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.3s' }}>Produtos</a>
              <a href="#sobre" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.3s' }}>Sobre Nós</a>
              <a href="#segmentos" style={{ color: 'white', textDecoration: 'none', opacity: 0.8, transition: 'opacity 0.3s' }}>Segmentos</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--giomar-yellow)', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '1px' }}>Fale Conosco</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ opacity: 0.9, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.3rem' }}>TELEFONE</span>
                <strong>+55 12 98170-3543</strong>
              </p>
              <p style={{ opacity: 0.9, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.3rem' }}>E-MAIL</span>
                <strong>comercial@centraldovale.com.br</strong>
              </p>
              <p style={{ opacity: 0.9, display: 'flex', flexDirection: 'column', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.3rem' }}>ENDEREÇO</span>
                Rodovia Floriano Rodrigues Pinheiro, 5550, KM 5.5 - Distrito Quiririm - Taubaté/SP CEP 12.042-000
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem', textAlign: 'center', opacity: 0.5, fontSize: '0.85rem', letterSpacing: '1px' }}>
          TODOS OS DIREITOS RESERVADOS - © CENTRAL DO VALE COMERCIAL, 2024
        </div>
      </footer>
    </div >
  );
}

export default App;

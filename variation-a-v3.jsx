/* global React */
const { useState } = React;

// Bespoke icons for the three commitments — thin-stroke editorial line work
function BenefitIcon({ index }) {
  const stroke = '#1a4d2e';
  const accent = '#c9842b';
  const sw = 1.4;
  if (index === 0) {
    // Peak Endurance & Resilience — rolling wave that climbs to a final peak
    return (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M3 18 C 6 14, 9 22, 12 18 C 15 14, 18 22, 21 18 L 24 8" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="8" r="1.5" fill={accent} />
      </svg>
    );
  }
  if (index === 1) {
    // Strength & Faster Recovery — heartbeat pulse: tall spike then rapid return to baseline
    return (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M2 16 H 9 L 12 6 L 16 22 L 18 16 H 26" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="6" r="1.5" fill={accent} />
      </svg>
    );
  }
  if (index === 2) {
    // Natural Testosterone Balance — level beam balance scale
    return (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 6 V 23" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        <path d="M5 10 H 23" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        <path d="M2 17 L 5 10 L 8 17 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <path d="M20 17 L 23 10 L 26 17 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <path d="M10 24 H 18" stroke={accent} strokeWidth={sw} strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 3) {
    // Confidence, Control & Drive — target ring with forward-driving upward arrow
    return (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9.5" stroke={stroke} strokeWidth={sw} fill="none" />
        <path d="M14 21 L 14 7 M10 11 L 14 7 L 18 11" stroke={accent} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }
  // Fallback (unused with 4 benefits) — minimal spark
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="4.5" stroke={stroke} strokeWidth={sw} fill="none" />
      <path d="M14 3 V 6 M14 22 V 25 M3 14 H 6 M22 14 H 25" stroke={accent} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

function TrustIcon({ index }) {
  const stroke = '#1a4d2e';
  const accent = '#c9842b';
  const sw = 1.4;
  if (index === 0) {
    // 100% natural herbs — botanical sprig
    return (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
        <path d="M16 28 V8" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        <path d="M16 22 C 11 22, 8 19, 7 14 C 12 14, 15 17, 16 22 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <path d="M16 16 C 21 16, 24 13, 25 8 C 20 8, 17 11, 16 16 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <path d="M16 11 C 12 11, 10 8, 10 4 C 14 4, 16 7, 16 11 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="28" r="1.1" fill={accent} />
      </svg>
    );
  }
  if (index === 1) {
    // Liquid format — droplet with wave
    return (
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
        <path d="M16 4 C 10 12, 7 17, 7 21 A 9 9 0 0 0 25 21 C 25 17, 22 12, 16 4 Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" fill="none" />
        <path d="M10 21 C 12 19.5, 14 22, 16 20.5 C 18 19, 20 21.5, 22 20" stroke={accent} strokeWidth={sw} strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  // Zero compromise — circle with diagonal slash (clean "no")
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke={stroke} strokeWidth={sw} fill="none" />
      <path d="M8.5 23.5 L 23.5 8.5" stroke={accent} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

// Variation A — Editorial Apothecary (compressed)
// Same editorial spirit, restructured for ~50% the original vertical height.
// Key moves: hook on a single line, 2-col benefits, 2-col dosage, herbs inline,
// trust marks as a 3-col row, tighter rules and padding.
// Hero herb data — Latin binomials, role labels, single-line notes
const HERO_HERBS = [
  { name: 'Shilajit',     latin: 'Asphaltum punjabinum',      role: 'Mineral resin', note: 'Mitochondrial fuel from the high Himalaya.' },
  { name: 'Ashwagandha',  latin: 'Withania somnifera',        role: 'Adaptogen',     note: 'The royal restorer of strength and calm.' },
  { name: 'Safed Musli',  latin: 'Chlorophytum borivilianum', role: 'Vitalizer',     note: 'White gold of the Aravalli — sustained stamina.' },
  { name: 'Kaunch Beej',  latin: 'Mucuna pruriens',           role: 'Drive',         note: 'Velvet bean prized for natural dopamine support.' },
  { name: 'Ginseng',      latin: 'Panax ginseng',             role: 'Adaptogen',     note: 'Six-year root for clean, steady energy.' },
  { name: 'Kesar',        latin: 'Crocus sativus',            role: 'Circulation',   note: 'Hand-picked Kashmiri saffron threads.' },
];

const SUPPORT_HERBS = [
  { name: 'Vidarikand', latin: 'Pueraria tuberosa',     role: 'Tonic' },
  { name: 'Gokhru',     latin: 'Tribulus terrestris',   role: 'Vitalizer' },
  { name: 'Shatavari',  latin: 'Asparagus racemosus',   role: 'Adaptogen' },
  { name: 'Triphala',   latin: 'Three-fruit blend',     role: 'Digestive' },
  { name: 'Ginger',     latin: 'Zingiber officinale',   role: 'Carrier' },
  { name: 'Aloe Vera',  latin: 'Aloe barbadensis',      role: 'Soothing' },
  { name: 'Cinnamon',   latin: 'Cinnamomum verum',      role: 'Warming' },
  { name: 'Akarkara',   latin: 'Anacyclus pyrethrum',   role: 'Vitalizer' },
  { name: 'Jaiphal',    latin: 'Myristica fragrans',    role: 'Calming' },
  { name: 'Lavang',     latin: 'Syzygium aromaticum',   role: 'Aromatic' },
  { name: 'Gond Pater', latin: 'Gum resin',             role: 'Binder' },
  { name: 'Vang Bhasam', latin: 'Calx of tin',          role: 'Bhasma' },
  { name: 'Loh Bhasam',  latin: 'Calx of iron',         role: 'Bhasma' },
  { name: 'Moti Bhasam', latin: 'Pearl calx',           role: 'Bhasma' },
];

// Unified ingredient ledger — first 4 are "featured", rest revealed via accordion
const ALL_HERBS = [
  { name: 'Shilajit',     latin: 'Asphaltum punjabinum',      qty: '25 mg',   note: 'Mitochondrial fuel from the high Himalaya.' },
  { name: 'Ashwagandha',  latin: 'Withania somnifera',        qty: '250 mg',  note: 'The royal restorer of strength and calm.' },
  { name: 'Ginseng',      latin: 'Panax ginseng',             qty: '1000 mg', note: 'Six-year root for clean, steady energy.' },
  { name: 'Akarkara',     latin: 'Anacyclus pyrethrum',       qty: '50 mg',   note: 'Pellitory root for nerve tone.' },
  { name: 'Kaunch Beej',  latin: 'Mucuna pruriens',           qty: '50 mg',   note: 'Velvet bean prized for natural dopamine support.' },
  { name: 'Shatavari',    latin: 'Asparagus racemosus',       qty: '50 mg',   note: 'Cooling balancer for endurance.' },
  { name: 'Safed Musli',  latin: 'Chlorophytum borivilianum', qty: '50 mg',   note: 'White gold of the Aravalli — sustained stamina.' },
  { name: 'Jaiphal',      latin: 'Myristica fragrans',        qty: '50 mg',   note: 'Nutmeg seed for restful nights.' },
  { name: 'Gokhru',       latin: 'Tribulus terrestris',       qty: '50 mg',   note: 'Classical Ayurvedic vigor herb.' },
  { name: 'Vidarikand',   latin: 'Pueraria tuberosa',         qty: '50 mg',   note: 'Restorative tuber for tissue building.' },
  { name: 'Aloe Vera',    latin: 'Aloe barbadensis',          qty: '2000 mg', note: 'Cools and carries the formula.' },
  { name: 'Triphala',     latin: 'Emblica officinalis',       qty: '100 mg',  note: 'Foundational gut & assimilation support.' },
  { name: 'Lavang',       latin: 'Syzygium aromaticum',       qty: '25 mg',   note: 'Clove for digestive fire.' },
  { name: 'Dalchini',     latin: 'Cinnamomum verum',          qty: '25 mg',   note: 'Circulatory warmth and clean sweetness.' },
  { name: 'Gond Pater',   latin: 'Gum tragacanth',            qty: '20 mg',   note: 'Traditional formulary binder.' },
  { name: 'Ginger',       latin: 'Zingiber officinale',       qty: '10 mg',   note: 'Activates absorption of every active.' },
  { name: 'Vang Bhasam',  latin: 'Calx of tin',               qty: '5 mg',    note: 'Classical mineral calx.' },
  { name: 'Loh Bhasam',   latin: 'Calx of iron',              qty: '5 mg',    note: 'Iron calx for blood vitality.' },
  { name: 'Moti Bhasam',  latin: 'Pearl calx',                qty: '5 mg',    note: 'Pearl calx — cooling, mineralizing.' },
  { name: 'Kesar',        latin: 'Crocus sativus',            qty: '5 mg',    note: 'Hand-picked Kashmiri saffron threads.' },
];

const FEATURED_COUNT = 2;

function VariationAV2() {
  const c = window.CONTENT;
  const [size, setSize] = useState('250 ml');
  const [herbsOpen, setHerbsOpen] = useState(false);

  return (
    <div style={vaStyles.root}>
      {/* Eyebrow + Title row */}
      <div style={vaStyles.headRow} className="v-head-row">
        <div className="v-head-left">
          <h1 style={vaStyles.title} className="v-title">{c.brand}</h1>
          <div style={vaStyles.hindi} className="v-hindi">{c.hindi}</div>
        </div>
      </div>

      {/* Hook — single editorial line */}
      <div style={vaStyles.hookLine}>
        More Control. More Endurance. <em style={vaStyles.hookEm}>More Confidence.</em>
      </div>
      {/* Body — one tight paragraph */}
      <p style={vaStyles.body}>
        <em style={vaStyles.emphasis}>Black Thunder Active+</em> delivers <strong>targeted Ayurvedic nourishment</strong> to help you perform longer, stronger, and consistently.
      </p>

      {/* Benefits — premium highlighted block */}
      <div style={vaStyles.benefitsBlock}>
        <div style={vaStyles.benefitsHead}>
          <span style={vaStyles.benefitsRule} />
          <span style={vaStyles.benefitsEyebrow}>The Formula that Upgrades Your Daily Performance</span>
          <span style={vaStyles.benefitsRule} />
        </div>
        <ol style={vaStyles.benefitList}>
          {c.benefits.map((b, i) => (
            <li key={i} style={vaStyles.benefitItem}>
              <span style={vaStyles.benefitIcon}><BenefitIcon index={i} /></span>
              <span style={vaStyles.benefitText}>
                <span style={vaStyles.benefitTitle}>{b.t}</span>
                <span style={vaStyles.benefitSub}>{b.s}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Section breaker — editorial serif, matches hook treatment */}
      <div style={vaStyles.noJittersLine}>
        No Jitters. No Crash. <em style={vaStyles.hookEm}>No Dependency.</em>
      </div>
      {/* Body — one tight paragraph */}
      <p style={vaStyles.body}>
        <em style={vaStyles.emphasis}>Pure Ayurvedic actives, nothing else.</em> No caffeine, no synthetics, no hidden stimulants — just <strong>steady, sustainable vitality</strong> your body can lean on every single day.
      </p>

      {/* Trust — editorial 3-col with bespoke icons */}
      <div style={vaStyles.trustBlock}>
        <div style={vaStyles.trustRow}>
          {c.trust.map((t, i) => (
            <div key={i} style={{...vaStyles.trustItem, ...(i < c.trust.length - 1 ? vaStyles.trustItemDivider : {})}}>
              <div style={vaStyles.trustIconWrap}>
                <TrustIcon index={i} />
              </div>
              <div style={vaStyles.trustT}>{t.t}</div>
              <div style={vaStyles.trustS}>{t.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dosage — 2 col compact */}
      <div style={vaStyles.noJittersLine}>
        Twenty Herbs. Two Rituals. <em style={vaStyles.hookEm}>One Transformation.</em>
      </div>
      <p style={vaStyles.body}>
        <em style={vaStyles.emphasis}>Choose your ritual.</em> Each protocol delivers the complete 20-active herb formula in each dose, choose the rhythm that fits your routine.
      </p>
      <div style={vaStyles.dosageRow}>
        {[c.dosageA, c.dosageB].map((d, i) => (
          <div key={i} style={vaStyles.dosageCard}>
            <div style={vaStyles.dosageTop}>
              <span style={vaStyles.dosageBadge}>{i === 0 ? 'A' : 'B'}</span>
              <span style={vaStyles.dosageLabel}>{d.label}</span>
            </div>
            <div style={vaStyles.dosageDose}>{d.dose}<span style={vaStyles.dosageMix}> · {d.mix}</span></div>
            <div style={vaStyles.dosageMeta}>
              {d.freq} · {d.timing} · <strong>{d.duration}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Formulary — compact light accordion */}
      <div style={vaStyles.formulary}>
        <div style={vaStyles.fHeadRow}>
          <div>
            <h3 style={vaStyles.fMastTitle}>
              20 Powerful &amp; 100% Natural Herbs
            </h3>
          </div>
          <div style={vaStyles.fMeta}>
            <span style={vaStyles.fMetaBig}>3825 mg per 10 ml</span>
            <span style={vaStyles.fMetaSmall}>High concentration formula</span>
          </div>
        </div>

        <div style={vaStyles.fList}>
          {ALL_HERBS.slice(0, FEATURED_COUNT).map((h, i) => (
            <div key={h.name} className="f-row" style={vaStyles.fRow}>
              <span className="f-row-idx" style={vaStyles.fRowIdx}>{String(i + 1).padStart(2, '0')}</span>
              <span className="f-row-name" style={vaStyles.fRowName}>{h.name}</span>
              <span className="f-row-latin" style={vaStyles.fRowLatin}>{h.latin}</span>
              <span className="f-row-qty" style={vaStyles.fRowQty}>{h.qty}</span>
            </div>
          ))}
          <div
            style={{
              ...vaStyles.fAccordion,
              gridTemplateRows: herbsOpen ? '1fr' : '0fr',
              opacity: herbsOpen ? 1 : 0,
            }}
            aria-hidden={!herbsOpen}
          >
            <div style={vaStyles.fAccordionInner}>
              {ALL_HERBS.slice(FEATURED_COUNT).map((h, i) => (
                <div key={h.name} className="f-row" style={vaStyles.fRow}>
                  <span className="f-row-idx" style={vaStyles.fRowIdx}>{String(i + FEATURED_COUNT + 1).padStart(2, '0')}</span>
                  <span className="f-row-name" style={vaStyles.fRowName}>{h.name}</span>
                  <span className="f-row-latin" style={vaStyles.fRowLatin}>{h.latin}</span>
                  <span className="f-row-qty" style={vaStyles.fRowQty}>{h.qty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setHerbsOpen(o => !o)}
          style={vaStyles.fToggle}
          aria-expanded={herbsOpen}
        >
          <span style={vaStyles.fToggleText}>
            {herbsOpen ? 'Show less' : `See all 20  ·  + ${ALL_HERBS.length - FEATURED_COUNT} more`}
          </span>
          <span style={{...vaStyles.fToggleChev, transform: herbsOpen ? 'rotate(180deg)' : 'none'}}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5 L 6 8 L 9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>

      {/* Editorial CTA line — matches noJitters treatment */}
      <div style={vaStyles.transformLine}>
        Start Your <em style={vaStyles.hookEm}>90-Day Transformation.</em>
      </div>

      <div className="vA-buy-stick">
      {/* Buy row */}
      <div style={vaStyles.buyRow}>
        <div style={vaStyles.sizeRow}>
          {c.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              style={{ ...vaStyles.sizeBtn, ...(size === s ? vaStyles.sizeBtnActive : {}) }}
            >
              <span style={vaStyles.sizeRadio}>
                {size === s && <span style={vaStyles.sizeRadioInner} />}
              </span>
              {s}
            </button>
          ))}
        </div>
        <div style={vaStyles.priceBlock}>
          <div style={vaStyles.priceFinalRow}>
            <span style={vaStyles.priceCurrency}>₹</span>
            <span style={vaStyles.priceAmount}>{c.price.bySize[size].final.replace('₹', '')}</span>
            <span style={vaStyles.priceOff}>{c.price.off}</span>
          </div>
          <div style={vaStyles.priceMeta}>
            <span>MRP <span style={vaStyles.priceMrp}>{c.price.bySize[size].mrp}</span></span>
            <span style={vaStyles.priceDot}>·</span>
            <span>{c.price.taxLine}</span>
          </div>
        </div>
      </div>

      <div style={vaStyles.ctaRow}>
        <button type="button" style={vaStyles.ctaPrimary}>
          <span style={vaStyles.ctaPrimaryBuy}>Buy Now</span>
        </button>
        <button type="button" style={vaStyles.ctaSecondary}>Add to Cart</button>
      </div>
      </div>
    </div>
  );
}

const vaStyles = {
  root: {
    fontFamily: '"Inter", system-ui, sans-serif',
    color: '#1a1a1a',
    background: '#faf6ee',
    padding: '24px 30px 26px',
    width: 680,
    boxSizing: 'border-box',
    fontSize: 13.5,
    lineHeight: 1.5,
  },
  headRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    marginBottom: 14,
  },
  eyebrow: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 },
  eyebrowDot: { width: 5, height: 5, borderRadius: '50%', background: '#1a4d2e' },
  eyebrowText: {
    fontFamily: '"Geist Mono", ui-monospace, monospace',
    fontSize: 10.5,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#1a4d2e',
    fontWeight: 500,
  },
  title: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 38,
    lineHeight: 1.0,
    fontWeight: 400,
    margin: '0 0 2px',
    letterSpacing: '-0.02em',
    color: '#1a1a1a',
  },
  hindi: {
    fontFamily: '"Tiro Devanagari Sanskrit", serif',
    fontSize: 16,
    color: '#5a5a5a',
    fontStyle: 'italic',
  },
  headPotency: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 3,
    background: '#1a4d2e',
    color: '#faf6ee',
    padding: '8px 14px 10px',
    borderRadius: 2,
    whiteSpace: 'nowrap',
  },
  headPotencyTitle: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 8,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#c8dcc4',
    lineHeight: 1,
  },
  headPotencyValue: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
  },
  headPotencyNum: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 26,
    color: '#fff',
    lineHeight: 1,
  },
  headPotencyUnit: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 14,
    color: '#c8dcc4',
  },
  headPotencyPer: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10,
    color: '#c8dcc4',
    letterSpacing: '0.06em',
    marginLeft: 4,
  },
  hookLine: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 28,
    lineHeight: 1.1,
    fontWeight: 400,
    color: '#1a4d2e',
    letterSpacing: '-0.015em',
    marginTop: 6,
  },
  hookEm: {
    fontStyle: 'italic',
    color: '#c9842b',
  },
  noJittersLine: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 28,
    lineHeight: 1.1,
    fontWeight: 400,
    color: '#1a4d2e',
    letterSpacing: '-0.015em',
    margin: '20px 0 0',
  },
  transformLine: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 28,
    lineHeight: 1.15,
    fontWeight: 400,
    color: '#1a4d2e',
    letterSpacing: '-0.015em',
    margin: '6px 0 12px',
  },
  ctaPrimaryBuy: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  promise: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10.5,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#5a5a5a',
    fontWeight: 500,
    marginTop: 12,
  },
  rule: {
    height: 0,
    margin: 0,
  },
  breakerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    margin: '18px 0 18px',
  },
  breakerDot: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#c9842b',
  },
  breakerText: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#1a4d2e',
    fontWeight: 500,
  },
  body: {
    margin: '0 0 16px',
    fontSize: 14.5,
    lineHeight: 1.55,
    color: '#2a2a2a',
  },
  emphasis: {
    fontFamily: 'inherit',
    fontStyle: 'italic',
    fontWeight: 500,
    fontSize: '1em',
    color: '#1a4d2e',
  },
  sectionLabel: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10.5,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#5a5a5a',
    marginBottom: 8,
    fontWeight: 500,
  },
  benefitsBlock: {
    margin: '14px -4px 18px',
    padding: '20px 22px 16px',
    background: '#faf6ee',
    border: '1px solid #c9842b33',
    borderRadius: 4,
    position: 'relative',
    boxShadow: 'inset 0 0 0 1px #ffffff80, 0 1px 0 #c9842b14',
  },
  benefitsHead: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  benefitsRule: {
    flex: 1,
    height: 1,
    background: 'none',
  },
  benefitsEyebrow: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontStyle: 'italic',
    fontSize: 19,
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    color: '#1a4d2e',
    textAlign: 'center',
    flexShrink: 0,
    maxWidth: '70%',
  },
  benefitList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: 20,
    rowGap: 4,
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 0',
    fontSize: 13.5,
  },
  benefitIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    minWidth: 36,
    borderRadius: '50%',
    background: '#fff',
    border: '1px solid #c9842b40',
    boxShadow: '0 1px 2px #c9842b1a',
  },
  benefitText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.2,
  },
  benefitTitle: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 17,
    color: '#1a1a1a',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
  },
  benefitSub: {
    fontSize: 11,
    color: '#5a5a5a',
    fontStyle: 'italic',
    marginTop: 2,
  },
  benefitNum: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10.5,
    color: '#c9842b',
    fontWeight: 500,
    minWidth: 18,
  },
  benefitSub: { color: '#5a5a5a' },
  noInline: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 11,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: '#1a4d2e',
    fontWeight: 500,
  },
  dosageRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 4 },
  dosageCard: {
    background: '#fff',
    border: '1px solid #1a4d2e22',
    borderRadius: 4,
    padding: '12px 14px',
  },
  dosageTop: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 },
  dosageBadge: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 16,
    color: '#c9842b',
    fontStyle: 'italic',
    width: 20,
    textAlign: 'center',
  },
  dosageLabel: {
    fontFamily: 'inherit',
    fontSize: 10,
    color: '#1a4d2e',
  },
  dosageDose: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 19,
    color: '#1a1a1a',
    lineHeight: 1.15,
    marginBottom: 4,
  },
  dosageMix: {
    fontSize: 12,
    color: '#5a5a5a',
    fontStyle: 'italic',
    fontFamily: '"Inter", sans-serif',
  },
  dosageMeta: {
    fontSize: 11.5,
    color: '#5a5a5a',
    paddingTop: 6,
  },
  herbsBlock: {
    margin: '16px 0',
  },
  herbsHead: {
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  herbsCount: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 48,
    lineHeight: 0.9,
    color: '#1a4d2e',
    fontStyle: 'italic',
  },
  herbsEyebrow: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#888',
    fontWeight: 500,
    marginBottom: 2,
  },
  herbsTitle: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 18,
    color: '#1a1a1a',
    lineHeight: 1.1,
  },
  herbsCapsules: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  herbCapsule: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '5px 10px',
    borderRadius: 999,
    border: '1px solid #1a4d2e33',
    background: '#fff',
    fontSize: 10.5,
    color: '#1a4d2e',
    fontWeight: 500,
    letterSpacing: '0.005em',
    lineHeight: 1.2,
  },
  herbCapsuleHero: {
    background: '#1a4d2e',
    color: '#faf6ee',
    borderColor: '#1a4d2e',
  },
  herbsList: {
    fontSize: 12.5,
    lineHeight: 1.55,
    color: '#1a1a1a',
  },
  trustBlock: {
    marginTop: 3,
    paddingTop: 9,
    paddingBottom: 18,
    position: 'relative',
  },
  trustHead: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  trustOrnament: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 14,
    color: '#c9842b',
    lineHeight: 1,
  },
  trustHeadEyebrow: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: '#1a4d2e',
    fontWeight: 500,
  },
  trustHeadRule: {
    flex: 1,
    height: 1,
    background: '#1a4d2e22',
  },
  trustRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  trustItem: {
    padding: '0 18px 0 0',
    background: 'transparent',
    border: 'none',
    borderRadius: 0,
  },
  trustItemDivider: {},
  trustIconWrap: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: '#fff',
    border: '1px solid #1a4d2e33',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  trustT: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 18,
    fontWeight: 400,
    color: '#1a4d2e',
    marginBottom: 4,
    letterSpacing: '-0.005em',
    lineHeight: 1.15,
  },
  trustS: {
    fontSize: 11.5,
    color: '#5a5a5a',
    lineHeight: 1.4,
    fontStyle: 'italic',
    fontFamily: '"Inter", sans-serif',
  },
  closing: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    margin: '16px 0',
    padding: '10px 0',
  },
  closingArrow: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 22,
    color: '#c9842b',
  },
  closingText: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1a1a1a',
    lineHeight: 1.3,
  },
  buyRow: {
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sizeRow: { display: 'flex', gap: 8 },
  sizeBtn: {
    background: '#fff',
    border: '1px solid #1a4d2e33',
    borderRadius: 2,
    padding: '8px 12px',
    fontFamily: '"Inter", system-ui, sans-serif',
    fontSize: 12.5,
    fontWeight: 500,
    color: '#1a1a1a',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  sizeBtnActive: {
    background: '#1a4d2e',
    color: '#faf6ee',
    borderColor: '#1a4d2e',
  },
  sizeRadio: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: '1.5px solid currentColor',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeRadioInner: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: 'currentColor',
  },
  priceBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4,
  },
  priceFinalRow: { display: 'flex', alignItems: 'baseline', gap: 8 },
  priceCurrency: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 22,
    color: '#1a1a1a',
  },
  priceAmount: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 38,
    lineHeight: 0.9,
    color: '#1a1a1a',
    letterSpacing: '-0.02em',
  },
  priceMrp: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 13,
    color: '#1a1a1a',
    letterSpacing: '-0.005em',
  },
  priceMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 10.5,
    color: '#888',
  },
  priceDot: { color: '#bbb' },
  priceOff: {
    display: 'inline-block',
    background: '#c8dcc4',
    color: '#1a4d2e',
    padding: '2px 8px',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  ctaRow: { display: 'flex', gap: 8 },
  ctaPrimary: {
    flex: 1,
    background: '#1a4d2e',
    color: '#faf6ee',
    border: 'none',
    padding: '14px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  ctaPrimaryT: { fontSize: 13, fontWeight: 600, letterSpacing: '0.01em' },
  ctaPrimaryS: { fontSize: 10.5, color: '#c8dcc4', letterSpacing: '0.04em' },
  ctaSecondary: {
    flex: 1,
    background: '#faf6ee',
    color: '#1a4d2e',
    border: '1px solid #1a4d2e',
    padding: '14px 16px',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    borderRadius: 2,
  },
};

// ─── Formulary v2 styles — compact, light ────────────────────────
Object.assign(vaStyles, {
  formulary: {
    margin: '14px 0 14px',
    padding: '14px 16px 10px',
    background: '#fff',
    border: '1px solid #1a4d2e22',
    borderRadius: 4,
    color: '#1a1a1a',
  },
  fHeadRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingBottom: 8,
    borderBottom: '1px solid #1a4d2e1a',
    marginBottom: 6,
  },
  fMastEyebrow: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 9.5,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#c9842b',
    marginBottom: 3,
  },
  fMastTitle: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 24,
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
    color: '#1a1a1a',
    margin: 0,
    fontWeight: 400,
  },
  fMastTitleEm: {
    fontStyle: 'italic',
    color: '#c9842b',
  },
  fMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 4,
    paddingBottom: 2,
    textAlign: 'right',
  },
  fMetaBig: {
    fontFamily: '"Instrument Serif", Georgia, serif',
    fontSize: 19,
    color: '#1a1a1a',
    lineHeight: 1.15,
    whiteSpace: 'nowrap',
  },
  fMetaSmall: {
    fontFamily: 'inherit',
    fontSize: 8.5,
    color: '#888',
    lineHeight: 1.3,
  },
  fList: {
    paddingTop: 2,
  },
  fAccordion: {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition: 'grid-template-rows 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms ease',
  },
  fAccordionInner: {
    overflow: 'hidden',
    minHeight: 0,
  },
  fRow: {
    display: 'grid',
    gridTemplateColumns: '24px 170px 1fr auto',
    alignItems: 'baseline',
    columnGap: 10,
    padding: '7px 0',
    borderBottom: '1px solid #1a4d2e10',
  },
  fRowIdx: {
    fontFamily: '"Geist Mono", monospace',
    fontSize: 9,
    letterSpacing: '0.14em',
    color: '#c9842b',
  },
  fRowName: {
    fontFamily: 'inherit',
    fontSize: 13.5,
    lineHeight: 1.2,
    letterSpacing: 0,
    color: '#1a1a1a',
    fontWeight: 500,
  },
  fRowLatin: {
    fontFamily: 'inherit',
    fontStyle: 'italic',
    fontSize: 11.5,
    color: '#5a5a5a',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  fRowQty: {
    fontFamily: 'inherit',
    fontSize: 11,
    color: '#1a4d2e',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
    minWidth: 60,
    textAlign: 'right',
  },
  fToggle: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '10px 0 4px',
    fontFamily: 'inherit',
  },
  fToggleText: {
    fontFamily: 'inherit',
    fontSize: 10,
    color: '#1a4d2e',
    fontWeight: 500,
  },
  fToggleChev: {
    color: '#1a4d2e',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    border: '1px solid #1a4d2e44',
    borderRadius: '50%',
    transition: 'transform 200ms ease',
  },
});

window.VariationAV2 = VariationAV2;

'use strict';

const ICONS = {
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="1"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  trendUp: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  trendDown: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
  card: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  repeat: '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  bank: '<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  more: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  receipt: '<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="12" y2="16"/>',
  bag: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  percent: '<line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  wallet: '<path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>'
};

function icon(name, size = 16) {
  return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    el.outerHTML = icon(el.getAttribute('data-icon'), Number(el.getAttribute('data-size') || 16));
  });
}


const CATEGORIES = {
  alimentacao: {
    id: 'alimentacao', name: 'Alimentação e delivery', color: '#e04f16',
    keywords: ['ifood', 'ifd*', 'rappi', 'ze delivery', 'zedelivery', 'mcdonald', 'bk ', 'burger', 'outback', 'madero',
      'habibs', 'subway', 'pizza', 'sushi', 'restaurante', 'restaurant', 'lanchonete', 'padaria', 'panificadora', 'cafe',
      'cafeteria', 'starbucks', 'acai', 'sorvete', 'churrascaria', 'bar ', 'boteco', 'doceria', 'confeitaria',
      'coco bambu', 'spoleto', 'lanches', 'pastel', 'hamburg']
  },
  supermercado: {
    id: 'supermercado', name: 'Supermercado', color: '#099250',
    keywords: ['supermercado', 'supermerc', 'minimercado', 'mini mercado', 'mercadinho', 'pao de acucar', 'carrefour', 'assai', 'atacadao', 'extra ',
      'big ', 'sams club', 'hortifruti', 'sacolao', 'oxxo', 'minuto pao', 'zafari', 'angeloni', 'condor', 'muffato',
      'guanabara', 'savegnago', 'tenda atacado', 'emporio', 'mercearia', 'acougue', 'atacadista']
  },
  transporte: {
    id: 'transporte', name: 'Transporte e combustível', color: '#ca8504',
    keywords: ['uber', '99app', '99*', '99 pop', 'cabify', 'indriver', 'posto ', 'shell', 'ipiranga', 'petrobras',
      'br mania', 'combustivel', 'gasolina', 'etanol', 'estacionamento', 'estapar', 'sem parar', 'veloe', 'conectcar',
      'pedagio', 'metro', 'bilhete unico', 'azul linhas', 'latam', 'gol linhas', 'clickbus', 'buser', 'localiza',
      'movida', 'unidas', 'motos', 'auto pecas', 'autopecas', 'oficina', 'mecanica']
  },
  assinaturas: {
    id: 'assinaturas', name: 'Assinaturas e serviços digitais', color: '#6938ef',
    keywords: ['netflix', 'spotify', 'amazon prime', 'prime video', 'prime canais', 'disney', 'hbo', 'max.com',
      'youtube', 'google*', 'google one', 'apple.com/bill', 'icloud', 'openai', 'chatgpt', 'claude', 'anthropic',
      'github', 'microsoft', 'office', 'adobe', 'canva', 'globoplay', 'paramount', 'crunchyroll', 'deezer', 'audible',
      'kindle', 'assinatura', 'mensalidade']
  },
  compras: {
    id: 'compras', name: 'Compras e e-commerce', color: '#1570ef',
    keywords: ['mercadolivre', 'mercado livre', 'mercado*', 'shopee', 'amazon', 'magalu', 'magazine luiza',
      'casas bahia', 'ponto frio', 'fast shop', 'kabum', 'pichau', 'terabyteshop', 'aliexpress', 'shein', 'temu',
      'tiktok shop', 'renner', 'riachuelo', 'cea ', 'c&a', 'zara', 'hering', 'centauro', 'netshoes', 'nike', 'adidas',
      'decathlon', 'sephora', 'oboticario', 'natura', 'americanas', 'shopping', 'loja']
  },
  saude: {
    id: 'saude', name: 'Saúde e bem-estar', color: '#06aed4',
    keywords: ['drogasil', 'droga raia', 'drogaria', 'farmacia', 'pague menos', 'panvel', 'ultrafarma', 'araujo',
      'nissei', 'hospital', 'clinica', 'laboratorio', 'fleury', 'unimed', 'amil', 'sulamerica', 'consulta', 'odonto',
      'dentista', 'psicolog', 'smartfit', 'smart fit', 'bluefit', 'gympass', 'wellhub', 'totalpass', 'academia']
  },
  casa: {
    id: 'casa', name: 'Casa, contas e pets', color: '#4e5ba6',
    keywords: ['leroy merlin', 'telhanorte', 'sodimac', 'tokstok', 'camicado', 'cobasi', 'petz', 'petlove', 'pet shop',
      'veterinari', 'enel', 'cpfl', 'cemig', 'copel', 'celesc', 'sabesp', 'sanepar', 'comgas', 'vivo', 'claro',
      'tim ', 'algar', 'internet', 'condominio', 'aluguel', 'lavanderia', 'recarga']
  },
  lazer: {
    id: 'lazer', name: 'Lazer, jogos e viagens', color: '#dd2590',
    keywords: ['cinemark', 'cinepolis', 'uci ', 'cinema', 'ingresso', 'sympla', 'eventim', 'ticketmaster', 'teatro',
      'booking', 'airbnb', 'decolar', 'hurb', 'hotel', 'pousada', 'resort', 'parque', 'steam', 'riotgame', 'riot games',
      'playstation', 'xbox', 'nintendo', 'epic games', 'blizzard', 'garena', 'twitch']
  },
  pix: {
    id: 'pix', name: 'Pix no crédito e transferências', color: '#15b79e',
    keywords: ['pix no credito', 'pix credito', 'pix parcelado', 'transferencia']
  },
  taxas: {
    id: 'taxas', name: 'Juros, multas e tarifas', color: '#c01048',
    keywords: ['iof', 'juros', 'multa', 'anuidade', 'tarifa', 'encargos', 'seguro fatura', 'seguro cartao',
      'avaliacao emergencial', 'saque', 'fatura atrasada', 'de atraso']
  },
  parcfatura: {
    id: 'parcfatura', name: 'Parcelamento de fatura', color: '#912018',
    keywords: ['parcelamento de fatura', 'parcelamento fatura', 'financiamento de fatura', 'refinanciamento']
  },
  outros: { id: 'outros', name: 'Outros', color: '#98a2b3', keywords: [] }
};

// Verificadas antes das demais (ex.: "Multa de atraso do Pix para UBER" é tarifa, não transporte)
const PRIORITY_CATEGORIES = ['parcfatura', 'taxas', 'pix'];
const NON_PURCHASE_CATEGORIES = ['parcfatura', 'taxas'];

const SUBSCRIPTION_KEYWORDS = ['netflix', 'spotify', 'amazon prime', 'prime canais', 'disney', 'hbo max', 'max.com',
  'youtube premium', 'google one', 'google*one', 'apple.com/bill', 'icloud', 'openai', 'chatgpt', 'claude', 'github',
  'microsoft', 'adobe', 'canva', 'globoplay', 'deezer', 'smartfit', 'smart fit', 'gympass', 'wellhub', 'assinatura',
  'mensalidade', 'subscription'];

const PAYMENT_KEYWORDS = ['pagamento recebido', 'pagto fatura', 'pagamento de fatura', 'pagamento fatura',
  'debito automatico fatura', 'pgto fatura', 'pagamento efetuado', 'inclusao de pagamento', 'credito de pagamento'];


const CARRYOVER_KEYWORDS = ['valor pendente do mes anterior', 'valor pendente', 'saldo anterior',
  'saldo da fatura anterior', 'saldo fatura anterior', 'restante da fatura anterior', 'saldo devedor anterior',
  'saldo em atraso'];

const REFUND_KEYWORDS = ['estorno', 'credito em fatura', 'reembolso', 'desconto antecipacao', 'cashback', 'cancelamento'];

const BANK_NAMES = [
  [/nu pagamentos|nubank/, 'Nubank'], [/itau/, 'Itaú'], [/bradesco/, 'Bradesco'], [/santander/, 'Santander'],
  [/banco inter|^inter\b/, 'Banco Inter'], [/\bc6\b/, 'C6 Bank'], [/banco do brasil/, 'Banco do Brasil'],
  [/caixa/, 'Caixa'], [/\bxp\b/, 'XP'], [/btg/, 'BTG Pactual'], [/picpay/, 'PicPay'], [/mercado pago/, 'Mercado Pago'],
  [/neon/, 'Neon'], [/original/, 'Banco Original'], [/sicredi/, 'Sicredi'], [/sicoob/, 'Sicoob'], [/porto/, 'Porto Bank']
];

const MONTHS_SHORT = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const MONTHS_LONG = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
  'outubro', 'novembro', 'dezembro'];

const STORAGE_KEY = 'fc_statements_v1';
const TAG_LABELS = { essencial: 'Essencial', superfluo: 'Supérfluo', reembolsavel: 'Reembolsável', revisar: 'Revisar' };


function readJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (_) { return fallback; }
}

const state = {
  statements: [],
  activeId: null,
  data: [],
  invertSigns: false,
  categoryFilter: 'ALL',
  tableLimit: 100,
  charts: {},
  customCategories: readJSON('ofx_custom_categories', {}),
  customTags: readJSON('ofx_custom_tags', {}),
  budgetLimit: Number(localStorage.getItem('ofx_budget_limit') || 3000)
};


const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const BRL_COMPACT = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact', maximumFractionDigits: 1 });
const fmtBRL = v => BRL.format(v || 0);
const fmtCompact = v => BRL_COMPACT.format(v || 0);
const fmtPct = v => `${(v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;

function fmtDate(d) {
  if (!d || isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
function fmtDayMonth(d) {
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}
const monthLabel = d => `${MONTHS_SHORT[d.getMonth()]}/${d.getFullYear()}`;
const monthLong = d => `${MONTHS_LONG[d.getMonth()]} de ${d.getFullYear()}`;
const monthKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
const ymd = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function normalizeText(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function cleanMerchantKey(desc) {
  return normalizeText(desc)
    .replace(/parcela\s*\d+\s*(\/|de)\s*\d+/gi, '')
    .replace(/parc\.?\s*\d+\/\d+/gi, '')
    .replace(/\s-\s\d{1,2}\/\d{1,2}\b/g, '')
    .replace(/\b\d{2}\/\d{2}\b/g, '')
    .replace(/\d{3,}/g, '')
    .replace(/[\s-]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function prettyMerchant(desc) {
  return desc.replace(/\s*-?\s*parcela\s*\d+\s*(\/|de)\s*\d+/i, '').replace(/\s-\s\d{1,2}\/\d{1,2}$/, '').trim();
}

function prettyBank(org) {
  const n = normalizeText(org);
  for (const [re, name] of BANK_NAMES) if (re.test(n)) return name;
  if (!org) return 'Cartão de crédito';
  return org.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function maskAccount(acct) {
  if (!acct) return '';
  if (/x{2,}/i.test(acct)) return acct;
  const digits = acct.replace(/[^0-9a-z]/gi, '');
  return `•••• ${digits.slice(-4)}`;
}

function shiftMonths(d, k) {
  return new Date(d.getFullYear(), d.getMonth() + k, Math.min(d.getDate(), 28), d.getHours(), d.getMinutes());
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function deltaBadge(curr, prev, label) {
  if (!prev || prev <= 0) return '';
  const pct = ((curr - prev) / prev) * 100;
  if (Math.abs(pct) < 0.5) return `<span class="delta flat">estável</span>${label ? ` <span>${label}</span>` : ''}`;
  const up = pct > 0;
  return `<span class="delta ${up ? 'up' : 'down'}">${icon(up ? 'trendUp' : 'trendDown', 12)} ${fmtPct(Math.abs(pct))}</span>${label ? ` <span>${label}</span>` : ''}`;
}

function toast(msg, type = '') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `${icon(type === 'error' ? 'alert' : 'check', 16)}<span>${escapeHtml(msg)}</span>`;
  document.getElementById('toasts').appendChild(el);
  setTimeout(() => el.remove(), 4500);
}

// ---------------------------------------------------------------------------
// Leitura de OFX (1.x SGML e 2.x XML)
// ---------------------------------------------------------------------------
function parseOfxDate(raw) {
  const c = (raw || '').trim().replace(/\[.*$/, '').replace(/[^0-9]/g, '');
  if (c.length >= 8) {
    return new Date(+c.slice(0, 4), +c.slice(4, 6) - 1, +c.slice(6, 8),
      c.length >= 10 ? +c.slice(8, 10) : 12, c.length >= 12 ? +c.slice(10, 12) : 0);
  }
  return null;
}

function extractTag(block, tag) {
  const xml = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  if (xml) return xml[1].trim();
  const sgml = block.match(new RegExp(`<${tag}>([^<\\r\\n]+)`, 'i'));
  return sgml ? sgml[1].trim() : '';
}

async function decodeFile(file) {
  const buffer = await file.arrayBuffer();
  // Vários bancos declaram CHARSET:1252 mas gravam em UTF-8: tenta UTF-8 estrito primeiro.
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buffer);
  } catch (_) {
    return new TextDecoder('windows-1252').decode(buffer);
  }
}

function parseOfx(content) {
  if (!/<OFX>/i.test(content)) throw new Error('Arquivo não parece ser um OFX válido.');

  let ledgerBalance = null;
  const lb = content.match(/<LEDGERBAL>([\s\S]*?)(<\/LEDGERBAL>|<AVAILBAL>|<\/CCSTMTRS>|<\/STMTRS>)/i);
  if (lb) {
    const v = parseFloat(extractTag(lb[1], 'BALAMT').replace(',', '.'));
    if (!isNaN(v)) ledgerBalance = v;
  }

  const items = content.split(/<STMTTRN>/i).slice(1).map((seg, idx) => {
    const block = seg.split(/<\/STMTTRN>|<\/BANKTRANLIST>/i)[0];
    const memo = extractTag(block, 'MEMO');
    const name = extractTag(block, 'NAME');
    let description = memo || name || 'Lançamento sem descrição';
    if (name && memo && !normalizeText(memo).includes(normalizeText(name))) description = `${name} - ${memo}`;
    return {
      idx,
      fitId: extractTag(block, 'FITID') || `tx-${idx}`,
      trnType: extractTag(block, 'TRNTYPE').toUpperCase(),
      date: parseOfxDate(extractTag(block, 'DTPOSTED')) || new Date(),
      rawAmount: parseFloat(extractTag(block, 'TRNAMT').replace(',', '.')) || 0,
      description: description.replace(/\s+/g, ' ').trim()
    };
  });

  return {
    org: extractTag(content, 'ORG'),
    acctId: extractTag(content, 'ACCTID'),
    curDef: extractTag(content, 'CURDEF') || 'BRL',
    startDate: parseOfxDate(extractTag(content, 'DTSTART')),
    endDate: parseOfxDate(extractTag(content, 'DTEND')),
    ledgerBalance,
    items
  };
}

function fileNameDate(name) {
  const m = (name || '').match(/(20\d{2})[-_.](\d{2})(?:[-_.](\d{2}))?/);
  if (!m) return null;
  const month = +m[2];
  if (month < 1 || month > 12) return null;
  return new Date(+m[1], month - 1, m[3] ? +m[3] : 10, 12);
}

function createStatement(parsed, fileName, extra = {}) {
  const dates = parsed.items.map(i => i.date).sort((a, b) => a - b);
  const start = parsed.startDate || dates[0] || new Date();
  const end = parsed.endDate || dates[dates.length - 1] || new Date();
  const refDate = fileNameDate(fileName) || end;
  return {
    id: [normalizeText(parsed.org), parsed.acctId, ymd(start), ymd(end)].join('|'),
    fileName,
    org: parsed.org,
    bank: prettyBank(parsed.org),
    account: parsed.acctId,
    startDate: start,
    endDate: end,
    refDate,
    ledgerBalance: parsed.ledgerBalance,
    items: parsed.items,
    importedAt: new Date(),
    isSample: false,
    ...extra
  };
}

// ---------------------------------------------------------------------------
// Persistência local
// ---------------------------------------------------------------------------
function saveStatements() {
  const serial = state.statements.filter(s => !s.isSample).map(s => ({
    ...s,
    startDate: s.startDate.toISOString(),
    endDate: s.endDate.toISOString(),
    refDate: s.refDate.toISOString(),
    importedAt: s.importedAt.toISOString(),
    items: s.items.map(i => ({ ...i, date: i.date.toISOString() }))
  }));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serial));
  } catch (_) {
    toast('Não foi possível salvar as faturas neste navegador (armazenamento cheio).', 'error');
  }
}

function loadStatements() {
  const raw = readJSON(STORAGE_KEY, []);
  return raw.map(s => ({
    ...s,
    startDate: new Date(s.startDate),
    endDate: new Date(s.endDate),
    refDate: new Date(s.refDate),
    importedAt: new Date(s.importedAt || Date.now()),
    items: s.items.map(i => ({ ...i, date: new Date(i.date) }))
  }));
}

// ---------------------------------------------------------------------------
// Classificação dos lançamentos
// ---------------------------------------------------------------------------
function detectInstallment(desc) {
  const patterns = [
    /parcela\s*(\d{1,2})\s*(?:\/|de)\s*(\d{1,2})/i,
    /parc\.?\s*(\d{1,2})\s*(?:\/|de)\s*(\d{1,2})/i,
    /(?:^|\s|-)(\d{1,2})\/(\d{1,2})(?:\s|$)/i
  ];
  for (const re of patterns) {
    const m = desc.match(re);
    if (m) {
      const current = +m[1];
      const total = +m[2];
      if (current >= 1 && total >= 2 && current <= total && total <= 48) {
        return { current, total, remaining: total - current };
      }
    }
  }
  return null;
}

function detectCategory(desc, merchantKey) {
  const custom = state.customCategories[merchantKey];
  if (custom && CATEGORIES[custom]) return custom;
  const norm = normalizeText(desc);
  for (const id of PRIORITY_CATEGORIES) {
    if (CATEGORIES[id].keywords.some(k => norm.includes(k))) return id;
  }
  for (const [id, cat] of Object.entries(CATEGORIES)) {
    if (id === 'outros' || PRIORITY_CATEGORIES.includes(id)) continue;
    if (cat.keywords.some(k => norm.includes(k))) return id;
  }
  return 'outros';
}

function buildTransactions(stmt) {
  const label = monthLabel(stmt.refDate);
  const list = stmt.items
    .filter(i => Math.abs(i.rawAmount) >= 0.005)
    .map(item => {
      const norm = normalizeText(item.description);
      const raw = state.invertSigns ? -item.rawAmount : item.rawAmount;
      let kind = 'EXPENSE';
      if (PAYMENT_KEYWORDS.some(k => norm.includes(k))) kind = 'PAYMENT';
      else if (CARRYOVER_KEYWORDS.some(k => norm.includes(k))) kind = 'CARRYOVER';
      else if (REFUND_KEYWORDS.some(k => norm.includes(k)) || raw > 0) kind = 'REFUND';

      const merchantKey = cleanMerchantKey(item.description);
      const installment = kind === 'EXPENSE' ? detectInstallment(item.description) : null;
      const categoryId = kind === 'EXPENSE' ? detectCategory(item.description, merchantKey) : 'outros';
      const isSubscription = kind === 'EXPENSE' && !installment &&
        (categoryId === 'assinaturas' || SUBSCRIPTION_KEYWORDS.some(k => norm.includes(k)));
      const id = `${stmt.id}#${item.idx}`;

      return {
        id,
        stmtId: stmt.id,
        stmtLabel: label,
        fitId: item.fitId,
        date: item.date,
        description: item.description,
        amount: Math.abs(raw),
        kind,
        merchantKey,
        installment,
        categoryId,
        isSubscription,
        isPurchase: kind === 'EXPENSE' && !NON_PURCHASE_CATEGORIES.includes(categoryId),
        tag: state.customTags[id] || '',
        isDuplicate: false
      };
    });

  // Possíveis duplicidades: mesmo estabelecimento e valor em até 2 dias
  const purchases = list.filter(t => t.isPurchase);
  for (let i = 0; i < purchases.length; i++) {
    for (let j = i + 1; j < purchases.length; j++) {
      const a = purchases[i];
      const b = purchases[j];
      if (a.merchantKey === b.merchantKey && Math.abs(a.amount - b.amount) < 0.01 &&
        Math.abs(a.date - b.date) <= 2 * 86400000) {
        a.isDuplicate = b.isDuplicate = true;
      }
    }
  }
  return list;
}

function computeMetrics(txs, ledgerBalance) {
  const sum = arr => arr.reduce((s, t) => s + t.amount, 0);
  const expenses = txs.filter(t => t.kind === 'EXPENSE');
  const purchases = expenses.filter(t => t.isPurchase);
  const refunds = txs.filter(t => t.kind === 'REFUND');
  const payments = txs.filter(t => t.kind === 'PAYMENT');
  const carryovers = txs.filter(t => t.kind === 'CARRYOVER');
  const fees = expenses.filter(t => t.categoryId === 'taxas');
  const debt = expenses.filter(t => t.categoryId === 'parcfatura');
  const installments = expenses.filter(t => t.installment);
  const subscriptions = expenses.filter(t => t.isSubscription);

  const totalExpenses = sum(expenses);
  const totalRefunds = sum(refunds);
  const computedTotal = Math.max(0, totalExpenses - totalRefunds);
  const hasOfficial = ledgerBalance !== null && ledgerBalance !== undefined;
  const officialTotal = hasOfficial ? Math.abs(ledgerBalance) : computedTotal;

  const byCategory = {};
  for (const t of expenses) {
    byCategory[t.categoryId] = byCategory[t.categoryId] || { id: t.categoryId, total: 0, count: 0 };
    byCategory[t.categoryId].total += t.amount;
    byCategory[t.categoryId].count += 1;
  }
  const categories = Object.values(byCategory).sort((a, b) => b.total - a.total);

  const merchantMap = {};
  for (const t of purchases) {
    const k = t.merchantKey || t.description;
    merchantMap[k] = merchantMap[k] || { key: k, name: prettyMerchant(t.description), total: 0, count: 0, categoryId: t.categoryId };
    merchantMap[k].total += t.amount;
    merchantMap[k].count += 1;
  }
  const merchants = Object.values(merchantMap).sort((a, b) => b.total - a.total);
  const maxPurchase = [...purchases].sort((a, b) => b.amount - a.amount)[0] || null;
  const smallPurchases = purchases.filter(t => t.amount <= 35);

  return {
    expenses, purchases, refunds, payments, carryovers, fees, debt, installments, subscriptions,
    totalExpenses,
    totalPurchases: sum(purchases),
    totalRefunds,
    totalPayments: sum(payments),
    totalCarryover: sum(carryovers),
    totalFees: sum(fees),
    totalDebt: sum(debt),
    totalInstallments: sum(installments),
    totalSubscriptions: sum(subscriptions),
    nextMonthCommitted: installments.filter(t => t.installment.remaining >= 1).reduce((s, t) => s + t.amount, 0),
    futureCommitted: installments.reduce((s, t) => s + t.amount * t.installment.remaining, 0),
    computedTotal,
    hasOfficial,
    officialTotal,
    reconciliationDiff: hasOfficial ? officialTotal - computedTotal : 0,
    categories,
    merchants,
    maxPurchase,
    avgTicket: purchases.length ? sum(purchases) / purchases.length : 0,
    smallPurchases,
    totalSmall: sum(smallPurchases),
    duplicates: purchases.filter(t => t.isDuplicate)
  };
}

function computeAll() {
  return [...state.statements]
    .sort((a, b) => a.refDate - b.refDate || a.endDate - b.endDate)
    .map(stmt => {
      const txs = buildTransactions(stmt);
      return { stmt, txs, m: computeMetrics(txs, stmt.ledgerBalance) };
    });
}

function monthGroups(data) {
  const map = {};
  for (const d of data) {
    const key = monthKey(d.stmt.refDate);
    const g = map[key] = map[key] || {
      key, date: d.stmt.refDate, label: monthLabel(d.stmt.refDate),
      total: 0, purchases: 0, fees: 0, debt: 0, byCat: {}, items: []
    };
    g.total += d.m.officialTotal;
    g.purchases += d.m.totalPurchases;
    g.fees += d.m.totalFees;
    g.debt += d.m.totalDebt;
    g.items.push(d);
    for (const c of d.m.categories) g.byCat[c.id] = (g.byCat[c.id] || 0) + c.total;
  }
  return Object.values(map).sort((a, b) => a.key.localeCompare(b.key));
}

// ---------------------------------------------------------------------------
// Renderização principal
// ---------------------------------------------------------------------------
function render() {
  const has = state.statements.length > 0;
  document.getElementById('empty-state').classList.toggle('hidden', has);
  document.getElementById('app-shell').classList.toggle('hidden', !has);
  document.getElementById('more-dropdown').classList.toggle('hidden', !has);
  destroyCharts();
  if (!has) return;

  state.data = computeAll();
  const ids = state.data.map(d => d.stmt.id);
  if (state.activeId === 'ALL' && state.data.length < 2) state.activeId = null;
  if (state.activeId !== 'ALL' && !ids.includes(state.activeId)) state.activeId = ids[ids.length - 1];

  document.getElementById('sample-banner').classList.toggle('hidden', !state.statements.some(s => s.isSample));
  document.getElementById('th-stmt').classList.toggle('hidden', state.activeId !== 'ALL');

  renderSidebar();
  if (state.activeId === 'ALL') renderOverview();
  else renderStatement(state.data.find(d => d.stmt.id === state.activeId));
  populateCategoryFilter();
  renderTable();
}

function renderSidebar() {
  const list = document.getElementById('stmt-list');
  document.getElementById('stmt-count').textContent = state.data.length;
  let html = '';

  if (state.data.length >= 2) {
    const total = state.data.reduce((s, d) => s + d.m.officialTotal, 0);
    html += `
      <div class="stmt-item ${state.activeId === 'ALL' ? 'active' : ''}" data-id="ALL">
        <div class="stmt-icon">${icon('grid', 16)}</div>
        <div class="stmt-body">
          <div class="stmt-label"><span>Visão consolidada</span></div>
          <div class="stmt-meta num">${state.data.length} faturas · ${fmtBRL(total)}</div>
        </div>
      </div>`;
  }

  html += [...state.data].reverse().map(d => `
    <div class="stmt-item ${state.activeId === d.stmt.id ? 'active' : ''}" data-id="${escapeHtml(d.stmt.id)}">
      <div class="stmt-icon">${icon('receipt', 16)}</div>
      <div class="stmt-body">
        <div class="stmt-label"><span>${monthLabel(d.stmt.refDate)}</span><span class="num">${fmtBRL(d.m.officialTotal)}</span></div>
        <div class="stmt-meta">${escapeHtml(d.stmt.bank)}${d.stmt.isSample ? ' · exemplo' : ''} · ${fmtDayMonth(d.stmt.startDate)} a ${fmtDayMonth(d.stmt.endDate)}</div>
      </div>
      <button type="button" class="stmt-del" data-del="${escapeHtml(d.stmt.id)}" title="Remover esta fatura" aria-label="Remover fatura">${icon('x', 14)}</button>
    </div>`).join('');

  list.innerHTML = html;

  list.querySelectorAll('.stmt-item').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('[data-del]')) return;
      state.activeId = el.getAttribute('data-id');
      state.categoryFilter = 'ALL';
      state.tableLimit = 100;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  list.querySelectorAll('[data-del]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del');
      const d = state.data.find(x => x.stmt.id === id);
      if (!confirm(`Remover a fatura de ${monthLabel(d.stmt.refDate)} (${d.stmt.bank})?`)) return;
      state.statements = state.statements.filter(s => s.id !== id);
      saveStatements();
      if (state.activeId === id) state.activeId = null;
      render();
      toast('Fatura removida.');
    });
  });
}

function setPageHead(title, subParts) {
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-sub').innerHTML = subParts
    .filter(Boolean)
    .map((p, i) => (i > 0 ? '<span class="dot-sep"></span>' : '') + `<span>${p}</span>`)
    .join('');
}

function kpiCard({ label, iconName, value, foot, highlight }) {
  return `
    <div class="card kpi ${highlight ? 'highlight' : ''}">
      <div class="kpi-label">${icon(iconName, 15)} ${label}</div>
      <div class="kpi-value num">${value}</div>
      <div class="kpi-foot num">${foot || ''}</div>
    </div>`;
}

function alertsHtml(list) {
  if (!list.length) {
    return `<div class="alert success"><div class="alert-icon">${icon('check', 16)}</div><div><strong>Nenhum ponto de atenção</strong><p>Não encontramos cobranças duplicadas, encargos ou outros alertas.</p></div></div>`;
  }
  const iconFor = { danger: 'alert', warn: 'alert', info: 'info', success: 'check' };
  return list.map(a => `
    <div class="alert ${a.type}">
      <div class="alert-icon">${icon(a.icon || iconFor[a.type], 16)}</div>
      <div><strong>${a.title}</strong><p>${a.text}</p></div>
    </div>`).join('');
}

// ---------------------------------------------------------------------------
// Visão de uma fatura
// ---------------------------------------------------------------------------
function renderStatement(d) {
  const { stmt, m } = d;
  const idx = state.data.indexOf(d);
  const prev = state.data.slice(0, idx).reverse().find(x => x.stmt.account === stmt.account) || state.data[idx - 1] || null;

  setPageHead(`Fatura de ${monthLong(stmt.refDate)}`, [
    escapeHtml(stmt.bank) + (stmt.account ? ` · ${escapeHtml(maskAccount(stmt.account))}` : ''),
    `Período de ${fmtDate(stmt.startDate)} a ${fmtDate(stmt.endDate)}`,
    stmt.fileName ? escapeHtml(stmt.fileName) : ''
  ]);

  // KPIs
  const officialFoot = m.hasOfficial
    ? (Math.abs(m.reconciliationDiff) >= 0.01
      ? `<span title="O valor informado pelo banco difere da soma dos lançamentos do arquivo">Dif. de ${fmtBRL(m.reconciliationDiff)} p/ soma dos itens</span>`
      : `${icon('check', 12)} Confere com os lançamentos`)
    : 'Soma dos lançamentos';

  document.getElementById('kpi-grid').innerHTML = [
    kpiCard({
      label: 'Valor da fatura', iconName: 'receipt', value: fmtBRL(m.officialTotal), highlight: true,
      foot: prev ? `${deltaBadge(m.officialTotal, prev.m.officialTotal, `vs ${monthLabel(prev.stmt.refDate)}`)}` : officialFoot
    }),
    kpiCard({
      label: 'Compras', iconName: 'bag', value: fmtBRL(m.totalPurchases),
      foot: `${m.purchases.length} compras · ticket médio ${fmtBRL(m.avgTicket)}`
    }),
    kpiCard({
      label: 'Juros, multas e dívidas', iconName: 'percent', value: fmtBRL(m.totalFees + m.totalDebt),
      foot: `Encargos ${fmtBRL(m.totalFees)} · Parc. de fatura ${fmtBRL(m.totalDebt)}`
    }),
    kpiCard({
      label: 'Já comprometido na próxima', iconName: 'calendar', value: fmtBRL(m.nextMonthCommitted),
      foot: `Total de parcelas futuras: ${fmtBRL(m.futureCommitted)}`
    })
  ].join('');

  // Resumo
  const topCat = m.categories.find(c => !NON_PURCHASE_CATEGORIES.includes(c.id));
  const parts = [];
  parts.push(`A fatura de <strong>${monthLong(stmt.refDate)}</strong> do <strong>${escapeHtml(stmt.bank)}</strong> totaliza <strong>${fmtBRL(m.officialTotal)}</strong>.`);
  const comp = [`<strong>${fmtBRL(m.totalPurchases)}</strong> em ${m.purchases.length} compras`];
  if (m.totalDebt > 0) comp.push(`<strong>${fmtBRL(m.totalDebt)}</strong> de parcelamento de fatura anterior`);
  if (m.totalFees > 0) comp.push(`<strong>${fmtBRL(m.totalFees)}</strong> em juros, multas e IOF`);
  parts.push(`Ela é composta por ${comp.join(', ').replace(/, ([^,]*)$/, ' e $1')}${m.totalRefunds > 0 ? `, com <strong>${fmtBRL(m.totalRefunds)}</strong> em estornos` : ''}.`);
  if (topCat && m.totalPurchases > 0) {
    parts.push(`A categoria de maior peso nas compras foi <strong>${CATEGORIES[topCat.id].name}</strong>, com ${fmtBRL(topCat.total)}.`);
  }
  if (m.maxPurchase) {
    parts.push(`O maior gasto individual foi <strong>${escapeHtml(prettyMerchant(m.maxPurchase.description))}</strong> (${fmtBRL(m.maxPurchase.amount)}, em ${fmtDate(m.maxPurchase.date)}).`);
  }
  if (prev) {
    const diff = m.officialTotal - prev.m.officialTotal;
    if (Math.abs(diff) >= 1) {
      parts.push(`Em relação à fatura de ${monthLabel(prev.stmt.refDate)}, o valor ${diff > 0 ? 'aumentou' : 'diminuiu'} <strong>${fmtBRL(Math.abs(diff))}</strong>.`);
    }
  }
  if (m.nextMonthCommitted > 0) {
    parts.push(`Já existem <strong>${fmtBRL(m.nextMonthCommitted)}</strong> em parcelas garantidas na próxima fatura.`);
  }
  if (m.totalCarryover > 0) {
    parts.push(`O lançamento "valor pendente do mês anterior" (${fmtBRL(m.totalCarryover)}) não entra no total, pois é saldo da fatura passada.`);
  }
  document.getElementById('summary-text').innerHTML = parts.join(' ');

  // Conteúdo
  const view = document.getElementById('view-content');
  view.innerHTML = `
    <div class="grid-2">
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Gastos por categoria</div>
            <div class="card-sub">Clique em uma categoria para filtrar os lançamentos</div>
          </div>
          <button type="button" class="btn btn-sm btn-ghost ${state.categoryFilter === 'ALL' ? 'hidden' : ''}" id="btn-clear-cat">${icon('x', 14)} Limpar filtro</button>
        </div>
        <div class="donut-wrap">
          <div class="chart-box donut">
            <canvas id="chart-cat" aria-label="Gráfico de gastos por categoria"></canvas>
            <div class="donut-center"><span>Total</span><strong class="num">${fmtCompact(m.totalExpenses)}</strong></div>
          </div>
          <div class="legend" id="cat-legend"></div>
        </div>
      </section>

      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Pontos de atenção</div>
            <div class="card-sub">Verificações automáticas nesta fatura</div>
          </div>
        </div>
        <div class="alerts">${alertsHtml(statementInsights(d, prev))}</div>
      </section>
    </div>

    <div class="grid-3">
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Compras por dia</div>
            <div class="card-sub" id="weekday-sub"></div>
          </div>
        </div>
        <div class="chart-box"><canvas id="chart-daily"></canvas></div>
      </section>

      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Parcelamentos</div>
            <div class="card-sub">${m.installments.length} parcelas nesta fatura · ${fmtBRL(m.totalInstallments)}</div>
          </div>
        </div>
        <div class="list">${installmentsHtml(m)}</div>
      </section>

      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Onde você mais gastou</div>
            <div class="card-sub">Estabelecimentos com maior valor em compras</div>
          </div>
        </div>
        <div class="list">${merchantsHtml(m)}</div>
      </section>
    </div>

    <section class="card">
      <div class="budget-row">
        <div>
          <div class="card-title">Meta de gastos mensal</div>
          <div class="card-sub">Compare o valor da fatura com o limite que você definiu</div>
        </div>
        <label class="budget-input-wrap">Meta (R$)
          <input type="number" id="budget-input" class="input input-sm num" min="0" step="100" value="${state.budgetLimit}" />
        </label>
      </div>
      <div class="progress"><div class="progress-fill" id="budget-fill"></div></div>
      <div class="budget-status" id="budget-status"></div>
    </section>
  `;

  renderCategoryLegend(m);
  renderCategoryChart(m);
  renderDailyChart(m);
  renderBudget(m.officialTotal);

  const clearBtn = document.getElementById('btn-clear-cat');
  clearBtn.addEventListener('click', () => setCategoryFilter('ALL'));
  document.getElementById('budget-input').addEventListener('input', e => {
    state.budgetLimit = parseFloat(e.target.value) || 0;
    localStorage.setItem('ofx_budget_limit', String(state.budgetLimit));
    renderBudget(m.officialTotal);
  });
}

function statementInsights(d, prev) {
  const { m } = d;
  const out = [];

  if (m.duplicates.length) {
    const names = [...new Set(m.duplicates.map(t => prettyMerchant(t.description)))].map(escapeHtml).join(', ');
    out.push({
      type: 'danger', title: `Possível cobrança duplicada (${m.duplicates.length} lançamentos)`,
      text: `Mesmo valor e mesmo estabelecimento em datas próximas: ${names}. Confira se são compras diferentes.`
    });
  }
  if (m.totalDebt > 0 || m.totalFees > 0) {
    out.push({
      type: m.totalDebt > 0 || m.totalFees > 5 ? 'danger' : 'warn', icon: 'percent',
      title: `${m.totalDebt > 0 ? 'Custo com atraso e encargos' : 'Juros, tarifas e IOF'}: ${fmtBRL(m.totalFees + m.totalDebt)}`,
      text: `${m.totalDebt > 0 ? `${fmtBRL(m.totalDebt)} de parcelamento de fatura anterior e ` : ''}${fmtBRL(m.totalFees)} em juros, multas e IOF. Pagar o valor total em dia evita esses custos.`
    });
  }
  if (m.totalCarryover > 0) {
    out.push({
      type: 'info', title: `Saldo anterior fora do total: ${fmtBRL(m.totalCarryover)}`,
      text: 'O "valor pendente do mês anterior" aparece no arquivo, mas é saldo da fatura passada e não um gasto novo.'
    });
  }
  if (m.subscriptions.length) {
    out.push({
      type: 'info', icon: 'repeat', title: `Assinaturas: ${fmtBRL(m.totalSubscriptions)} por mês`,
      text: `${m.subscriptions.length} serviços recorrentes (${m.subscriptions.map(s => escapeHtml(prettyMerchant(s.description))).slice(0, 4).join(', ')}). Equivale a ${fmtBRL(m.totalSubscriptions * 12)} por ano.`
    });
  }
  if (m.smallPurchases.length >= 5) {
    out.push({
      type: 'warn', icon: 'wallet', title: `Pequenas compras somam ${fmtBRL(m.totalSmall)}`,
      text: `${m.smallPurchases.length} compras de até R$ 35,00. Individualmente parecem pouco, mas juntas representam ${fmtPct((m.totalSmall / (m.totalPurchases || 1)) * 100)} das compras.`
    });
  }
  if (prev) {
    const changes = m.categories
      .filter(c => !NON_PURCHASE_CATEGORIES.includes(c.id))
      .map(c => {
        const p = prev.m.categories.find(x => x.id === c.id);
        return { id: c.id, diff: c.total - (p ? p.total : 0) };
      })
      .sort((a, b) => b.diff - a.diff);
    if (changes[0] && changes[0].diff > 30) {
      out.push({
        type: 'warn', icon: 'trendUp', title: `${CATEGORIES[changes[0].id].name} subiu ${fmtBRL(changes[0].diff)}`,
        text: `Foi a categoria que mais cresceu em relação à fatura de ${monthLabel(prev.stmt.refDate)}.`
      });
    }
  }
  if (m.futureCommitted > 0) {
    out.push({
      type: 'info', icon: 'calendar', title: `Parcelas a vencer: ${fmtBRL(m.futureCommitted)}`,
      text: `Valor que ainda será cobrado nas próximas faturas pelas compras parceladas.`
    });
  }
  return out;
}

function installmentsHtml(m) {
  if (!m.installments.length) return '<div class="empty-msg">Nenhuma compra parcelada nesta fatura.</div>';
  return [...m.installments].sort((a, b) => b.amount - a.amount).map(t => {
    const i = t.installment;
    const pct = (i.current / i.total) * 100;
    return `
      <div class="list-row">
        <div class="list-main">
          <div class="list-title">${escapeHtml(prettyMerchant(t.description))}</div>
          <div class="list-sub">Parcela ${i.current} de ${i.total} · ${i.remaining > 0 ? `faltam ${fmtBRL(t.amount * i.remaining)}` : 'última parcela'}</div>
          <div class="mini-progress"><div style="width:${pct}%"></div></div>
        </div>
        <div class="list-val num">${fmtBRL(t.amount)}</div>
      </div>`;
  }).join('');
}

function merchantsHtml(m) {
  if (!m.merchants.length) return '<div class="empty-msg">Nenhuma compra registrada.</div>';
  return m.merchants.slice(0, 7).map(x => `
    <div class="list-row">
      <div class="list-main">
        <div class="list-title">${escapeHtml(x.name)}</div>
        <div class="list-sub"><span class="cat-tag"><i style="background:${CATEGORIES[x.categoryId].color}"></i>${CATEGORIES[x.categoryId].name}</span> · ${x.count} ${x.count === 1 ? 'compra' : 'compras'}</div>
      </div>
      <div class="list-val num">${fmtBRL(x.total)}</div>
    </div>`).join('');
}

function renderCategoryLegend(m) {
  const el = document.getElementById('cat-legend');
  const total = m.totalExpenses || 1;
  el.innerHTML = m.categories.map(c => `
    <div class="legend-row ${state.categoryFilter === c.id ? 'active' : ''}" data-cat="${c.id}">
      <span class="legend-dot" style="background:${CATEGORIES[c.id].color}"></span>
      <span class="legend-name">${CATEGORIES[c.id].name}</span>
      <span class="legend-val num">${fmtBRL(c.total)}</span>
      <span class="legend-pct num">${fmtPct((c.total / total) * 100)}</span>
    </div>`).join('') || '<div class="empty-msg">Sem gastos nesta fatura.</div>';
  el.querySelectorAll('.legend-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-cat');
      setCategoryFilter(state.categoryFilter === id ? 'ALL' : id);
    });
  });
}

function setCategoryFilter(id) {
  state.categoryFilter = id;
  document.getElementById('f-category').value = id;
  document.querySelectorAll('.legend-row').forEach(r => r.classList.toggle('active', r.getAttribute('data-cat') === id));
  const clearBtn = document.getElementById('btn-clear-cat');
  if (clearBtn) clearBtn.classList.toggle('hidden', id === 'ALL');
  state.tableLimit = 100;
  renderTable();
}

function renderBudget(value) {
  const fill = document.getElementById('budget-fill');
  const status = document.getElementById('budget-status');
  if (!fill) return;
  const limit = state.budgetLimit;
  const ratio = limit > 0 ? (value / limit) * 100 : 0;
  fill.style.width = `${Math.min(100, ratio).toFixed(1)}%`;
  fill.className = 'progress-fill' + (ratio >= 100 ? ' over' : ratio >= 80 ? ' warn' : '');
  if (limit <= 0) status.textContent = 'Defina uma meta para acompanhar.';
  else if (ratio >= 100) status.innerHTML = `Meta ultrapassada em <strong>${fmtBRL(value - limit)}</strong> (${fmtPct(ratio)} da meta).`;
  else status.innerHTML = `Você usou <strong>${fmtPct(ratio)}</strong> da meta. Restam <strong>${fmtBRL(limit - value)}</strong>.`;
}

// ---------------------------------------------------------------------------
// Visão consolidada (várias faturas)
// ---------------------------------------------------------------------------
function renderOverview() {
  const data = state.data;
  const groups = monthGroups(data);
  const total = groups.reduce((s, g) => s + g.total, 0);
  const avg = total / groups.length;
  const maxG = [...groups].sort((a, b) => b.total - a.total)[0];
  const last = groups[groups.length - 1];
  const prev = groups[groups.length - 2];
  const banks = [...new Set(data.map(d => d.stmt.bank))];

  setPageHead('Visão consolidada', [
    `${data.length} faturas`,
    `${groups[0].label} a ${last.label}`,
    escapeHtml(banks.join(', '))
  ]);

  // Totais por categoria no período
  const catTotals = {};
  groups.forEach(g => Object.entries(g.byCat).forEach(([id, v]) => { catTotals[id] = (catTotals[id] || 0) + v; }));
  const catRank = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);
  const totalFeesAll = groups.reduce((s, g) => s + g.fees + g.debt, 0);

  // Projeção de parcelas: última fatura de cada cartão
  const latestByAccount = {};
  data.forEach(d => { latestByAccount[d.stmt.account || d.stmt.bank] = d; });
  const projection = new Array(12).fill(0);
  Object.values(latestByAccount).forEach(d => {
    d.m.installments.forEach(t => {
      for (let j = 1; j <= Math.min(12, t.installment.remaining); j++) projection[j - 1] += t.amount;
    });
  });
  const projLen = Math.max(1, projection.reduce((n, v, i) => (v > 0 ? i + 1 : n), 0));
  const projTotal = projection.reduce((s, v) => s + v, 0);

  // Recorrentes: mesmo estabelecimento em 2+ faturas (exceto parcelas e encargos)
  const rec = {};
  data.forEach(d => {
    d.m.purchases.filter(t => !t.installment).forEach(t => {
      const r = rec[t.merchantKey] = rec[t.merchantKey] || { name: prettyMerchant(t.description), stmts: new Set(), total: 0, count: 0, categoryId: t.categoryId };
      r.stmts.add(monthKey(d.stmt.refDate));
      r.total += t.amount;
      r.count += 1;
    });
  });
  const recurring = Object.values(rec)
    .filter(r => r.stmts.size >= 2)
    .map(r => ({ ...r, months: r.stmts.size, avgMonth: r.total / r.stmts.size }))
    .sort((a, b) => b.avgMonth - a.avgMonth);
  const recurringMonthly = recurring.reduce((s, r) => s + r.avgMonth, 0);

  // KPIs
  document.getElementById('kpi-grid').innerHTML = [
    kpiCard({ label: 'Total no período', iconName: 'layers', value: fmtBRL(total), highlight: true, foot: `${groups.length} meses · ${data.length} faturas` }),
    kpiCard({ label: 'Média mensal', iconName: 'wallet', value: fmtBRL(avg), foot: `Meta atual: ${fmtBRL(state.budgetLimit)}` }),
    kpiCard({ label: 'Maior fatura', iconName: 'trendUp', value: fmtBRL(maxG.total), foot: `${maxG.label}` }),
    kpiCard({
      label: 'Última fatura', iconName: 'receipt', value: fmtBRL(last.total),
      foot: prev ? deltaBadge(last.total, prev.total, `vs ${prev.label}`) : last.label
    })
  ].join('');

  // Resumo
  const parts = [];
  parts.push(`Você importou <strong>${data.length} faturas</strong>, de ${groups[0].label} a ${last.label}, que somam <strong>${fmtBRL(total)}</strong>, uma média de <strong>${fmtBRL(avg)}</strong> por mês.`);
  parts.push(`A maior fatura foi a de <strong>${maxG.label}</strong> (${fmtBRL(maxG.total)}).`);
  if (prev) {
    const diff = last.total - prev.total;
    parts.push(`A fatura mais recente (${last.label}) ficou <strong>${fmtBRL(Math.abs(diff))} ${diff >= 0 ? 'acima' : 'abaixo'}</strong> da anterior.`);
  }
  const topCats = catRank.filter(([id]) => !NON_PURCHASE_CATEGORIES.includes(id)).slice(0, 2);
  if (topCats.length) {
    parts.push(`As categorias de maior peso no período foram ${topCats.map(([id, v]) => `<strong>${CATEGORIES[id].name}</strong> (${fmtBRL(v)})`).join(' e ')}.`);
  }
  if (totalFeesAll > 0) parts.push(`Juros, multas e parcelamentos de fatura somaram <strong>${fmtBRL(totalFeesAll)}</strong> no período.`);
  if (projTotal > 0) parts.push(`Há <strong>${fmtBRL(projTotal)}</strong> em parcelas já contratadas para os próximos meses.`);
  document.getElementById('summary-text').innerHTML = parts.join(' ');

  // Insights
  const insights = [];
  if (prev) {
    const pct = prev.total > 0 ? ((last.total - prev.total) / prev.total) * 100 : 0;
    insights.push({
      type: pct > 10 ? 'warn' : pct < -5 ? 'success' : 'info', icon: pct >= 0 ? 'trendUp' : 'trendDown',
      title: `Última fatura ${pct >= 0 ? 'subiu' : 'caiu'} ${fmtPct(Math.abs(pct))}`,
      text: `${last.label}: ${fmtBRL(last.total)} contra ${fmtBRL(prev.total)} em ${prev.label}.`
    });
    const catChanges = Object.keys({ ...last.byCat, ...prev.byCat })
      .filter(id => !NON_PURCHASE_CATEGORIES.includes(id))
      .map(id => ({ id, diff: (last.byCat[id] || 0) - (prev.byCat[id] || 0) }))
      .sort((a, b) => b.diff - a.diff);
    if (catChanges[0] && catChanges[0].diff > 30) {
      insights.push({
        type: 'warn', icon: 'trendUp', title: `${CATEGORIES[catChanges[0].id].name}: +${fmtBRL(catChanges[0].diff)}`,
        text: `Categoria que mais cresceu de ${prev.label} para ${last.label}.`
      });
    }
  }
  const above = groups.filter(g => state.budgetLimit > 0 && g.total > state.budgetLimit);
  if (above.length) {
    insights.push({
      type: 'danger', title: `${above.length} ${above.length === 1 ? 'mês' : 'meses'} acima da meta`,
      text: `${above.map(g => g.label).join(', ')} ultrapassaram a meta de ${fmtBRL(state.budgetLimit)}.`
    });
  }
  if (totalFeesAll > 0) {
    insights.push({
      type: 'danger', icon: 'percent', title: `Encargos no período: ${fmtBRL(totalFeesAll)}`,
      text: 'Soma de juros, multas, IOF e parcelamentos de fatura. É dinheiro que não vira consumo.'
    });
  }
  if (recurring.length) {
    insights.push({
      type: 'info', icon: 'repeat', title: `Gastos recorrentes: cerca de ${fmtBRL(recurringMonthly)} por mês`,
      text: `${recurring.length} estabelecimentos aparecem em mais de uma fatura. Revise se todos ainda fazem sentido.`
    });
  }

  const view = document.getElementById('view-content');
  view.innerHTML = `
    <section class="card">
      <div class="card-head">
        <div>
          <div class="card-title">Evolução das faturas</div>
          <div class="card-sub">Composição do valor de cada mês e comparação com a sua meta</div>
        </div>
        <label class="budget-input-wrap">Meta (R$)
          <input type="number" id="budget-input" class="input input-sm num" min="0" step="100" value="${state.budgetLimit}" />
        </label>
      </div>
      <div class="chart-box tall"><canvas id="chart-evolution"></canvas></div>
    </section>

    <div class="grid-2">
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Categorias mês a mês</div>
            <div class="card-sub">As principais categorias de gasto em cada fatura</div>
          </div>
        </div>
        <div class="chart-box tall"><canvas id="chart-cat-month"></canvas></div>
      </section>
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Pontos de atenção</div>
            <div class="card-sub">Comparativos entre as faturas importadas</div>
          </div>
        </div>
        <div class="alerts">${alertsHtml(insights)}</div>
      </section>
    </div>

    <div class="grid-2-even">
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Parcelas a vencer</div>
            <div class="card-sub">Valor já contratado para os próximos meses · total ${fmtBRL(projTotal)}</div>
          </div>
        </div>
        ${projTotal > 0 ? '<div class="chart-box"><canvas id="chart-projection"></canvas></div>' : '<div class="empty-msg">Nenhuma parcela futura encontrada.</div>'}
      </section>
      <section class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Gastos recorrentes</div>
            <div class="card-sub">Estabelecimentos presentes em mais de uma fatura</div>
          </div>
        </div>
        <div class="list">${recurring.length ? recurring.slice(0, 8).map(r => `
          <div class="list-row">
            <div class="list-main">
              <div class="list-title">${escapeHtml(r.name)}</div>
              <div class="list-sub"><span class="cat-tag"><i style="background:${CATEGORIES[r.categoryId].color}"></i>${CATEGORIES[r.categoryId].name}</span> · em ${r.months} faturas</div>
            </div>
            <div class="list-val num">${fmtBRL(r.avgMonth)}<small>média por mês</small></div>
          </div>`).join('') : '<div class="empty-msg">Nenhum gasto recorrente identificado ainda.</div>'}</div>
      </section>
    </div>
  `;

  renderEvolutionChart(groups);
  renderCategoryMonthChart(groups, catRank);
  if (projTotal > 0) {
    const base = last.date;
    renderProjectionChart(projection.slice(0, projLen), Array.from({ length: projLen }, (_, i) => monthLabel(shiftMonths(base, i + 1))));
  }

  document.getElementById('budget-input').addEventListener('change', e => {
    state.budgetLimit = parseFloat(e.target.value) || 0;
    localStorage.setItem('ofx_budget_limit', String(state.budgetLimit));
    render();
  });
}

// ---------------------------------------------------------------------------
// Gráficos (Chart.js)
// ---------------------------------------------------------------------------
function destroyCharts() {
  Object.values(state.charts).forEach(c => c.destroy());
  state.charts = {};
}

function makeChart(id, config) {
  const el = document.getElementById(id);
  if (!el || !window.Chart) return;
  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = cssVar('--muted');
  state.charts[id] = new Chart(el, config);
}

function baseScales(stacked = false) {
  const grid = cssVar('--border');
  return {
    x: { stacked, grid: { display: false }, border: { color: grid } },
    y: {
      stacked, beginAtZero: true, grid: { color: grid }, border: { display: false },
      ticks: { callback: v => fmtCompact(v), maxTicksLimit: 6 }
    }
  };
}

const tooltipBRL = {
  callbacks: { label: ctx => ` ${ctx.dataset.label ? ctx.dataset.label + ': ' : ''}${fmtBRL(ctx.parsed.y ?? ctx.parsed)}` }
};

function renderCategoryChart(m) {
  makeChart('chart-cat', {
    type: 'doughnut',
    data: {
      labels: m.categories.map(c => CATEGORIES[c.id].name),
      datasets: [{
        data: m.categories.map(c => +c.total.toFixed(2)),
        backgroundColor: m.categories.map(c => CATEGORIES[c.id].color),
        borderColor: cssVar('--surface'),
        borderWidth: 2,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '70%',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${fmtBRL(ctx.parsed)}` } } },
      onClick: (_, els) => {
        if (!els.length) return;
        const id = m.categories[els[0].index].id;
        setCategoryFilter(state.categoryFilter === id ? 'ALL' : id);
      }
    }
  });
}

function renderDailyChart(m) {
  const map = {};
  const weekday = [0, 0, 0, 0, 0, 0, 0];
  const names = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  m.purchases.forEach(t => {
    const k = ymd(t.date);
    map[k] = map[k] || { date: t.date, total: 0 };
    map[k].total += t.amount;
    weekday[t.date.getDay()] += t.amount;
  });
  const days = Object.values(map).sort((a, b) => a.date - b.date);
  const top = weekday.indexOf(Math.max(...weekday));
  document.getElementById('weekday-sub').textContent = days.length
    ? `Dia da semana com mais gastos: ${names[top]} (${fmtBRL(weekday[top])})`
    : 'Sem compras no período';

  makeChart('chart-daily', {
    type: 'bar',
    data: {
      labels: days.map(d => fmtDayMonth(d.date)),
      datasets: [{ label: 'Compras', data: days.map(d => +d.total.toFixed(2)), backgroundColor: cssVar('--primary'), borderRadius: 4, maxBarThickness: 22 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: tooltipBRL }, scales: baseScales() }
  });
}

function renderEvolutionChart(groups) {
  const datasets = [
    { label: 'Compras', data: groups.map(g => +g.purchases.toFixed(2)), backgroundColor: cssVar('--primary'), borderRadius: 4, maxBarThickness: 48, stack: 's' },
    { label: 'Parcelamento de fatura', data: groups.map(g => +g.debt.toFixed(2)), backgroundColor: CATEGORIES.parcfatura.color, borderRadius: 4, maxBarThickness: 48, stack: 's' },
    { label: 'Juros e encargos', data: groups.map(g => +g.fees.toFixed(2)), backgroundColor: CATEGORIES.taxas.color, borderRadius: 4, maxBarThickness: 48, stack: 's' }
  ];
  if (state.budgetLimit > 0) {
    datasets.push({
      type: 'line', label: 'Meta', data: groups.map(() => state.budgetLimit), borderColor: cssVar('--warning'),
      borderDash: [6, 4], borderWidth: 2, pointRadius: 0, fill: false
    });
  }
  makeChart('chart-evolution', {
    type: 'bar',
    data: { labels: groups.map(g => g.label), datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'rectRounded' } },
        tooltip: {
          ...tooltipBRL,
          callbacks: {
            ...tooltipBRL.callbacks,
            footer: items => `Valor da fatura: ${fmtBRL(groups[items[0].dataIndex].total)}`
          }
        }
      },
      scales: baseScales(true)
    }
  });
}

function renderCategoryMonthChart(groups, catRank) {
  const topIds = catRank.map(([id]) => id).filter(id => !NON_PURCHASE_CATEGORIES.includes(id)).slice(0, 6);
  const datasets = topIds.map(id => ({
    label: CATEGORIES[id].name,
    data: groups.map(g => +(g.byCat[id] || 0).toFixed(2)),
    backgroundColor: CATEGORIES[id].color,
    borderRadius: 3,
    maxBarThickness: 40
  }));
  const others = groups.map(g => Object.entries(g.byCat)
    .filter(([id]) => !topIds.includes(id) && !NON_PURCHASE_CATEGORIES.includes(id))
    .reduce((s, [, v]) => s + v, 0));
  if (others.some(v => v > 0)) {
    datasets.push({ label: 'Demais', data: others.map(v => +v.toFixed(2)), backgroundColor: CATEGORIES.outros.color, borderRadius: 3, maxBarThickness: 40 });
  }
  makeChart('chart-cat-month', {
    type: 'bar',
    data: { labels: groups.map(g => g.label), datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, boxHeight: 10, usePointStyle: true, pointStyle: 'rectRounded' } }, tooltip: tooltipBRL },
      scales: baseScales(true)
    }
  });
}

function renderProjectionChart(values, labels) {
  makeChart('chart-projection', {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Parcelas', data: values.map(v => +v.toFixed(2)), backgroundColor: cssVar('--warning'), borderRadius: 4, maxBarThickness: 36 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: tooltipBRL }, scales: baseScales() }
  });
}

// ---------------------------------------------------------------------------
// Tabela de lançamentos
// ---------------------------------------------------------------------------
function currentTransactions() {
  if (state.activeId === 'ALL') return state.data.flatMap(d => d.txs);
  const d = state.data.find(x => x.stmt.id === state.activeId);
  return d ? d.txs : [];
}

function populateCategoryFilter() {
  const sel = document.getElementById('f-category');
  sel.innerHTML = '<option value="ALL">Todas as categorias</option>' +
    Object.values(CATEGORIES).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  sel.value = state.categoryFilter;
}

function filteredTransactions() {
  const q = normalizeText(document.getElementById('f-search').value);
  const cat = document.getElementById('f-category').value;
  const type = document.getElementById('f-type').value;
  const tag = document.getElementById('f-tag').value;
  const sort = document.getElementById('f-sort').value;

  const list = currentTransactions().filter(t => {
    if (cat !== 'ALL' && (t.kind !== 'EXPENSE' || t.categoryId !== cat)) return false;
    if (type === 'EXPENSE' && t.kind !== 'EXPENSE') return false;
    if (type === 'PURCHASE' && !t.isPurchase) return false;
    if (type === 'INSTALLMENT' && !t.installment) return false;
    if (type === 'SUBSCRIPTION' && !t.isSubscription) return false;
    if (type === 'FEES' && !(t.kind === 'EXPENSE' && NON_PURCHASE_CATEGORIES.includes(t.categoryId))) return false;
    if (type === 'DUPLICATE' && !t.isDuplicate) return false;
    if (['REFUND', 'PAYMENT', 'CARRYOVER'].includes(type) && t.kind !== type) return false;
    if (tag !== 'ALL' && t.tag !== tag) return false;
    if (q) {
      const hay = normalizeText(`${t.description} ${fmtDate(t.date)} ${t.amount.toFixed(2).replace('.', ',')} ${t.amount.toFixed(2)} ${CATEGORIES[t.categoryId].name} ${t.stmtLabel}`);
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const cmp = {
    DATE_DESC: (a, b) => b.date - a.date,
    DATE_ASC: (a, b) => a.date - b.date,
    AMOUNT_DESC: (a, b) => b.amount - a.amount,
    AMOUNT_ASC: (a, b) => a.amount - b.amount,
    NAME_ASC: (a, b) => a.description.localeCompare(b.description, 'pt-BR')
  }[sort];
  return list.sort(cmp);
}

function renderTable() {
  const body = document.getElementById('tx-body');
  const list = filteredTransactions();
  const showStmt = state.activeId === 'ALL';
  const expenseSum = list.filter(t => t.kind === 'EXPENSE').reduce((s, t) => s + t.amount, 0);
  document.getElementById('table-summary').textContent =
    `${list.length} ${list.length === 1 ? 'lançamento' : 'lançamentos'} · gastos ${fmtBRL(expenseSum)}`;

  if (!list.length) {
    body.innerHTML = `<tr><td colspan="${showStmt ? 6 : 5}" style="text-align:center;padding:32px;color:var(--muted)">Nenhum lançamento encontrado com os filtros atuais.</td></tr>`;
    document.getElementById('table-foot').classList.add('hidden');
    return;
  }

  const catOptions = Object.values(CATEGORIES).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  const visible = list.slice(0, state.tableLimit);

  body.innerHTML = visible.map(t => {
    const badges = [];
    if (t.installment) badges.push(`<span class="badge badge-warn">Parcela ${t.installment.current}/${t.installment.total}</span>`);
    if (t.isSubscription) badges.push('<span class="badge badge-info">Assinatura</span>');
    if (t.isDuplicate) badges.push('<span class="badge badge-danger">Possível duplicidade</span>');
    if (t.kind === 'REFUND') badges.push('<span class="badge badge-success">Estorno / crédito</span>');
    if (t.kind === 'PAYMENT') badges.push('<span class="badge">Pagamento</span>');
    if (t.kind === 'CARRYOVER') badges.push('<span class="badge">Saldo anterior · fora do total</span>');

    const amountCls = t.kind === 'REFUND' ? 'amt-credit' : t.kind === 'EXPENSE' ? 'amt-expense' : 'amt-neutral';
    const sign = t.kind === 'REFUND' ? '+ ' : t.kind === 'EXPENSE' ? '− ' : '';
    const catCell = t.kind === 'EXPENSE'
      ? `<select class="cell-select" data-merchant="${escapeHtml(t.merchantKey)}" aria-label="Categoria">${catOptions.replace(`value="${t.categoryId}"`, `value="${t.categoryId}" selected`)}</select>`
      : '<span class="cat-tag" style="color:var(--muted)">—</span>';
    const tagOptions = `<option value="">—</option>` + Object.entries(TAG_LABELS)
      .map(([k, v]) => `<option value="${k}" ${t.tag === k ? 'selected' : ''}>${v}</option>`).join('');

    return `
      <tr class="${t.kind === 'PAYMENT' || t.kind === 'CARRYOVER' ? 'row-muted' : ''}">
        <td class="td-date num">${fmtDate(t.date)}</td>
        <td class="td-desc">
          <div class="desc-main">${escapeHtml(t.description)}</div>
          ${badges.length ? `<div class="desc-badges">${badges.join('')}</div>` : ''}
        </td>
        <td>${catCell}</td>
        ${showStmt ? `<td class="td-date">${t.stmtLabel}</td>` : ''}
        <td><select class="cell-select" data-tag="${escapeHtml(t.id)}" aria-label="Marcação">${tagOptions}</select></td>
        <td class="td-amount num ${amountCls}">${sign}${fmtBRL(t.amount)}</td>
      </tr>`;
  }).join('');

  const foot = document.getElementById('table-foot');
  foot.classList.toggle('hidden', list.length <= state.tableLimit);
  document.getElementById('btn-more-rows').textContent = `Mostrar mais (${list.length - visible.length} restantes)`;

  body.querySelectorAll('[data-merchant]').forEach(sel => {
    sel.addEventListener('change', e => {
      state.customCategories[e.target.getAttribute('data-merchant')] = e.target.value;
      localStorage.setItem('ofx_custom_categories', JSON.stringify(state.customCategories));
      render();
      toast('Categoria atualizada para este estabelecimento.');
    });
  });
  body.querySelectorAll('[data-tag]').forEach(sel => {
    sel.addEventListener('change', e => {
      const id = e.target.getAttribute('data-tag');
      if (e.target.value) state.customTags[id] = e.target.value; else delete state.customTags[id];
      localStorage.setItem('ofx_custom_tags', JSON.stringify(state.customTags));
      state.data.forEach(d => d.txs.forEach(t => { if (t.id === id) t.tag = e.target.value; }));
    });
  });
}

// ---------------------------------------------------------------------------
// Voz (Web Speech API)
// ---------------------------------------------------------------------------
function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  ['btn-speak-summary', 'btn-speak-all'].forEach(id => document.getElementById(id).classList.remove('speaking'));
  document.getElementById('btn-speak-stop').classList.add('hidden');
}

function speak(text, btnId) {
  if (!('speechSynthesis' in window)) {
    toast('Seu navegador não oferece leitura em voz alta.', 'error');
    return;
  }
  stopSpeaking();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'pt-BR';
  u.rate = 1.1;
  const voice = window.speechSynthesis.getVoices().find(v => v.lang === 'pt-BR') ||
    window.speechSynthesis.getVoices().find(v => v.lang.startsWith('pt'));
  if (voice) u.voice = voice;
  u.onend = u.onerror = stopSpeaking;
  if (btnId) document.getElementById(btnId).classList.add('speaking');
  document.getElementById('btn-speak-stop').classList.remove('hidden');
  window.speechSynthesis.speak(u);
}

function speakAll() {
  const list = filteredTransactions().filter(t => t.kind === 'EXPENSE');
  if (!list.length) return speak('Não há gastos na lista atual.');
  const total = list.reduce((s, t) => s + t.amount, 0);
  const lines = [`São ${list.length} gastos, somando ${fmtBRL(total)}.`];
  list.forEach((t, i) => lines.push(`${i + 1}: ${fmtDayMonth(t.date)}, ${prettyMerchant(t.description)}, ${fmtBRL(t.amount)}.`));
  speak(lines.join(' '), 'btn-speak-all');
}

// ---------------------------------------------------------------------------
// Exportação
// ---------------------------------------------------------------------------
const KIND_LABEL = { EXPENSE: 'Gasto', REFUND: 'Estorno / crédito', PAYMENT: 'Pagamento', CARRYOVER: 'Saldo anterior' };

// Valor com sinal na ótica da fatura: gastos somam, estornos/pagamentos subtraem
const signedForInvoice = t => (t.kind === 'REFUND' || t.kind === 'PAYMENT' ? -t.amount : t.amount);
const countsInTotal = t => t.kind === 'EXPENSE' || t.kind === 'REFUND';
const installmentText = t => (t.installment ? `${t.installment.current} de ${t.installment.total}` : '');

function filtersActive() {
  return document.getElementById('f-search').value.trim() !== '' ||
    ['f-category', 'f-type', 'f-tag'].some(id => document.getElementById(id).value !== 'ALL');
}

function exportFileBase() {
  if (state.activeId === 'ALL') {
    const g = monthGroups(state.data);
    return `faturas-consolidado-${g[0].key}_a_${g[g.length - 1].key}`;
  }
  const d = state.data.find(x => x.stmt.id === state.activeId);
  return `fatura-${normalizeText(d.stmt.bank).replace(/[^a-z0-9]+/g, '-')}-${monthKey(d.stmt.refDate)}`;
}

function download(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function exportCSV() {
  const list = filteredTransactions();
  if (!list.length) return toast('Nada para exportar com os filtros atuais.', 'error');
  const q = s => `"${String(s).replace(/"/g, '""')}"`;
  const money = v => v.toFixed(2).replace('.', ',');
  const header = ['Fatura', 'Data', 'Descrição', 'Categoria', 'Tipo', 'Parcela', 'Assinatura', 'Marcação', 'Valor (R$)', 'Entra no total'];
  const rows = list.map(t => [
    t.stmtLabel, fmtDate(t.date), q(t.description),
    t.kind === 'EXPENSE' ? q(CATEGORIES[t.categoryId].name) : '',
    KIND_LABEL[t.kind], installmentText(t), t.isSubscription ? 'Sim' : 'Não', TAG_LABELS[t.tag] || '',
    money(signedForInvoice(t)), countsInTotal(t) ? 'Sim' : 'Não'
  ].join(';'));
  const total = list.filter(countsInTotal).reduce((s, t) => s + signedForInvoice(t), 0);
  rows.push('');
  rows.push([q('TOTAL (gastos − estornos)'), '', '', '', '', '', '', '', money(total), ''].join(';'));
  download(new Blob(['\uFEFF' + [header.join(';'), ...rows].join('\r\n')], { type: 'text/csv;charset=utf-8;' }), `${exportFileBase()}.csv`);
}

function loadScript(src, globalName) {
  return new Promise((resolve, reject) => {
    if (window[globalName]) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => (window[globalName] ? resolve() : reject(new Error('not loaded')));
    s.onerror = () => reject(new Error('load error'));
    document.head.appendChild(s);
  });
}

function aggregateMetrics(list) {
  const keys = ['officialTotal', 'computedTotal', 'totalPurchases', 'totalDebt', 'totalFees', 'totalRefunds',
    'totalPayments', 'totalCarryover', 'nextMonthCommitted', 'futureCommitted', 'totalSubscriptions'];
  const out = {};
  keys.forEach(k => { out[k] = list.reduce((s, d) => s + d.m[k], 0); });
  out.purchasesCount = list.reduce((s, d) => s + d.m.purchases.length, 0);
  out.hasOfficial = list.every(d => d.m.hasOfficial);
  const cats = {};
  list.forEach(d => d.m.categories.forEach(c => {
    cats[c.id] = cats[c.id] || { id: c.id, total: 0, count: 0 };
    cats[c.id].total += c.total;
    cats[c.id].count += c.count;
  }));
  out.categories = Object.values(cats).sort((a, b) => b.total - a.total);
  return out;
}

async function buildWorkbook() {
  await loadScript('https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js', 'ExcelJS');

  const isAll = state.activeId === 'ALL';
  const views = isAll ? state.data : [state.data.find(d => d.stmt.id === state.activeId)];
  const agg = aggregateMetrics(views);
  const list = filteredTransactions();

  const C = {
    navy: 'FF1D4ED8', navyText: 'FFFFFFFF', soft: 'FFEFF4FF', zebra: 'FFF9FAFB', border: 'FFE4E7EC',
    text: 'FF101828', muted: 'FF667085', danger: 'FFB42318', totalFill: 'FFDBE7FE'
  };
  const MONEY = '"R$" #,##0.00;[Red]-"R$" #,##0.00';
  const thin = { style: 'thin', color: { argb: C.border } };
  const box = { top: thin, left: thin, bottom: thin, right: thin };
  const font = (opts = {}) => ({ name: 'Calibri', size: 11, color: { argb: C.text }, ...opts });
  const fill = argb => ({ type: 'pattern', pattern: 'solid', fgColor: { argb } });
  const xlDate = d => new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Fatura Clara';
  wb.created = new Date();

  // =============================== Aba Resumo ===============================
  const rs = wb.addWorksheet('Resumo', { views: [{ showGridLines: false }], properties: { tabColor: { argb: C.navy } } });
  rs.columns = [{ width: 46 }, { width: 16 }, { width: 18 }, { width: 16 }, { width: 18 }, { width: 18 }];

  const first = views[0].stmt;
  const last = views[views.length - 1].stmt;
  rs.mergeCells('A1:F1');
  rs.getCell('A1').value = 'Fatura Clara — Relatório de fatura de cartão';
  rs.getCell('A1').font = font({ size: 16, bold: true });
  rs.mergeCells('A2:F2');
  rs.getCell('A2').value = isAll
    ? `Visão consolidada · ${views.length} faturas · ${monthLabel(first.refDate)} a ${monthLabel(last.refDate)} · ${[...new Set(views.map(v => v.stmt.bank))].join(', ')}`
    : `Fatura de ${monthLong(first.refDate)} · ${first.bank}${first.account ? ' · ' + maskAccount(first.account) : ''} · Período de ${fmtDate(first.startDate)} a ${fmtDate(first.endDate)}`;
  rs.getCell('A2').font = font({ size: 11, color: { argb: C.muted } });
  rs.mergeCells('A3:F3');
  rs.getCell('A3').value = `Gerado em ${new Date().toLocaleString('pt-BR')} · Valores em reais (R$)`;
  rs.getCell('A3').font = font({ size: 9, italic: true, color: { argb: C.muted } });

  let r = 5;
  const section = title => {
    rs.mergeCells(`A${r}:F${r}`);
    const c = rs.getCell(`A${r}`);
    c.value = title;
    c.font = font({ bold: true, size: 12, color: { argb: C.navy } });
    c.border = { bottom: { style: 'medium', color: { argb: C.navy } } };
    r += 1;
  };
  const line = (label, value, opts = {}) => {
    const a = rs.getCell(`A${r}`);
    const b = rs.getCell(`B${r}`);
    a.value = label;
    b.value = value;
    b.numFmt = MONEY;
    a.font = font({ bold: !!opts.bold, color: { argb: opts.muted ? C.muted : C.text }, italic: !!opts.muted });
    b.font = font({ bold: !!opts.bold, color: { argb: opts.muted ? C.muted : C.text } });
    if (opts.fill) { a.fill = fill(opts.fill); b.fill = fill(opts.fill); }
    a.border = { bottom: thin };
    b.border = { bottom: thin };
    r += 1;
  };

  section('Resumo da fatura');
  line(agg.hasOfficial ? 'Valor da fatura (informado pelo banco)' : 'Valor da fatura', agg.officialTotal, { bold: true, fill: C.totalFill });
  line('Compras', agg.totalPurchases);
  if (agg.totalDebt > 0) line('Parcelamento de fatura anterior', agg.totalDebt);
  line('Juros, multas, tarifas e IOF', agg.totalFees);
  if (agg.totalRefunds > 0) line('(−) Estornos e créditos', -agg.totalRefunds);
  line('= Soma dos lançamentos', agg.computedTotal, { bold: true });
  if (agg.hasOfficial && Math.abs(agg.officialTotal - agg.computedTotal) >= 0.01) {
    line('Diferença entre o valor do banco e a soma dos itens', agg.officialTotal - agg.computedTotal, { muted: true });
  }
  r += 1;
  section('Informações complementares');
  if (agg.totalPayments > 0) line('Pagamentos recebidos (não entram no total)', agg.totalPayments, { muted: true });
  if (agg.totalCarryover > 0) line('Saldo da fatura anterior (não entra no total)', agg.totalCarryover, { muted: true });
  line('Assinaturas no período', agg.totalSubscriptions);
  line('Já comprometido na próxima fatura (parcelas)', agg.nextMonthCommitted);
  line('Total de parcelas futuras', agg.futureCommitted);

  // Categorias
  r += 1;
  section('Gastos por categoria');
  const catHeader = r;
  ['Categoria', 'Lançamentos', 'Valor', '% do total'].forEach((h, i) => {
    const c = rs.getRow(r).getCell(i + 1);
    c.value = h;
    c.font = font({ bold: true, color: { argb: C.navyText } });
    c.fill = fill(C.navy);
    c.alignment = { horizontal: i === 0 ? 'left' : 'right' };
    c.border = box;
  });
  r += 1;
  const catStart = r;
  const catEnd = r + agg.categories.length - 1;
  const catTotalRow = catEnd + 1;
  const catSum = agg.categories.reduce((s, c) => s + c.total, 0);
  agg.categories.forEach((c, i) => {
    const row = rs.getRow(r);
    row.getCell(1).value = CATEGORIES[c.id].name;
    row.getCell(2).value = c.count;
    row.getCell(3).value = +c.total.toFixed(2);
    row.getCell(3).numFmt = MONEY;
    row.getCell(4).value = { formula: `C${r}/C$${catTotalRow}`, result: catSum ? c.total / catSum : 0 };
    row.getCell(4).numFmt = '0.0%';
    for (let k = 1; k <= 4; k++) {
      row.getCell(k).border = box;
      row.getCell(k).font = font();
      if (i % 2 === 1) row.getCell(k).fill = fill(C.zebra);
    }
    r += 1;
  });
  {
    const row = rs.getRow(r);
    row.getCell(1).value = 'Total';
    row.getCell(2).value = { formula: `SUM(B${catStart}:B${catEnd})`, result: agg.categories.reduce((s, c) => s + c.count, 0) };
    row.getCell(3).value = { formula: `SUM(C${catStart}:C${catEnd})`, result: catSum };
    row.getCell(3).numFmt = MONEY;
    row.getCell(4).value = { formula: `SUM(D${catStart}:D${catEnd})`, result: 1 };
    row.getCell(4).numFmt = '0.0%';
    for (let k = 1; k <= 4; k++) {
      row.getCell(k).font = font({ bold: true });
      row.getCell(k).fill = fill(C.totalFill);
      row.getCell(k).border = { ...box, top: { style: 'medium', color: { argb: C.navy } } };
    }
    r += 1;
  }
  void catHeader;

  // Faturas (consolidado)
  if (isAll) {
    r += 1;
    section('Faturas incluídas');
    ['Fatura', 'Banco', 'Período', 'Valor da fatura', 'Compras', 'Juros e parc. fatura'].forEach((h, i) => {
      const c = rs.getRow(r).getCell(i + 1);
      c.value = h;
      c.font = font({ bold: true, color: { argb: C.navyText } });
      c.fill = fill(C.navy);
      c.alignment = { horizontal: i >= 3 ? 'right' : 'left' };
      c.border = box;
    });
    r += 1;
    const fStart = r;
    views.forEach((d, i) => {
      const row = rs.getRow(r);
      row.values = [monthLabel(d.stmt.refDate), d.stmt.bank, `${fmtDate(d.stmt.startDate)} a ${fmtDate(d.stmt.endDate)}`,
      +d.m.officialTotal.toFixed(2), +d.m.totalPurchases.toFixed(2), +(d.m.totalFees + d.m.totalDebt).toFixed(2)];
      for (let k = 1; k <= 6; k++) {
        row.getCell(k).border = box;
        row.getCell(k).font = font();
        if (k >= 4) row.getCell(k).numFmt = MONEY;
        if (i % 2 === 1) row.getCell(k).fill = fill(C.zebra);
      }
      r += 1;
    });
    const row = rs.getRow(r);
    row.getCell(1).value = 'Total';
    ['D', 'E', 'F'].forEach((col, i) => {
      const key = ['officialTotal', 'totalPurchases', null][i];
      const result = key ? agg[key] : agg.totalFees + agg.totalDebt;
      row.getCell(4 + i).value = { formula: `SUM(${col}${fStart}:${col}${r - 1})`, result };
      row.getCell(4 + i).numFmt = MONEY;
    });
    for (let k = 1; k <= 6; k++) {
      row.getCell(k).font = font({ bold: true });
      row.getCell(k).fill = fill(C.totalFill);
      row.getCell(k).border = { ...box, top: { style: 'medium', color: { argb: C.navy } } };
    }
    r += 1;
  }

  r += 1;
  rs.mergeCells(`A${r}:F${r}`);
  rs.getCell(`A${r}`).value = 'Documento informativo gerado pelo Fatura Clara. Não substitui a fatura oficial do seu banco.';
  rs.getCell(`A${r}`).font = font({ size: 9, italic: true, color: { argb: C.muted } });

  // ============================= Aba Lançamentos =============================
  const ws = wb.addWorksheet('Lançamentos', { views: [{ state: 'frozen', ySplit: 1 }] });
  ws.columns = [
    { header: 'Fatura', key: 'fatura', width: 11 },
    { header: 'Data', key: 'data', width: 12 },
    { header: 'Descrição', key: 'desc', width: 48 },
    { header: 'Categoria', key: 'cat', width: 32 },
    { header: 'Tipo', key: 'tipo', width: 18 },
    { header: 'Parcela', key: 'parc', width: 10 },
    { header: 'Assinatura', key: 'ass', width: 11 },
    { header: 'Marcação', key: 'tag', width: 14 },
    { header: 'Valor (R$)', key: 'valor', width: 16 },
    { header: 'Entra no total', key: 'conta', width: 14 }
  ];
  const head = ws.getRow(1);
  head.height = 22;
  head.eachCell((c, col) => {
    c.font = font({ bold: true, color: { argb: C.navyText } });
    c.fill = fill(C.navy);
    c.alignment = { vertical: 'middle', horizontal: col === 9 ? 'right' : col >= 6 ? 'center' : 'left' };
    c.border = box;
  });

  list.forEach((t, i) => {
    const row = ws.addRow({
      fatura: t.stmtLabel,
      data: xlDate(t.date),
      desc: t.description,
      cat: t.kind === 'EXPENSE' ? CATEGORIES[t.categoryId].name : '—',
      tipo: KIND_LABEL[t.kind],
      parc: installmentText(t),
      ass: t.isSubscription ? 'Sim' : '',
      tag: TAG_LABELS[t.tag] || '',
      valor: +signedForInvoice(t).toFixed(2),
      conta: countsInTotal(t) ? 'Sim' : 'Não'
    });
    const outOfTotal = !countsInTotal(t);
    row.eachCell({ includeEmpty: true }, (c, col) => {
      c.border = box;
      c.font = font({ color: { argb: outOfTotal ? C.muted : C.text }, italic: outOfTotal });
      if (i % 2 === 1) c.fill = fill(C.zebra);
      if (col >= 6 && col !== 9) c.alignment = { horizontal: 'center' };
    });
    row.getCell('data').numFmt = 'dd/mm/yyyy';
    row.getCell('parc').numFmt = '@';
    row.getCell('valor').numFmt = MONEY;
    if (t.isDuplicate) row.getCell('desc').note = 'Possível cobrança duplicada';
  });

  const lastData = list.length + 1;
  ws.autoFilter = { from: 'A1', to: `J${lastData}` };

  const totalExpected = list.filter(countsInTotal).reduce((s, t) => s + signedForInvoice(t), 0);
  const addTotal = (label, formula, result, opts = {}) => {
    const row = ws.addRow([]);
    ws.mergeCells(`A${row.number}:H${row.number}`);
    row.getCell(1).value = label;
    row.getCell(1).alignment = { horizontal: 'right' };
    row.getCell(9).value = { formula, result };
    row.getCell(9).numFmt = MONEY;
    for (let k = 1; k <= 10; k++) {
      const c = row.getCell(k);
      c.font = font({ bold: !opts.light, color: { argb: opts.light ? C.muted : C.text }, italic: !!opts.light });
      if (!opts.light) c.fill = fill(C.totalFill);
      c.border = opts.first ? { top: { style: 'medium', color: { argb: C.navy } }, bottom: thin } : { bottom: thin };
    }
    return row;
  };
  ws.addRow([]);
  addTotal('TOTAL (gastos − estornos)', `SUMIFS(I2:I${lastData},J2:J${lastData},"Sim")`, totalExpected, { first: true });
  if (!isAll || views.length === 1) {
    const d = views[0];
    if (d.m.hasOfficial && !filtersActive()) {
      addTotal('Valor da fatura informado pelo banco', `${d.m.officialTotal.toFixed(2)}`, d.m.officialTotal, { light: true });
    }
  }
  addTotal('Soma das linhas visíveis (acompanha o filtro do Excel)', `SUBTOTAL(109,I2:I${lastData})`,
    list.reduce((s, t) => s + signedForInvoice(t), 0), { light: true });

  if (filtersActive()) {
    const row = ws.addRow([]);
    ws.mergeCells(`A${row.number}:J${row.number}`);
    row.getCell(1).value = 'Atenção: esta planilha foi exportada com filtros aplicados no site. Nem todos os lançamentos estão incluídos.';
    row.getCell(1).font = font({ italic: true, color: { argb: C.danger } });
  }

  ws.pageSetup = { orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0, paperSize: 9 };
  rs.pageSetup = { orientation: 'portrait', fitToPage: true, fitToWidth: 1, fitToHeight: 0, paperSize: 9 };
  return wb;
}

async function exportXLSX() {
  if (!filteredTransactions().length) return toast('Nada para exportar com os filtros atuais.', 'error');
  const btn = document.getElementById('btn-export');
  btn.disabled = true;
  try {
    const wb = await buildWorkbook();
    const buf = await wb.xlsx.writeBuffer();
    download(new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${exportFileBase()}.xlsx`);
    toast('Planilha exportada.');
  } catch (e) {
    console.error(e);
    toast('Não foi possível gerar a planilha Excel. Exportando em CSV.', 'error');
    exportCSV();
  } finally {
    btn.disabled = false;
  }
}

// ---------------------------------------------------------------------------
// Importação de arquivos
// ---------------------------------------------------------------------------
async function handleFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;

  state.statements = state.statements.filter(s => !s.isSample);
  let added = 0;
  let updated = 0;
  let lastId = null;
  const failed = [];

  for (const file of files) {
    try {
      const parsed = parseOfx(await decodeFile(file));
      if (!parsed.items.length) throw new Error('Sem lançamentos');
      const stmt = createStatement(parsed, file.name);
      const i = state.statements.findIndex(s => s.id === stmt.id);
      if (i >= 0) { state.statements[i] = stmt; updated++; } else { state.statements.push(stmt); added++; }
      lastId = stmt.id;
    } catch (_) {
      failed.push(file.name);
    }
  }

  saveStatements();
  if (lastId) {
    state.activeId = added + updated > 1 && state.statements.length > 1 ? 'ALL' : lastId;
    state.categoryFilter = 'ALL';
    state.tableLimit = 100;
  }
  render();

  const msgs = [];
  if (added) msgs.push(`${added} ${added === 1 ? 'fatura importada' : 'faturas importadas'}`);
  if (updated) msgs.push(`${updated} ${updated === 1 ? 'atualizada' : 'atualizadas'}`);
  if (msgs.length) toast(msgs.join(' · '));
  if (failed.length) toast(`Não foi possível ler: ${failed.join(', ')}`, 'error');
  document.getElementById('file-input').value = '';
}

// ---------------------------------------------------------------------------
// Dados de exemplo (3 meses)
// ---------------------------------------------------------------------------
const SAMPLE_ITEMS = [
  ['20261016', 4120.50, 'Pagamento recebido'],
  ['20261016', -489.90, 'SUPERMERCADO PAO DE ACUCAR'],
  ['20261017', -74.90, 'IFD*IFOOD BR - HAMBURGUERIA'],
  ['20261018', -55.90, 'NETFLIX.COM ASSINATURA'],
  ['20261018', -21.90, 'SPOTIFY BRASIL'],
  ['20261019', -349.90, 'AMAZON BR ELETRONICOS - Parcela 03/10'],
  ['20261020', -28.40, 'UBER *TRIP HELP.UBER.COM'],
  ['20261020', -28.40, 'UBER *TRIP HELP.UBER.COM'],
  ['20261021', -142.80, 'DROGASIL 1422 FARMACIA'],
  ['20261023', -89.50, 'IFD*IFOOD BR - SUSHI HOUSE'],
  ['20261025', -245.00, 'POSTO SHELL SELECT COMBUSTIVEL'],
  ['20261026', -620.00, 'MERCADOLIVRE*NOTEBOOK SSD - Parcela 03/06'],
  ['20261028', -115.00, 'OPENAI *CHATGPT SUBSCRIPTION'],
  ['20261028', -3.89, 'IOF COMPRA INTERNACIONAL'],
  ['20261030', -18.50, 'PADARIA ESTRELA CAFE'],
  ['20261101', -512.30, 'ASSAI ATACADISTA'],
  ['20261103', -64.00, 'IFD*IFOOD BR - PIZZARIA NAPOLI'],
  ['20261105', -210.00, 'LOJAS RENNER VESTUARIO - Parcela 02/03'],
  ['20261106', 28.40, 'ESTORNO UBER *TRIP'],
  ['20261108', -198.00, 'OUTBACK STEAKHOUSE'],
  ['20261110', -19.90, 'AMAZON PRIME BR CANAIS'],
  ['20261112', -159.90, 'COBASI PET SHOP RACAO']
];

function buildSampleStatements() {
  const factors = [1, 0.88, 0.94];
  return [2, 1, 0].map(k => {
    const items = [];
    SAMPLE_ITEMS.forEach(([dt, amt, desc], idx) => {
      let d = desc;
      const inst = desc.match(/Parcela (\d{2})\/(\d{2})/);
      if (inst) {
        const cur = +inst[1] - k;
        if (cur < 1) return;
        d = desc.replace(inst[0], `Parcela ${String(cur).padStart(2, '0')}/${inst[2]}`);
      }
      const fixed = amt > 0 || inst || SUBSCRIPTION_KEYWORDS.some(s => normalizeText(desc).includes(s));
      // A corrida de Uber repetida (idx 6 e 7) usa o mesmo valor, para demonstrar o alerta de duplicidade
      const seed = idx === 7 ? 6 : idx;
      const variation = fixed ? 1 : factors[k] * (1 + (((seed * 37 + k * 13) % 15) - 7) / 100);
      // Uber duplicado só no mês atual
      if (k > 0 && idx === 7) return;
      items.push({
        idx: items.length,
        fitId: `sample-${k}-${idx}`,
        trnType: amt > 0 ? 'CREDIT' : 'DEBIT',
        date: shiftMonths(parseOfxDate(dt), -k),
        rawAmount: +(amt * variation).toFixed(2),
        description: d
      });
    });
    const start = shiftMonths(new Date(2026, 9, 15), -k);
    const end = shiftMonths(new Date(2026, 10, 15), -k);
    return createStatement(
      { org: 'NU PAGAMENTOS S.A.', acctId: 'exemplo-0000-8910', curDef: 'BRL', startDate: start, endDate: end, ledgerBalance: null, items },
      '',
      { isSample: true, refDate: shiftMonths(new Date(2026, 10, 22), -k) }
    );
  });
}

function loadSample() {
  state.statements = buildSampleStatements();
  state.activeId = 'ALL';
  state.categoryFilter = 'ALL';
  render();
}

// ---------------------------------------------------------------------------
// Tema
// ---------------------------------------------------------------------------
function applyThemeIcon() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.getElementById('btn-theme').innerHTML = icon(dark ? 'sun' : 'moon', 16);
}

function clearAll() {
  if (!confirm('Apagar todas as faturas, categorias personalizadas e marcações salvas neste navegador?')) return;
  ['ofx_custom_categories', 'ofx_custom_tags', STORAGE_KEY].forEach(k => localStorage.removeItem(k));
  state.statements = [];
  state.customCategories = {};
  state.customTags = {};
  state.activeId = null;
  render();
  toast('Todos os dados foram apagados deste navegador.');
}

// ---------------------------------------------------------------------------
// Inicialização
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  hydrateIcons();
  applyThemeIcon();

  const input = document.getElementById('file-input');
  input.addEventListener('change', e => handleFiles(e.target.files));

  // Arrastar e soltar em qualquer lugar da página
  const dz = document.getElementById('dropzone');
  dz.addEventListener('click', e => { if (!e.target.closest('label, button')) input.click(); });
  dz.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
  ['dragenter', 'dragover'].forEach(ev => document.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(ev => document.addEventListener(ev, e => { e.preventDefault(); if (ev === 'drop' || !e.relatedTarget) dz.classList.remove('dragover'); }));
  document.addEventListener('drop', e => { if (e.dataTransfer && e.dataTransfer.files.length) handleFiles(e.dataTransfer.files); });

  document.getElementById('btn-sample').addEventListener('click', e => { e.stopPropagation(); loadSample(); });
  document.getElementById('btn-add-stmt').addEventListener('click', () => input.click());
  document.getElementById('brand-link').addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  document.getElementById('btn-theme').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fc_theme', next);
    applyThemeIcon();
    render();
  });

  // Menu "mais opções"
  const menu = document.getElementById('more-menu');
  document.getElementById('btn-more').addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('hidden'); });
  document.addEventListener('click', () => menu.classList.add('hidden'));
  document.getElementById('menu-export').addEventListener('click', exportXLSX);
  document.getElementById('menu-export-csv').addEventListener('click', exportCSV);
  document.getElementById('menu-print').addEventListener('click', () => window.print());
  document.getElementById('menu-invert').addEventListener('click', () => {
    state.invertSigns = !state.invertSigns;
    render();
    toast(state.invertSigns ? 'Sinais invertidos.' : 'Sinais restaurados.');
  });
  document.getElementById('menu-clear').addEventListener('click', clearAll);
  document.getElementById('btn-clear-side').addEventListener('click', clearAll);

  document.getElementById('btn-export').addEventListener('click', exportXLSX);
  document.getElementById('btn-speak-summary').addEventListener('click', () => speak(document.getElementById('summary-text').innerText, 'btn-speak-summary'));
  document.getElementById('btn-speak-all').addEventListener('click', speakAll);
  document.getElementById('btn-speak-stop').addEventListener('click', stopSpeaking);

  // Filtros
  ['f-search', 'f-type', 'f-tag', 'f-sort'].forEach(id => document.getElementById(id).addEventListener('input', () => { state.tableLimit = 100; renderTable(); }));
  document.getElementById('f-category').addEventListener('input', e => setCategoryFilter(e.target.value));
  document.getElementById('btn-more-rows').addEventListener('click', () => { state.tableLimit += 100; renderTable(); });
  document.querySelectorAll('th[data-sort]').forEach(th => th.addEventListener('click', () => {
    const sel = document.getElementById('f-sort');
    const col = th.getAttribute('data-sort');
    if (col === 'DATE') sel.value = sel.value === 'DATE_DESC' ? 'DATE_ASC' : 'DATE_DESC';
    if (col === 'AMOUNT') sel.value = sel.value === 'AMOUNT_DESC' ? 'AMOUNT_ASC' : 'AMOUNT_DESC';
    if (col === 'NAME') sel.value = 'NAME_ASC';
    renderTable();
  }));

  // Carrega faturas salvas
  state.statements = loadStatements();
  if (state.statements.length >= 2) state.activeId = 'ALL';
  render();
});

// What the shop sells. Shared by the landing page (cards, contact) and the product pages (/shop/<key>).

// where people reach Karakuli (empty ones are not shown)
export const CONTACT = { email: 'aslanov.az@gmail.com', whatsapp: '+994 50 789 9999', instagram: '@aeldar' };

// the powder-coat colours on offer: a short list of RAL Classic shades (the hex values are the editor's on-screen shades)
export const RAL = [
  ['9005', 'Jet black', '#161616'], ['9003', 'Signal white', '#f4f4f4'], ['1015', 'Light ivory', '#e6d2b5'], ['6005', 'Moss green', '#2f4538'],
  ['2004', 'Pure orange', '#e75b12'], ['1037', 'Sun yellow', '#f29200'], ['3020', 'Traffic red', '#cc0605'], ['3004', 'Purple red', '#6b1c23'], ['5014', 'Pigeon blue', '#6c7c98']
];
export const FINISHES = [['textured', 'Textured powder coat', 'Textured'], ['gloss', 'Gloss paint', 'Gloss'], ['steel', 'Stainless steel', 'Stainless steel']];
export const THICK = 2;   // mm: every piece is cut from 2 mm sheet
export const HOOK_PITCH = 24 * 30 * 12 / 58;   // mm between hanger hooks, as in the editor
export const hangerWidth = n => Math.round(12 + (n - 1) * HOOK_PITCH);

// view: the editor's view link of the design shown in 3D on the product page (it follows the design as it is edited)
export const PRODUCTS = [
  { key: 'shelf', name: 'Shelf', lede: 'A strict base for the things you love.', sub: 'Any width · key hooks · towel pocket', colour: '2004', view: 'aupxpcplv0',
    w: 894, h: 379, minW: 200, maxW: 2000, minH: 250, maxH: 900,
    extra: { title: 'Extras', items: [['hooks', 'Key hooks'], ['towel', 'Towel pocket']], multi: true } },
  { key: 'hanger', name: 'Hanger', lede: 'The first thing that greets you at home. Steel that holds and adorns.', sub: '4 to 7 hooks', colour: '9005', poster: 3, view: 'f5n0tklfv2',
    hooks: 7, h: 321, minH: 200, maxH: 900,
    extra: { title: 'Hooks', items: [[4, '4'], [5, '5'], [6, '6'], [7, '7']], multi: false } },
  { key: 'magazine', name: 'Magazine holder', lede: 'Order with a mood of its own.', sub: 'Any width', colour: '6005', view: 'mdfvavrtl8',
    w: 894, h: 262, minW: 200, maxW: 2000, minH: 180, maxH: 700 }
];
export const img = (k, i) => `/assets/products/${k}-${i}.jpg`;

export function contactLinks() {
  const l = [];
  if (CONTACT.whatsapp) l.push(`<li><a href="https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener">WhatsApp</a></li>`);
  if (CONTACT.instagram) l.push(`<li><a href="https://instagram.com/${CONTACT.instagram.replace(/^@/, '')}" target="_blank" rel="noopener">Instagram</a></li>`);
  if (CONTACT.email) l.push(`<li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>`);
  return l.length ? l.join('') : '<li class="soon">Write to us — contacts are on their way.</li>';
}

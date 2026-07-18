const Slab    = require('./models/Slab');
const Catalog = require('./models/Catalog');

const defaultSlabs = [
  {
    name: 'Calacatta Oro Supremo',
    category: 'Marble',
    origin: 'Carrara, Italy',
    rarity: 'Exceptionally Rare — Museum Grade',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    desc: 'Dramatic gold veining on pure white canvas. Reserved for landmark interiors and signature penthouses.'
  },
  {
    name: 'Nero Marquina Profondo',
    category: 'Marble',
    origin: 'Basque Country, Spain',
    rarity: 'Limited Quarry Access',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?auto=format&fit=crop&q=80&w=800',
    desc: 'Obsidian depth with bright calcite veining. A statement surface for luxury hospitality projects.'
  },
  {
    name: 'Bianco Lasa Venato',
    category: 'Marble',
    origin: 'South Tyrol, Italy',
    rarity: 'Heritage Quarry Stock',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    desc: 'Subtle silver-grey veining across a crystalline white body. Perfection for minimalist architecture.'
  },
  {
    name: 'Black Galaxy Absolute',
    category: 'Granite',
    origin: 'Andhra Pradesh, India',
    rarity: 'Premium Reserve',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800',
    desc: 'Gold bronzite sparkle on absolute black. The definition of architectural drama.'
  },
  {
    name: 'Azul Bahia Luminoso',
    category: 'Granite',
    origin: 'Bahia, Brazil',
    rarity: 'Extremely Limited',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=800',
    desc: 'Vivid royal blue with silver mica constellations. Impossible to replicate in any synthetic material.'
  },
  {
    name: 'Calacatta Viola Onyx',
    category: 'Quartz',
    origin: 'Engineered — UAE Factory',
    rarity: 'Exclusive Collection',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
    desc: 'Violet mineral veins on translucent white. Backlit installations create breathtaking spatial effects.'
  }
];

const defaultCatalogs = [
  {
    title: 'Italian Marble Collection 2025',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600',
    url: '#',
    category: 'Material Catalogue'
  },
  {
    title: 'Granite & Natural Stone Handbook',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600',
    url: '#',
    category: 'Specification Booklet'
  },
  {
    title: 'Quartz & Engineered Surfaces',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600',
    url: '#',
    category: 'Technical Guide'
  },
  {
    title: 'Aura Stone Flagship Lookbook',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
    url: '#',
    category: 'Inspiration Lookbook'
  }
];

module.exports = async function seed() {
  const slabCount = await Slab.countDocuments();
  if (slabCount === 0) {
    await Slab.insertMany(defaultSlabs);
    console.log('✓ Default slabs seeded');
  }

  const catalogCount = await Catalog.countDocuments();
  if (catalogCount === 0) {
    await Catalog.insertMany(defaultCatalogs);
    console.log('✓ Default catalogs seeded');
  }
};

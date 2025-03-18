import type { Wine } from "../types"
import nederbergImage from "../assets/nederberg.jpg"
import asconiAgorImage from "../assets/asconiagor.jpg"

// Mock wine data - in a real app, this would come from an API
const wines: Wine[] = [
  {
    id: "1",
    name: "Nederburg Cabernet Sauvignon 2018",
    category: "Red Wine",
    region: "South Africa",
    price: 299.99,
    rating: 4.7,
    reviews: 92,
    description:
      "A premium Cabernet Sauvignon from Nederburg's distinguished cellars. This wine showcases rich blackcurrant and cassis flavors with hints of cedar and vanilla. Full-bodied with well-integrated tannins and a long, elegant finish that exemplifies South African winemaking excellence.",
    details: {
      vintage: "2018",
      varietal: "Cabernet Sauvignon",
      alcohol: "14%",
      size: "750ml",
      closure: "Cork",
    },
    image: nederbergImage,
  },
  {
    id: "2",
    name: "Asconi Agor Red Blend",
    category: "Red Wine",
    region: "Moldova",
    price: 249.99,
    rating: 4.6,
    reviews: 78,
    description:
      "A distinctive red blend from Moldova's renowned Asconi winery. This unique wine presents complex aromas of dark fruits, spices, and subtle oak notes. The palate offers layers of blackberry, plum, and Mediterranean herbs, wrapped in a luxurious presentation that reflects its premium quality.",
    details: {
      vintage: "2020",
      varietal: "Red Blend",
      alcohol: "13.5%",
      size: "750ml",
      closure: "Cork",
    },
    image: asconiAgorImage,
  },
  {
    id: "3",
    name: "Dom Pérignon Vintage",
    category: "Sparkling",
    region: "Champagne, France",
    price: 219.99,
    rating: 4.9,
    reviews: 156,
    description:
      "An iconic prestige cuvée champagne that epitomizes luxury and excellence. This vintage offers a harmonious blend of complexity and balance with notes of almond, powdered cocoa, white fruit, and dried flowers. The palate is silky with a precise, mineral-driven finish.",
    details: {
      vintage: "2012",
      varietal: "Chardonnay, Pinot Noir",
      alcohol: "12.5%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Whispering Angel Rosé",
    category: "Rosé",
    region: "Provence, France",
    price: 24.99,
    rating: 4.5,
    reviews: 210,
    description:
      "A benchmark for Provence rosé that has gained worldwide acclaim. Pale pink in color with a fresh and refined profile featuring delicate red berry fruits, subtle floral notes, and a hint of minerality. The palate is dry, crisp, and elegant with a clean, refreshing finish.",
    details: {
      vintage: "2022",
      varietal: "Grenache, Cinsault, Rolle",
      alcohol: "13%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "5",
    name: "Opus One",
    category: "Red Wine",
    region: "Napa Valley, USA",
    price: 379.99,
    rating: 4.8,
    reviews: 98,
    description:
      "A prestigious Bordeaux-style blend from Napa Valley, representing a partnership between Robert Mondavi and Baron Philippe de Rothschild. This wine offers complex aromas of black currant, blackberry, and violet with hints of espresso and dark chocolate. The palate is full-bodied with polished tannins and exceptional balance.",
    details: {
      vintage: "2019",
      varietal: "Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot, Malbec",
      alcohol: "14.5%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "6",
    name: "Krug Grande Cuvée",
    category: "Sparkling",
    region: "Champagne, France",
    price: 249.99,
    rating: 4.9,
    reviews: 87,
    description:
      "An extraordinary blend of around 120 wines from ten or more different vintages and three grape varieties. This multi-vintage champagne offers remarkable depth and complexity with notes of toasted bread, hazelnut, nougat, barley sugar, and dried fruit. The palate is rich yet precise with exceptional length.",
    details: {
      vintage: "NV",
      varietal: "Chardonnay, Pinot Noir, Pinot Meunier",
      alcohol: "12%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "7",
    name: "Penfolds Grange",
    category: "Red Wine",
    region: "South Australia, Australia",
    price: 849.99,
    rating: 4.9,
    reviews: 65,
    description:
      "Australia's most celebrated wine, known for its complexity, concentration, and aging potential. This Shiraz-dominant blend offers intense aromas of dark fruits, licorice, spice, and chocolate. The palate is full-bodied with powerful yet velvety tannins and exceptional length.",
    details: {
      vintage: "2017",
      varietal: "Shiraz, Cabernet Sauvignon",
      alcohol: "14.5%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&h=1200&fit=crop&q=80",
  },
  {
    id: "8",
    name: "Château d'Yquem",
    category: "White Wine",
    region: "Sauternes, France",
    price: 399.99,
    rating: 4.8,
    reviews: 42,
    description:
      "The world's most famous sweet wine, known for its exceptional complexity and longevity. This Sauternes offers opulent aromas of honey, apricot, peach, and vanilla with notes of tropical fruits and spice. The palate is lusciously sweet yet perfectly balanced by vibrant acidity.",
    details: {
      vintage: "2015",
      varietal: "Sémillon, Sauvignon Blanc",
      alcohol: "14%",
      size: "750ml",
      closure: "Cork",
    },
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&h=1200&fit=crop&q=80",
  },
]

export const getAllWines = (): Wine[] => {
  return wines
}

export const getWineById = (id: string): Wine | undefined => {
  return wines.find((wine) => wine.id === id)
}

export const getWinesByCategory = (category: string): Wine[] => {
  if (category === "all") return wines
  return wines.filter((wine) => wine.category.toLowerCase().replace(" ", "-") === category)
}
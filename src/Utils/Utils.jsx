export function getTyreImageUrl(filename) {
    const BASE_URL = import.meta.env.VITE_BASE_URL; // 👈 for Vite projects
    return `${BASE_URL}/Product/${filename}`; // adjust path if backend uses /Product or /uploads
  }
  
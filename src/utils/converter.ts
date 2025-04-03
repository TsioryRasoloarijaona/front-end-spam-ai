export function formatDateTime(datetime: string): string {
    const date = new Date(datetime);
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
    const year = String(date.getFullYear()).slice(-2); // Récupère les deux derniers chiffres de l'année
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
export const getBase64 = (file: any) =>
  new Promise<string>((resolve, reject) => {
   if(file){ const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader?.result?.toString() || "");
    reader.onerror = (error) => reject(error);}
  });

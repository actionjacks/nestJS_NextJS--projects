export interface ImgAssets {
  id: number;
  url: string;
}

export const fetchData = async (): Promise<ImgAssets[]> => {
  const response: Response = await fetch("http://localhost:3000/assets");

  const data: ImgAssets[] = await response.json();
  if (!response.ok) {
    const error: Error = new Error("json server is off");
    throw error;
  }
  return data;
};

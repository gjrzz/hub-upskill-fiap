const API_URL = "https://6926fee726e7e41498fc7e26.mockapi.io/courses";

export async function getCourses() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Erro ao buscar cursos");
  return response.json();
}

export async function getCourseById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Erro ao buscar curso");
  return response.json();
}

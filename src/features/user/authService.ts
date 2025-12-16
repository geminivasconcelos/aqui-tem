const BASE_URL = import.meta.env.AQUI_TEM_API_URL;

export async function login(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Erro ao fazer login");
  }

  return response.json();
}

export async function register(
  name: string,
  email: string,
  password: string
) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error("Erro ao registrar usuário");
  }

  return response.json();
}

export async function forgotPassword(email: string) {
  const response = await fetch(`${BASE_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Erro ao solicitar recuperação de senha");
  }

  return response.json();
}

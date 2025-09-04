export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

// Simulate API calls with dummy data - purely client-side
export const authAPI = {
  async login(email: string, password: string): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dummy validation - accept any email with password "password"
    if (password === "password") {
      return {
        success: true,
        token: "dummy-jwt-token-" + Date.now(),
        user: {
          id: "1",
          email,
          name: email.split("@")[0],
        },
      };
    }

    return {
      success: false,
      message: 'Invalid credentials. Use password "password" for demo.',
    };
  },

  async signup(
    name: string,
    email: string,
    password: string
  ): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      token: "dummy-jwt-token-" + Date.now(),
      user: {
        id: "2",
        email,
        name,
      },
    };
  },

  async verifyToken(token: string): Promise<User | null> {
    // Simulate token verification
    if (token && token.startsWith("dummy-jwt-token-")) {
      // Extract email from token simulation or use default
      return {
        id: "1",
        email: "user@example.com",
        name: "Demo User",
      };
    }
    return null;
  },
};

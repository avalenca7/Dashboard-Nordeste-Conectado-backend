import { prisma } from "../../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authService = {
  async login(email: string, password: string) {
    try {
      // 1. Buscar usuário no banco
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return { error: "Usuário não encontrado" };
      }

      // 2. Comparar senha
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return { error: "Senha incorreta" };
      }

      // 3. Gerar token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
      );

      return {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (err) {
      console.error("Erro login:", err);
      return { error: "Erro interno no servidor" };
    }
  },

  async register(name: string, email: string, password: string) {
    try {
      // Verifica se já existe usuário
      const exists = await prisma.user.findUnique({ where: { email } });
      if (exists) return { error: "Email já cadastrado" };

      // Hash da senha
      const hash = await bcrypt.hash(password, 10);

      // Cria usuário no banco
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hash,
        },
      });

      return {
        message: "Usuário criado com sucesso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (err) {
      console.error("Erro register:", err);
      return { error: "Erro interno no servidor" };
    }
  },
};

import { randomUUID } from 'crypto';
import { prisma } from '../database/prisma.database';
import { LoginDto } from '../dtos';
import { ResponseApi } from '../types';
import { Student } from '@prisma/client';
import { Jwt } from '../utils/jwt';
import { StudentToken } from '../types/student.types';

export class AuthService {
	public async login(data: LoginDto): Promise<ResponseApi> {
		const { email, password } = data;

		const student = await prisma.student.findUnique({
			where: { email },
		});

		if (!student) {
			return {
				ok: false,
				code: 404,
				message: 'E-mail ou senha incorretos.',
			};
		}

		if (password !== student.password) {
			return {
				ok: false,
				code: 404,
				message: 'E-mail ou senha incorretos.',
			};
		}

		const jwt = new Jwt();
		const payload: StudentToken = {
			id: student.id,
			name: student.name,
			email: student.email,
			type: student.type,
		};

		const token = jwt.generateToken(payload);

		return {
			ok: true,
			code: 200,
			message: 'Login efetuado com sucesso!',
			data: { token, student: payload },
		};
	}

	public async validateToken(token: string): Promise<Student | null> {
		const student = await prisma.student.findFirst({
			where: { authToken: token },
		});

		return student;
	}
}

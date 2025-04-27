// app/api/route.js (o app/api/users/route.js)
import { NextResponse } from 'next/server';
import usersData from './users.json';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'app', 'api', 'users.json');

export async function POST(request) {
  try {
    const data = await request.json(); // Leer el cuerpo una vez
    const { email, password, ...rest } = data;
    const isRegistration = Object.keys(rest).length > 0;

    if (isRegistration) {
      const { name, apellidos, role } = rest;
      const userExists = usersData.some(user => user.email === email);
      if (userExists) {
        return NextResponse.json({ error: 'Este correo electrónico ya está registrado' }, { status: 409 });
      }

      const newUser = {
        id: uuidv4(),
        name,
        apellidos,
        email,
        password,
        role
      };
      usersData.push(newUser);
      await fs.writeFile(filePath, JSON.stringify(usersData, null, 2));
      console.log('Nuevo usuario registrado y guardado:', newUser);
      return NextResponse.json({ message: 'Registro exitoso', user: { id: newUser.id, email: newUser.email, role: newUser.role } }, { status: 201 });
    } else {
      // Lógica de inicio de sesión
      console.log('Cuerpo de la petición:', data); // Usar la variable 'data'
      const user = usersData.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        return NextResponse.json({ message: 'Inicio de sesión exitoso', user: { id: user.id, email: user.email, role: user.role } }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
      }
    }
  } catch (error) {
    console.error('Error al procesar la petición:', error);
    return NextResponse.json({ error: 'Ocurrió un error en el servidor' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(usersData);
}
'use client';
export default function LoginHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENÚ",
    items: [
      {
        icon: "/home.png",
        label: "Inicio",
        href: "/docente",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Docentes",
        href: "/list/docentes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Estudiantes",
        href: "/list/estudiantes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Materias",
        href: "/list/materias",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Grupos",
        href: "/list/grupos",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exámenes",
        href: "/list/examenes",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Calificaciones",
        href: "/list/calificaciones",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Asistencia",
        href: "/list/asistencia",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Anuncios",
        href: "/list/anuncios",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Eventos",
        href: "/list/eventos",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTROS",
    items: [
      {
        icon: "/profile.png",
        label: "Perfil",
        href: "/perfil",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Configuración",
        href: "/configuracion",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Cerrar sesión",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-Texto py-2 md:px-2 rounded-md hover:bg-hueso-900"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;

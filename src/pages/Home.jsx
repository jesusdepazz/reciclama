'use client'

import RecomendacionesCarousel from "../components/RecomendacionesCarousel";

const navigation = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'MISIÓN', href: '#mision' },
    { name: 'CONOCENOS', href: '#conocenos' },
    { name: 'TRABAJOS', href: '#trabajos' },
]

const stats = [
    { label: 'Clientes satisfechos', value: '+100' },
    { label: 'Empresas que confían en nosotros', value: '+150' },
    { label: 'Objetos reciclados y recuperados', value: '+10,000' },
];

const values = [
    {
        name: 'Compromiso con el planeta',
        description:
            'En Reciclama trabajamos con responsabilidad ambiental, asegurando que cada material tenga un nuevo propósito y reduzca su impacto en el entorno.',
    },
    {
        name: 'Educación y conciencia',
        description:
            'Creemos que el cambio inicia con la información. Compartimos conocimientos y prácticas para que más personas aprendan a reciclar correctamente.',
    },
    {
        name: 'Innovación sostenible',
        description:
            'Buscamos nuevas formas de reutilizar, transformar y dar vida a objetos que muchos consideran desecho, impulsando soluciones modernas y ecológicas.',
    },
    {
        name: 'Trabajo en comunidad',
        description:
            'Colaboramos con hogares, empresas y comunidades para construir una cultura de reciclaje accesible, práctica y beneficiosa para todos.',
    },
    {
        name: 'Responsabilidad social',
        description:
            'Cada acción cuenta. Nos comprometemos a operar con ética, transparencia y dedicación en cada proceso de recolección, clasificación y reciclaje.',
    },
    {
        name: 'Aprovechamiento total',
        description:
            'Creemos en darle una segunda vida a todo lo posible. Maximizamos el valor de cada material recogido, evitando desperdicios innecesarios.',
    },
];

const recomendacionCategories = [
    {
        key: "vehiculos",
        title: "Vehículos y motos",
        images: [
            { src: "/reciclaje/20.jpeg", alt: "Vehículo 1", caption: "En Reciclama transformamos residuos metálicos en nuevas oportunidades. Nuestro servicio de desarme y recuperación de metales combina eficiencia, sostenibilidad y respaldo técnico, brindando incluso certificación del proceso de reciclaje para avalar cada etapa de recuperación." },
            { src: "/reciclaje/21.jpeg", alt: "Vehículo 2" },
        ],
    },
    {
        key: "papel",
        title: "Papel, cartón y plasticos",
        images: [
            { src: "/reciclaje/1.jpeg", alt: "Papel 1", caption: "En Reciclama, damos nueva vida a los materiales reciclables. Realizamos la recolección y compactado de papel, cartón y plásticos, asegurando que cada residuo sea aprovechado de forma responsable y sostenible, con certificación de reciclaje que respalda nuestro compromiso con el planeta." },
            { src: "/reciclaje/2.jpeg", alt: "Papel 2" },
            { src: "/reciclaje/3.jpeg", alt: "Papel 3" },
            { src: "/reciclaje/5.jpeg", alt: "Papel 4" },
            { src: "/reciclaje/6.jpeg", alt: "Papel 5" },
            { src: "/reciclaje/7.jpeg", alt: "Papel 6" },
            { src: "/reciclaje/10.jpeg", alt: "Papel 7" },
            { src: "/reciclaje/27.jpeg", alt: "Papel 8" },
            { src: "/reciclaje/28.jpeg", alt: "Papel 9" },
        ],
    },
    {
        key: "maquinaria",
        title: "Maquinaria industrial",
        images: [
            { src: "/reciclaje/33.jpeg", alt: "Maquinaria 1", caption: "Brindamos soluciones confiables para la recolección y reciclaje de maquinaria industrial, con equipos especializados, manejo seguro de residuos y certificación garantizada que respalda la trazabilidad de todo el proceso." },
            { src: "/reciclaje/34.jpeg", alt: "Maquinaria 2" },
            { src: "/reciclaje/16.jpeg", alt: "Maquinaria 3" },
        ],
    },
    {
        key: "computo",
        title: "Equipos de cómputo",
        images: [
            { src: "/reciclaje/11.jpeg", alt: "PC 1", caption: "En Reciclama, transformamos la tecnología en sostenibilidad. Nos encargamos de la recolección y reciclaje de equipos de cómputo, separando y recuperando materiales aprovechables, y asegurando la certificación ambiental de todo el proceso para cuidar el planeta y reducir los desechos electrónicos." },
            { src: "/reciclaje/12.jpeg", alt: "PC 2" },
            { src: "/reciclaje/17.jpeg", alt: "PC 3" },
            { src: "/reciclaje/18.jpeg", alt: "PC 4" },
            { src: "/reciclaje/31.jpeg", alt: "PC 5" },
        ],
    },
    {
        key: "metales",
        title: "Metales, aluminio y mas",
        images: [
            { src: "/reciclaje/32.jpeg", alt: "Metales 1", caption: "En Reciclama ofrecemos un servicio especializado en la recolección, clasificación y recuperación de metales ferrosos y no ferrosos, incluyendo aluminio, cobre, acero y otros materiales industriales. Contamos con procesos certificados que aseguran la máxima eficiencia en el aprovechamiento de recursos, contribuyendo a una economía circular y sostenible." },
            { src: "/reciclaje/30.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/29.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/26.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/25.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/24.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/23.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/15.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/14.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/13.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/9.jpeg", alt: "Metales 2" },
            { src: "/reciclaje/8.jpeg", alt: "Metales 2" },
        ],
    },
];

const footerNavigation = {
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/share/1C5vLonZ4M/?mibextid=wwXIfr',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/reciclama?igsh=bWZ4MTNmZW4xdng1',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@reciclamametalpap?_r=1&_t=ZM-91AwOwzgX9P',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12.525 2.003c.698 0 1.39-.003 2.087.001.066 1.14.367 2.244.988 3.215.66 1.037 1.582 1.76 2.76 2.138.54.171 1.096.256 1.662.256v2.43a6.67 6.67 0 01-1.7-.217 7.543 7.543 0 01-1.463-.533c-.3-.14-.59-.296-.876-.46-.09-.052-.18-.103-.28-.161l-.04 3.95c-.03 1.19-.39 2.27-1.08 3.24-.72 1.02-1.68 1.69-2.86 1.99-.84.21-1.7.23-2.55.06a5.403 5.403 0 01-2.3-1.02 5.56 5.56 0 01-1.88-2.45 5.797 5.797 0 01-.32-2.13c.02-.82.17-1.61.47-2.37.51-1.29 1.38-2.31 2.56-3.04 1.04-.64 2.18-.93 3.4-.9v2.46c-.41-.02-.8.02-1.18.12-.92.23-1.64.75-2.14 1.56-.26.42-.42.88-.47 1.37-.13 1.1.18 2.06.92 2.88.34.38.75.67 1.23.87.5.21 1.02.28 1.56.2.8-.1 1.48-.45 2.03-1.04.52-.55.82-1.2.9-1.95.03-.27.04-.54.04-.82V2.003h.01z" />
                </svg>
            ),
        },
    ],
}

export default function Example() {
    return (
        <div className="bg-white">
            <div className="fixed top-0 inset-x-0 z-50 group">
                <div className="h-5 w-full absolute top-0 left-0"></div>

                <header className="transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white shadow">
                    <nav
                        aria-label="Global"
                        className="relative mx-auto flex max-w-7xl items-center p-6 lg:px-8"
                    >
                        <a href="#inicio" className="flex items-center gap-2">
                            <img
                                src="/reciclaje_logo.png"
                                alt="Reciclama Logo"
                                className="h-10 w-auto"
                            />
                            <span className="font-serif font-bold text-green-600 text-xl tracking-wide">
                                RECICLAMA
                            </span>
                        </a>
                        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </header>
            </div>
            <main className="isolate">
                <div id="inicio" className="relative isolate -z-10 scroll-mt-32">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-[164px] sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-black sm:text-7xl font-serif">
                                        Reciclama cambia la forma de reciclar
                                    </h1>

                                    <p className="mt-8 text-pretty text-lg font-bold text-green-700 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                        - El reciclaje empieza con pequeñas acciones que generan un impacto enorme. Cada persona puede aportar al cambio
                                        cuando decide reutilizar.
                                        <br></br>
                                        <br></br>
                                        - Reducir y transformar sus residuos en nuevas oportunidades para el planeta. En
                                        Reciclama trabajamos para que ese proceso sea simple, accesible y sostenible para todos.
                                        <br></br>
                                        <br></br>
                                        - Nuestro compromiso es
                                        crear soluciones que faciliten el cuidado del ambiente sin complicaciones, ayudando a cada comunidad a vivir de
                                        forma más responsable.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                alt="Reciclaje 1"
                                                src="/reciclaje/1.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>

                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                alt="Reciclaje 18"
                                                src="/reciclaje/2.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>

                                        <div className="relative">
                                            <img
                                                alt="Reciclaje 5"
                                                src="/reciclaje/3.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>

                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                alt="Reciclaje 31"
                                                src="/reciclaje/4.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>

                                        <div className="relative">
                                            <img
                                                alt="Reciclaje 33"
                                                src="/reciclaje/5.jpeg"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mision" className="scroll-mt-32 mx-auto mt-5 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:mt-6">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Nuestra mision</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl/8 text-gray">
                                    En Reciclama, nuestra misión es recibir todo aquello que ya no utilizas o consideras obsoleto,
                                    dándole un propósito renovado. Creemos que cada objeto puede tener una segunda vida cuando se
                                    gestiona de forma responsable y sostenible. Transformamos lo que muchos consideran desecho en
                                    nuevas oportunidades para las personas y el ambiente.
                                </p>

                                <p className="mt-10 text-xl/8 text-gray">
                                    Trabajamos para facilitar el proceso de reciclaje, creando un sistema accesible y eficiente que
                                    permita a cualquier persona contribuir al cuidado del planeta. Nuestro compromiso es impulsar
                                    prácticas responsables, reducir el impacto ambiental y transformar residuos en recursos que
                                    beneficien a toda la comunidad. Así, cada acción cuenta y cada aporte suma hacia un futuro más
                                    limpio y consciente.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-mt-32 mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <video
                        className="aspect-[4/2] w-full object-cover outline outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
                        src="/reciclaje/presentacion.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div id="conocenos" className="scroll-mt-32 mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl font-serif">
                            ¿Quienes somos?
                        </h2>

                        <p className="mt-6 text-lg/8 text-gray-700 font-serif">
                            En Reciclama creemos que cada acción cuenta. Nuestro compromiso es transformar residuos en nuevas
                            oportunidades, promover la sostenibilidad y fomentar una cultura responsable con el medio ambiente.
                        </p>
                    </div>

                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-900 font-serif">{value.name}</dt>
                                <dd className="mt-1 text-gray-600 font-serif">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="relative isolate -z-10 mt-32 sm:mt-48">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg aria-hidden="true" className="h-[40rem] w-[80rem] flex-none stroke-gray-200">
                            <defs>
                                <pattern
                                    x="50%"
                                    y="50%"
                                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                                    width={200}
                                    height={200}
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="translate(-100 0)"
                                >
                                    <path d="M.5 200V.5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
                            </svg>
                            <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg/8 font-semibold text-green-700">
                            Materiales que reciclamos y transformamos
                        </h2>

                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img src="/logos/plastico.svg" alt="Plástico" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img src="/logos/carton.svg" alt="Cartón" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img src="/logos/electronicos.svg" alt="Electrónicos" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                            <img src="/logos/aluminio.svg" alt="Aluminio" className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                            <img src="/logos/vidrio.svg" alt="Vidrio" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                        </div>
                    </div>
                </div>
                <div id="trabajos" className="scroll-mt-32 mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Reciclajes realizados
                        </h2>
                        <p className="mt-2 text-lg/8 text-gray-600">
                            En <strong>Reciclama</strong> nos especializamos en la gestión responsable de residuos, recuperando materiales aprovechables y garantizando procesos certificados de reciclaje que protegen el medio ambiente.
                        </p>
                    </div>
                    <div className="mt-8">
                        <RecomendacionesCarousel categories={recomendacionCategories} autoplay={6000} />
                    </div>
                </div>
            </main>
            <footer className="mt-16 sm:mt-32">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <div className="mt-16 flex justify-center gap-x-10">
                        {footerNavigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-10 text-center text-sm/6 text-gray-600">
                        &copy; 2025 Reciclama, Todos los derechos reservados.
                    </p>
                </div>
            </footer>
            <a
                href="https://wa.me/50242995528?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20puedo%20reciclar%20mis%20objetos%20con%20Reciclama."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                >
                    <path d="M20.52 3.48A11.945 11.945 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.553 4.083 1.516 5.822L0 24l6.32-1.484A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.22-3.48-8.52zm-8.52 17.02a9.91 9.91 0 01-5.41-1.596l-.386-.234-3.75.88.895-3.644-.25-.385A9.935 9.935 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.63-7.19c-.292-.146-1.726-.852-1.993-.949-.267-.097-.462-.146-.656.146s-.754.949-.924 1.146c-.17.195-.347.219-.64.073-.292-.146-1.23-.453-2.344-1.448-.867-.772-1.45-1.725-1.623-1.992-.17-.268-.018-.413.128-.56.13-.13.292-.34.438-.51.146-.17.195-.268.292-.447.097-.17.048-.317-.024-.446-.073-.146-.656-1.583-.898-2.172-.236-.57-.476-.492-.656-.502l-.56-.01c-.17 0-.446.063-.68.317s-.89.869-.89 2.122c0 1.252.91 2.463 1.036 2.632.13.17 1.793 2.774 4.347 3.89.608.263 1.082.42 1.45.538.608.195 1.163.168 1.6.102.488-.073 1.726-.704 1.97-1.383.243-.679.243-1.262.17-1.383-.073-.122-.267-.195-.56-.341z" />
                </svg>
            </a>
        </div>
    )
}

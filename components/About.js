import React from 'react';
import Image from 'next/image';
import profile from '../public/profile.jpg';

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex justify-center flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
        <Image
          src={profile}
          alt="Profile"
          priority={true}
          className="rounded-full"
          width={250}
          height={250}
          placeholder="blur"
        />
      </div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white lg:text-ce">
            Bruno Nascimento
          </h1>
          <h2>
            Bacharel em Ciência da Computação pela UniFG(2023)
          </h2>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Olá! Sou um Desenvolvedor Júnior em ascensão com um profundo interesse em CyberSecurity e DevOps.
            </p>
            <p className="mb-4">
              Possuo conhecimento intermediário em JavaScript (NodeJS/ReactJS) e Ruby (Ruby on Rails), posso criar aplicações web eficientes e intuitivas.
            </p>
            <p className="mb-4">
              Meu entusiasmo pela segurança cibernética levou-me a obter Certificação na Cisco (Cybersecurity Essentials), visando que as aplicações que desenvolvo sejam projetadas com proteção em mente já na fundação.
            </p>
            <p className="mb-4">
              Como SysAdmin tenho experiência com servidores Linux(Ubuntu), e implantação de soluções SaaS usando CapRover além de utilização de soluções de KVM (Proxmox) para virtualização.
            </p>
            <p className="mt-4">
              Se você busca um Desenvolvedor/SysAdmin dedicado, não hesite em entrar em contato.

            </p>
            <p className="mt-4">
              Estou animado para contribuir com projetos e agregar valor.
              Ah, nas horas vagas gosto de ler sobre MindSet e Mercado Financeiro.
            </p>
          </div>
        </div>

      </div>
    </div >
  );
};

export default About;

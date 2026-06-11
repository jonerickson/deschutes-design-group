import Image from 'next/image';

import logoNext from '@/images/logos/nextjs.svg';
import logoLaravel from '@/images/logos/laravel.svg';
import logoReact from '@/images/logos/react.svg';
import logoVue from '@/images/logos/vue.svg';
import logoLivewire from '@/images/logos/livewire.svg';
import logoTypescript from '@/images/logos/typescript.svg';
import logoTailwind from '@/images/logos/tailwind.svg';
import logoPostgres from '@/images/logos/postgresql.svg';
import logoMysql from '@/images/logos/mysql.svg';
import logoAws from '@/images/logos/aws.svg';
import logoGcp from '@/images/logos/gcp.svg';
import logoKubernetes from '@/images/logos/kubernetes.svg';
import logoHelm from '@/images/logos/helm.svg';
import logoTerraform from '@/images/logos/terraform.svg';
import logoWordpress from '@/images/logos/wordpress.svg';
import logoOpenApi from '@/images/logos/openapi.svg';

const stack = [
  { name: 'Next.js', logo: logoNext },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'React', logo: logoReact },
  { name: 'Vue', logo: logoVue },
  { name: 'Livewire', logo: logoLivewire },
  { name: 'TypeScript', logo: logoTypescript },
  { name: 'Tailwind', logo: logoTailwind },
  { name: 'PostgreSQL', logo: logoPostgres },
  { name: 'MySQL', logo: logoMysql },
  { name: 'AWS', logo: logoAws },
  { name: 'Google Cloud', logo: logoGcp },
  { name: 'Kubernetes', logo: logoKubernetes },
  { name: 'Helm', logo: logoHelm },
  { name: 'Terraform', logo: logoTerraform },
  { name: 'WordPress', logo: logoWordpress },
  { name: 'OpenAPI', logo: logoOpenApi },
];

export function TechMarquee() {
  return (
    <div className='relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]'>
      <div className='flex w-max animate-scroll hover:pause motion-reduce:animate-none'>
        {[...stack, ...stack].map((tech, i) => (
          <div
            key={i}
            className='mx-8 flex items-center gap-2.5 opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-10'
          >
            <Image
              src={tech.logo}
              alt=''
              className='h-6 w-6 flex-none object-contain'
              unoptimized
            />
            <span className='font-mono text-sm text-muted-foreground'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Davi Menezes - Desenvolvedor</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Currículo profisional</p>
              <p className="mt-6 text-lg/8 text-gray-600">Sou programador com forte afinidade por tecnologia, movido pela curiosidade e pela busca constante de aprendizado . Tenho experiência no desenvolvimento de aplicações modernas, com foco em performance, usabilidade, segurança e suporte. Gosto de transformar ideias em sistemas funcionais, seja automatizando processos, construindo APIs robustas ou desenvolvendo interfaces intuitivas.
                <br />Sou objetivo, pragmático, proativo e tenho facilidade para aprender novas ferramentas e linguagens. Trabalho bem tanto de forma independente quanto em equipe, sempre com foco em entregar valor real por meio da tecnologia.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute top-1 left-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                    </svg>
                    Experiência com deploy de aplicações em nuvem:
                  </dt>
                  <br /><dd className="inline">Experiência com google cloud e infraestrutura de rede para criação de sites(registro de domínio, configuração de dns usando cloudflare e deploy de aplicações em vms usando Apache Web Server(linux) e IIS(windows)</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute top-1 left-1 size-7 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    Experiência com Suporte Para Aplicações:
                  </dt>
                  <br /><dd className="inline">
                    Atuo com suporte técnico para um sistema ERP especializado na emissão de notas fiscais e ponto de venda (PDV), utilizado por restaurantes, óticas, lojas de varejo e eventos. Desde setembro de 2023, venho lidando diariamente com o atendimento a usuários, análise de erros em produção e testes de correções, garantindo estabilidade e eficiência na operação do sistema.
                    <br />
                    <br />
                    Tenho experiência prática com ASP Clássico e Node.js no backend, além de MySQL como banco de dados principal. Compreendo bem a estrutura e o fluxo do sistema, o que me permite identificar rapidamente falhas, sugerir melhorias e interagir de forma produtiva com a equipe de desenvolvimento.
                    <br />
                    <br />
                    Meu foco é entregar soluções agéis, diretas e voltadas para a resolução eficiente dos problemas, mantendo a operação dos clientes sempre ativa e orientando os mesmos quanto ao melhor uso da ferramenta.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute top-1 left-1 size-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M5 10v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                      <path d="M6 2v.341a6 6 0 0 0-1.308.653l-.416-1.247a1 1 0 0 0-1.749-.284l-.77 1.027a1 1 0 0 0-.149.917l.803 2.407A6 6 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8c0-.771-.146-1.509-.41-2.186l.801-2.407a1 1 0 0 0-.148-.917l-.77-1.027a1 1 0 0 0-1.75.284l-.415 1.247A6 6 0 0 0 10 2.34V2a2 2 0 1 0-4 0m1 0a1 1 0 0 1 2 0v.083a6 6 0 0 0-2 0zm5.941 2.595a6 6 0 0 0-.8-.937l.531-1.595.77 1.027zM3.86 3.658a6 6 0 0 0-.8.937L2.557 3.09l.77-1.027zm.18 3.772a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.142 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.142M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Formação Acadêmica:
                  </dt>
                  <br /><dd className="inline">
                    Análise e Desenvolvimento de sistemas
                    <br />
                    Faculdade Estácio de Sá - Polo de Sergipe(04/2021 - 12/2023)
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <svg className="absolute top-1 left-1 size-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    Experiência Profissional:
                  </dt>
                  <br /><dd className="inline">
                    Idealle Sistemas
                    <br />
                    Estagiário em Suporte ao usuário (09/2023 - 01/2024)
                    <br />
                    Analista de Suporte Técnico n2 (02/2024 - Presente)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="w-3xl max-w-none sm:w-228 md:-ml-4 lg:-ml-0 mt-17">
            <div className="flex-1">
              <h1 className="font-semibold mb-4 text-2xl ">Links para contato</h1>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <a href="https://github.com/Lukuko">
                    <svg className="absolute top-1 left-1 size-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    Github
                  </a>
                </dt>
                <br />
                <dd className="inline">
                </dd>
              </div>
              <br/>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <a href="https://www.linkedin.com/in/davi-menezes-42a883239/">
                    <svg className="absolute top-1 left-1 size-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                    LinkedIn
                  </a>
                </dt>
                <br />
                <dd className="inline">
                </dd>
              </div>
              <br/>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <a href="https://api.whatsapp.com/send/?phone=557988163579&text&type=phone_number&app_absent=0">
                    <svg className="absolute top-1 left-1 size-6 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    Whatsapp para contato profissional
                  </a>
                </dt>
                <br />
                <dd className="inline">
                </dd>
              </div>
              <br/>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  Sobre o site:
                </dt>
                <br /><dd className="inline">
                  Esse site foi feito utilizando o framework React js(via NextJs) para estrutura/comportamento e Tailwindcss para estilização
                  <br />
                  O deploy do mesmo foi feito via Google Cloud
                  <br />
                 Site feito por Davi Menezes
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

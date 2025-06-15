#!/bin/bash

#clona o repo do portifolio - sempre realizar essa ação, garante que se necessário, o código fonte é atualizado
#se a pasta já existe, roda o git pull
if [ -d "portifolio" ]; then
    echo "Atualizando o repositorio"
    cd portifolio
    git pull
else
#caso não, roda o download do repositório
    echo "Baixando repositorio"
    git clone https://github.com/Lukuko/portifolio.git
    cd portifolio
fi

echo "Mudando para o diretorio"
cd portifolio
#Rodar o comando para instalar dependências(sempre é necessário fazer)
echo "Instalando Dependencias"
npm install
echo "Iniciando processo"
#Rodar o comando de deploy com o pm2
npm run deploy
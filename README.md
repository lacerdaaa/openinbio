# 🚀 OpenInBio

OpenInBio é um projeto desenvolvido com Next.js, Firebase e NextAuth, utilizando Tailwind CSS para estilização. O objetivo do OpenInBio é oferecer uma plataforma personalizada para compartilhar links de forma organizada e estilizada. 🎨

## 🛠️ Tecnologias Utilizadas

- **Next.js** ⚛️ - Framework React para renderização no servidor e otimização de páginas.
- **Firebase** 🔥 - Utilizado para autenticação, Firestore Database e Storage.
- **NextAuth.js** 🔑 - Gerenciamento de autenticação com provider do Firebase.
- **Tailwind CSS** 🎨 - Estilização moderna e responsiva.

## ✨ Funcionalidades

- ✅ Autenticação de usuários via Firebase.
- ✅ Criação e personalização de páginas de links.
- ✅ Interface responsiva e amigável.
- ✅ Integração com Firestore para armazenamento dinâmico de links.

## 🚀 Instalação e Uso

1. Clone o repositório:
   ```sh
   git clone https://github.com/lacerdaaa/openinbio.git
   cd openinbio
   ```

2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente criando um arquivo `.env.local` com os seguintes dados:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=SEU_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=SEU_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID=SEU_APP_ID
   NEXTAUTH_URL=http://localhost:3000
   AUTH_SECRET
   ```

4. Execute o projeto em ambiente de desenvolvimento:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse no navegador: [http://localhost:3000](http://localhost:3000) 🌍

## 🚢 Deploy

O OpenInBio pode ser facilmente implantado na **Vercel**. Para isso:
- 🛠️ Configure as variáveis de ambiente na Vercel.
- 🔄 Faça o deploy diretamente do repositório no GitHub.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias! 💡 Basta:
1. Fazer um fork do repositório.
2. Criar uma branch com sua feature (`git checkout -b minha-feature`).
3. Comitar suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Enviar para o repositório remoto (`git push origin minha-feature`).
5. Abrir um Pull Request. 🚀

---

💻 Desenvolvido por [oLacerdadev](https://github.com/lacerdaaa).


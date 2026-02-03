# Configuração para GitHub Pages

## Problemas Comuns e Soluções

### Tela Branca no GitHub Pages

Se o site estiver mostrando uma tela branca no GitHub Pages, siga estas etapas:

#### 1. Configure as Variáveis de Ambiente no GitHub

Vá para as configurações do seu repositório no GitHub:
1. Acesse **Settings** → **Secrets and variables** → **Actions**
2. Adicione os seguintes secrets:

```
VITE_CLERK_PUBLISHABLE_KEY=sua_chave_clerk_aqui
CLERK_SECRET_KEY=sua_chave_secreta_clerk_aqui
VITE_API_BASE_URL=https://sua-api-backend.com
```

⚠️ **IMPORTANTE**: A variável `VITE_API_BASE_URL` deve apontar para uma API backend em produção. O JSON Server local (`http://localhost:3000`) não funcionará no GitHub Pages.

#### 2. Opções para o Backend em Produção

Como o GitHub Pages serve apenas arquivos estáticos, você precisa de um backend separado:

**Opção A: JSON Server hospedado**
- Use serviços como Railway, Render ou Vercel para hospedar seu JSON Server
- Configure a URL na variável `VITE_API_BASE_URL`

**Opção B: Backend API real**
- Crie uma API com Node.js, Express, etc.
- Hospede em serviços como Railway, Render, Heroku, etc.
- Configure a URL na variável `VITE_API_BASE_URL`

**Opção C: Usar dados mockados para demo**
- Se for apenas para demonstração, pode usar dados mockados no frontend
- Remova ou modifique as chamadas de API no `App.tsx`

#### 3. Teste Local com Variáveis de Produção

Crie um arquivo `.env.production.local`:
```env
VITE_CLERK_PUBLISHABLE_KEY=sua_chave
VITE_API_BASE_URL=https://sua-api-backend.com
```

E teste com:
```bash
npm run build
npm run preview
```

#### 4. Verifique o Console do Navegador

Após fazer o deploy, abra o site no GitHub Pages e:
1. Pressione F12 para abrir as ferramentas de desenvolvedor
2. Vá para a aba "Console"
3. Procure por erros (em vermelho)
4. Os erros comuns são:
   - Falha ao carregar assets (problema com `base` no vite.config)
   - Erro de CORS (problema com a API backend)
   - Clerk key inválida (problema com as variáveis de ambiente)

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas no GitHub Secrets
- [ ] Backend/API hospedado e acessível publicamente
- [ ] `base` configurado corretamente no `vite.config.ts`
- [ ] Arquivo `404.html` presente na pasta `public`
- [ ] Workflow do GitHub Actions configurado corretamente
- [ ] Build local funcionando sem erros

## Suporte

Se ainda estiver com problemas, verifique:
1. Os logs do GitHub Actions na aba "Actions" do repositório
2. O console do navegador para erros JavaScript
3. A aba "Network" para ver quais requisições estão falhando

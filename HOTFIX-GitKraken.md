# Hotfix com GitKraken

Este documento descreve um fluxo seguro e prático para aplicar um hotfix usando o cliente GitKraken (GUI). As instruções estão em português e incluem passos opcionais em linha de comando quando útil.

## Pré-requisitos

- GitKraken instalado e configurado (autenticação com GitHub/GitLab/Bitbucket funcionando).
- Repositório clonado localmente e aberto no GitKraken.
- Conhecer a política de branches do projeto (por exemplo: `main` / `develop` / `release`).
- Ter testes rápidos para validar a correção localmente.

## Contrato mínimo do hotfix (entrada/saída)

- Entrada: bug crítico reportado em `main`/produção.
- Saída desejada: commit fix aplicado em `main` (e opcionalmente em `develop`/`release`) com PR, tag e release notes se aplicável.

## Checklist rápido antes de começar

- [ ] Garantir que não há mudanças locais não comitadas (stash se necessário).
- [ ] Atualizar `main` local (fetch + pull) para ter o estado mais recente.
- [ ] Executar testes/cheklist local mínimo.

---

## Fluxo recomendado (passo a passo no GitKraken)

1. Abrir o repositório no GitKraken.

2. Atualizar referências remotas

   - No painel esquerdo, clique em `Fetch` para buscar mudanças do remoto.
   - Abra o branch `main` e clique em `Pull` para garantir que seu `main` local está atualizado.

3. Criar uma branch de hotfix

   - A partir do `main` atual (confirme que está em sync com o remoto), clique com o botão direito sobre `main` → `Create branch`.
   - Nome sugerido: `hotfix/<descrição-curta>` (ex.: `hotfix/fix-login-500`).
   - Mantenha a branch curta e descritiva.

4. Fazer a correção localmente (edições)

   - No GitKraken, abra os arquivos relevantes no editor de sua preferência.
   - Realize as alterações necessárias para o hotfix.

5. Preparar o commit

   - No painel `Changes`, revise os arquivos alterados.
   - Use mensagens de commit claras e concisas (ex.: `hotfix: corrigir erro 500 em /api/login`).
   - Adicione um corpo de commit quando necessário (explique a causa e a solução).
   - Clique em `Stage all` e então `Commit`.

6. Push da branch de hotfix

   - Clique em `Push` para enviar a branch ao remoto.

7. Criar Pull Request (PR)

   - No GitKraken você pode criar o PR diretamente: com a branch de hotfix selecionada, clique em `Create Pull Request`.
   - Configure o alvo do PR como `main` (ou o branch de release apropriado). Adicione reviewers e descrição clara.

8. Revisão e merge

   - Aguarde aprovação e execute os checks necessários (CI).
   - Se houver conflitos, resolva localmente: faça `Checkout` no branch, use o `Resolve Conflicts` do GitKraken ou edite e finalize com commits de merge.
   - Após aprovação, faça `Merge` do PR para `main` (preferencialmente via interface do Git host ou via GitKraken se policy permitir).

9. Tag de versão (opcional)

   - Se o hotfix requer release, crie uma tag semântica (ex.: `v1.2.1`) no `main` após o merge.
   - No GitKraken, clique com o botão direito sobre o commit de merge → `Create Tag`.
   - Push da tag para o remoto.

10. Propagar o hotfix para outros branches (se necessário)

    - Se você usa `develop` ou `release` branches e precisa que o hotfix exista lá também, existem duas abordagens comuns:
      - Cherry-pick: selecione o commit do hotfix em `main`, clique com o botão direito → `Cherry Pick`, então aplique no branch de destino.
      - Merge de `main` para `develop`/`release` (depende do fluxo do projeto).

    - No GitKraken, o `Cherry Pick` é simples: checkout no branch alvo → `Cherry Pick` do commit do hotfix.

11. Limpeza

    - Após merge e verificação, delete a branch remota de hotfix para manter o repositório limpo (GitKraken tem opção `Delete branch` no PR ou no contexto da branch).

---

## Dicas práticas e boas práticas

- Faça commits pequenos e focados no hotfix (não misture com outras features).
- Escreva uma boa descrição do PR informando risco, passos para teste e rollback.
- Se houver risco, abra o hotfix diretamente contra a branch de release/produção conforme a política do projeto.
- Sempre rode os testes mínimos localmente antes do push.
- Se precisar reverter, use `git revert` no commit do merge — prefira revert ao reset em branches já publicados.

## Comandos CLI úteis (equivalente ao fluxo acima)

```powershell
# partir de main atualizado
git checkout -b hotfix/fix-login-500 main
# fazer alterações, depois:
git add .
git commit -m "hotfix: corrigir erro 500 em /api/login"
git push -u origin hotfix/fix-login-500
# criar PR no Git host (ou usar GitKraken)
```

# cherry-pick para develop (exemplo)
```powershell
git checkout develop
git fetch origin
git cherry-pick <commit-hash>
git push origin develop
```

## Resolução de conflitos (na prática)

- Use o editor visual de merge do GitKraken para revisar conflitos.
- Teste após resolver conflitos localmente antes de commitar o resultado.

## Exemplo de checklist pré-merge (colocar na descrição do PR)

- [ ] Testes unitários passaram localmente
- [ ] QA validou a correção no ambiente de staging
- [ ] Documentação/issue atualizada com o fix
- [ ] Tag criada (se aplicável)

---

Se quiser, posso:

- Adaptar este guia ao fluxo exato do seu projeto (por exemplo: nomes de branches, políticas de merge, passos de CI). 
- Gerar um checklist em formato `issue template` ou `pull_request_template`.

--
Documento gerado automaticamente — revise e ajuste conforme política do seu time.

## Fluxo rápido (Start/Finish hotfix no GitKraken)

Abaixo está o fluxo direto suportado pelo GitKraken que usa as ações `Start a hotfix` e `Finish hotfix` — cole as etapas no seu processo quando quiser um caminho mais automatizado.

■ ETAPA 1 — Criar o Hotfix no GitKraken
1. Abra o repositório no GitKraken.
2. Clique com o botão direito em `master` → `Start a hotfix`.
3. Nomeie a branch (ex: `hotfix/corrige-login`).
4. Uma nova branch será criada a partir de `master`.

■ ETAPA 2 — Fazer as alterações
1. Edite o código no seu editor.
2. No GitKraken, faça `Stage all changes`.
3. Commit: "Corrige bug no login em produção".

■ ETAPA 3 — Finalizar o Hotfix
1. Clique com o botão direito em `hotfix/nome` → `Finish hotfix`.
2. O GitKraken fará merge para `master` e `develop` (conforme política do projeto).
3. Uma tag será criada automaticamente (dependendo da configuração do GitKraken ou do seu fluxo).
4. Resolva conflitos se necessário (use o resolvedor visual do GitKraken).

■ ETAPA 4 — Enviar para o repositório remoto
1. Envie as branches e tags (linha de comando equivalente):

```powershell
git push origin master
git push origin develop
git push origin --tags
```

Nota: o GitKraken também oferece botões de `Push` para enviar branches e tags; use-os se preferir não usar CLI.

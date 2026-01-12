# Inclusão Digital para Idosos — Site Educativo

Este projeto ensina funções básicas do celular **Android** e aplicativos populares (WhatsApp, YouTube, Câmera, Galeria/Google Fotos) com foco em linguagem simples e acessibilidade.

## Estrutura do projeto

```
📁 seu-projeto/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── whatsapp-01.png
    ├── whatsapp-02.png
    ├── youtube-01.png
    ├── youtube-02.png
    ├── camera-01.png
    ├── camera-02.png
    ├── gfotos-01.png
    └── gfotos-02.png
```

## Como executar

1. Abra a pasta no **VS Code**.
2. Instale a extensão **Live Server** (Ritwick Dey) ou clique duas vezes em `index.html` para abrir no navegador.
3. Com o Live Server, clique em **Go Live** no rodapé do VS Code para servir em `http://127.0.0.1:5500`.

## Como personalizar

### Trocar vídeos
- Abra `script.js` e edite o objeto `TUTORIAIS`.
- Substitua `videoMain` (ID do YouTube) e adicione/remova itens em `videoExtras`.

### Editar textos dos tutoriais
- No mesmo objeto, ajuste os arrays `passos`, `dicas` e `links`.

### Substituir imagens
- Coloque suas capturas reais na pasta `assets/` e troque os nomes ou
  atualize os caminhos das imagens no `index.html`.
- Formato sugerido: **PNG/JPG** com proporção **16:9** (ex.: 1280×720).

### Acessibilidade
- Use os botões **A+/A−** para ajustar o tamanho da fonte.
- Ative o **Modo alto contraste** para melhorar a leitura.
- Links e botões possuem **foco visível**.

## Dicas pedagógicas para 60+
- Frases curtas e passos enumerados.
- Ícones e imagens grandes; evite jargões técnicos.
- Repetir os passos com exemplos práticos.

## Evidências para relatório acadêmico
- Faça **capturas de tela** do site funcionando e dos tutoriais.
- Registre **feedback** dos usuários (ex.: formulário simples Google Forms).
- Inclua um diagrama UML de **Caso de Uso** (Usuário → Acessa Site → Escolhe Tutorial → Aprende Função).

---

© 2026 — Projeto educativo sem fins lucrativos.

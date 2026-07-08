#!/bin/bash
# Script para publicar o site Sabor & Arte no GitHub Pages
# Execute este script em um terminal normal (fora do venv)

cd "$(dirname "$0")"

# Configurar git (se ainda não estiver)
git config --global user.name "Seu Nome" 2>/dev/null
git config --global user.email "seu@email.com" 2>/dev/null

# Inicializar repositório
git init
git checkout -b main 2>/dev/null || git checkout main
git add -A
git commit -m "Site Sabor & Arte - Restaurante"

# ⚠️ ANTES de continuar:
# 1. Vá em https://github.com/new e crie um repositório público chamado "sabor-arte"
# 2. NÃO marque "Add a README file"
# 3. SEU_USUARIO já foi substituído abaixo pelo nome de usuário do GitHub

echo ""
echo "---"
echo "⚠️  Antes de continuar, crie o repositório no GitHub:"
echo "   https://github.com/new"
echo "   Nome: sabor-arte (público, sem README)"
echo ""
echo "Depois execute:"
echo "   git remote add origin https://github.com/joaoantoniosebastiaojoi-sudo/sabor-arte.git"
echo "   git push -u origin main"
echo ""
echo "Por fim, ative o GitHub Pages:"
echo "   Settings → Pages → Source: 'Deploy from a branch'"
echo "   Branch: main, pasta: / (root)"
echo "   Seu site ficará em: https://joaoantoniosebastiaojoi-sudo.github.io/sabor-arte"
echo "---"

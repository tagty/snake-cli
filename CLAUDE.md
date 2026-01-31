# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run build    # TypeScriptをコンパイル (dist/に出力)
npm start        # ビルド済みCLIを実行
```

## Global CLI Installation

```bash
npm link         # グローバルにインストール
snake "string"   # どこからでも実行可能
npm unlink -g snake-cli  # アンインストール
```

## Features

- 変換結果は自動的にクリップボードにコピーされる（macOS/Linux/Windows対応）

## Architecture

単一ファイル構成のCLIツール。`src/index.ts`に全ロジックが含まれる。

- `toSnakeCase()`: 文字列変換のコアロジック（正規表現による段階的変換）
- `copyToClipboard()`: クリップボードへのコピー（プラットフォーム別対応）
- `main()`: CLI引数の処理とエントリーポイント

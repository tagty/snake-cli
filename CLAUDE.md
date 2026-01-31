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

## Architecture

単一ファイル構成のCLIツール。`src/index.ts`に全ロジックが含まれる。

- `toSnakeCase()`: 文字列変換のコアロジック（正規表現による段階的変換）
- `main()`: CLI引数の処理とエントリーポイント

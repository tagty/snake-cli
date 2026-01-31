# snake-cli

文字列を snake_case に変換する CLI ツール

## インストール

```bash
npm install
npm run build
npm link
```

## 使い方

```bash
snake <string>
```

## 例

```bash
snake "Hello World"       # hello_world
snake "camelCaseValue"    # camel_case_value
snake "PascalCase"        # pascal_case
snake "API Response-Code" # api_response_code
```

## 対応する入力形式

- スペース区切り
- ハイフン区切り
- camelCase
- PascalCase
- 記号は除去
- 連続するアンダースコアは1つにまとめる

## アンインストール

```bash
npm unlink -g snake-cli
```

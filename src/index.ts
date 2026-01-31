#!/usr/bin/env node

import { execSync } from 'child_process';

function toSnakeCase(input: string): string {
  return input
    // キャメルケース・パスカルケースの境界にアンダースコアを挿入
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    // 大文字が連続した後に小文字が来る場合（例: APIResponse → API_Response）
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    // スペースとハイフンをアンダースコアに変換
    .replace(/[\s-]+/g, '_')
    // 記号を除去（アンダースコアと英数字以外）
    .replace(/[^a-zA-Z0-9_]/g, '')
    // 連続するアンダースコアを1つにまとめる
    .replace(/_+/g, '_')
    // 先頭と末尾のアンダースコアを除去
    .replace(/^_|_$/g, '')
    // 小文字に変換
    .toLowerCase();
}

function showUsage(): void {
  console.log(`Usage: snake <string>

Convert a string to snake_case.

Examples:
  snake "Hello World"       → hello_world
  snake "camelCaseValue"    → camel_case_value
  snake "PascalCase"        → pascal_case
  snake "API Response-Code" → api_response_code`);
}

function copyToClipboard(text: string): void {
  const platform = process.platform;
  if (platform === 'darwin') {
    execSync('pbcopy', { input: text });
  } else if (platform === 'linux') {
    execSync('xclip -selection clipboard', { input: text });
  } else if (platform === 'win32') {
    execSync('clip', { input: text });
  }
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    showUsage();
    process.exit(1);
  }

  const input = args.join(' ');
  const result = toSnakeCase(input);
  console.log(result);
  copyToClipboard(result);
}

main();

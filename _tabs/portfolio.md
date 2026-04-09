---
layout: page
icon: fas fa-briefcase
order: 5
title: Portfolio
---

以下は、私がこれまで開発・運用してきた主なプロジェクトの概要です。

<style>
.portfolio-card {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(128, 128, 128, 0.2);
  background-color: rgba(128, 128, 128, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.portfolio-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.portfolio-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
}
.portfolio-card ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.portfolio-card li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
.portfolio-badge {
  display: inline-block;
  padding: 0.25em 0.5em;
  font-size: 0.85em;
  font-weight: 600;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
}
.tech-stack {
  margin-bottom: 1rem;
}
.project-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.project-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: rgba(128, 128, 128, 0.1);
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(128, 128, 128, 0.3);
  transition: background-color 0.2s ease;
}
.project-links a:hover {
  background-color: rgba(128, 128, 128, 0.2);
  text-decoration: none;
}
</style>

<div class="portfolio-card">
  <h3>1. 日韓多言語対応 モバイルWeb招待状 (Wedding Invitation Project)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">Next.js</span>
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">TypeScript</span>
    <span class="portfolio-badge">Tailwind CSS</span>
    <span class="portfolio-badge">Framer Motion</span>
    <span class="portfolio-badge">i18next</span>
    <span class="portfolio-badge">Vercel</span>
  </div>
  <ul>
    <li><strong>✨ 概要:</strong> 日本と韓国、両国のゲストに向けて結婚式に招くために設計・開発したモバイルWeb招待状です。アクセスしたユーザーの環境や選択した言語（日本語・韓国語）に合わせてランディングページやUIが動的に変化します。両国の文化的な違いを反映した条件付きレンダリングロジックを考え実装しました。</li>
    <li><strong>💡 成果・技術的なポイント:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
        <li><strong>多言語アーキテクチャ(i18n):</strong> ReactとTypeScriptを組み合わせることで型の安全性を確保しつつ、状態管理を活用したスムーズな多言語切り替えを実現しました。また、言語ファイルを独立して管理することで、将来的な言語追加にも柔軟に対応できるアーキテクチャを構築しました。</li>
        <li><strong>カスタマイズされたUXロジック設計:</strong> 言語の選択によって提供する情報（例: 日本語環境では韓国文化だけの部分を非表示にする等）を制御するロジックを、コンポーネント分離を用いて効率的に設計し、コードの保守性を高めました。</li>
        <li><strong>グローバルインフラの活用:</strong> Vercelプラットフォームを通じて継続的デプロイ（CI/CD）パイプラインを構築し、どの国からアクセスしても高速なレンダリング速度を保証しました。</li>
      </ul>
    </li>
  </ul>
  <div class="project-links">
    <a href="https://chei-site.vercel.app/" target="_blank"><i class="fas fa-globe"></i> 実際のWeb招待状サイト</a>
    <a href="https://github.com/saijink4i/chei-site" target="_blank"><i class="fab fa-github"></i> GitHub リポジトリ (Source Code)</a>
  </div>
</div>

<div class="portfolio-card">
  <h3>2. 部品発注・管理・廃棄ワークフローシステム (PLMS)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">Java 17</span>
    <span class="portfolio-badge">Spring Boot 3.x</span>
    <span class="portfolio-badge">Spring Data JPA</span>
    <span class="portfolio-badge">Thymeleaf</span>
    <span class="portfolio-badge">Tailwind CSS</span>
    <span class="portfolio-badge">PostgreSQL</span>
    <span class="portfolio-badge">Docker</span>
    <span class="portfolio-badge">Railway</span>
  </div>
  <ul>
    <li><strong>✨ 概要:</strong> 製造現場やメンテナンス業務における部品の「発注・入庫・廃棄」のライフサイクルと在庫・計上を一元管理する本格的なMVC構造のWebシステムです。既存のレガシーな処理をモダンなオブジェクト指向設計へと再構築し、データ整合性とスケーラビリティを確保しました。</li>
    <li><strong>💡 成果・技術的なポイント:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
        <li><strong>PDF動的生成と堅牢なバックエンド設計:</strong> Spring Boot環境固有のリソース参照問題を解決し、サーバーサイドでの動的なPDF帳票（精算書）生成と一括ZIP圧縮機能を構築しました。</li>
        <li><strong>動的で安全なUI制御:</strong> Thymeleaf上でステータスに応じた条件計算を行い、ユーザーの誤操作（発注済みデータの編集など）を防ぐ直感的で堅牢なUIを実装しました。</li>
        <li><strong>環境の完全分離とCI/CD:</strong> DB接続などの機密情報を環境変数化して分離し、Dockerによるコンテナ化およびRailwayを用いたシームレスな継続的デプロイを実現しました。</li>
      </ul>
    </li>
  </ul>
  <div class="project-links">
    <a href="https://github.com/saijink4i/legacy-to-modern" target="_blank"><i class="fab fa-github"></i> GitHub リポジトリ (Source Code)</a>
  </div>
</div>

<!-- 🚨 開発進行中 (Work in Progress) 🚨
<div class="portfolio-card">
  <h3>3. ゲームデータベースおよびWikiサービス (準備中)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">Next.js</span>
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Python</span>
  </div>
  <ul>
    <li><strong>✨ 概要:</strong> 膨大なゲームデータを自動抽出してWebに表示するWiki・攻略サイトです。</li>
    <li><strong>💡 成果:</strong> Pythonスクリプトの自動化およびNext.jsを用いたフロントエンド最適化を構築。</li>
  </ul>
</div>

<div class="portfolio-card">
  <h3>4. 日本語アレルギーカードジェネレーター (準備中)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Local Storage</span>
  </div>
  <ul>
    <li><strong>✨ 概要:</strong> 日本への旅行者が現地の飲食店等でスムーズにアレルギー情報を伝えられるようにカスタマイズされたWebアプリです。</li>
    <li><strong>💡 成果:</strong> Local Storageを活用した状態保存機能と直感的なUI設計。</li>
  </ul>
</div>
-->

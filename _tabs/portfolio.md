---
layout: page
icon: fas fa-briefcase
order: 5
title: Portfolio
---

다음은 제가 그동안 진행해 온 주요 프로젝트들의 개요입니다.

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
.project-links a {
  display: inline-block;
  margin-top: 1rem;
  font-weight: bold;
}
</style>

<div class="portfolio-card">
  <h3>1. 게임 데이터베이스 및 위키 서비스</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">Next.js</span>
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Python</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> Limbus Company 게임의 방대한 데이터를 자동으로 추출하여 웹에 보여주는 위키 및 공략 사이트입니다.</li>
    <li><strong>💡 성과:</strong> 수천 개의 게임 에셋과 텍스트를 파이썬 스크립트로 자동화하여 추출하고, 이를 Next.js 기반의 프론트엔드로 빠르고 검색 가능하게 구축하여 유저 편의성을 높였습니다.</li>
  </ul>
  <div class="project-links">
    <a href="#" target="_blank"><i class="fas fa-link"></i> 프로젝트 보러가기 / GitHub URL</a>
  </div>
</div>

<div class="portfolio-card">
  <h3>2. 모바일/웹 청첩장 사이트 (다국어 지원)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">TypeScript</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> 한국어와 일본어를 동시 지원하며, 접속자의 환경 및 선택 언어에 따라 표시되는 정보(계좌, 안내 문구 등)가 달라지는 커스텀 모바일 청첩장 기능입니다.</li>
    <li><strong>💡 성과:</strong> 한국과 일본 하객들의 문화적 차이를 고려해 언어별 맞춤형 컴포넌트 렌더링을 구현하고, 부드러운 애니메이션과 세련된 디자인을 제공했습니다.</li>
  </ul>
  <div class="project-links">
    <a href="#" target="_blank"><i class="fas fa-link"></i> 프로젝트 보러가기 / GitHub URL</a>
  </div>
</div>

<div class="portfolio-card">
  <h3>3. 일본어 알레르기 카드 발생기</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Local Storage</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> 일본 여행 시 식당 점원에게 보여줄 수 있도록, 자신이 가진 알레르기 유발 식재료를 선택하여 일본어 경고 문구로 변환해주는 웹 앱입니다.</li>
    <li><strong>💡 성과:</strong> 사용자의 선택 항목을 브라우저에 저장(Local Storage)하여 앱을 다시 켜도 정보가 유지되게 하였으며, 직관적인 UI로 여행객들의 소통 부재 문제를 해결했습니다.</li>
  </ul>
  <div class="project-links">
    <a href="#" target="_blank"><i class="fas fa-link"></i> 프로젝트 보러가기 / GitHub URL</a>
  </div>
</div>

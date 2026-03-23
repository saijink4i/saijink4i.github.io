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
  <h3>1. 한·일 다국어 지원 모바일 웹 청첩장 (Multi-language Wedding Invitation)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">TypeScript</span>
    <span class="portfolio-badge">Vercel</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> 한국과 일본 양국의 하객들을 위해 설계된 커스텀 모바일 웹 청첩장입니다. 접속자의 환경 및 선택 언어(한국어/일본어)에 맞추어 랜딩 페이지와 UI가 동적으로 변화하며, 각국의 문화적 차이를 반영한 조건부 렌더링(Conditional Rendering) 로직을 적용하여 최적화된 사용자 경험(UX)을 제공합니다.</li>
    <li><strong>💡 성과 및 기술적 주안점:</strong>
      <ul style="margin-top: 0.5rem; padding-left: 1.5rem; list-style-type: disc;">
        <li><strong>다국어 아키텍처(i18n):</strong> React와 TypeScript를 결합해 타입 안정성을 확보하면서도, 상태 관리(State Management)를 활용한 매끄러운 다국어 스위칭을 구현했습니다.</li>
        <li><strong>맞춤형 UX 로직 설계:</strong> 언어 선택에 따라 완전히 다른 정보(예: 일본어 환경에서는 축의금 계좌 번호 노출 숨김 등)를 제공하는 로직을 효율적인 컴포넌트 분리로 설계하여 코드 유지보수성을 극대화했습니다.</li>
        <li><strong>글로벌 인프라 활용:</strong> Vercel 플랫폼을 통해 지속적 배포(CI/CD) 파이프라인을 구축하고 어느 국가에서든 빠른 렌더링 속도를 보장합니다.</li>
      </ul>
    </li>
  </ul>
  <div class="project-links">
    <a href="https://chei-site.vercel.app/" target="_blank"><i class="fas fa-globe"></i> Live Demo (실제 동작 사이트)</a>
    <a href="https://github.com/saijink4i/chei-site" target="_blank"><i class="fab fa-github"></i> GitHub Repository (소스 코드)</a>
  </div>
</div>

<!-- 🚨 개발 진행 중 (Work in Progress) 임시 주석 처리 구역 🚨
<div class="portfolio-card">
  <h3>2. 게임 데이터베이스 및 위키 서비스 (준비 중)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">Next.js</span>
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Python</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> 방대한 데이터를 자동으로 추출하여 웹에 보여주는 위키 및 공략 사이트입니다.</li>
    <li><strong>💡 성과:</strong> 파이썬 스크립트 자동화 및 Next.js 프론트엔드 최적화 구축.</li>
  </ul>
</div>

<div class="portfolio-card">
  <h3>3. 일본어 알레르기 카드 발생기 (준비 중)</h3>
  <div class="tech-stack">
    <span class="portfolio-badge">React</span>
    <span class="portfolio-badge">Local Storage</span>
  </div>
  <ul>
    <li><strong>✨ 개요:</strong> 일본 여행 시 식당 점원에게 보여줄 수 있는 커스텀 알레르기 안내 웹 앱입니다.</li>
    <li><strong>💡 성과:</strong> Local Storage를 활용한 상태 보존 및 직관적인 UI 설계.</li>
  </ul>
</div>
-->

// ═══════════════════════════════════════════════════════════════
// UNIVERSAL TIMELINE — RENDERING ENGINE
// Parses timelineData.js and renders interactive vertical timeline
// ═══════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ─── DOMAIN CONFIG ───
  const DOMAIN_META = {
    cosmology:          { label: 'Cosmology',       color: '#a78bfa' },
    geology:            { label: 'Geology',          color: '#f97316' },
    biology:            { label: 'Biology',          color: '#4ecdc4' },
    geography:          { label: 'Geography',        color: '#22d3ee' },
    science_tech:       { label: 'Sci & Tech',       color: '#42a5f5' },
    science:            { label: 'Science',          color: '#60a5fa' },
    art_culture:        { label: 'Arts & Culture',   color: '#fbbf24' },
    philosophy_religion:{ label: 'Philosophy',       color: '#e879f9' },
    history:            { label: 'History',           color: '#f472b6' },
    economics_trade:    { label: 'Trade',            color: '#34d399' },
    economics:          { label: 'Economics',        color: '#2dd4bf' },
    constitutional_law: { label: 'Law',              color: '#fb923c' },
    military:           { label: 'Military',          color: '#ef4444' },
    politics:           { label: 'Politics',          color: '#ff6b9d' },
  };

  // ─── STATE ───
  let allEvents = [];
  let allEpochs = {};
  let activeDomains = new Set(Object.keys(DOMAIN_META));
  let searchQuery = '';

  // ─── PARSE DATA ───
  function parseData() {
    if (typeof timelineData === 'undefined') {
      console.error('timelineData.js not loaded');
      return;
    }

    timelineData.forEach(block => {
      // Collect epochs
      if (block.metadata && block.metadata.epochs) {
        block.metadata.epochs.forEach(ep => {
          allEpochs[ep.id] = ep;
        });
      }
      // Collect events
      if (block.events) {
        block.events.forEach(evt => {
          allEvents.push(evt);
        });
      }
    });

    // Sort by sort_year
    allEvents.sort((a, b) => a.sort_year - b.sort_year);
  }

  // ─── BUILD FILTERS ───
  function buildFilters() {
    const container = document.getElementById('filters');
    const usedDomains = new Set();
    allEvents.forEach(e => e.domains.forEach(d => usedDomains.add(d)));

    // "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.id = 'filter-all';
    allBtn.innerHTML = '<span class="dot" style="background:var(--accent)"></span>All';
    allBtn.style.setProperty('--filter-color', 'var(--accent)');
    allBtn.addEventListener('click', () => {
      const allActive = activeDomains.size === usedDomains.size;
      if (allActive) {
        activeDomains.clear();
      } else {
        activeDomains = new Set(Object.keys(DOMAIN_META));
      }
      syncFilterButtons();
      applyFilters();
    });
    container.appendChild(allBtn);

    // Individual domain buttons
    Object.keys(DOMAIN_META).forEach(key => {
      if (!usedDomains.has(key)) return;
      const meta = DOMAIN_META[key];
      const btn = document.createElement('button');
      btn.className = 'filter-btn active';
      btn.dataset.domain = key;
      btn.style.setProperty('--filter-color', meta.color);
      btn.innerHTML = `<span class="dot" style="background:${meta.color}"></span>${meta.label}`;
      btn.addEventListener('click', () => {
        if (activeDomains.has(key)) {
          activeDomains.delete(key);
        } else {
          activeDomains.add(key);
        }
        syncFilterButtons();
        applyFilters();
      });
      container.appendChild(btn);
    });
  }

  function syncFilterButtons() {
    const btns = document.querySelectorAll('.filter-btn[data-domain]');
    const allBtn = document.getElementById('filter-all');
    const totalDomains = btns.length;
    let activeCount = 0;

    btns.forEach(btn => {
      const d = btn.dataset.domain;
      const isActive = activeDomains.has(d);
      btn.classList.toggle('active', isActive);
      btn.classList.toggle('dimmed', !isActive);
      if (isActive) activeCount++;
    });

    if (allBtn) {
      allBtn.classList.toggle('active', activeCount === totalDomains);
      allBtn.classList.toggle('dimmed', activeCount === 0);
    }
  }

  // ─── FORMAT YEAR ───
  function formatYear(sortYear, yearEra) {
    if (yearEra) return yearEra;
    if (sortYear <= -1000000000) return (Math.abs(sortYear) / 1e9).toFixed(1) + ' Bya';
    if (sortYear <= -1000000) return (Math.abs(sortYear) / 1e6).toFixed(0) + ' Mya';
    if (sortYear <= -10000) return (Math.abs(sortYear) / 1000).toFixed(0) + 'K BCE';
    if (sortYear < 0) return Math.abs(sortYear) + ' BCE';
    return sortYear + ' CE';
  }

  // Short year for the left column
  function shortYear(sortYear) {
    if (sortYear <= -1000000000) return (Math.abs(sortYear) / 1e9).toFixed(1) + ' Bya';
    if (sortYear <= -1000000) return (Math.abs(sortYear) / 1e6).toFixed(0) + ' Mya';
    if (sortYear <= -10000) return (Math.abs(sortYear) / 1000).toFixed(0) + 'K BCE';
    if (sortYear < 0) return Math.abs(sortYear) + ' BCE';
    return sortYear + ' CE';
  }

  // ─── RENDER TIMELINE ───
  function renderTimeline() {
    const container = document.getElementById('timeline');
    container.innerHTML = '';

    // Group events by epoch_id
    const epochGroups = {};
    const epochOrder = [];

    allEvents.forEach(evt => {
      const eid = evt.epoch_id;
      if (!epochGroups[eid]) {
        epochGroups[eid] = [];
        epochOrder.push(eid);
      }
      epochGroups[eid].push(evt);
    });

    epochOrder.forEach(epochId => {
      const epoch = allEpochs[epochId];
      const events = epochGroups[epochId];
      if (!epoch || !events.length) return;

      const section = document.createElement('section');
      section.className = 'epoch';
      section.dataset.epochId = epochId;

      // Epoch header
      const header = document.createElement('div');
      header.className = 'epoch__header';
      header.innerHTML = `
        <div class="epoch__color" style="background:${epoch.color}"></div>
        <span class="epoch__label" style="color:${epoch.color}">${epoch.label}</span>
        <span class="epoch__count">${events.length}</span>
        <span class="epoch__range">${epoch.start_year !== undefined ? formatYear(epoch.start_year) : (epoch.start || '')} → ${epoch.end_year !== undefined ? formatYear(epoch.end_year) : (epoch.end || '')}</span>
        <span class="epoch__toggle">▼</span>
      `;
      header.addEventListener('click', () => section.classList.toggle('collapsed'));
      section.appendChild(header);

      // Events container
      const eventsDiv = document.createElement('div');
      eventsDiv.className = 'epoch__events';

      events.forEach(evt => {
        // Row
        const row = document.createElement('div');
        row.className = 'event-row';
        row.dataset.eventId = evt.id;
        row.dataset.domains = (evt.domains || []).join(',');
        row.style.setProperty('--epoch-color', epoch.color);

        const domainsHTML = (evt.domains || []).map(d => {
          const m = DOMAIN_META[d] || { label: d, color: '#666' };
          return `<span class="domain-chip" style="border-color:${m.color}33;color:${m.color}">
            <span class="dot" style="background:${m.color}"></span>${m.label}
          </span>`;
        }).join('');

        row.innerHTML = `
          <div class="event-year">${shortYear(evt.sort_year)}</div>
          <div class="event-summary">
            <div class="event-title">${escHTML(evt.event_title)}</div>
            <div class="event-domains">${domainsHTML}</div>
          </div>
        `;

        // Detail panel
        const detail = document.createElement('div');
        detail.className = 'event-detail';
        detail.innerHTML = buildDetailHTML(evt);

        row.addEventListener('click', () => {
          const wasOpen = row.classList.contains('open');
          row.classList.toggle('open');
          if (!wasOpen) {
            // Scroll into view if needed
            setTimeout(() => {
              const rect = detail.getBoundingClientRect();
              if (rect.bottom > window.innerHeight) {
                detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }
            }, 50);
          }
        });

        eventsDiv.appendChild(row);
        eventsDiv.appendChild(detail);
      });

      section.appendChild(eventsDiv);
      container.appendChild(section);
    });

    updateCounter();
  }

  function buildDetailHTML(evt) {
    let html = '';

    // Date / Era
    if (evt.year_or_era) {
      html += `<div class="detail-section">
        <div class="detail-label">📅 Date / Era</div>
        <div class="detail-text" style="font-family:var(--mono);color:var(--accent2);font-size:0.72rem">${escHTML(evt.year_or_era)}</div>
      </div>`;
    }

    // Description
    if (evt.factual_description) {
      html += `<div class="detail-section">
        <div class="detail-label">📋 Description</div>
        <div class="detail-text">${escHTML(evt.factual_description)}</div>
      </div>`;
    }

    // Region
    if (evt.region) {
      html += `<div class="detail-section">
        <div class="detail-label">🌍 Region</div>
        <div class="detail-region">📍 ${escHTML(evt.region)}</div>
      </div>`;
    }

    // Parallel Events
    if (evt.parallel_events && evt.parallel_events.length > 0) {
      html += `<div class="detail-section">
        <div class="detail-label">⚡ Parallel Events</div>`;
      evt.parallel_events.forEach(pe => {
        html += `<div class="detail-parallel">
          <div class="detail-parallel__region">${escHTML(pe.region)}</div>
          <div class="detail-parallel__text">${escHTML(pe.description)}</div>
        </div>`;
      });
      html += `</div>`;
    }

    // Systemic Insight
    if (evt.systemic_insight) {
      html += `<div class="detail-section">
        <div class="detail-label">💡 Systemic Insight</div>
        <div class="detail-insight">${escHTML(evt.systemic_insight)}</div>
      </div>`;
    }

    return html;
  }

  function escHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ─── SEARCH ───
  function setupSearch() {
    const input = document.getElementById('searchInput');
    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        searchQuery = input.value.trim().toLowerCase();
        applyFilters();
      }, 200);
    });
  }

  // ─── APPLY FILTERS ───
  function applyFilters() {
    const rows = document.querySelectorAll('.event-row');
    let visibleCount = 0;

    rows.forEach(row => {
      const detail = row.nextElementSibling;
      const domains = (row.dataset.domains || '').split(',');
      const domainMatch = domains.some(d => activeDomains.has(d));

      let searchMatch = true;
      if (searchQuery) {
        const text = (row.textContent + ' ' + (detail ? detail.textContent : '')).toLowerCase();
        searchMatch = text.includes(searchQuery);
      }

      const visible = domainMatch && searchMatch;
      row.classList.toggle('hidden', !visible);

      if (!visible && row.classList.contains('open')) {
        row.classList.remove('open');
      }

      if (visible) visibleCount++;
    });

    // Hide empty epochs
    document.querySelectorAll('.epoch').forEach(epoch => {
      const visibleRows = epoch.querySelectorAll('.event-row:not(.hidden)');
      epoch.style.display = visibleRows.length > 0 ? '' : 'none';
    });

    // Update counter
    const countEl = document.getElementById('searchCount');
    if (searchQuery) {
      countEl.textContent = visibleCount + ' found';
    } else {
      countEl.textContent = '';
    }
    updateCounter(visibleCount);
  }

  function updateCounter(count) {
    const el = document.getElementById('eventCounter');
    const total = allEvents.length;
    if (count !== undefined && count !== total) {
      el.textContent = `${count} / ${total} events`;
    } else {
      el.textContent = `${total} events`;
    }
  }

  // ─── CONTROLS ───
  function setupControls() {
    // Collapse all
    document.getElementById('btnCollapseAll').addEventListener('click', () => {
      document.querySelectorAll('.event-row.open').forEach(r => r.classList.remove('open'));
    });

    // Back to top
    document.getElementById('btnTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Sticky shadow
    const controls = document.getElementById('controls');
    const observer = new IntersectionObserver(
      ([e]) => controls.classList.toggle('scrolled', !e.isIntersecting),
      { threshold: [1] }
    );
    observer.observe(document.getElementById('header'));
  }

  // ─── INIT ───
  function init() {
    parseData();
    buildFilters();
    renderTimeline();
    setupSearch();
    setupControls();

    // Keyboard shortcut: Escape to clear search
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const input = document.getElementById('searchInput');
        if (document.activeElement === input) {
          input.value = '';
          searchQuery = '';
          applyFilters();
          input.blur();
        }
      }
      // Ctrl+F or / to focus search
      if ((e.key === '/' && !e.ctrlKey && document.activeElement.tagName !== 'INPUT') ||
          (e.key === 'f' && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

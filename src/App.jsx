import { useState } from 'react';
import { SECTIONS, QUIZ, MODULE_TITLE, MODULE_REF, SITE, VERSION } from './data/config';
import './App.css';

const PRIMARY = '#08488D';
const SECONDARY = '#EC1C24';
const ACCENT = '#53BF96';

// ── Logo (base64 via URL) ─────────────────────────────────────────────────────
const LOGO = '/logo.png';

// ── Content renderers ─────────────────────────────────────────────────────────
function ContentBlock({ block }) {
  switch (block.type) {
    case 'text':
      return <p style={{ lineHeight: 1.7, color: '#333', margin: '0 0 14px' }}>{block.body}</p>;

    case 'list':
      return (
        <ul style={{ paddingLeft: 20, margin: '0 0 14px', color: '#333', lineHeight: 1.8 }}>
          {block.items.map((item, i) => <li key={i} style={{ marginBottom: 4 }}>{item}</li>)}
        </ul>
      );

    case 'callout': {
      const styles = {
        warning: { bg: '#FFF8E1', border: '#F59E0B', icon: '⚠️' },
        danger:  { bg: '#FEF2F2', border: SECONDARY,  icon: '🚫' },
        info:    { bg: '#EFF6FF', border: PRIMARY,     icon: 'ℹ️' },
      };
      const s = styles[block.variant] || styles.info;
      return (
        <div style={{ background: s.bg, borderLeft: `4px solid ${s.border}`, borderRadius: 6, padding: '12px 16px', margin: '0 0 16px', display: 'flex', gap: 10 }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>{s.icon}</span>
          <p style={{ margin: 0, color: '#333', lineHeight: 1.6, fontSize: 14 }}>{block.body}</p>
        </div>
      );
    }

    case 'hazard-cards':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 12, margin: '0 0 16px' }}>
          {block.items.map((h, i) => (
            <div key={i} style={{ background: '#FEF2F2', border: `1px solid ${SECONDARY}30`, borderRadius: 8, padding: '14px 16px' }}>
              <div style={{ fontWeight: 700, color: SECONDARY, marginBottom: 6, fontSize: 14 }}>⚠️ {h.title}</div>
              <p style={{ margin: 0, fontSize: 13, color: '#444', lineHeight: 1.6 }}>{h.detail}</p>
            </div>
          ))}
        </div>
      );

    case 'ppe-table':
      return (
        <div style={{ overflowX: 'auto', margin: '0 0 16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: PRIMARY }}>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>PPE Item</th>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>When Required</th>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'center' }}>Mandatory</th>
              </tr>
            </thead>
            <tbody>
              {block.items.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f8f9fa' : '#fff', borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600, color: '#333' }}>{row.ppe}</td>
                  <td style={{ padding: '10px 12px', color: '#555' }}>{row.when}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontSize: 18 }}>{row.mandatory ? '✅' : '⬜'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'settings-table':
      return (
        <div style={{ overflowX: 'auto', margin: '0 0 16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: PRIMARY }}>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>Machine</th>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>Temperature</th>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>Pressure</th>
                <th style={{ color: '#fff', padding: '10px 12px', textAlign: 'left' }}>Dwell Time</th>
              </tr>
            </thead>
            <tbody>
              {block.items.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f8f9fa' : '#fff', borderBottom: '1px solid #e9ecef' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600, color: '#333' }}>{row.machine}</td>
                  <td style={{ padding: '10px 12px', color: '#555' }}>{row.temp}</td>
                  <td style={{ padding: '10px 12px', color: '#555' }}>{row.pressure}</td>
                  <td style={{ padding: '10px 12px', color: '#555' }}>{row.dwell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'checklist':
      return (
        <div style={{ margin: '0 0 16px' }}>
          {block.items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 12px', background: i % 2 === 0 ? '#f8f9fa' : '#fff', borderRadius: 6, marginBottom: 4 }}>
              <span style={{ color: ACCENT, fontSize: 18, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 14, color: '#333', lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      );

    case 'steps':
      return (
        <div style={{ margin: '0 0 16px' }}>
          {block.items.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: PRIMARY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{step.step}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: PRIMARY, marginBottom: 4, fontSize: 14 }}>{step.title}</div>
                <p style={{ margin: 0, fontSize: 14, color: '#444', lineHeight: 1.6 }}>{step.detail}</p>
                {step.warning && (
                  <div style={{ marginTop: 8, background: '#FEF2F2', borderLeft: `3px solid ${SECONDARY}`, borderRadius: 4, padding: '8px 12px', fontSize: 13, color: '#b91c1c' }}>
                    ⚠️ {step.warning}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case 'emergency-cards':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16, margin: '0 0 16px' }}>
          {block.items.map((card, i) => (
            <div key={i} style={{ background: '#fff', border: `2px solid ${SECONDARY}`, borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ background: SECONDARY, color: '#fff', fontWeight: 700, fontSize: 14, padding: '10px 14px' }}>🚨 {card.title}</div>
              <ol style={{ margin: 0, padding: '12px 14px 12px 30px', color: '#333', fontSize: 13, lineHeight: 1.7 }}>
                {card.steps.map((s, j) => <li key={j} style={{ marginBottom: 4 }}>{s}</li>)}
              </ol>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ── Quiz component ────────────────────────────────────────────────────────────
function Quiz({ onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = QUIZ.filter(q => answers[q.id] === q.correct).length;
  const passed = score >= Math.ceil(QUIZ.length * 0.75);

  function handleSubmit() {
    if (Object.keys(answers).length < QUIZ.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setSubmitted(true);
    if (passed) onComplete(score, QUIZ.length);
  }

  return (
    <div>
      <div style={{ background: '#EFF6FF', border: `1px solid ${PRIMARY}40`, borderRadius: 8, padding: '14px 16px', marginBottom: 24, fontSize: 14, color: '#333' }}>
        <strong>📝 Knowledge Check</strong> — {QUIZ.length} questions. You need {Math.ceil(QUIZ.length * 0.75)} correct to pass (75%). Answer all questions before submitting.
      </div>

      {QUIZ.map((q, qi) => {
        const answered = answers[q.id] !== undefined;
        const correct = answers[q.id] === q.correct;
        return (
          <div key={q.id} style={{ marginBottom: 28, background: submitted ? (correct ? '#F0FDF4' : '#FEF2F2') : '#fff', border: `1px solid ${submitted ? (correct ? '#86efac' : '#fca5a5') : '#e5e7eb'}`, borderRadius: 10, padding: '18px 20px' }}>
            <div style={{ fontWeight: 600, color: '#111', marginBottom: 14, fontSize: 15 }}>
              Q{qi + 1}. {q.question}
              {submitted && <span style={{ marginLeft: 10, fontSize: 14 }}>{correct ? '✅' : '❌'}</span>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.options.map((opt, oi) => {
                let bg = '#f8f9fa', border = '#e5e7eb', color = '#333';
                if (submitted) {
                  if (oi === q.correct) { bg = '#dcfce7'; border = '#86efac'; color = '#166534'; }
                  else if (oi === answers[q.id] && !correct) { bg = '#fee2e2'; border = '#fca5a5'; color = '#991b1b'; }
                } else if (answers[q.id] === oi) {
                  bg = '#dbeafe'; border = PRIMARY; color = PRIMARY;
                }
                return (
                  <button key={oi} disabled={submitted} onClick={() => setAnswers(a => ({ ...a, [q.id]: oi }))}
                    style={{ background: bg, border: `2px solid ${border}`, borderRadius: 8, padding: '10px 14px', textAlign: 'left', cursor: submitted ? 'default' : 'pointer', color, fontSize: 14, transition: 'all 0.15s' }}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div style={{ marginTop: 12, background: '#f1f5f9', borderRadius: 6, padding: '10px 12px', fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
                <strong>Explanation:</strong> {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button onClick={handleSubmit} style={{ background: PRIMARY, color: '#fff', border: 'none', borderRadius: 8, padding: '14px 32px', fontSize: 16, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
          Submit Answers
        </button>
      ) : (
        <div style={{ textAlign: 'center', padding: '24px', background: passed ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, border: `2px solid ${passed ? ACCENT : SECONDARY}` }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>{passed ? '🎉' : '📚'}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: passed ? '#166534' : SECONDARY, marginBottom: 8 }}>
            {score}/{QUIZ.length} — {passed ? 'Pass' : 'Not yet passed'}
          </div>
          <p style={{ color: '#555', margin: '0 0 16px' }}>
            {passed ? 'Well done. Your completion will be recorded.' : `You need ${Math.ceil(QUIZ.length * 0.75)} correct to pass. Please review the sections above and try again.`}
          </p>
          {!passed && (
            <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{ background: PRIMARY, color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
              Retry Quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── Completion form ───────────────────────────────────────────────────────────
function CompletionForm({ score, total }) {
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    if (!name.trim()) { setError('Please enter your full name.'); return; }
    setSending(true);
    setError('');
    const completedAt = new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' });
    try {
      const res = await fetch('/api/send-completion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), completedAt, score: `${score}/${total}`, moduleTitle: MODULE_TITLE }),
      });
      if (!res.ok) throw new Error('Server error');
      setSent(true);
    } catch {
      setError('Could not send completion record. Please let your supervisor know you have completed this training.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '32px 20px' }}>
        <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
        <h2 style={{ color: PRIMARY, marginBottom: 8 }}>Training Complete</h2>
        <p style={{ color: '#555', fontSize: 15 }}>Your completion has been recorded and sent to the QHSE Representative. Thank you, <strong>{name}</strong>.</p>
        <div style={{ marginTop: 20, background: '#f8f9fa', borderRadius: 8, padding: '14px 18px', fontSize: 13, color: '#666', maxWidth: 420, margin: '20px auto 0' }}>
          <strong>Ref:</strong> {MODULE_REF}<br />
          <strong>Version:</strong> {VERSION}<br />
          <strong>Site:</strong> {SITE}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto' }}>
      <div style={{ background: '#F0FDF4', border: `1px solid ${ACCENT}`, borderRadius: 10, padding: '20px', marginBottom: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <h3 style={{ color: '#166534', margin: '0 0 6px' }}>Quiz passed — {score}/{total}</h3>
        <p style={{ color: '#555', margin: 0, fontSize: 14 }}>Enter your full name below to record your completion.</p>
      </div>
      <label style={{ display: 'block', fontWeight: 600, color: '#333', marginBottom: 8 }}>Full name</label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="e.g. Jane Smith"
        style={{ width: '100%', padding: '12px 14px', fontSize: 15, borderRadius: 8, border: '2px solid #d1d5db', boxSizing: 'border-box', marginBottom: 8 }}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      {error && <p style={{ color: SECONDARY, fontSize: 13, margin: '0 0 12px' }}>{error}</p>}
      <button onClick={handleSubmit} disabled={sending} style={{ width: '100%', background: PRIMARY, color: '#fff', border: 'none', borderRadius: 8, padding: '14px', fontSize: 16, fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.7 : 1, marginTop: 8 }}>
        {sending ? 'Recording…' : 'Record Completion'}
      </button>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [currentSection, setCurrentSection] = useState(null);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [quizPassed, setQuizPassed] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const allSectionsRead = completedSections.size >= SECTIONS.length;

  function goToSection(idx) {
    setCurrentSection(idx);
    setShowQuiz(false);
    setShowCompletion(false);
    setCompletedSections(prev => new Set([...prev, idx]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleQuizComplete(score, total) {
    setQuizPassed(true);
    setQuizScore({ score, total });
    setShowCompletion(true);
  }

  // ── Home screen ──
  if (currentSection === null && !showQuiz && !showCompletion) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8', fontFamily: 'Calibri, Arial, sans-serif' }}>
        {/* Header */}
        <div style={{ background: PRIMARY, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={LOGO} alt="Caswells Group" style={{ height: 44 }} />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #05325f 100%)`, color: '#fff', padding: '36px 24px', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 8px', fontSize: 'clamp(22px,5vw,32px)', fontWeight: 700 }}>{MODULE_TITLE}</h1>
          <p style={{ margin: '0 0 4px', opacity: 0.85, fontSize: 15 }}>{SITE}</p>
          <p style={{ margin: 0, opacity: 0.65, fontSize: 13 }}>{MODULE_REF} · {VERSION}</p>
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto', padding: '28px 16px' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', marginBottom: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p style={{ margin: 0, color: '#444', lineHeight: 1.7, fontSize: 15 }}>
              This training module covers the safe operation of heat seal press equipment at the Billingham site.
              Work through all {SECTIONS.length} sections, then complete the knowledge check to record your completion.
            </p>
          </div>

          <h2 style={{ color: PRIMARY, fontSize: 17, marginBottom: 14 }}>Training Sections</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {SECTIONS.map((s, i) => (
              <button key={s.id} onClick={() => goToSection(i)}
                style={{ background: '#fff', border: `2px solid ${completedSections.has(i) ? ACCENT : '#e5e7eb'}`, borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{completedSections.has(i) ? '✅' : s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: PRIMARY, fontSize: 15 }}>{i + 1}. {s.title}</div>
                </div>
                <span style={{ color: '#9ca3af', fontSize: 20 }}>›</span>
              </button>
            ))}
          </div>

          {allSectionsRead && !quizPassed && (
            <button onClick={() => { setShowQuiz(true); window.scrollTo({ top: 0 }); }}
              style={{ width: '100%', background: SECONDARY, color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 17, fontWeight: 700, cursor: 'pointer', marginBottom: 12 }}>
              📝 Start Knowledge Check
            </button>
          )}
          {quizPassed && (
            <button onClick={() => { setShowCompletion(true); window.scrollTo({ top: 0 }); }}
              style={{ width: '100%', background: ACCENT, color: '#fff', border: 'none', borderRadius: 10, padding: '16px', fontSize: 17, fontWeight: 700, cursor: 'pointer', marginBottom: 12 }}>
              ✅ Record My Completion
            </button>
          )}
          {!allSectionsRead && (
            <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 14, margin: 0 }}>
              Read all {SECTIONS.length} sections to unlock the knowledge check ({completedSections.size}/{SECTIONS.length} read)
            </p>
          )}
        </div>

        <footer style={{ background: PRIMARY, color: 'rgba(255,255,255,0.7)', textAlign: 'center', padding: '16px', fontSize: 12, marginTop: 20 }}>
          Caswells Group · Heat Seal Press Operator Training · {MODULE_REF} · {VERSION}<br />
          D.R. Caswell Ltd, Lagonda Road, Billingham TS23 4JA
        </footer>
      </div>
    );
  }

  // ── Section view ──
  if (currentSection !== null && !showQuiz && !showCompletion) {
    const section = SECTIONS[currentSection];
    const isLast = currentSection === SECTIONS.length - 1;
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8', fontFamily: 'Calibri, Arial, sans-serif' }}>
        <div style={{ background: PRIMARY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setCurrentSection(null)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: 6, padding: '6px 12px', cursor: 'pointer', fontSize: 14 }}>← Back</button>
          <img src={LOGO} alt="Caswells Group" style={{ height: 32 }} />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #05325f 100%)`, color: '#fff', padding: '24px 20px' }}>
          <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 6 }}>Section {currentSection + 1} of {SECTIONS.length}</div>
          <h1 style={{ margin: 0, fontSize: 'clamp(18px,4vw,26px)', fontWeight: 700 }}>{section.icon} {section.title}</h1>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 16px' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 20 }}>
            {section.content.map((block, i) => <ContentBlock key={i} block={block} />)}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {currentSection > 0 && (
              <button onClick={() => goToSection(currentSection - 1)}
                style={{ flex: 1, background: '#fff', color: PRIMARY, border: `2px solid ${PRIMARY}`, borderRadius: 8, padding: '13px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                ← Previous
              </button>
            )}
            {!isLast ? (
              <button onClick={() => goToSection(currentSection + 1)}
                style={{ flex: 2, background: PRIMARY, color: '#fff', border: 'none', borderRadius: 8, padding: '13px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                Next Section →
              </button>
            ) : (
              <button onClick={() => setCurrentSection(null)}
                style={{ flex: 2, background: ACCENT, color: '#fff', border: 'none', borderRadius: 8, padding: '13px', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                ✅ Back to Home
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz view ──
  if (showQuiz && !showCompletion) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8', fontFamily: 'Calibri, Arial, sans-serif' }}>
        <div style={{ background: PRIMARY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setShowQuiz(false)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: 6, padding: '6px 12px', cursor: 'pointer', fontSize: 14 }}>← Back</button>
          <img src={LOGO} alt="Caswells Group" style={{ height: 32 }} />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #05325f 100%)`, color: '#fff', padding: '24px 20px' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(18px,4vw,24px)', fontWeight: 700 }}>📝 Knowledge Check</h1>
          <p style={{ margin: '6px 0 0', opacity: 0.8, fontSize: 14 }}>{MODULE_TITLE}</p>
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 16px' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <Quiz onComplete={(score, total) => { setQuizScore({ score, total }); setQuizPassed(true); setShowQuiz(false); setShowCompletion(true); }} />
          </div>
        </div>
      </div>
    );
  }

  // ── Completion view ──
  if (showCompletion) {
    return (
      <div style={{ minHeight: '100vh', background: '#f0f4f8', fontFamily: 'Calibri, Arial, sans-serif' }}>
        <div style={{ background: PRIMARY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={LOGO} alt="Caswells Group" style={{ height: 32 }} />
        </div>
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #05325f 100%)`, color: '#fff', padding: '24px 20px', textAlign: 'center' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(18px,4vw,24px)', fontWeight: 700 }}>Record Completion</h1>
        </div>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: '28px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <CompletionForm score={quizScore?.score} total={quizScore?.total} />
          </div>
        </div>
      </div>
    );
  }
}

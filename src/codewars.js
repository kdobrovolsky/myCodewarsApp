export function setupCounter(element) {
  if (!element) return;

  element.innerHTML = `
    <div>
      <h2>Codewars tasks reorganized</h2>
      <p>Tasks are now grouped by kyu in <code>src/codewars/</code>.</p>
      <p>See <code>src/codewars/INDEX.md</code> for the full map.</p>
    </div>
  `;
}

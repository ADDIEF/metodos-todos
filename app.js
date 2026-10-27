const exercises = [
  {
    id: '19', title: 'Distancia de un vehículo', tag: 'Transporte',
    description: 'Integra la velocidad registrada durante los primeros siete segundos para estimar la distancia recorrida.',
    model: 'd = ∫ v(t) dt / 3600',
    kind: 'table', x: [0, 1, 2, 3, 4, 5, 6, 7], y: [0, 14, 39, 69, 95, 114, 129, 139],
    factor: 1 / 3600, unit: 'mi', inputUnit: 'v en mi/h; t en s', note: 'El factor 1/3600 convierte mi/h·s a millas. Para siete intervalos, la guía combina Simpson 1/3 (4) y 3/8 (3).',
    reference: '0.147072 mi (Simpson combinado)', expected: '0.147072', matrixMethod: 'combined'
  },
  {
    id: '20', title: 'Trabajo de una banda elástica', tag: 'Elasticidad',
    description: 'El trabajo es el área bajo la curva de fuerza medida frente al desplazamiento.',
    model: 'W = ∫ F(x) dx',
    kind: 'table', x: [0, .4, .8, 1.2, 1.6, 2, 2.4, 2.8], y: [0, .85, 1.30, 1.60, 1.87, 2.14, 2.34, 2.52],
    factor: 1, unit: 'lb·in', inputUnit: 'F en lb; x en in', note: 'La guía usa Simpson combinado sobre los siete subintervalos.', reference: '0.517 J (aprox.)', expected: '4.577167 lb·in', matrixMethod: 'combined'
  },
  {
    id: '21', title: 'Área de un perfil', tag: 'Topografía',
    description: 'Estima el área bajo el perfil entre x = 1 y x = 10 con las alturas digitalizadas.',
    model: 'A = ∫ y(x) dx',
    kind: 'table', x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [1.3, 3.7, 4.6, 4.4, 2.7, 2.5, 3.6, 5.3, 6, 5.9],
    factor: 1, unit: 'u²', inputUnit: 'coordenadas digitalizadas', note: 'Alturas ilustrativas extraídas visualmente. La guía combina Simpson 1/3 en ocho intervalos y un trapecio en el último.', reference: '≈36.85 u² (estimación)', expected: '≈36.85 u²', matrixMethod: 'combined'
  },
  {
    id: '22', title: 'Longitud de una catenaria', tag: 'Geometría',
    description: 'Aproxima la longitud del cable entre x = −12 y x = 26 ft para a = 24 ft.',
    model: 'L = ∫ cosh(x/24) dx',
    kind: 'function', expression: 'cosh(x/24)', a: -12, b: 26, n: 8, factor: 1, unit: 'ft', inputUnit: 'x en ft; a = 24 ft', note: 'Se integra sqrt(1 + y′²) = cosh(x/a). Modelo geométrico simplificado, no diseño de ingeniería.', reference: '43.898841 ft (exacto)', expected: '43.899213 ft', matrixMethod: 'simpson13'
  },
  {
    id: '23', title: 'Caudal de una tubería', tag: 'Fluidos',
    description: 'Integra el perfil turbulento de velocidad sobre la sección circular de radio 0.25 in.',
    model: 'Q = ∫ 160πr(1 − r/0.25)^(1/7) dr',
    kind: 'function', expression: '160*pi*x*(1-x/0.25)^(1/7)', a: 0, b: .25, n: 8, factor: 1, unit: 'in³/s', inputUnit: 'r en in; v(r)=80(1−r/R)^(1/7)', note: 'El perfil tiene una derivada pronunciada cerca de la pared; por eso la convergencia numérica es más lenta.', reference: '49π/12 = 12.828170 in³/s (exacto)', expected: '12.151244 in³/s', matrixMethod: 'simpson13'
  },
  {
    id: '24', title: 'Longitud de una cardioide', tag: 'Trayectoria',
    description: 'Calcula la longitud de arco de la cardioide paramétrica con b = 5.',
    model: 'L = ∫ 20 sin(t/2) dt',
    kind: 'function', expression: '20*sin(x/2)', a: 0, b: 2 * Math.PI, n: 8, factor: 1, unit: 'u', inputUnit: 't en radianes; b = 5', note: 'La velocidad paramétrica se simplifica a 20 sin(t/2) en el intervalo [0, 2π].', reference: '80 u (exacto)', expected: '80.010767 u', matrixMethod: 'simpson13'
  },
  {
    id: '25', title: 'Energía potencial gravitatoria', tag: 'Energía',
    description: 'Estima el cambio de energía al elevar 800 km un satélite de 500 kg.',
    model: 'ΔU = mg₀ ∫ R²/(R+y)² dy',
    kind: 'function', expression: '500*9.81*6371000^2/(6371000+x)^2', a: 0, b: 800000, n: 8, factor: 1, unit: 'J', inputUnit: 'y en m; R = 6 371 000 m', note: 'Se conserva la variación de g con la altura. La constante gravitacional local es g₀ = 9.81 m/s².', reference: '3.486236787×10⁹ J (exacto)', expected: '3.48623690×10⁹ J', matrixMethod: 'simpson13'
  },
  {
    id: '26', title: 'Superficie de un lago', tag: 'Geografía',
    description: 'Estima el área integrando el ancho medido cada 20 millas entre x = 40 y x = 260 mi.',
    model: 'A = ∫₄₀²⁶⁰ w(x) dx',
    kind: 'table', x: [40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260], y: [],
    factor: 1, unit: 'mi²', inputUnit: 'x y ancho en mi', note: 'La guía no incluye una tabla común de anchuras: introduce tus medidas para calcular. Referencia del lago Erie: 9 940 mi².', reference: '9 940 mi² (referencia; falta tabla de anchuras)', expected: '9 940 mi² (referencia)', matrixMethod: null
  },
  {
    id: '27', title: 'Volumen y superficie', tag: 'Geometría',
    description: 'Usa diámetros tabulados para estimar el volumen y la superficie simplificada de un sólido de revolución.',
    model: 'V = π∫r² dz · S ≈ 2π∫r dz',
    kind: 'table', x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [0, 2.6, 3.2, 4.8, 5.6, 6, 6.2, 6, 5.6, 4.8, 3.3, 2.6, 0],
    factor: 1, unit: 'in³', inputUnit: 'diámetros en in; z en in', note: 'La superficie del enunciado omite la pendiente. Cambia la magnitud para comparar volumen y superficie simplificada.', reference: 'Volumen; superficie aproximada: véase matriz', expected: '201.842092 in³', matrixMethod: 'simpson13',
    quantities: [
      { id: 'volume', label: 'Volumen', unit: 'in³', model: 'V = π∫r² dz', factor: Math.PI / 4, matrixExpected: '201.842092 in³', matrixMethod: 'simpson13' },
      { id: 'surface', label: 'Superficie simplificada', unit: 'in²', model: 'S ≈ π∫d dz', factor: Math.PI, matrixExpected: '162.315620 in²', matrixMethod: 'simpson13' }
    ]
  }
];

const $ = (selector) => document.querySelector(selector);
const form = $('#calculator-form');
const exerciseSelect = $('#exercise-select');
const quantitySelect = $('#quantity-select');
const methodSelect = $('#method-select');
const dataFields = $('#data-fields');
const functionFields = $('#function-fields');
const quantityGroup = $('#quantity-group');

function formatNumber(value, digits = 6) {
  if (!Number.isFinite(value)) return '—';
  return new Intl.NumberFormat('es-BO', { maximumFractionDigits: digits, minimumFractionDigits: Math.min(6, digits) }).format(value);
}

function buildParser(source) {
  const tokens = source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-zA-Z_]\w*|[()+\-*/^,]/gi) || [];
  const normalizedSource = source.replace(/\s+/g, '');
  if (tokens.join('') !== normalizedSource) throw new Error('La función contiene caracteres o símbolos no válidos.');
  let position = 0;
  const peek = () => tokens[position];
  const consume = (expected) => {
    const token = tokens[position];
    if (expected && token !== expected) throw new Error(`Se esperaba "${expected}" en la función.`);
    position += 1;
    return token;
  };
  const expression = () => {
    let value = term();
    while (peek() === '+' || peek() === '-') {
      const operator = consume();
      const right = term();
      value = operator === '+' ? value + right : value - right;
    }
    return value;
  };
  const term = () => {
    let value = unary();
    while (peek() === '*' || peek() === '/') {
      const operator = consume();
      const right = unary();
      value = operator === '*' ? value * right : value / right;
    }
    return value;
  };
  const unary = () => {
    if (peek() === '+') { consume('+'); return unary(); }
    if (peek() === '-') { consume('-'); return -unary(); }
    return power();
  };
  const power = () => {
    const base = primary();
    if (peek() === '^') { consume('^'); return base ** unary(); }
    return base;
  };
  const primary = () => {
    const token = peek();
    if (!token) throw new Error('La función está incompleta.');
    if (token === '(') {
      consume('(');
      const value = expression();
      consume(')');
      return value;
    }
    if (/^(?:\d|\.)/.test(token)) { consume(); return Number(token); }
    if (/^[a-zA-Z_]/.test(token)) {
      const name = consume().toLowerCase();
      if (name === 'x') return currentX;
      if (name === 'pi') return Math.PI;
      if (name === 'e') return Math.E;
      const functions = {
        sin: Math.sin, cos: Math.cos, tan: Math.tan, sinh: Math.sinh, cosh: Math.cosh,
        sqrt: Math.sqrt, exp: Math.exp, ln: Math.log, log: Math.log, abs: Math.abs
      };
      if (!(name in functions)) throw new Error(`Símbolo no permitido: ${name}.`);
      consume('(');
      const argument = expression();
      consume(')');
      return functions[name](argument);
    }
    throw new Error(`Símbolo inesperado: ${token}.`);
  };
  let currentX = 0;
  return (x) => {
    currentX = x;
    position = 0;
    const value = expression();
    if (position !== tokens.length) throw new Error(`Símbolo inesperado: ${peek()}.`);
    if (!Number.isFinite(value)) throw new Error(`La función no produce un valor finito en x = ${x}.`);
    return value;
  };
}

function exerciseById(id) {
  return exercises.find((exercise) => exercise.id === id);
}

function selectedExercise() {
  return exerciseById(exerciseSelect.value);
}

function selectedQuantity(exercise) {
  if (!exercise.quantities) return null;
  return exercise.quantities.find((quantity) => quantity.id === quantitySelect.value) || exercise.quantities[0];
}

function getTableValues(exercise) {
  const x = parseNumberList($('#x-input').value, 'Los nodos x');
  const inputY = parseNumberList($('#y-input').value, 'Los valores f(x)');
  if (x.length !== inputY.length) throw new Error('Las listas de x y f(x) deben tener la misma cantidad de datos.');
  if (x.length < 2) throw new Error('Ingresa por lo menos dos parejas de datos.');
  for (let i = 1; i < x.length; i += 1) {
    if (x[i] <= x[i - 1]) throw new Error('Los nodos x deben estar en orden estrictamente creciente.');
  }
  const steps = x.slice(1).map((value, i) => value - x[i]);
  const h = steps[0];
  if (steps.some((step) => Math.abs(step - h) > 1e-8 * Math.max(1, Math.abs(h)))) {
    throw new Error('Los nodos deben tener espaciamiento uniforme para estos métodos.');
  }
  const quantity = selectedQuantity(exercise);
  const y = exercise.id === '27' ? inputY.map((value) => quantity.id === 'volume' ? Math.PI * (value / 2) ** 2 : Math.PI * value) : inputY;
  return { x, y, h, unit: quantity ? quantity.unit : exercise.unit, inputValues: inputY };
}

function parseNumberList(text, label) {
  const parts = text.trim().split(/[\s,;]+/).filter(Boolean);
  if (!parts.length) throw new Error(`${label}: ingresa al menos un número.`);
  const values = parts.map((part) => Number(part));
  if (values.some((value) => !Number.isFinite(value))) throw new Error(`${label}: hay un valor no numérico.`);
  return values;
}

function buildFunctionValues(expression, a, b, n) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) throw new Error('Los límites deben ser números y cumplir b > a.');
  if (!Number.isInteger(n) || n < 1) throw new Error('n debe ser un entero positivo.');
  const fn = buildParser(expression);
  const h = (b - a) / n;
  const x = Array.from({ length: n + 1 }, (_, i) => a + i * h);
  return { x, y: x.map(fn), h, unit: selectedQuantity(selectedExercise())?.unit || selectedExercise().unit };
}

function blankWeights(length) {
  return Array(length).fill(0);
}

function trapezoidSegment(weights, start, intervals, h) {
  weights[start] += h / 2;
  weights[start + intervals] += h / 2;
  for (let i = 1; i < intervals; i += 1) weights[start + i] += h;
}

function simpson13Segment(weights, start, intervals, h) {
  weights[start] += h / 3;
  weights[start + intervals] += h / 3;
  for (let i = 1; i < intervals; i += 1) weights[start + i] += (i % 2 ? 4 : 2) * h / 3;
}

function simpson38Segment(weights, start, h) {
  const coefficient = 3 * h / 8;
  weights[start] += coefficient;
  weights[start + 3] += coefficient;
  weights[start + 1] += 3 * coefficient;
  weights[start + 2] += 3 * coefficient;
}

function integrationWeights(method, count, h) {
  const n = count - 1;
  const weights = blankWeights(count);
  let label = '';
  if (method === 'trapezoid') {
    trapezoidSegment(weights, 0, n, h);
    label = 'Trapecio compuesto';
  } else if (method === 'simpson13') {
    if (n % 2) throw new Error('Simpson 1/3 requiere un número par de subintervalos.');
    simpson13Segment(weights, 0, n, h);
    label = 'Simpson 1/3';
  } else if (method === 'simpson38') {
    if (n % 3) throw new Error('Simpson 3/8 requiere que n sea múltiplo de 3.');
    for (let start = 0; start < n; start += 3) simpson38Segment(weights, start, h);
    label = 'Simpson 3/8';
  } else if (method === 'combined') {
    if (n === 7) {
      simpson13Segment(weights, 0, 4, h);
      simpson38Segment(weights, 4, h);
      label = 'Simpson combinado (1/3 + 3/8)';
    } else if (n >= 2 && n % 2 === 0) {
      simpson13Segment(weights, 0, n, h);
      label = 'Simpson 1/3 (combinado)';
    } else if (n >= 3 && (n - 1) % 2 === 0) {
      simpson13Segment(weights, 0, n - 1, h);
      trapezoidSegment(weights, n - 1, 1, h);
      label = 'Simpson 1/3 + trapecio final';
    } else if (n >= 3 && n % 3 === 0) {
      for (let start = 0; start < n; start += 3) simpson38Segment(weights, start, h);
      label = 'Simpson 3/8 (combinado)';
    } else if (n >= 5 && (n - 3) % 2 === 0) {
      simpson13Segment(weights, 0, n - 3, h);
      simpson38Segment(weights, n - 3, h);
      label = 'Simpson combinado (1/3 + 3/8)';
    } else {
      throw new Error('n no permite combinar Simpson 1/3 y 3/8 con este esquema.');
    }
  } else {
    throw new Error('Selecciona un método de integración válido.');
  }
  return { weights, label };
}

function calculate(values, method, scale = 1) {
  const { weights, label } = integrationWeights(method, values.x.length, values.h);
  const scaledWeights = weights.map((weight) => weight * scale);
  const contributions = values.y.map((value, index) => value * scaledWeights[index]);
  return { result: contributions.reduce((sum, contribution) => sum + contribution, 0), weights: scaledWeights, contributions, label };
}

function showError(message) {
  $('#form-error').textContent = message;
  $('#result-badge').textContent = 'REVISAR';
}

function renderPlot(values) {
  const svg = $('#plot');
  const width = 640;
  const height = 230;
  const pad = { left: 44, right: 16, top: 16, bottom: 34 };
  const minX = Math.min(...values.x);
  const maxX = Math.max(...values.x);
  const minY = Math.min(0, ...values.y);
  const maxY = Math.max(0, ...values.y);
  const rangeY = maxY - minY || 1;
  const sx = (x) => pad.left + (x - minX) / (maxX - minX || 1) * (width - pad.left - pad.right);
  const sy = (y) => pad.top + (maxY - y) / rangeY * (height - pad.top - pad.bottom);
  const zeroY = sy(0);
  const points = values.x.map((x, i) => `${sx(x)},${sy(values.y[i])}`);
  const polygon = `${sx(minX)},${zeroY} ${points.join(' ')} ${sx(maxX)},${zeroY}`;
  const gridLines = [0, 1, 2, 3].map((index) => {
    const y = pad.top + index * (height - pad.top - pad.bottom) / 3;
    return `<line x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}" stroke="#edf1eb" stroke-width="1"/>`;
  }).join('');
  const dots = values.x.map((x, i) => `<circle cx="${sx(x)}" cy="${sy(values.y[i])}" r="3" fill="#165b43"/>`).join('');
  svg.innerHTML = `${gridLines}<polygon points="${polygon}" fill="#d7f16b" fill-opacity=".4"/><polyline points="${points.join(' ')}" fill="none" stroke="#165b43" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>${dots}<line x1="${pad.left}" y1="${zeroY}" x2="${width - pad.right}" y2="${zeroY}" stroke="#b7c3ba"/><text x="${pad.left}" y="${height - 10}" fill="#78857e" font-size="10">${escapeXml(formatNumber(minX, 3))}</text><text x="${width - pad.right}" y="${height - 10}" text-anchor="end" fill="#78857e" font-size="10">${escapeXml(formatNumber(maxX, 3))}</text>`;
}

function escapeXml(text) {
  return text.replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]);
}

function renderCalculation(values, outcome) {
  $('#calculation-rows').innerHTML = values.x.map((x, i) => `<tr><td class="number">${i}</td><td class="number">${formatNumber(x, 8)}</td><td class="number">${formatNumber(values.y[i], 8)}</td><td class="number">${formatNumber(outcome.weights[i], 10)}</td><td class="number">${formatNumber(outcome.contributions[i], 10)}</td></tr>`).join('');
}

function renderResult(values, outcome, scale) {
  $('#result-value').textContent = formatNumber(outcome.result, 6);
  $('#result-unit').textContent = scale === 1 ? values.unit : `${values.unit} (con factor de conversión ${formatNumber(scale, 9)})`;
  $('#method-label').textContent = outcome.label;
  $('#result-badge').textContent = `${values.x.length - 1} SUBINTERVALOS`;
  $('#result-explanation').textContent = `h = ${formatNumber(values.h, 8)}; resultado = Σ f(xᵢ) · pesoᵢ. Los pesos ya incluyen el factor de conversión.`;
  $('#plot-label').textContent = `${values.x.length} nodos`;
  renderPlot(values);
  renderCalculation(values, outcome);
}

function readFormValues(exercise) {
  if (exercise.kind === 'table') return getTableValues(exercise);
  return buildFunctionValues($('#function-input').value, Number($('#a-input').value), Number($('#b-input').value), Number($('#n-input').value));
}

function runCalculation(event) {
  if (event) event.preventDefault();
  $('#form-error').textContent = '';
  try {
    const exercise = selectedExercise();
    const values = readFormValues(exercise);
    const scale = Number($('#scale-input').value);
    if (!Number.isFinite(scale)) throw new Error('El factor de conversión debe ser un número finito.');
    const outcome = calculate(values, methodSelect.value, scale);
    renderResult(values, outcome, scale);
  } catch (error) {
    showError(error.message);
  }
}

function updateExerciseForm() {
  const exercise = selectedExercise();
  const hasQuantities = Boolean(exercise.quantities);
  quantityGroup.classList.toggle('hidden', !hasQuantities);
  dataFields.classList.toggle('hidden', exercise.kind !== 'table');
  functionFields.classList.toggle('hidden', exercise.kind !== 'function');
  $('#exercise-summary').textContent = exercise.description;
  $('#exercise-note').textContent = exercise.note;
  $('#scale-input').value = String(exercise.factor);
  methodSelect.value = exercise.matrixMethod || 'trapezoid';
  $('#x-label').textContent = exercise.id === '19' ? 'Tiempo t (s)' : exercise.id === '27' ? 'Posición z (in)' : 'Nodos x (separados por coma o espacio)';
  $('#y-label').textContent = exercise.id === '19' ? 'Velocidad v(t) (mi/h)' : exercise.id === '20' ? 'Fuerza F(x) (lb)' : exercise.id === '21' ? 'Alturas y(x)' : exercise.id === '26' ? 'Anchuras w(x) (mi)' : exercise.id === '27' ? 'Diámetros d(z) (in)' : 'Valores f(x) (en el mismo orden)';
  $('#form-error').textContent = '';
  if (hasQuantities) {
    quantitySelect.innerHTML = exercise.quantities.map((quantity) => `<option value="${quantity.id}">${quantity.label}</option>`).join('');
  }
  const quantity = selectedQuantity(exercise);
  const model = quantity ? quantity.model : exercise.model;
  if (exercise.kind === 'table') {
    $('#x-input').value = exercise.x.join(', ');
    const defaults = exercise.id === '27' ? exercise.y : exercise.y;
    $('#y-input').value = defaults.join(', ');
  } else {
    $('#function-input').value = exercise.expression;
    $('#a-input').value = exercise.a;
    $('#b-input').value = exercise.b;
    $('#n-input').value = exercise.n;
  }
  $('#result-explanation').textContent = `${model}. ${exercise.inputUnit}.`;
  $('#result-value').textContent = '—';
  $('#result-unit').textContent = exercise.unit;
  $('#result-badge').textContent = 'LISTO';
  $('#method-label').textContent = 'Selecciona un método';
  $('#plot').innerHTML = '';
  $('#plot-label').textContent = '';
  $('#calculation-rows').innerHTML = '<tr><td colspan="5" class="empty-row">La tabla aparecerá después del cálculo.</td></tr>';
  if (exercise.id === '27') {
    $('#result-unit').textContent = quantity.unit;
    $('#result-explanation').textContent = `${model}. Radio = diámetro/2. ${exercise.note}`;
  }
}

function renderExerciseCards() {
  $('#exercise-cards').innerHTML = exercises.map((exercise) => `<article class="exercise-card"><div class="exercise-number"><span>EJ. ${exercise.id}</span><span class="exercise-tag">${exercise.tag}</span></div><h3>${exercise.title}</h3><p>${exercise.description}</p><p class="model-line">${exercise.model}</p></article>`).join('');
}

function matrixValues(exercise, quantity = null) {
  if (exercise.id === '26') return null;
  const selected = quantity || selectedQuantity(exercise);
  let values;
  if (exercise.kind === 'table') {
    const y = exercise.id === '27' ? exercise.y.map((diameter) => selected.id === 'volume' ? Math.PI * (diameter / 2) ** 2 : Math.PI * diameter) : exercise.y;
    values = { x: exercise.x, y, h: exercise.x[1] - exercise.x[0], unit: selected?.unit || exercise.unit };
  } else {
    const fn = buildParser(exercise.expression);
    const h = (exercise.b - exercise.a) / exercise.n;
    const x = Array.from({ length: exercise.n + 1 }, (_, i) => exercise.a + i * h);
    values = { x, y: x.map(fn), h, unit: exercise.unit };
  }
  const scale = exercise.id === '19' ? exercise.factor : 1;
  const trap = calculate(values, 'trapezoid', scale).result;
  const chosenMethod = selected?.matrixMethod || exercise.matrixMethod;
  if (!chosenMethod) return { trap, simpson: null, unit: values.unit };
  const simpson = calculate(values, chosenMethod, scale).result;
  return { trap, simpson, unit: values.unit };
}

function renderMatrix() {
  const rows = [];
  for (const exercise of exercises) {
    if (exercise.id === '26') {
      rows.push(`<tr><td>Ej. ${exercise.id} · ${exercise.title}</td><td>—</td><td>Requiere datos</td><td>9 940 mi²</td></tr>`);
      continue;
    }
    const quantities = exercise.quantities || [null];
    for (const quantity of quantities) {
      const result = matrixValues(exercise, quantity);
      const name = quantity ? quantity.label : exercise.title;
      const expected = quantity ? quantity.matrixExpected : exercise.expected;
      const simpson = result.simpson === null ? '—' : `${formatNumber(result.simpson, 6)} ${result.unit}`;
      rows.push(`<tr><td>Ej. ${exercise.id} · ${name}</td><td>${formatNumber(result.trap, 6)} ${result.unit}</td><td>${simpson}</td><td>${expected}</td></tr>`);
    }
  }
  $('#matrix-rows').innerHTML = rows.join('');
}

function loadTestCase() {
  exerciseSelect.value = '22';
  updateExerciseForm();
  $('#function-input').value = 'x^2';
  $('#a-input').value = '0';
  $('#b-input').value = '2';
  $('#n-input').value = '4';
  $('#scale-input').value = '1';
  methodSelect.value = 'simpson13';
  runCalculation();
  $('#calculadora').scrollIntoView({ behavior: 'smooth' });
}

function initialize() {
  exerciseSelect.innerHTML = exercises.map((exercise) => `<option value="${exercise.id}">Ejercicio ${exercise.id} · ${exercise.title}</option>`).join('');
  exerciseSelect.value = '19';
  renderExerciseCards();
  renderMatrix();
  updateExerciseForm();
  form.addEventListener('submit', runCalculation);
  exerciseSelect.addEventListener('change', updateExerciseForm);
  quantitySelect.addEventListener('change', updateExerciseForm);
  $('#test-button').addEventListener('click', loadTestCase);
}

initialize();

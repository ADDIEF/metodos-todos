# Informe técnico: integración numérica aplicada

**Asignatura:** Métodos Numéricos  
**Objetivo:** Aplicar el trapecio compuesto y las reglas de Simpson a datos tabulados e integrandos de problemas de geometría, transporte, fluidos y energía. Los escenarios contextualizados en La Paz son adaptaciones didácticas; no representan mediciones reales.

## Modelo y procedimiento

Para nodos igualmente espaciados, \(h=(b-a)/n\). Se comparan el trapecio compuesto, Simpson 1/3 (n par) y Simpson 3/8 (n múltiplo de 3). Cuando n=7 se combinan Simpson 1/3 sobre cuatro intervalos y Simpson 3/8 sobre los tres restantes. Se validan listas de igual longitud, nodos crecientes y espaciamiento uniforme. La aplicación muestra los pesos, contribuciones, unidades y gráfico. La prueba \(\int_0^2 x^2\,dx=8/3\) comprueba el cálculo.

| Ej. | Integral / modelo | Trapecio | Simpson / referencia |
|---|---|---:|---:|
| 19 | Distancia: \(\int_0^7v(t)\,dt/3600\) | 0.147083 mi | 0.147072 mi |
| 20 | Trabajo: \(\int_0^{2.8}F(x)\,dx\) | 4.544000 lb·in | 4.577167 lb·in (≈0.517 J) |
| 21 | Área: \(\int_1^{10}y(x)\,dx\) | ≈36.40 u² | ≈36.85 u² |
| 22 | Catenaria: \(\int_{-12}^{26}\cosh(x/24)\,dx\) | 44.042044 ft | 43.899213 ft; exacto 43.898841 ft |
| 23 | Caudal: \(\int_0^{0.25}160\pi r(1-r/0.25)^{1/7}\,dr\) | 11.681778 in³/s | 12.151244 in³/s; exacto 12.828170 in³/s |
| 24 | Cardioide: \(\int_0^{2\pi}20\sin(t/2)\,dt\) | 78.969264 u | 80.010767 u; exacto 80 u |
| 25 | Energía: \(mg_0\int_0^{800000}R^2/(R+y)^2\,dy\) | 3.48662008×10⁹ J | 3.48623690×10⁹ J; exacto 3.486236787×10⁹ J |
| 26 | Lago: \(\int_{40}^{260}w(x)\,dx\) | Pendiente de anchuras | Referencia 9 940 mi² |
| 27 | Volumen: \(\pi\int_0^{12}(d/2)^2\,dz\) | 199.404740 in³ | 201.842092 in³ |
| 27 | Superficie simplificada: \(\pi\int_0^{12}d\,dz\) | 159.278748 in² | 162.315620 in² |

## Análisis y conclusiones

Las aproximaciones de Simpson se acercan a las referencias disponibles en la mayoría de los casos. Los errores absolutos de Simpson frente a los valores exactos son 0.000372 ft (ej. 22), 0.676926 in³/s (ej. 23), 0.010767 u (ej. 24) y aproximadamente 112.85 J (ej. 25); el caudal presenta el mayor error relativo, cerca de 5.28 %, y requiere más subintervalos por la derivada pronunciada cerca de la pared. En el ejercicio 21 las alturas son digitalizaciones ilustrativas: la diferencia de 0.45 u² entre métodos no es un error verdadero, pues no existe un valor exacto para esos datos. Tampoco se asigna un resultado calculado al ejercicio 26: falta la tabla de anchuras.

En el ejercicio 27, \(2\pi\int r\,dz\) es una simplificación que omite la pendiente del perfil. El área geométrica de revolución requiere \(2\pi\int r\sqrt{1+(r')^2}\,dz\); por tanto, el valor de superficie de la tabla no es el área exacta. La aplicación permite editar los datos y parámetros para contrastar resultados, pero las aproximaciones y los modelos deben interpretarse según sus unidades, procedencia de datos y limitaciones.

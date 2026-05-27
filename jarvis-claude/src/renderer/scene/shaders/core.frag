uniform float uTime;
uniform float uAmplitude;
uniform vec3 uInner;
uniform vec3 uOuter;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec2 centered = vUv - 0.5;
  float r = length(centered) * 2.0;

  float pulse = 0.5 + 0.5 * sin(uTime * 2.0 + r * 6.0);
  float energy = mix(pulse, 1.0, uAmplitude);

  vec3 col = mix(uInner, uOuter, smoothstep(0.0, 1.0, r));
  col *= 0.6 + 0.6 * energy;

  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  float rim = pow(1.0 - max(dot(normalize(vNormal), viewDir), 0.0), 2.5);
  col += uInner * rim * (0.6 + 0.8 * uAmplitude);

  float alpha = clamp(0.55 + 0.45 * energy, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}

# v3.4.0 (Thu Oct 19 2023)

#### 🚀 Enhancement

- feat(button-area): add button area proxy [#41](https://github.com/tyler-technologies-oss/forge-angular/pull/41) ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

#### Authors: 1

- Sam Richardson ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

---

# v3.3.4 (Thu Oct 12 2023)

#### 🐛 Bug Fix

- fix(autocomplete-value-accessor): fix to allow for setting disabled state of the autocomplete `<input>` element via reactive form controls [#39](https://github.com/tyler-technologies-oss/forge-angular/pull/39) ([@DRiFTy17](https://github.com/DRiFTy17))

#### Authors: 1

- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))

---

# v3.3.3 (Tue Sep 12 2023)

#### 🐛 Bug Fix

- fix(proxies): regenerate proxy components to bring in missing props [#37](https://github.com/tyler-technologies-oss/forge-angular/pull/37) ([@Alex-Oxthorn](https://github.com/Alex-Oxthorn))

#### Authors: 1

- Alex Oxthorn ([@Alex-Oxthorn](https://github.com/Alex-Oxthorn))

---

# v3.3.2 (Fri Sep 08 2023)

#### 🐛 Bug Fix

- fix(popup-service): detect changes to fix initial position [#33](https://github.com/tyler-technologies-oss/forge-angular/pull/33) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 2

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v3.3.1 (Wed Aug 30 2023)

#### 🐛 Bug Fix

- fix(popup-service): handle close event from popup itself [#31](https://github.com/tyler-technologies-oss/forge-angular/pull/31) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v3.3.0 (Mon Aug 28 2023)

#### 🚀 Enhancement

- feat(popup-service): dynamically render component in forge-popup [#30](https://github.com/tyler-technologies-oss/forge-angular/pull/30) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v3.2.0 (Mon Jun 05 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Alan Collins ([@Alanoll](https://github.com/Alanoll)), for all your work!

#### 🚀 Enhancement

- feat(list): Add a ControlValueAccessor for the forge-list component [#29](https://github.com/tyler-technologies-oss/forge-angular/pull/29) ([@Alanoll](https://github.com/Alanoll) [@DRiFTy17](https://github.com/DRiFTy17))

#### 📝 Documentation

- docs: update changelog with breaking changes related to proxy components [#28](https://github.com/tyler-technologies-oss/forge-angular/pull/28) ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

#### Authors: 3

- Alan Collins ([@Alanoll](https://github.com/Alanoll))
- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))
- Sam Richardson ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

---

# v3.1.0 (Tue May 23 2023)

#### 🚀 Enhancement

- feat(stack): regenerated proxies [#26](https://github.com/tyler-technologies-oss/forge-angular/pull/26) ([@DRiFTy17](https://github.com/DRiFTy17))

#### Authors: 1

- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))

---

# v3.0.0 (Mon May 22 2023)

#### 💥 Breaking Change

- chore: use trailing slash on publish directory path [#25](https://github.com/tyler-technologies-oss/forge-angular/pull/25) ([@DRiFTy17](https://github.com/DRiFTy17))
- chore: remove node 14 support [#24](https://github.com/tyler-technologies-oss/forge-angular/pull/24) ([@DRiFTy17](https://github.com/DRiFTy17))
- feat: update to Angular 16 [#23](https://github.com/tyler-technologies-oss/forge-angular/pull/23) ([@samrichardsontylertech](https://github.com/samrichardsontylertech) [@DRiFTy17](https://github.com/DRiFTy17))
- `ProxyComponentsModule` has been removed -- proxy components are now exported from individual component modules and `ForgeModule`
- `ViewChild` defaults to reading component instances instead of `ElementRef`s from selected Forge components

#### Authors: 2

- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))
- Sam Richardson ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

---

# v2.5.0 (Wed Mar 22 2023)

#### 🚀 Enhancement

- feat: define components in modules and services [#19](https://github.com/tyler-technologies-oss/forge-angular/pull/19) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.4.0 (Wed Feb 15 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Sam Richardson ([@samrichardsontylertech](https://github.com/samrichardsontylertech)), for all your work!

#### 🚀 Enhancement

- feat(media-observer): add types for all current media features ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

#### Authors: 1

- Sam Richardson ([@samrichardsontylertech](https://github.com/samrichardsontylertech))

---

# v2.3.1 (Fri Feb 10 2023)

#### 🐛 Bug Fix

- fix: update list-item proxy for latest forge [#18](https://github.com/tyler-technologies-oss/forge-angular/pull/18) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.3.0 (Wed Jan 04 2023)

#### 🚀 Enhancement

- feat(split-view): generate proxy component and create demo [#16](https://github.com/tyler-technologies-oss/forge-angular/pull/16) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.2.0 (Tue Nov 29 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Alan Collins ([@Alanoll](https://github.com/Alanoll)), for all your work!

#### 🚀 Enhancement

- feat(peer-dependencies): allow Angular 15 [#14](https://github.com/tyler-technologies-oss/forge-angular/pull/14) ([@Alanoll](https://github.com/Alanoll))

#### Authors: 1

- Alan Collins ([@Alanoll](https://github.com/Alanoll))

---

# v2.1.0 (Tue Nov 08 2022)

#### 🚀 Enhancement

- feat: generate proxy components for Forge custom elements [#13](https://github.com/tyler-technologies-oss/forge-angular/pull/13) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.0.3 (Fri Aug 12 2022)

#### 🐛 Bug Fix

- fix(bottom-sheet): wait for close animation [#11](https://github.com/tyler-technologies-oss/forge-angular/pull/11) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.0.2 (Fri Jul 15 2022)

#### 🐛 Bug Fix

- fix(ButtonToggleGroupValueAccessor): fix to use correct event name from the group element for current value state [#10](https://github.com/tyler-technologies-oss/forge-angular/pull/10) ([@DRiFTy17](https://github.com/DRiFTy17))

#### Authors: 1

- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))

---

# v2.0.1 (Fri Jul 08 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz)), for all your work!

#### 🐛 Bug Fix

- fix(peer-dependencies): allow Angular 14 [#8](https://github.com/tyler-technologies-oss/forge-angular/pull/8) ([@MikeMatusz](https://github.com/MikeMatusz))

#### Authors: 1

- Mike Matuszak ([@MikeMatusz](https://github.com/MikeMatusz))

---

# v2.0.0 (Mon Jun 27 2022)

#### 🚀 Enhancement

- feat: oss prep [#7](https://github.com/tyler-technologies-oss/forge-angular/pull/7) ([@DRiFTy17](https://github.com/DRiFTy17))

#### ⚠️ Pushed to `main`

- chore: ensure project is built first when `npm start` script is executed ([@DRiFTy17](https://github.com/DRiFTy17))

#### Authors: 1

- Kieran Nichols ([@DRiFTy17](https://github.com/DRiFTy17))

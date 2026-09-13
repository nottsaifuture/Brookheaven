# Brookheaven · Mill Lane, Willaston

An independent, interactive Three.js reconstruction from the four supplied property references. Three furnished storeys, a detached garage, rear terrace, driveway, real stair openings and a guarded open-to-below hall.

The application uses vanilla JavaScript ES modules, Three.js, HTML, CSS and Vite. No React, TypeScript, JSX, remote model downloads, accounts or API keys are required.

## Run locally

Use Node.js 22.12+ and npm, then run these commands in this folder:

```sh
npm install
npm run dev
```

Open the address printed by Vite. To build and inspect the static website:

```sh
npm test
npm run build
npm run preview
```

Opening `index.html` directly from Finder will not run ES modules. Use the local server.

## Included interactions

- Orbit, zoom and pan; smooth exterior and room viewpoints.
- All, Ground, First, Second and Roof views; physical dollhouse cutaways.
- Animated exploded floors; roof visibility and opacity; front/rear/left/right cutaways.
- Selectable room surfaces and room menu, published room dimensions, selected-room dimension lines, two-point surface measurements in metres and millimetres.
- Furniture, labels, minimap and calibrated reference-plan overlays with adjustable opacity.
- Hinged doors with moving collision bounds; a walkable front approach and garage.
- First-person movement, turning stairs with smooth analytical ramp support, floor-edge protection and furnished-room collision.
- Day, evening and night lighting, including interior, façade, driveway and garden lights.
- Touch joystick and door button, with an explicit touch-control toggle for hybrid devices.
- Save-view image download, help, metre grid and collision-bound inspection.

Use **Tools** for room selection, measuring, cutaways and reference overlays. Turn on Dimensions and choose a room to inspect its printed dimensions without filling the entire view with labels. Measurements are straight-line distances between picked 3D points, not construction measurements. Reset or clear measurements before changing exploded-floor positions.

## Walking

The main Walkthrough button always starts on the driveway, facing the house. Portrait screens use a farther approach and wider field of view. Walk towards the entrance and open the door yourself.

- W/A/S/D or arrow keys: movement; Shift: faster pace.
- Drag the scene to look. Clicking can capture the mouse where supported.
- E or **Open / close door**: operate a nearby door.
- Escape: release mouse capture and stop current input.
- **Return to entrance**: restore the exterior starting point.
- **Exit walkthrough**: return to orbit.
- **Enter this room**: an explicitly chosen alternate room start, selected for collision clearance.

Walking works without pointer lock. Focus loss, key release and joystick cancellation stop movement. On touch devices the joystick and door button appear automatically; **Tools → Reference & inspection → Touch controls** toggles them manually.

## Coordinates, calibration and architectural interpretation

One world unit is one metre. X runs left-to-right across the plans; Z runs from the rear garden towards the front driveway. Finished floor levels are 0, 3.15 and 6.30 m. Wall heights, roof pitch and vertical dimensions are inferred.

Reference calibration and alignment are in `src/data/houseData.js`:

| Reference | Approximate scale | Alignment |
| --- | --- | --- |
| Ground Floor.png | 32.5 pixels/metre | Ground rear-left corner at image pixel 454,26 |
| First Floor.png | 63.3 pixels/metre | Rear upper wall offset 3.40 m from ground rear wall |
| Second Floor.png | 57 pixels/metre | Roof-room trace aligned to the central upper stair |

Printed dimensions are preserved as metadata, including irregular rooms whose maximum dimensions include bays or recesses. Main rectangular room zones are selection/fit-out bounds; they do not claim survey accuracy. The supplied plan states approximately 411 m² internal, 7 m² open to below, and 50 m² garage. These are reference figures, not area totals independently certified from the model.

The central void and stair openings are omitted from actual floor slabs and matching finishes/ceilings. The first stair uses a quarter-turn lower approach and upper flight; the stair to the roof floor uses three turning flights. Ramp surfaces provide smooth support over visible treads. The shared hall and landing circulation was tested with a 0.28 m player radius and 1.70 m body height.

The model is an architectural interpretation, not a measured digital twin or construction document. Raster-plan alignment, internal door offsets/swings, the principal-suite vestibule, stair construction and dormer alignment are approximate. The attic geometry is trimmed to a hipped roof envelope, with dormer openings and reduced-headroom zones. Site boundaries, the longer viewing approach, landscaping, lights, fixtures and furniture are illustrative. Procedural geometry and materials prioritise interactivity over photorealism. Ground-floor oak flooring follows the user's styling preference; WC/shower areas use tile.

Source listing: https://bortramluxuryestate.co.uk/property/mill-lane-willaston-ch64/

This independent demonstration is not affiliated with or endorsed by Bortram Luxury Estate. The four reference images are the user-supplied project materials. Three.js licensing is in `THIRD-PARTY-LICENSES.md`.

## Validation

Seven automated tests pass:

1. Held keyboard and joystick movement, release/cancel and blur without pointer lock.
2. Shared slab and finish hole definitions.
3. Closed-door blocking and open-door passage at the entrance.
4. Continuous ascent to both upper floors and descent to the ground floor.
5. Five bedroom records, metric dimensions and usable door widths.
6. No upper-floor support across the open-to-below void.
7. Furnished floor circulation reaches every room from its hall/landing, with doors open.

These tests construct the actual model and collision world. The circulation test samples 12 cm routes using the production movement solver. They do not certify architectural measurements, photorealism or a flicker-free rendered stair journey.

Browser inspection covered the exterior, floor isolation, labels, selected-room dimensions, a two-point surface measurement, minimap, exploded-view reset, room views, walkthrough start and responsive controls. The production output was also loaded successfully under `/Brookheaven-Web/`, a repository-style subdirectory. Viewport checks used phone 390×844 / 844×390 and tablet 820×1180 / 1180×820 sizes. These are desktop browser viewport checks, not physical-device or touch-emulator certification. Joystick dragging and its nearby-door prompt were exercised with browser pointer input. The available browser tool cannot sustain a held key or simultaneous touch contacts, so the complete manual entrance/stair journey and moving stair-flicker check remain unverified. Automated input and navigation tests supplement that limitation; they do not replace it.

## GitHub Pages

The project is prepared for later upload; it has not been published.

`vite.config.js` sets `base: './'`. Three.js and application assets are bundled locally; references use relative paths.

For a source repository, upload this folder without `node_modules` or `dist`. Set **Settings → Pages → Source → GitHub Actions**, then run the included **Deploy Brookheaven** workflow (or push to `main`). It installs dependencies, tests, builds and deploys only `dist/` as the website.

For built-output-only hosting, upload the contents of the companion `Brookheaven-Web` folder to a deployment repository/branch. It includes `.nojekyll`. No npm installation is needed for those static files. The separate source archive contains the editable project.

## Source structure

- `src/data/houseData.js`: metric coordinates, wall openings, room metadata, floor polygons, holes, stairs and calibration.
- `src/house/`: segmented walls, openings, doors, floor decomposition, roof, garage and site.
- `src/furniture/`: coordinated beds, wardrobes, kitchen and sanitaryware assemblies.
- `src/materials/`: locally generated materials and textures.
- `src/collision/`: static bounds, moving door bounds, stair support and floor-edge protection.
- `src/controls/`: keyboard, pointer and joystick input.
- `src/main.js`: scene lifecycle, presentation, tools, labels, minimap and lighting.
- `public/references/`: supplied drawings and exterior reference.
- `tests/`: input and actual-geometry navigation tests.

To replace textures, add local files under `public/textures/` and load them with relative URLs. Optional future GLTF furniture belongs under `public/models/`. The current model needs no external assets.

Inspection shortcuts outside walkthrough: G = metre grid, B/C = collision bounds, F = reference plan, R = room labels, P = camera coordinates. They are hidden by default. Keep the floor-hole definitions, ceiling decomposition and stair data aligned when editing the plan, then rerun the tests.

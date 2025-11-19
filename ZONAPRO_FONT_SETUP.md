# ZonaPro Font Integration - Setup Complete ✅

## What Has Been Done

1. ✅ Created `/public/fonts/` directory for font files
2. ✅ Added `@font-face` declarations in `src/index.css` for:
   - ZonaPro Regular (400)
   - ZonaPro Medium (500)
   - ZonaPro SemiBold (600)
   - ZonaPro Bold (700)
3. ✅ Updated `tailwind.config.ts` to include ZonaPro:
   - Added `font-zonapro` utility class
   - Set ZonaPro as default sans-serif font
4. ✅ Updated `src/index.css` to apply ZonaPro to body by default
5. ✅ Updated `DESIGN_GUIDELINES.md` with ZonaPro information

## Next Steps - Add Font Files

**You need to add the ZonaPro font files to `/public/fonts/` directory:**

### Required Files:
```
/public/fonts/
  ├── ZonaPro-Regular.woff2    (or .woff / .ttf)
  ├── ZonaPro-Medium.woff2     (or .woff / .ttf)
  ├── ZonaPro-SemiBold.woff2   (or .woff / .ttf)
  └── ZonaPro-Bold.woff2       (or .woff / .ttf)
```

### How to Get Font Files:

1. **If you have the font files (.ttf or .otf):**
   - Convert them to web formats using:
     - [CloudConvert](https://cloudconvert.com/)
     - [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
   - Name them exactly as shown above
   - Place them in `/public/fonts/`

2. **If you need to purchase/download:**
   - Visit the official ZonaPro font website
   - Purchase/download the font files
   - Convert to web formats if needed

## Usage

### Automatic (Default)
ZonaPro is now the default font for the entire website. All text will use ZonaPro unless explicitly overridden.

### Explicit Usage
You can also use ZonaPro explicitly with Tailwind classes:

```tsx
// Default weight (400)
<div className="font-zonapro">Regular text</div>

// Different weights
<div className="font-zonapro font-normal">Regular (400)</div>
<div className="font-zonapro font-medium">Medium (500)</div>
<div className="font-zonapro font-semibold">SemiBold (600)</div>
<div className="font-zonapro font-bold">Bold (700)</div>
```

### Fallback Fonts
If ZonaPro files are not found, the browser will fall back to:
1. Poppins (for headings)
2. Inter (for body text)
3. System sans-serif fonts

## Current Component Font Usage

Most components currently use `font-poppins` for headings and `font-inter` for body text. These will continue to work, but you can optionally update them to use `font-zonapro` if you want to ensure ZonaPro is used everywhere.

**Components using explicit fonts:**
- Hero, CourseFinder, Statistics, FeatureCards, StudentTestimonials, FAQ, CourseCard, ContactBlock, Footer, ParamedicalSpotlight

**To update components to use ZonaPro explicitly:**
- Replace `font-poppins` with `font-zonapro` for headings
- Replace `font-inter` with `font-zonapro` for body text
- Or remove the font classes to use the default ZonaPro

## Testing

After adding the font files:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Check the browser:**
   - Open DevTools → Network tab
   - Look for font file requests
   - Verify fonts are loading correctly

3. **Verify font rendering:**
   - Check that text displays in ZonaPro
   - Test different font weights
   - Verify on different browsers

## Troubleshooting

### Fonts not loading?
- Check file names match exactly (case-sensitive)
- Verify files are in `/public/fonts/` directory
- Check browser console for 404 errors
- Ensure file formats are supported (.woff2, .woff, or .ttf)

### Font not displaying?
- Clear browser cache
- Check if font files are accessible (try direct URL: `http://localhost:5173/fonts/ZonaPro-Regular.woff2`)
- Verify @font-face declarations in DevTools → Elements → Computed

### Need different weights?
- Add additional @font-face declarations in `src/index.css`
- Update file names accordingly
- Add to Tailwind config if needed

## Files Modified

1. `src/index.css` - Added @font-face declarations
2. `tailwind.config.ts` - Added ZonaPro to fontFamily
3. `DESIGN_GUIDELINES.md` - Updated typography section
4. `public/fonts/README.md` - Installation instructions

## Support

For issues or questions about font integration, refer to:
- `/public/fonts/README.md` - Detailed installation guide
- `DESIGN_GUIDELINES.md` - Typography guidelines


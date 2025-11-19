# ZonaPro Font Installation

## Font Files Required

Place the following ZonaPro font files in this directory (`/public/fonts/`):

### Required Files:
- `ZonaPro-Regular.woff2` (or `.woff` / `.ttf`)
- `ZonaPro-Medium.woff2` (or `.woff` / `.ttf`)
- `ZonaPro-SemiBold.woff2` (or `.woff` / `.ttf`)
- `ZonaPro-Bold.woff2` (or `.woff` / `.ttf`)

## File Formats Priority

The font declarations support multiple formats in this order:
1. `.woff2` (preferred - best compression)
2. `.woff` (fallback)
3. `.ttf` (fallback)

## Installation Steps

1. **Obtain ZonaPro font files** from your font provider or purchase them
2. **Convert to web formats** (if needed):
   - Use online tools like [CloudConvert](https://cloudconvert.com/) or [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
   - Convert `.ttf` or `.otf` files to `.woff2` and `.woff` formats
3. **Place files in this directory** (`/public/fonts/`)
4. **Verify file names match exactly**:
   - ZonaPro-Regular.woff2
   - ZonaPro-Medium.woff2
   - ZonaPro-SemiBold.woff2
   - ZonaPro-Bold.woff2

## Usage

Once the font files are in place, ZonaPro will automatically be used across the website as the default font. You can also use it explicitly with:

```tsx
// Default (already applied to body)
<div>Text uses ZonaPro by default</div>

// Explicit usage
<div className="font-zonapro">ZonaPro font</div>

// With weights
<div className="font-zonapro font-normal">Regular (400)</div>
<div className="font-zonapro font-medium">Medium (500)</div>
<div className="font-zonapro font-semibold">SemiBold (600)</div>
<div className="font-zonapro font-bold">Bold (700)</div>
```

## Font Configuration

The font is configured in:
- `src/index.css` - @font-face declarations
- `tailwind.config.ts` - Tailwind font family configuration

## Notes

- The font uses `font-display: swap` for better performance
- ZonaPro is set as the default sans-serif font
- Poppins and Inter remain as fallback fonts


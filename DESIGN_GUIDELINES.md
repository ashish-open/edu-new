# Design Guidelines - Confidence Group of Institutions

This document outlines the design system and guidelines for maintaining consistency across the project.

## Color System

All colors are defined in `src/index.css` using CSS variables (HSL format). **Never use hardcoded hex/rgb values directly in components.**

### Primary Colors

- **Primary (Bright Blue)**: `#2196F3` - HSL(210, 100%, 57%)
  - Used for: Main buttons, links, primary CTAs, focus states
  - Tailwind: `bg-primary`, `text-primary`, `border-primary`

- **Secondary (Deep Dark Blue/Indigo)**: `#1A237E` - HSL(240, 65%, 28%)
  - Used for: Headings, text, secondary elements
  - Tailwind: `bg-secondary`, `text-secondary`, `border-secondary`

### Accent Colors

- **Accent (Green)**: `#4CAF50` - HSL(122, 39%, 50%)
  - Used for: Paramedical sections, success states
  - Tailwind: `bg-accent`, `text-accent`, `border-accent`

- **Orange**: `#FF9800` - HSL(36, 100%, 50%)
  - Used for: Consultancy sections, warning states
  - Tailwind: `bg-orange`, `text-orange`, `border-orange`

- **Yellow/Gold**: `#FFD700` - HSL(51, 100%, 50%)
  - Used for: Highlights, special promotions
  - Tailwind: `bg-yellow`, `text-yellow`, `border-yellow`

- **Magenta/Purple**: `#E91E63` - HSL(340, 81%, 51%)
  - Used for: Special accents, featured content
  - Tailwind: `bg-magenta`, `text-magenta`, `border-magenta`

## Gradients

### Brand Gradients

Use these utility classes for consistent gradient backgrounds:

- `.bg-gradient-brand` - Horizontal gradient (dark blue → bright blue)
- `.bg-gradient-brand-vertical` - Vertical gradient
- `.bg-gradient-brand-diagonal` - Diagonal gradient (135deg)
- `.bg-gradient-brand-purple` - Gradient with purple hint

### Section-Specific Gradients

For hero sections, use these patterns:

- **Primary sections**: `bg-gradient-to-br from-primary to-primary/80`
- **Paramedical sections**: `bg-gradient-to-br from-accent to-accent/80`
- **Consultancy sections**: `bg-gradient-to-br from-orange to-orange/80`

## Typography

### Font Families

- **ZonaPro**: Primary font family used across the website (`font-zonapro`)
  - Default sans-serif font (applied to body)
  - Available weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Poppins**: Fallback for headings (`font-poppins`)
- **Inter**: Fallback for body text (`font-inter`)

### Font Sizes

Use Tailwind's responsive typography scale:
- Headings: `text-4xl md:text-5xl lg:text-6xl`
- Subheadings: `text-2xl md:text-3xl`
- Body: `text-base` or `text-lg`
- Small text: `text-sm`

## Spacing & Layout

### Container

- Standard container: `container mx-auto px-4 max-w-[1220px]`
- All sections should use consistent padding: `py-16` for main sections

### Spacing Scale

Use Tailwind's spacing scale consistently:
- Small gaps: `gap-2`, `gap-3`
- Medium gaps: `gap-4`, `gap-6`
- Large gaps: `gap-8`, `gap-12`

## Components

### Buttons

- Primary: `bg-primary text-primary-foreground hover:bg-primary/90`
- Secondary: `bg-secondary text-secondary-foreground hover:bg-secondary/80`
- Accent: `bg-accent hover:bg-accent/90`

### Cards

- Background: `bg-white` or `bg-card`
- Shadow: `shadow-lg hover:shadow-xl`
- Border radius: `rounded-xl`

### Overlays

- Hero overlays: `bg-overlay-secondary` (uses brand secondary color)
- Modal overlays: `bg-black/80` (acceptable for UI components)

## Best Practices

1. **Always use theme variables** - Never hardcode colors
2. **Use Tailwind classes** - Prefer utility classes over custom CSS
3. **Maintain consistency** - Follow existing patterns in the codebase
4. **Responsive design** - Always use responsive classes (`md:`, `lg:`, etc.)
5. **Accessibility** - Ensure proper contrast ratios for text on colored backgrounds

## Common Patterns

### Hero Section
```tsx
<section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
  <div className="container mx-auto px-4 max-w-[1220px]">
    {/* Content */}
  </div>
</section>
```

### Info Cards
```tsx
<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
  {/* Card content */}
</div>
```

### Section Spacing
```tsx
<section className="py-16 bg-background">
  <div className="container mx-auto px-4 max-w-[1220px]">
    {/* Content */}
  </div>
</section>
```

## Files to Update When Changing Theme

1. `src/index.css` - CSS variables and utilities
2. `tailwind.config.ts` - Tailwind color configuration
3. Component files - Update to use new theme variables

## Avoiding Conflicts

- ✅ Use CSS variables from `index.css`
- ✅ Use Tailwind utility classes
- ✅ Follow existing component patterns
- ❌ Don't hardcode hex/rgb colors
- ❌ Don't create duplicate color definitions
- ❌ Don't use inline styles for colors


import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Understanding Laptop Hardware - Laptick',
  description: 'Learn about CPU, GPU, RAM, SSD, Displays, and Battery specs simply explained.',
}

export default function UnderstandingPage() {
  return (
    <div className="laptick-themed-page">
      <article className="mx-auto max-w-4xl space-y-16 px-4 pb-16 pt-8 sm:px-6">

        {/* Hero */}
        <div style={{ paddingBlock: 'clamp(1.5rem, 5vw, 4rem)' }}>
          <p className="themed-eyebrow">Understanding Hardware</p>
          <h1 className="themed-heading mt-4">
            Every spec matters, but not all specs matter equally.
          </h1>
          <p className="themed-subtext mt-6" style={{ maxWidth: 720 }}>
            A fast CPU with insufficient RAM still feels slow. A powerful GPU without proper cooling performs worse.
            This guide explains what actually affects your laptop's performance — and what's just marketing.
          </p>
        </div>

        {/* Hardware Guide */}
        <section className="space-y-8">
          <h2 className="themed-section-heading">The 6 Components That Matter</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* CPU */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #1</span>
              <strong className="themed-card-title">CPU (Processor)</strong>
              <p className="themed-card-body">The brain that executes all your instructions. Intel/AMD (x86) dominates gaming and software. Apple Silicon (ARM) excels at battery life.</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>Clock Speed (GHz)</strong> — more cores help multitasking, faster cores help single-task speed.</p>
              </div>
            </div>

            {/* GPU */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #2</span>
              <strong className="themed-card-title">GPU (Graphics)</strong>
              <p className="themed-card-body">Powers gaming, video editing, and AI/ML training. Integrated GPUs (okay for basics). Dedicated GPUs (needed for creative work).</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>VRAM (2GB–24GB)</strong> + <strong>TGP (20–150W)</strong> — more VRAM for AI/professional, higher TGP for gaming.</p>
              </div>
            </div>

            {/* RAM */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #3</span>
              <strong className="themed-card-title">RAM (Memory)</strong>
              <p className="themed-card-body">Your active workspace. 8GB feels slow if you multitask. 16GB is the sweet spot for most. 32GB+ for video editors and AI folks.</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>Capacity + Speed</strong> — DDR5 beats DDR4, faster memory = snappier responsiveness.</p>
              </div>
            </div>

            {/* Storage */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #4</span>
              <strong className="themed-card-title">Storage (SSD)</strong>
              <p className="themed-card-body">NVMe SSDs are standard now (7x faster than old SATA). 512GB feels tight if you video edit. 1TB+ recommended for creators.</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>Gen4 NVMe (7000 MB/s)</strong> vs Gen3 (3500 MB/s) — barely noticeable in real use, but Gen4 is standard now.</p>
              </div>
            </div>

            {/* Display */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #5</span>
              <strong className="themed-card-title">Display</strong>
              <p className="themed-card-body">What you stare at matters most. 1080p works. 1440p is sharper. High refresh rates (120Hz+) feel smooth for gaming.</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>300+ nits brightness</strong> + color gamut (sRGB for creators). Outdoors visibility matters.</p>
              </div>
            </div>

            {/* Battery */}
            <div className="themed-card space-y-3">
              <span className="themed-card-label">Component #6</span>
              <strong className="themed-card-title">Battery</strong>
              <p className="themed-card-body">Expect 8–12 hours with light work on modern laptops. Gaming kills it (2–4 hours). ARM chips win on battery.</p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid hsl(0 0% 85%)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase', color: 'hsl(0 0% 35%)' }}>
                  Key Spec
                </p>
                <p className="themed-card-body"><strong>Capacity (Wh)</strong> + efficiency — ARM &gt; x86 for real-world battery life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insight */}
        <div className="themed-card space-y-4" style={{ background: '#d9ff3f' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 950, margin: 0 }}>The Real Talk</h3>
          <div className="space-y-2 themed-card-body">
            <p><strong>A perfect CPU means nothing without enough RAM.</strong> You'll notice sluggishness if you multitask.</p>
            <p><strong>A beautiful 4K display kills battery life.</strong> Weight and portability matter more than pixel count if you're mobile.</p>
            <p><strong>A powerful GPU won't save a bad display.</strong> Colors matter for design work, refresh rate matters for gaming.</p>
            <p><strong>The best laptop balances all six,</strong> not just one or two. Budget forces tradeoffs — that's fine. Just know what you're trading.</p>
          </div>
          <Link href="/find-my-laptop" className="themed-primary-action" style={{ background: 'hsl(0 0% 2%)', color: '#d9ff3f' }}>
            Find Your Laptop <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>

      </article>
    </div>
  )
}

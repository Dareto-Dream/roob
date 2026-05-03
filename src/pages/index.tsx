import Head from "next/head";
import Image from "next/image";

const channelUrl = "https://www.youtube.com/@ineedroob";
const channelId = "UCBSCGCyviL-QVTPVnePzXJg";
const avatarUrl =
  "https://yt3.googleusercontent.com/D32QW0nCsf6d31uNBjGZiJJ80o-taEWhIbrIJ0Mo40z9YOtAq6fX5WR7b27IuoLAAgXzFYCS3w=s900-c-k-c0x00ffffff-no-rj";

const recentVideos = [
  {
    id: "2mCPa4MbuE4",
    title: "Brooklyn guy after TikTok",
    category: "Comedy short",
    published: "Apr 5, 2026",
    updated: "Updated Apr 29, 2026",
    views: "1.2K",
    href: "https://www.youtube.com/shorts/2mCPa4MbuE4",
  },
  {
    id: "V7J0rhXmeuk",
    title: "Beating Minecraft on Roblox",
    category: "Roblox challenge short",
    published: "Mar 12, 2026",
    updated: "Updated Apr 30, 2026",
    views: "1.2K",
    href: "https://www.youtube.com/shorts/V7J0rhXmeuk",
  },
  {
    id: "vqZSy656xLA",
    title: "Wild Roblox chat messages",
    category: "Roblox reaction short",
    published: "Feb 19, 2026",
    updated: "Updated Apr 29, 2026",
    views: "984",
    href: "https://www.youtube.com/shorts/vqZSy656xLA",
  },
  {
    id: "N4leXH3g9YU",
    title: "Can I beat 10 bots in CS2?",
    category: "First-time gameplay",
    published: "Jan 17, 2026",
    updated: "Updated Apr 7, 2026",
    views: "296",
    href: "https://www.youtube.com/watch?v=N4leXH3g9YU",
  },
  {
    id: "0wru7ShkugU",
    title: "Backrooms jumpstyle edit",
    category: "Roblox edit short",
    published: "Nov 17, 2025",
    updated: "Updated Apr 28, 2026",
    views: "2.0K",
    href: "https://www.youtube.com/shorts/0wru7ShkugU",
  },
  {
    id: "D0x1bM2iIvk",
    title: "This game lost 20 million players",
    category: "Roblox trend report",
    published: "Sep 3, 2025",
    updated: "Updated Apr 29, 2026",
    views: "34.0K",
    href: "https://www.youtube.com/shorts/D0x1bM2iIvk",
  },
];

const stats = [
  ["6", "recent feed posts"],
  ["39.7K", "views across latest six"],
  ["2019", "channel started"],
];

const formats = [
  "Roblox shorts with quick premises and immediate payoff.",
  "Gaming videos that can shift between Roblox, CS2, and experiments.",
  "Reaction-led hooks built around strange chat, trends, and player moments.",
  "Random-content energy, edited for fast browsing and replay.",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>roob | Roblox Content Creator</title>
        <meta
          name="description"
          content="A black and white portfolio for Roob, a small Roblox and gaming content creator on YouTube."
        />
      </Head>

      <div className="site-shell">
        <header className="topbar" aria-label="Primary">
          <a className="wordmark" href="#top" aria-label="roob home">
            roob
          </a>
          <nav className="nav-links" aria-label="Portfolio sections">
            <a href="#work">Work</a>
            <a href="#feed">Feed</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="channel-link"
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
          >
            @ineedroob
          </a>
        </header>

        <main id="top">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">Roblox and gaming creator</p>
              <h1 id="hero-title">roob</h1>
              <p className="hero-lede">
                Roblox shorts, gaming experiments, quick reactions, and random
                content made for quick scrolls.
              </p>
              <div className="hero-actions" aria-label="Main actions">
                <a
                  className="primary-action"
                  href={channelUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Channel
                </a>
                <a className="secondary-action" href="#feed">
                  Latest Feed
                </a>
              </div>
            </div>

            <aside className="creator-panel" aria-label="Creator profile">
              <div className="avatar-wrap">
                <Image
                  src={avatarUrl}
                  alt="roob YouTube channel avatar"
                  fill
                  sizes="(max-width: 760px) 180px, 260px"
                  preload
                />
              </div>
              <div className="creator-meta">
                <p>Channel</p>
                <strong>Roob</strong>
                <span>youtube.com/@ineedroob</span>
              </div>
            </aside>
          </section>

          <section className="stats-strip" aria-label="Channel snapshot">
            {stats.map(([value, label]) => (
              <div className="stat-item" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </section>

          <section className="split-section" id="work" aria-labelledby="work-title">
            <div className="section-kicker">
              <span>01</span>
              <p>Creator Direction</p>
            </div>
            <div className="work-copy">
              <h2 id="work-title">Small channel. Sharp repeat formats.</h2>
              <p>
                roob works best in fast gaming content: recognizable Roblox
                setups, reaction hooks, trend timing, and loose experiments
                that do not need long context.
              </p>
            </div>
            <div className="format-list" aria-label="Content formats">
              {formats.map((format) => (
                <div className="format-row" key={format}>
                  <span />
                  <p>{format}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="feed-section" id="feed" aria-labelledby="feed-title">
            <div className="feed-heading">
              <div>
                <p className="eyebrow">Latest public feed</p>
                <h2 id="feed-title">Recent Shorts</h2>
              </div>
              <p>
                Pulled from the public YouTube feed for channel {channelId}.
              </p>
            </div>

            <div className="video-ledger">
              {recentVideos.map((video, index) => (
                <a
                  className="video-row"
                  href={video.href}
                  key={video.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="row-index">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="thumb-wrap">
                    <Image
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`${video.title} thumbnail`}
                      fill
                      sizes="(max-width: 760px) 96px, 160px"
                    />
                  </div>
                  <div className="video-title">
                    <strong>{video.title}</strong>
                    <span>{video.category}</span>
                  </div>
                  <div className="video-date">
                    <span>{video.published}</span>
                    <span>{video.updated}</span>
                  </div>
                  <div className="video-views">{video.views}</div>
                </a>
              ))}
            </div>
          </section>

          <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-title"
          >
            <p className="eyebrow">For collabs and shoutouts</p>
            <h2 id="contact-title">Bring roob into the next gaming bit.</h2>
            <a
              className="contact-button"
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open YouTube
            </a>
          </section>
        </main>
      </div>
    </>
  );
}

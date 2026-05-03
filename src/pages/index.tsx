import Head from "next/head";
import Image from "next/image";

const channelUrl = "https://www.youtube.com/@ineedrobuxx";
const avatarUrl =
  "https://yt3.googleusercontent.com/DIqeFLpi8W28aeKQnVJaYbY8uGg-uwILTyBXXEo7_45tGKswAlHzhOW8hDJ5dpjYEN6BN4Get3g=s900-c-k-c0x00ffffff-no-rj";

const recentVideos = [
  {
    id: "4Y3IYS98fwY",
    title: "Let's see...",
    category: "Roblox comedy short",
    published: "Dec 3, 2025",
    updated: "Updated Apr 14, 2026",
    views: "1.4K",
  },
  {
    id: "fXlV2w4-a9E",
    title: "Let's see",
    category: "Funny Roblox moment",
    published: "Dec 2, 2025",
    updated: "Updated Apr 22, 2026",
    views: "2.0K",
  },
  {
    id: "LrADrzgY2x8",
    title: "Let's see",
    category: "Trend short",
    published: "Dec 1, 2025",
    updated: "Updated Jan 1, 2026",
    views: "2.1K",
  },
  {
    id: "7ZfrBDaooSc",
    title: "Roblox music bit",
    category: "Money / games short",
    published: "Nov 28, 2025",
    updated: "Updated Dec 28, 2025",
    views: "1.7K",
  },
  {
    id: "_hwA23Dl_Ig",
    title: "Christmas Roblox clip",
    category: "Seasonal funny short",
    published: "Nov 27, 2025",
    updated: "Updated Apr 30, 2026",
    views: "2.3K",
  },
  {
    id: "5nyGSDoDPLY",
    title: "Robux short",
    category: "Roblox viral format",
    published: "Nov 26, 2025",
    updated: "Updated Apr 26, 2026",
    views: "1.7K",
  },
];

const stats = [
  ["6", "recent feed posts"],
  ["11.2K", "views across latest six"],
  ["2023", "channel started"],
];

const formats = [
  "Roblox Shorts with fast setup and simple payoff.",
  "PLS Donate and Robux-themed moments.",
  "Seasonal clips built around trend timing.",
  "Quick captions, punchy loops, and replayable beats.",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>roob | Roblox Content Creator</title>
        <meta
          name="description"
          content="A black and white portfolio for roob, a small Roblox Shorts creator on YouTube."
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
            @ineedrobuxx
          </a>
        </header>

        <main id="top">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">Roblox shorts creator</p>
              <h1 id="hero-title">roob</h1>
              <p className="hero-lede">
                Fast Roblox clips, simple jokes, donation-game moments, and
                trend-led shorts made for quick scrolls.
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
                <strong>Donatemerobux</strong>
                <span>youtube.com/@ineedrobuxx</span>
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
                roob keeps the strongest lane in short-form Roblox:
                recognizable tags,
                simple setups, seasonal timing, and funny in-game moments that
                do not need long context.
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
                Pulled from the public YouTube feed for channel
                UCp-jXdgabcSpiVODsHeaQfg.
              </p>
            </div>

            <div className="video-ledger">
              {recentVideos.map((video, index) => (
                <a
                  className="video-row"
                  href={`https://www.youtube.com/shorts/${video.id}`}
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
            <h2 id="contact-title">Bring roob into the next Roblox bit.</h2>
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

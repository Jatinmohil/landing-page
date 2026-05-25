// Remote imagery (Unsplash CDN). SmartImage gracefully falls back to a
// themed gradient tile if any URL fails to load.
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const HERO_IMAGE = u('1548550023-2bdb3c5beed7', 1200)

export const GALLERY = [
  u('1548550023-2bdb3c5beed7'),
  u('1612170153139-6f881ff067e0'),
  u('1569428034239-f9565e32e224'),
  u('1516467508483-a7212febe31a'),
  u('1500595046743-cd271d694d30'),
  u('1574323347407-f5e1ad6d020b'),
  u('1591857177580-dc82b9ac4e1e'),
  u('1518492104633-130d0cc84637'),
]

export const TESTIMONIAL_AVATARS = [
  u('1599566150163-29194dcaad36', 200),
  u('1607990281513-2c110a25bd8c', 200),
  u('1438761681033-6461ffad8d80', 200),
  u('1500648767791-00dcc994a43e', 200),
]

export const TRANSFORM = {
  before: u('1500382017468-9049fed747ef', 1000),
  after: u('1569428034239-f9565e32e224', 1000),
}

export const REELS = [
  u('1612170153139-6f881ff067e0', 600),
  u('1516467508483-a7212febe31a', 600),
  u('1591857177580-dc82b9ac4e1e', 600),
  u('1518492104633-130d0cc84637', 600),
]

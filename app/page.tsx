"use client";

import { useState, useRef, useEffect } from "react";

const MonoCode = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-gray-900 text-green-300 rounded-lg p-3 text-xs leading-relaxed overflow-hidden font-mono">
    {children}
  </pre>
);

const Tag = ({
  color = "indigo",
  children,
}: {
  color?: "indigo" | "green" | "orange" | "red";
  children: React.ReactNode;
}) => {
  const colors = {
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    green: "bg-green-100 text-green-700 border-green-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded border ${colors[color]}`}
    >
      {children}
    </span>
  );
};

const SlideHeader = ({
  tag,
  title,
}: {
  tag: string;
  title: string;
}) => (
  <div className="mb-5">
    <p className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-1">
      {tag}
    </p>
    <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
      {title}
    </h2>
    <div className="w-10 h-0.5 bg-indigo-500 rounded mt-2" />
  </div>
);

// ── Individual Slides ──────────────────────────────────────────

const Slide1 = () => (
  <div
    className="flex flex-col items-center justify-center h-full text-center px-12"
    style={{
      background:
        "linear-gradient(135deg,#0f0f0f,#1a1a2e,#16213e)",
    }}
  >
    <span className="text-xs font-bold tracking-widest uppercase border border-white/20 text-white/70 px-4 py-1.5 rounded-full mb-6">
      Full-Stack Workshop · 2 Days
    </span>
    <h1
      className="text-5xl font-extrabold text-white leading-tight mb-4"
      style={{ letterSpacing: "-1px" }}
    >
      Building a <span className="text-emerald-400">Medium Clone</span>
    </h1>
    <p className="text-lg text-white/50 mb-8">
      Learn full-stack development with Next.js, Prisma & SQLite
    </p>
    <div className="flex gap-2 flex-wrap justify-center">
      {[
        "⚡ Next.js 14",
        "🗄️ SQLite",
        "🔐 JWT",
        "🎨 Tailwind CSS",
        "✍️ Tiptap Editor",
      ].map((t) => (
        <span
          key={t}
          className="text-xs text-white/60 border border-white/15 bg-white/5 px-3 py-1.5 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

const Slide2 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Project Overview" title="What We're Building" />
    <div className="grid grid-cols-3 gap-4 flex-1">
      {[
        {
          icon: "📝",
          label: "Must Have",
          color: "indigo" as const,
          title: "Core Features",
          items: [
            "Register & Login",
            "Write articles (rich text)",
            "Article feed (homepage)",
            "Read article page",
            "User profile page",
          ],
        },
        {
          icon: "⚡",
          label: "Nice to Have",
          color: "green" as const,
          title: "Bonus Features",
          items: [
            "Like articles",
            "Tags / Categories",
            "Follow other users",
          ],
        },
        {
          icon: "✂️",
          label: "Out of Scope",
          color: "red" as const,
          title: "Not This Time",
          items: [
            "Comment system",
            "Paywall / Members",
            "Notifications",
            "Search",
          ],
        },
      ].map((c) => (
        <div
          key={c.title}
          className="bg-slate-50 border border-slate-100 rounded-xl p-4"
        >
          <div className="text-2xl mb-2">{c.icon}</div>
          <Tag color={c.color}>{c.label}</Tag>
          <h3 className="text-sm font-bold text-gray-900 mt-2 mb-2">
            {c.title}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {c.items.map((i) => (
              <li key={i} className="text-xs text-gray-500">
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Slide3 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Technology" title="Tech Stack Overview" />
    <div className="grid grid-cols-4 gap-3 flex-1">
      {[
        {
          icon: "⚛️",
          name: "Next.js 14",
          desc: "Framework for React. Frontend UI + Backend API in one project.",
        },
        {
          icon: "🗄️",
          name: "SQLite",
          desc: "File-based database. Stores users, articles, all data in one file.",
        },
        {
          icon: "🔷",
          name: "Prisma ORM",
          desc: "Query DB with TypeScript. No raw SQL needed.",
        },
        {
          icon: "🔐",
          name: "JWT (jose)",
          desc: "Sign & verify tokens. Stateless auth — no session storage needed.",
        },
        {
          icon: "🎨",
          name: "Tailwind CSS",
          desc: "Utility-first CSS. Style directly in JSX without CSS files.",
        },
        {
          icon: "✍️",
          name: "Tiptap Editor",
          desc: "Rich text editor — like a mini Google Docs in your app.",
        },
        {
          icon: "🟢",
          name: "SQLite (file)",
          desc: "Single file. No cloud or server setup required.",
        },
        {
          icon: "🔑",
          name: "bcrypt",
          desc: "Hash passwords before storing. Never save plaintext passwords.",
        },
      ].map((s) => (
        <div
          key={s.name}
          className="bg-slate-50 border border-slate-100 rounded-xl p-3"
        >
          <div className="text-xl mb-1">{s.icon}</div>
          <h3 className="text-xs font-bold text-gray-900 mb-1">{s.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SlideSection = ({
  num,
  tag,
  title,
}: {
  num: string;
  tag: string;
  title: string;
}) => (
  <div
    className="flex flex-col items-center justify-center h-full text-center"
    style={{ background: "linear-gradient(135deg,#f8f9ff,#ede9ff)" }}
  >
    <div className="text-8xl font-black text-indigo-100 leading-none mb-2">
      {num}
    </div>
    <p className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-2">
      {tag}
    </p>
    <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
  </div>
);

const Slide5 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader
      tag="Architecture"
      title="Frontend vs Backend — How They Connect"
    />
    <div className="flex-1 flex items-center">
      <div className="grid grid-cols-3 gap-4 w-full items-center">
        {/* Frontend */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
          <h4 className="text-sm font-extrabold text-gray-900 mb-3">
            🖥️ Frontend (Browser)
          </h4>
          {[
            "React Components (.tsx)",
            "Tailwind CSS Styling",
            "Tiptap Editor",
            "useState / useEffect",
            "fetch() API calls",
          ].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-slate-100 rounded-lg px-2 py-1.5 mb-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
              <span className="text-xs text-gray-700">{i}</span>
            </div>
          ))}
          <div className="mt-2 bg-indigo-50 rounded-lg p-2">
            <p className="text-xs text-indigo-600 font-semibold">
              📁 app/(main)/**/page.tsx
            </p>
            <p className="text-xs text-indigo-600">📁 components/**</p>
          </div>
        </div>
        {/* Middle */}
        <div className="flex flex-col items-center gap-3">
          <div className="bg-indigo-500 text-white text-xs font-bold rounded-xl px-4 py-3 text-center">
            HTTP Request
            <br />
            <span className="opacity-70 font-normal">
              GET / POST / PUT / DELETE
            </span>
          </div>
          <span className="text-2xl text-gray-400">⟷</span>
          <div className="bg-emerald-500 text-white text-xs font-bold rounded-xl px-4 py-3 text-center">
            JSON Response
            <br />
            <span className="opacity-70 font-normal">{`{ data: [...] }`}</span>
          </div>
        </div>
        {/* Backend */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
          <h4 className="text-sm font-extrabold text-gray-900 mb-3">
            ⚙️ Backend (Server)
          </h4>
          {[
            "API Routes (route.ts)",
            "JWT Token Verification",
            "Prisma ORM Queries",
            "Business Logic",
            "SQLite Database",
          ].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-slate-100 rounded-lg px-2 py-1.5 mb-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-xs text-gray-700">{i}</span>
            </div>
          ))}
          <div className="mt-2 bg-emerald-50 rounded-lg p-2">
            <p className="text-xs text-emerald-600 font-semibold">
              📁 app/api/**/route.ts
            </p>
            <p className="text-xs text-emerald-600">📁 lib/prisma.ts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Next.js" title="File-Based Routing — Folder = URL" />
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          📁 Folder Structure → URL
        </h3>
        <MonoCode>{`app/
├── page.tsx          → /
├── article/
│   ├── new/page.tsx  → /article/new
│   └── [slug]/       → /article/:slug
│       └── page.tsx
├── profile/
│   └── [username]/   → /profile/:user
│       └── page.tsx
└── api/
    └── articles/
        └── route.ts  → /api/articles`}</MonoCode>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          ⚡ Server vs Client Component
        </h3>
        <MonoCode>{`// Server Component (default)
// Runs on server — can query DB directly
export default async function Page() {
  const data = await prisma.article.findMany()
  return <ArticleList data={data} />
}

// Client Component
// Has useState, useEffect, onClick
"use client"
export default function Editor() {
  const [text, setText] = useState("")
  return <input onChange={setText} />
}`}</MonoCode>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Next.js" title="API Routes — Backend Inside Next.js" />
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          📡 route.ts = Your API Endpoint
        </h3>
        <MonoCode>{`// app/api/articles/route.ts

// GET /api/articles
export async function GET() {
  const articles = await prisma.article
    .findMany({ include: { author: true } })
  return Response.json(articles)
}

// POST /api/articles
export async function POST(req: Request) {
  const body = await req.json()
  const article = await prisma.article.create({
    data: body
  })
  return Response.json(article, { status: 201 })
}`}</MonoCode>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-3">🔄 HTTP Methods</h3>
        <div className="flex flex-col gap-2">
          {[
            {
              method: "GET",
              desc: "Read data — no DB changes",
              bg: "bg-blue-50",
              text: "text-blue-700",
              border: "border-blue-200",
            },
            {
              method: "POST",
              desc: "Create new data",
              bg: "bg-green-50",
              text: "text-green-700",
              border: "border-green-200",
            },
            {
              method: "PUT",
              desc: "Update existing data",
              bg: "bg-yellow-50",
              text: "text-yellow-700",
              border: "border-yellow-200",
            },
            {
              method: "DELETE",
              desc: "Delete data",
              bg: "bg-red-50",
              text: "text-red-700",
              border: "border-red-200",
            },
          ].map((m) => (
            <div
              key={m.method}
              className={`flex items-center gap-3 ${m.bg} border ${m.border} rounded-lg px-3 py-2`}
            >
              <span
                className={`font-mono font-bold text-xs ${m.text} w-14 shrink-0`}
              >
                {m.method}
              </span>
              <span className="text-xs text-gray-700">{m.desc}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-2.5">
          <p className="text-xs font-bold text-green-800">💡 Status Codes</p>
          <p className="text-xs text-green-700 mt-1 leading-relaxed">
            200 OK · 201 Created · 400 Bad Request
            <br />
            401 Unauthorized · 404 Not Found · 500 Error
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Database" title="Database Schema — 3 Main Tables" />
    <div className="grid grid-cols-3 gap-3 flex-1">
      {[
        {
          title: "model User {",
          fields: [
            ["id", "@id cuid()", "pk"],
            ["email", "String @unique", ""],
            ["username", "String @unique", ""],
            ["name", "String", ""],
            ["bio", "String?", ""],
            ["password", "String", ""],
            ["articles", "Article[]", ""],
            ["likes", "Like[]", ""],
          ],
          footer: "}",
        },
        {
          title: "model Article {",
          fields: [
            ["id", "@id cuid()", "pk"],
            ["title", "String", ""],
            ["slug", "String @unique", ""],
            ["excerpt", "String", ""],
            ["content", "String @db.Text", ""],
            ["authorId", "String", ""],
            ["author", "User @relation", ""],
            ["likes", "Like[]", ""],
          ],
          footer: "}",
        },
        {
          title: "model Like {",
          fields: [
            ["id", "@id cuid()", "pk"],
            ["userId", "String", ""],
            ["user", "User @relation", ""],
            ["articleId", "String", ""],
            ["article", "Article @relation", ""],
          ],
          footer: "@@unique([userId,\n  articleId])\n}",
        },
      ].map((m) => (
        <div
          key={m.title}
          className="bg-gray-900 rounded-xl p-4 overflow-hidden"
        >
          <p className="text-purple-400 text-xs font-mono font-bold mb-3 pb-2 border-b border-white/10">
            {m.title}
          </p>
          {m.fields.map(([name, type, pk]) => (
            <div key={name} className="flex justify-between items-center mb-1">
              <span className="text-blue-400 text-xs font-mono">{name}</span>
              <span
                className={`text-xs font-mono ${pk ? "text-green-400" : "text-yellow-300"}`}
              >
                {pk || type}
              </span>
            </div>
          ))}
          <pre className="text-gray-500 text-xs font-mono mt-2">
            {m.footer}
          </pre>
        </div>
      ))}
    </div>
    <div className="flex gap-3 mt-3">
      {[
        "👤 User ─── has many ───▶ 📝 Article",
        "👤 User ─── has many ───▶ ❤️ Like",
        "📝 Article ─── has many ───▶ ❤️ Like",
      ].map((r) => (
        <div
          key={r}
          className="flex-1 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 text-xs text-indigo-600 font-mono text-center"
        >
          {r}
        </div>
      ))}
    </div>
  </div>
);

const Slide11 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Prisma" title="Prisma — TypeScript ORM in Action" />
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">🔍 Read Data</h3>
        <MonoCode>{`// Get all articles with author info
const articles = await prisma.article.findMany({
  include: {
    author: true,
    _count: { select: { likes: true } }
  },
  orderBy: { createdAt: 'desc' }
})

// Get one article by slug
const article = await prisma.article.findUnique({
  where: { slug: params.slug }
})`}</MonoCode>
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">✏️ Write Data</h3>
        <MonoCode>{`// Create new article
const article = await prisma.article.create({
  data: {
    title, slug, content, excerpt,
    authorId: session.user.id
  }
})

// Update article
await prisma.article.update({
  where: { id: articleId },
  data: { title: "New Title" }
})

// Delete article
await prisma.article.delete({
  where: { id: articleId }
})`}</MonoCode>
      </div>
    </div>
  </div>
);

const Slide13 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Authentication" title="Login Flow — Step by Step" />
    <div className="grid grid-cols-2 gap-4 flex-1">
      <div className="flex flex-col gap-2">
        {[
          {
            n: 1,
            title: "User fills in email + password",
            sub: "Frontend form → onClick → call login API",
            badge: "Client",
            color: "indigo" as const,
          },
          {
            n: 2,
            title: "POST to /api/auth/login",
            sub: "API receives credentials, validates user",
            badge: "HTTP",
            color: "indigo" as const,
          },
          {
            n: 3,
            title: "Query DB, compare password hash",
            sub: "bcrypt.compare(password, hash)",
            badge: "Server",
            color: "indigo" as const,
          },
          {
            n: 4,
            title: "Sign JWT & return token",
            sub: "jose.sign(payload, secret) — store in localStorage/cookie",
            badge: "JWT",
            color: "green" as const,
          },
          {
            n: 5,
            title: "Redirect to homepage ✅",
            sub: "Send token in Authorization header for protected APIs",
            badge: "Done",
            color: "green" as const,
          },
        ].map((s) => (
          <div key={s.n} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center shrink-0">
              {s.n}
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-900">{s.title}</p>
                <p className="text-xs text-gray-500">{s.sub}</p>
              </div>
              <Tag color={s.color}>{s.badge}</Tag>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          🔐 Protect API Routes
        </h3>
        <MonoCode>{`// Any API that requires login
export async function POST(req: Request) {
  const auth = req.headers.get("Authorization")
  const token = auth?.replace("Bearer ", "")

  const { payload } = await jose.verify(
    token, new TextEncoder().encode(secret)
  )

  // ❌ Invalid/missing token → reject
  if (!payload?.userId) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  // ✅ Valid JWT → continue
  const userId = payload.userId
  ...
}`}</MonoCode>
      </div>
    </div>
  </div>
);

const Slide14 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="API Flow" title="Request Flow — Write Article" />
    <div className="flex-1 flex flex-col justify-center gap-4">
      <div className="flex items-center justify-center gap-1">
        {[
          { icon: "👤", label: "User", sub: "Clicks Publish", highlight: true },
          { arrow: true, label: "POST /api/articles\n{ title, content }" },
          { icon: "🔐", label: "Auth Check", sub: "verify JWT token" },
          { arrow: true, label: "if token\nvalid" },
          { icon: "⚙️", label: "API Route", sub: "Validate data" },
          { arrow: true, label: "prisma.article\n.create()" },
          { icon: "🗄️", label: "SQLite", sub: "Save to DB" },
          { arrow: true, label: "{ id, slug }" },
          { icon: "✅", label: "Response", sub: "201 Created", highlight: true },
        ].map((item, i) =>
          "arrow" in item && item.arrow ? (
            <div key={i} className="flex flex-col items-center">
              <span className="text-gray-400 text-lg">→</span>
              <span className="text-indigo-500 text-xs font-semibold text-center whitespace-pre leading-tight mt-0.5">
                {item.label}
              </span>
            </div>
          ) : (
            <div
              key={i}
              className={`rounded-xl p-3 text-center min-w-20 border-2 ${"highlight" in item && item.highlight ? "bg-indigo-50 border-indigo-300" : "bg-slate-50 border-slate-200"}`}
            >
              <div className="text-lg mb-1">{item.icon}</div>
              <p className="text-xs font-bold text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
            </div>
          )
        )}
      </div>
      <div className="flex gap-3">
        <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3">
          <p className="text-xs font-bold text-red-700 mb-1">
            ❌ Not Logged In
          </p>
          <p className="text-xs text-gray-600">
            Auth Check fails → 401 Unauthorized → Show &quot;Please login&quot;
            message
          </p>
        </div>
        <div className="flex-1 bg-yellow-50 border border-yellow-200 rounded-xl p-3">
          <p className="text-xs font-bold text-yellow-700 mb-1">
            ⚠️ Invalid Data
          </p>
          <p className="text-xs text-gray-600">
            Validation fails → 400 Bad Request → Show specific error message
          </p>
        </div>
        <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-3">
          <p className="text-xs font-bold text-green-700 mb-1">✅ Success</p>
          <p className="text-xs text-gray-600">
            Article saved → 201 Created → Redirect to /article/[slug]
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide15 = () => (
  <div className="flex flex-col h-full p-10">
    <SlideHeader tag="Schedule" title="2-Day Plan — What to Build Each Day" />
    <div className="grid grid-cols-2 gap-4 flex-1">
      {[
        {
          day: "Day 1 — Foundation",
          color: "indigo",
          items: [
            {
              time: "09:00",
              title: "Project Setup",
              desc: "create-next-app, install packages, setup SQLite",
              tags: ["Next.js", "SQLite"],
              color: "indigo",
            },
            {
              time: "10:00",
              title: "Database Schema",
              desc: "Write Prisma schema, run db push, explore Prisma Studio",
              tags: ["Prisma", "SQLite"],
              color: "indigo",
            },
            {
              time: "11:00",
              title: "Authentication",
              desc: "JWT setup, Register API, Login/Register pages",
              tags: ["JWT", "bcrypt"],
              color: "orange",
            },
            {
              time: "13:00",
              title: "Profile Page",
              desc: "Show user info + their articles, edit profile if own page",
              tags: ["Dynamic Route"],
              color: "orange",
            },
          ],
        },
        {
          day: "Day 2 — Features",
          color: "emerald",
          items: [
            {
              time: "09:00",
              title: "Article API + Feed",
              desc: "GET/POST articles API, homepage feed with ArticleCard",
              tags: ["API Routes", "Tailwind"],
              color: "green",
            },
            {
              time: "10:30",
              title: "Rich Text Editor",
              desc: "Install Tiptap, build ArticleEditor component, write page",
              tags: ["Tiptap", "DOMPurify"],
              color: "green",
            },
            {
              time: "13:00",
              title: "Read Article Page",
              desc: "Render HTML content, show author info, like button",
              tags: ["Dynamic Route"],
              color: "red",
            },
            {
              time: "14:30",
              title: "Polish + Review",
              desc: "Fix UI, handle edge cases, code review together",
              tags: ["Tailwind", "Review"],
              color: "red",
            },
          ],
        },
      ].map((d) => (
        <div
          key={d.day}
          className="bg-slate-50 border border-slate-100 rounded-xl p-4"
        >
          <h3 className="text-sm font-bold text-gray-900 mb-3">📅 {d.day}</h3>
          <div className="flex flex-col gap-2">
            {d.items.map((item) => (
              <div key={item.time} className="flex gap-3 items-start">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-md shrink-0 text-white ${
                    {
                      indigo: "bg-indigo-500",
                      orange: "bg-orange-400",
                      green: "bg-green-500",
                      red: "bg-red-400",
                    }[item.color]
                  }`}
                >
                  {item.time}
                </span>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  <div className="flex gap-1 mt-1">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide16 = () => (
  <div
    className="flex flex-col items-center justify-center h-full text-center px-12"
    style={{
      background: "linear-gradient(135deg,#0f172a,#1e1b4b,#0f172a)",
    }}
  >
    <span className="text-xs font-bold tracking-widest uppercase border border-white/20 text-white/70 px-4 py-1.5 rounded-full mb-6">
      You&apos;ve Got This 🎉
    </span>
    <h1
      className="text-5xl font-extrabold text-white leading-tight mb-4"
      style={{ letterSpacing: "-1px" }}
    >
      Let&apos;s Start <span className="text-emerald-400">Building!</span>
    </h1>
    <p className="text-base text-white/50 mb-8">
      By end of Day 2, you&apos;ll have a real full-stack app ready to show the
      world.
    </p>
    <div className="grid grid-cols-3 gap-4 max-w-xl">
      {[
        { icon: "🏗️", title: "Full-Stack App", sub: "Next.js + SQLite" },
        { icon: "🔐", title: "Auth System", sub: "Login + Sessions" },
        { icon: "✍️", title: "Rich Text Content", sub: "Tiptap Editor + Feed" },
      ].map((c) => (
        <div
          key={c.title}
          className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
        >
          <div className="text-3xl mb-2">{c.icon}</div>
          <p className="text-sm font-bold text-white">{c.title}</p>
          <p className="text-xs text-white/40 mt-1">{c.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

// ── Main App ─────────────────────────────────────────────────

const SLIDES = [
  { id: 1, component: <Slide1 /> },
  { id: 2, component: <Slide2 /> },
  { id: 3, component: <Slide3 /> },
  { id: 4, component: <SlideSection num="01" tag="Concept" title="Frontend vs Backend" /> },
  { id: 5, component: <Slide5 /> },
  { id: 6, component: <SlideSection num="02" tag="Framework" title="Next.js App Router" /> },
  { id: 7, component: <Slide7 /> },
  { id: 8, component: <Slide8 /> },
  { id: 9, component: <SlideSection num="03" tag="Database" title="Prisma + SQLite" /> },
  { id: 10, component: <Slide10 /> },
  { id: 11, component: <Slide11 /> },
  { id: 12, component: <SlideSection num="04" tag="Security" title="Authentication with JWT" /> },
  { id: 13, component: <Slide13 /> },
  { id: 14, component: <Slide14 /> },
  { id: 15, component: <Slide15 /> },
  { id: 16, component: <Slide16 /> },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const navTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = SLIDES.length;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "f" || e.key === "F") toggleFullscreen();
      if (e.key === "Escape" && document.fullscreenElement)
        document.exitFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const handleMouseMove = () => {
    setShowNav(true);
    if (navTimer.current) clearTimeout(navTimer.current);
    if (isFullscreen) {
      navTimer.current = setTimeout(() => setShowNav(false), 2500);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: isFullscreen ? "#111" : "#1a1a2e",
        cursor: isFullscreen && !showNav ? "none" : "default",
      }}
    >
      <div
        className="bg-white overflow-hidden shadow-2xl"
        style={{
          borderRadius: isFullscreen ? "0" : "16px",
          width: isFullscreen ? "100vw" : "100%",
          maxWidth: isFullscreen ? "100vw" : "960px",
          aspectRatio: "16/9",
          transition: "border-radius 0.3s",
        }}
      >
        {SLIDES[current].component}
      </div>

      <div
        className="flex items-center gap-3 mt-5 bg-white/90 backdrop-blur rounded-full px-5 py-2.5 shadow-lg transition-all duration-300"
        style={{
          opacity: showNav ? 1 : 0,
          pointerEvents: showNav ? "auto" : "none",
          position: isFullscreen ? "fixed" : "relative",
          bottom: isFullscreen ? "28px" : "auto",
          left: isFullscreen ? "50%" : "auto",
          transform: isFullscreen ? "translateX(-50%)" : "none",
          zIndex: 50,
        }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="text-gray-600 hover:bg-gray-100 px-2.5 py-1 rounded-lg disabled:opacity-30 disabled:cursor-default text-base transition"
        >
          ◀
        </button>

        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? "w-5 h-2 bg-indigo-500" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="text-gray-600 hover:bg-gray-100 px-2.5 py-1 rounded-lg disabled:opacity-30 disabled:cursor-default text-base transition"
        >
          ▶
        </button>

        <span className="text-xs text-gray-400 font-medium">
          {current + 1} / {total}
        </span>

        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
          className="ml-1 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 px-2.5 py-1.5 rounded-lg transition text-sm font-bold border border-gray-200"
        >
          ⛶
          <span className="ml-1 text-xs">
            {isFullscreen ? "Exit" : "Fullscreen"}
          </span>
        </button>
      </div>

      {!isFullscreen && (
        <p className="text-white/30 text-xs mt-3">
          ◀ ▶ navigate · F fullscreen · click dots to jump
        </p>
      )}
    </div>
  );
}

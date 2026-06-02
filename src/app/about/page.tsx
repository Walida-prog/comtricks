export const metadata = {
  title: 'A propos',
  description: 'Blog cybersecurite - Pentest, Bug Bounty, CTF',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-4">
        A propos
      </h1>
      <p className="text-gray-600 leading-relaxed">
        ComTricks est un blog technique sur la cybersecurite.
        Pentest, Bug Bounty, write-ups CTF en francais.
      </p>
    </div>
  )
}
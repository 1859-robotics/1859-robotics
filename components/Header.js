import Link from 'next/link'
import "../style/header.sass"

export default () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/"><a>home</a></Link></li>
        <li><Link href="/about"><a>about</a></Link></li>
        <li><Link href="/teams"><a>teams</a></Link></li>
        <li><Link href="/blog"><a>blog</a></Link></li>
      </ul>
    </nav>
  </header>
)

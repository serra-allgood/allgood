export const Interests = () => (
  <section id='interests'>
    <header>
      <h2>Current Interests</h2>
    </header>
    <p>
      It is my fervent belief that Ruby on Rails is a tarpit. Exceptional at rapid prototyping, built on the elegant OO purity of Ruby, it simply <strong>cannot scale.</strong> Principles such as Convention Over Configuration and a strongly opinionted folder structure can be taken out from Rails and implemented for an organization's specific needs, as past an inflection point, the fundamental design choices of the Rails framework will eventually force an organization to adopt their own idiosyncracies anyway. It is my professional opinion at this point that any project of serious scale and longevity should be built using either Golang or Elixir. Go is of course the industry darling, and not without good reason; its subtly opinionated design drawn from its intentionally terse simplicity makes it well suited for an organization that needs to quickly spin up new engineers with large code bases, and its model for concurrency is truly beautiful to behold. I am not, however, optimistic with the language features being settled on for Go 2, and veteran gophers such as Bill Arden have written much more knowledgeably than I can about why.
    </p>
    <p>
      Comparing the Google Search Trends of Go and Elixir gives the impression that Elixir is a dead language, but that is far from the case. Elixir is quietly used to great effect for what Erlang was built for: highly available, highly concurrent, high throughput applications. The ability to create NIFs linking to incredibly optimized Rust functions in particular makes Elixir a true powerhouse that Go can never hope to reach because it's hamstrung by its stop-the-world gargabe collection and because its most powerful abstraction, Interfaces, actually increases heap allocations that force more frequent and lengthy GC events.
    </p>
    <p>
      It is my personal opinion that TypeScript is simply a well funded developer experience tool; a tool that allows you to make it useless through misconfiguration is not a tool at all, and its forced injection of OO concepts into a language best treated as if it is functional is telling. My personal prediction is the functional languages that transpile to JavaScript, such as Elm, PureScript, and ClojureScript, are the future of front end development. These languages actually constrain and will fail to compile when they need to and don't allow a frustrated and time pressured engineer to declare <code>any</code> just to get a PR shipped.
    </p>
  </section>
)

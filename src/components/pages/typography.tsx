import { Helmet } from "react-helmet-async";
import TopBar from "../TopBar";
import PageHeader from "../PageHeader";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

export default function Typography() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Typography | Trimplate Design System</title>
        <meta
          name="description"
          content="Typography styles and elements used throughout the Trimplate website."
        />
      </Helmet>

      <TopBar />
      <Header />
      <PageHeader title="Typography" currentPage="TYPOGRAPHY" />
      <main className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          {/* Headings Section */}
          <section className="mb-12 md:mb-16" id="headings">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                HEADINGS
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                #headings
              </code>
            </div>
            <div className="space-y-6 bg-muted/30 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h1 className="text-4xl md:text-5xl font-bold font-oswald tracking-tight">
                  H1. LOREM IPSUM
                </h1>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-4xl md:text-5xl | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h2 className="text-3xl md:text-4xl font-bold font-oswald tracking-tight">
                  H2. LOREM IPSUM
                </h2>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-3xl md:text-4xl | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h3 className="text-2xl md:text-3xl font-bold font-oswald tracking-tight">
                  H3. LOREM IPSUM
                </h3>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-2xl md:text-3xl | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h4 className="text-xl md:text-2xl font-bold font-oswald tracking-tight">
                  H4. LOREM IPSUM
                </h4>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-xl md:text-2xl | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h5 className="text-lg md:text-xl font-bold font-oswald tracking-tight">
                  H5. LOREM IPSUM
                </h5>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-lg md:text-xl | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <h6 className="text-base md:text-lg font-bold font-oswald tracking-tight">
                  H6. LOREM IPSUM
                </h6>
                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Font-size: text-base md:text-lg | Font-weight: font-bold |
                    Font-family: font-oswald | Line-height: tracking-tight
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Text Elements Section */}
          <section className="mb-12 md:mb-16" id="text-elements">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                TEXT ELEMENTS
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                #text-elements
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Body Text (Base)</h3>
                <p className="text-base mb-4">
                  When you're looking for the best barbershop possible, it can
                  be hard to pick from the many choices available. For myself,
                  it can be hard to single out a single barbershop from the many
                  out there.
                </p>
                <p className="text-sm text-muted-foreground">
                  Font-size: text-base | Font-weight: normal | Line-height:
                  normal
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Body Text (Small)</h3>
                <p className="text-sm mb-4">
                  When you're looking for the best barbershop possible, it can
                  be hard to pick from the many choices available. For myself,
                  it can be hard to single out a single barbershop from the many
                  out there.
                </p>
                <p className="text-sm text-muted-foreground">
                  Font-size: text-sm | Font-weight: normal | Line-height: normal
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Lead Text</h3>
                <p className="text-lg leading-relaxed mb-4">
                  When you're looking for the best barbershop possible, it can
                  be hard to pick from the many choices available. For myself,
                  it can be hard to single out a single barbershop from the many
                  out there.
                </p>
                <p className="text-sm text-muted-foreground">
                  Font-size: text-lg | Font-weight: normal | Line-height:
                  leading-relaxed
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Emphasized Text</h3>
                <div className="space-y-4 mb-4">
                  <p className="text-base">
                    Text with{" "}
                    <strong className="font-semibold">strong emphasis</strong>{" "}
                    and <em className="italic">italic emphasis</em>.
                  </p>
                  <p className="text-base">
                    Text with{" "}
                    <mark className="bg-primary/30 px-1">highlighted</mark>{" "}
                    content and
                    <span className="text-primary font-medium">
                      {" "}
                      colored text
                    </span>
                    .
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Using strong, em, mark and colored span elements
                </p>
              </div>
            </div>
          </section>

          {/* Highlighters Section */}
          <section className="mb-12 md:mb-16" id="highlights">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                HIGHLIGHTERS
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                #highlights
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Primary Highlight</h3>
                <p className="text-base bg-primary/20 p-4 rounded-md">
                  When you're looking for the best barbershop possible, it can
                  be hard to pick from the many choices available. For myself,
                  it can be hard to single out a single barbershop from the many
                  out there.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Background: bg-primary/20 | Padding: p-4 | Border: rounded-md
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Secondary Highlight</h3>
                <p className="text-base bg-muted p-4 rounded-md border-l-4 border-primary">
                  When you're looking for the best barbershop possible, it can
                  be hard to pick from the many choices available. For myself,
                  it can be hard to single out a single barbershop from the many
                  out there.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Background: bg-muted | Padding: p-4 | Border: rounded-md
                  border-l-4 border-primary
                </p>
              </div>
            </div>
          </section>

          {/* Dropcaps Section */}
          <section className="mb-12 md:mb-16" id="dropcaps">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                DROPCAPS
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                #dropcaps
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Dark Dropcap</h3>
                <div className="bg-muted p-6 rounded-md">
                  <p className="text-base">
                    <span className="float-left text-5xl font-bold mr-2 mt-1 bg-black text-white w-12 h-12 flex items-center justify-center">
                      P
                    </span>
                    owder coating is a popular industrial finish that can be
                    used to coat a variety of materials, including metals,
                    plastics, and ceramics provides a strong finish that can
                    last for years without deteriorating and will outlast the
                    majority of other finishes.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Float: float-left | Font: text-5xl font-bold | Colors:
                  bg-black text-white
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Primary Dropcap</h3>
                <div className="bg-muted p-6 rounded-md">
                  <p className="text-base">
                    <span className="float-left text-5xl font-bold mr-2 mt-1 bg-primary text-black w-12 h-12 flex items-center justify-center">
                      P
                    </span>
                    owder coating is a popular industrial finish that can be
                    used to coat a variety of materials, including metals,
                    plastics, and ceramics provides a strong finish that can
                    last for years without deteriorating and will outlast the
                    majority of other finishes.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Float: float-left | Font: text-5xl font-bold | Colors:
                  bg-primary text-black
                </p>
              </div>
            </div>
          </section>

          {/* Blockquote Section */}
          <section className="mb-12 md:mb-16" id="blockquotes">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                BLOCKQUOTE
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                #blockquotes
              </code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Standard Blockquote</h3>
                <div className="bg-muted/30 p-8 rounded-md">
                  <blockquote className="text-xl md:text-2xl italic font-medium text-center max-w-3xl mx-auto">
                    "The Barbers is an affordable, convenient and good quality
                    place to get my hair cut. It is a friendly, laid back
                    environment with great professionals"
                  </blockquote>
                  <p className="text-center mt-4 text-primary font-medium">
                    TYLER SMITH
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Font: text-xl md:text-2xl italic font-medium | Layout:
                  text-center
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Left-aligned Blockquote
                </h3>
                <div className="bg-muted/30 p-8 rounded-md border-l-4 border-primary">
                  <blockquote className="text-xl italic font-medium ml-4">
                    "The Barbers is an affordable, convenient and good quality
                    place to get my hair cut. It is a friendly, laid back
                    environment with great professionals"
                  </blockquote>
                  <p className="ml-4 mt-4 text-primary font-medium">
                    — TYLER SMITH
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Font: text-xl italic font-medium | Border: border-l-4
                  border-primary
                </p>
              </div>
            </div>
          </section>

          {/* Lists Section */}
          <section className="mb-12 md:mb-16" id="lists">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider">
                LISTINGS
              </h2>
              <code className="text-sm bg-muted px-2 py-1 rounded">#lists</code>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Arrow List</h3>
                <ul className="space-y-3 bg-muted/30 p-6 rounded-md">
                  {[
                    "High-quality services and care",
                    "Men hair coloring & refreshing hair wash",
                    "Relaxing head & shoulders massage",
                    "Professional haircut & styling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Items: flex items-start space-x-2 | Marker: text-primary →
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Bullet List</h3>
                <ul className="space-y-3 bg-muted/30 p-6 rounded-md">
                  {[
                    "High-quality services and care",
                    "Men hair coloring & refreshing hair wash",
                    "Relaxing head & shoulders massage",
                    "Professional haircut & styling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Items: flex items-start space-x-2 | Marker: text-primary •
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Plus List</h3>
                <ul className="space-y-3 bg-muted/30 p-6 rounded-md">
                  {[
                    "High-quality services and care",
                    "Men hair coloring & refreshing hair wash",
                    "Relaxing head & shoulders massage",
                    "Professional haircut & styling",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  Items: flex items-start space-x-2 | Marker: text-primary +
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Ordered List</h3>
              <ol className="list-decimal pl-5 space-y-2 bg-muted/30 p-6 rounded-md">
                {[
                  "Schedule an appointment online or by phone",
                  "Arrive 5-10 minutes before your scheduled time",
                  "Discuss your preferred style with your barber",
                  "Enjoy our professional grooming services",
                  "Schedule your next appointment before leaving",
                ].map((item, index) => (
                  <li key={index} className="pl-2">
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                List style: list-decimal | Padding: pl-5 | Items: pl-2
              </p>
            </div>
          </section>

          {/* Typography Navigation */}
          <section className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold font-oswald uppercase tracking-wider mb-8">
              QUICK NAVIGATION
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Headings", id: "headings" },
                { name: "Text Elements", id: "text-elements" },
                { name: "Highlights", id: "highlights" },
                { name: "Dropcaps", id: "dropcaps" },
                { name: "Blockquotes", id: "blockquotes" },
                { name: "Lists", id: "lists" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="bg-muted/50 hover:bg-primary/20 p-4 rounded-md text-center font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

/* Portfolio tweaks panel — language, theme, palette intensity, type, hero. */

const PortfolioTweaks = () => {
  const { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSlider } = window;

  const [tweaks, setTweak] = useTweaks(window.loadTweaks ? window.loadTweaks() : {
    connectPadding: 'large',
    heroHeadline: 'Designing for impact',
    heroSubLead: 'A UX / Interaction Designer with 5+ years designing end-to-end digital and service experiences in complex environments including banking and large-scale platforms. I translate user insights into intuitive, scalable solutions across mobile and web.',
    aboutTitle: 'A designer for users, business, and the system — at the same time.',
    aboutP1: 'I\'m Marolin Solano. I trained as an industrial designer at UIS in Bucaramanga, Colombia, and have worked across Bancolombia (via Pragma S.A.), Casa Editorial El Tiempo, and ADN Newspaper.',
    aboutP2: 'Now in Toronto, completing a Master of Design in Strategic Foresight & Innovation at OCAD University — learning to design for systems and futures, not just features.',
    noteMessage: 'The work showcased here is only a curated selection of publicly available projects. Some of the most complex and impactful UX work I\'ve done at Bancolombia across both mobile and desktop remains confidential and cannot be published. I\'d be glad to share the stories, challenges, and outcomes behind these projects in a direct conversation.',
    aboutHeroTitle: 'Designer, researcher, recovering perfectionist.',
    aboutHeroLead: 'Hi, I\'m Marolin Solano. I started in industrial design, fell hard for the messy parts of research, and have spent the last six years helping teams ship things that actually move numbers. I\'ve worked across banking, media, and subscription products — usually as the person asking "but why?" one more time than feels polite.',
    contactTitle: 'Let\'s make something useful.',
    contactLead: 'Tell me about your team, your timeline, or the problem keeping you up at night. I\'ll get back within a day.',
    contactEmailMsg: 'I read every message and reply within 24 hours.',
    theme: 'light', intensity: 1, typePair: 'manrope', heroLayout: 'asymmetric', lang: 'en'
  });

  React.useEffect(() => {
    window.applyTweaks(tweaks);
    if (window.saveTweaks) window.saveTweaks(tweaks);
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Language">
        <TweakRadio
          value={tweaks.lang}
          onChange={(v) => setTweak('lang', v)}
          options={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Español' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Theme">
        <TweakRadio
          value={tweaks.theme}
          onChange={(v) => setTweak('theme', v)}
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark',  label: 'Dark' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Palette intensity" subtitle="Minimal · Balanced · Bold">
        <TweakSlider
          value={tweaks.intensity}
          onChange={(v) => setTweak('intensity', v)}
          min={0} max={2} step={1}
        />
      </TweakSection>

      <TweakSection title="Typography pair">
        <TweakRadio
          value={tweaks.typePair}
          onChange={(v) => setTweak('typePair', v)}
          options={[
            { value: 'manrope',       label: 'Manrope' },
            { value: 'spaceFraunces', label: 'Fraunces × Space' },
            { value: 'intertight',    label: 'Inter Tight' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Hero layout" subtitle="Home page only">
        <TweakRadio
          value={tweaks.heroLayout}
          onChange={(v) => setTweak('heroLayout', v)}
          options={[
            { value: 'asymmetric', label: 'Asymmetric' },
            { value: 'centered',   label: 'Centered' },
            { value: 'editorial',  label: 'Editorial' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Connect section padding">
        <TweakRadio
          value={tweaks.connectPadding}
          onChange={(v) => setTweak('connectPadding', v)}
          options={[
            { value: 'compact',  label: 'Compact' },
            { value: 'medium',   label: 'Medium' },
            { value: 'large',    label: 'Large' },
          ]}
        />
      </TweakSection>

      <TweakSection title="Copy">
        <TweakText
          label="Hero sub-lead"
          value={tweaks.heroSubLead}
          onChange={(v) => setTweak('heroSubLead', v)}
        />
        <TweakText
          label="About title"
          value={tweaks.aboutTitle}
          onChange={(v) => setTweak('aboutTitle', v)}
        />
        <TweakText
          label="About paragraph 1"
          value={tweaks.aboutP1}
          onChange={(v) => setTweak('aboutP1', v)}
        />
        <TweakText
          label="About paragraph 2"
          value={tweaks.aboutP2}
          onChange={(v) => setTweak('aboutP2', v)}
        />
        <TweakText
          label="About hero title"
          value={tweaks.aboutHeroTitle}
          onChange={(v) => setTweak('aboutHeroTitle', v)}
        />
        <TweakText
          label="About hero lead"
          value={tweaks.aboutHeroLead}
          onChange={(v) => setTweak('aboutHeroLead', v)}
        />
        <TweakText
          label="Contact title"
          value={tweaks.contactTitle}
          onChange={(v) => setTweak('contactTitle', v)}
        />
        <TweakText
          label="Contact lead"
          value={tweaks.contactLead}
          onChange={(v) => setTweak('contactLead', v)}
        />
        <TweakText
          label="Contact email message"
          value={tweaks.contactEmailMsg}
          onChange={(v) => setTweak('contactEmailMsg', v)}
        />
        <TweakText
          label="Note message"
          value={tweaks.noteMessage}
          onChange={(v) => setTweak('noteMessage', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

const tweaksRoot = document.getElementById('tweaks-root');
if (tweaksRoot) ReactDOM.createRoot(tweaksRoot).render(<PortfolioTweaks />);

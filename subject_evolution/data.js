const LAYERS = [
  {
    era: "~13.8 Billion Years Ago",
    title: "Layer 0 — Cosmology & Fundamental Physics",
    narrative: "The Big Bang births space, time, energy, and the four fundamental forces. From pure nothingness emerges everything. This is the absolute bedrock of all knowledge.",
    subjects: ["Cosmology","Particle Physics","Quantum Mechanics","General Relativity","Thermodynamics"],
    foundation: "Foundation of ALL — no prior subject exists",
    detail: "The universe begins as an infinitely hot, dense singularity. Within the first seconds, quarks form protons and neutrons. The four fundamental forces (gravity, electromagnetism, strong & weak nuclear) separate. These laws of physics become the unchangeable rulebook upon which every subsequent phenomenon — stars, chemistry, life, consciousness, civilization — will operate. Cosmology asks 'what is the universe?', and from this question every other question eventually descends."
  },
  {
    era: "~13.4 Billion Years Ago",
    title: "Layer 1 — Astronomy & Astrophysics",
    narrative: "Gravity pulls hydrogen clouds into the first stars. Nuclear fusion ignites, forging heavier elements. Galaxies form — cosmic nurseries for everything to come.",
    subjects: ["Astronomy","Astrophysics","Nuclear Physics","Stellar Physics","Spectroscopy"],
    foundation: "Built on: Cosmology, Fundamental Physics",
    detail: "Stars are the universe's factories. Through nuclear fusion, hydrogen becomes helium, then carbon, oxygen, iron — the periodic table is literally written inside dying stars. Supernovae scatter these elements across space. Without astronomy and the stellar lifecycle, there would be no raw materials for planets, oceans, or life. Every atom in your body was forged in a star. Astronomy shaped humanity's first calendars, navigation, and sense of cosmic scale."
  },
  {
    era: "~13 Billion Years Ago",
    title: "Layer 2 — Chemistry & Material Science",
    narrative: "Elements forged in stars begin bonding — molecules form. Chemistry is born as atoms interact, creating the material complexity that makes planets and life possible.",
    subjects: ["Chemistry","Organic Chemistry","Inorganic Chemistry","Materials Science","Electrochemistry","Polymer Science"],
    foundation: "Built on: Physics, Astronomy (stellar nucleosynthesis)",
    detail: "Chemistry is the science of how atoms bond and interact. It bridges the gap between physics (individual particles) and biology (complex living systems). In interstellar clouds, simple molecules like water (H₂O), methane (CH₄), and amino acids form naturally. These molecular building blocks drift through space, eventually seeding planets with the raw ingredients for life. Without chemistry, physics alone could never produce the complexity needed for biology."
  },
  {
    era: "~4.6 Billion Years Ago",
    title: "Layer 3 — Geology & Earth Sciences",
    narrative: "Earth forms from a swirling disk of cosmic debris. Volcanism, plate tectonics, and magnetic fields create a dynamic planet — the stage for all life.",
    subjects: ["Geology","Mineralogy","Seismology","Volcanology","Petrology","Geophysics","Planetary Science"],
    foundation: "Built on: Astronomy, Chemistry, Physics",
    detail: "Earth's formation from the solar nebula brings physics and chemistry into a planetary context. Radioactive decay heats the interior, driving plate tectonics. The magnetic field shields the atmosphere from solar wind. Volcanoes release gases that build the atmosphere. Mineral formations create the diverse crustal chemistry that will later determine where civilizations thrive, what metals humans discover, and which regions become resource-rich or resource-poor — directly shaping economics and geopolitics thousands of years later."
  },
  {
    era: "~4 Billion Years Ago",
    title: "Layer 4 — Geography & Atmospheric Sciences",
    narrative: "Oceans fill, the atmosphere transforms, continents drift. Geography becomes the silent architect — shaping where life can exist and how it must adapt.",
    subjects: ["Geography","Oceanography","Meteorology","Climatology","Hydrology","Atmospheric Science","Cartography"],
    foundation: "Built on: Geology, Chemistry, Physics",
    detail: "Geography is arguably the most underrated foundation subject. It determines EVERYTHING that follows: which species evolve where, which crops grow in which soil, which rivers enable trade, which mountains isolate cultures, which coastlines invite exploration. The Himalayan rain shadow created deserts. The Mediterranean's calm waters enabled Greek/Roman trade. The Fertile Crescent's geography birthed agriculture. Europe's irregular coastline created harbors. Geography doesn't just influence history — it writes the first draft."
  },
  {
    era: "~3.8 Billion Years Ago",
    title: "Layer 5 — Biology: Origin of Life",
    narrative: "In hydrothermal vents or warm tidal pools, chemistry crosses a threshold — self-replicating molecules appear. Life begins. Biology is born.",
    subjects: ["Biology","Microbiology","Biochemistry","Molecular Biology","Genetics","Abiogenesis Studies"],
    foundation: "Built on: Chemistry, Geography (environments), Geology",
    detail: "The transition from chemistry to biology is the most profound phase transition in the universe's history. RNA molecules begin self-replicating. Lipid membranes form protocells. Anaerobic bacteria dominate for billions of years, slowly transforming Earth's chemistry. Photosynthesis evolves, pumping oxygen into the atmosphere (the Great Oxidation Event ~2.4 Bya), which is essentially biology reshaping geography and chemistry. This feedback loop — where life changes its own environment — becomes a recurring theme all the way to human climate change."
  },
  {
    era: "~600 Million Years Ago",
    title: "Layer 6 — Evolutionary Biology & Ecology",
    narrative: "Multicellular life explodes in the Cambrian. Ecosystems form. Evolution by natural selection becomes the engine of biological complexity.",
    subjects: ["Evolutionary Biology","Ecology","Paleontology","Taxonomy","Marine Biology","Zoology","Botany","Mycology"],
    foundation: "Built on: Biology, Genetics, Geography, Geology",
    detail: "The Cambrian Explosion fills oceans with complex animals in just 20 million years. Geography drives evolution — continental drift isolates populations, creating unique species (Australia's marsupials, Madagascar's lemurs). Mass extinctions (caused by geology/astronomy — volcanism, asteroids) reset the evolutionary board repeatedly. The interplay of geography + biology + time produces Earth's staggering biodiversity. Ecology studies how organisms interact — a precursor to understanding human societies, economics (resource competition), and even game theory."
  },
  {
    era: "~400 Million → 66 Million Years Ago",
    title: "Layer 7 — Botany, Zoology & the Age of Giants",
    narrative: "Plants colonize land, followed by insects, amphibians, reptiles. Dinosaurs reign for 165 million years. Flowering plants transform ecosystems.",
    subjects: ["Botany","Zoology","Entomology","Herpetology","Ornithology","Paleobotany","Forestry"],
    foundation: "Built on: Evolutionary Biology, Ecology, Geography, Climatology",
    detail: "Plants moving to land (~470 Mya) fundamentally altered Earth's geography — roots prevented erosion, forests changed atmospheric CO₂/O₂ balance, and new ecosystems emerged. Flowering plants (angiosperms, ~130 Mya) co-evolved with pollinators, creating the food webs that would later sustain human agriculture. The dinosaur extinction (66 Mya, asteroid impact) — an astronomy event affecting geology affecting biology — opened the niche for mammals. Without that asteroid, no primates, no humans, no civilization."
  },
  {
    era: "~7 Million → 300,000 Years Ago",
    title: "Layer 8 — Anthropology & Human Origins",
    narrative: "Primates evolve. Bipedalism frees hands. Brains expand. Tool use begins. Homo sapiens emerge in Africa — the species that will study everything else.",
    subjects: ["Anthropology","Physical Anthropology","Anatomy","Physiology","Neuroscience","Primatology"],
    foundation: "Built on: Evolutionary Biology, Geography (African Rift Valley), Ecology",
    detail: "Geography again plays kingmaker: the East African Rift Valley's tectonic activity created a drying climate that forced forest-dwelling primates into savannas, selecting for bipedalism, larger brains, and social cooperation. Fire (~1 Mya) enabled cooking, which increased caloric intake and fueled brain growth. Tool-making required spatial reasoning — proto-engineering. Social hunting required communication — proto-language. Every subsequent human subject traces back to these cognitive leaps in the African savanna."
  },
  {
    era: "~100,000 → 40,000 Years Ago",
    title: "Layer 9 — Language, Art & Symbolic Thought",
    narrative: "Humans develop complex language, create cave paintings, carve figurines, and make music. Symbolic thought enables culture to be transmitted across generations.",
    subjects: ["Linguistics","Semiotics","Fine Arts","Music","Dance","Aesthetics","Communication Studies","Oral Tradition"],
    foundation: "Built on: Anthropology, Neuroscience, Social living",
    detail: "Language is the meta-technology that enables ALL other human subjects to exist. Without language, knowledge dies with each individual. With it, knowledge accumulates across generations — cultural evolution overtakes biological evolution in speed. Cave paintings at Lascaux (~17,000 ya) show abstract representation. Bone flutes (~40,000 ya) prove music. Decorative beads show social identity. Art, music, and dance served social bonding, ritual, and knowledge transmission — they are not luxuries but survival technologies. Every performing art today descends from this firelit origin."
  },
  {
    era: "~12,000 Years Ago",
    title: "Layer 10 — Agriculture & the Neolithic Revolution",
    narrative: "Humans stop wandering and start farming. This single shift — enabled by geography and botany — creates surplus, settlement, and the birth of civilization.",
    subjects: ["Agricultural Science","Animal Husbandry","Horticulture","Soil Science","Veterinary Science","Food Science","Nutrition"],
    foundation: "Built on: Geography (Fertile Crescent), Botany, Zoology, Climatology",
    detail: "Why did agriculture start in the Fertile Crescent? Geography: wild wheat and barley grew there naturally. Why not sub-Saharan Africa first? Geography: fewer domesticable plants and animals (Jared Diamond's thesis). Agriculture created food surplus → surplus enabled non-food specialists (priests, artisans, soldiers, scribes) → specialization enabled civilization. Every subsequent human institution — religion, government, armies, universities — exists because farmers grew enough food to feed non-farmers. Agriculture is the economic Big Bang."
  },
  {
    era: "~5,000 Years Ago",
    title: "Layer 11 — Mathematics & Formal Logic",
    narrative: "Counting grain, measuring land, tracking stars — practical needs birth mathematics. Numbers become humanity's most powerful abstract tool.",
    subjects: ["Mathematics","Arithmetic","Geometry","Algebra","Number Theory","Logic","Statistics","Calculus (later)"],
    foundation: "Built on: Agriculture (counting surplus), Astronomy (calendars), Trade (accounting)",
    detail: "Mathematics didn't emerge from pure abstraction — it emerged from geography and agriculture. Egyptians needed geometry to re-survey Nile flood plains annually. Babylonians needed arithmetic to track grain stores and trade debts. Astronomy required sophisticated math for calendar-making. Math then fed BACK into every science: physics became mathematical physics, biology gained biostatistics, economics got econometrics. Mathematics is the universal language that lets all other sciences communicate precisely. It's the subject that turbocharged every other subject."
  },
  {
    era: "~5,000 Years Ago",
    title: "Layer 12 — Writing, History & Record-Keeping",
    narrative: "Cuneiform, hieroglyphics, then alphabets — writing externalizes memory. History as a discipline begins. Knowledge can now outlive its creator.",
    subjects: ["History","Literature","Historiography","Library Science","Archival Science","Philology","Journalism (later)"],
    foundation: "Built on: Language, Agriculture (bureaucracy needs), Trade (record-keeping), Mathematics",
    detail: "Writing was invented for accounting, not poetry. Sumerian cuneiform tracked grain, debts, and trade. But once invented, writing enabled law codes (Hammurabi), literature (Gilgamesh), religious texts, and historical records. History as a formal discipline lets societies learn from the past. Literature enabled empathy across cultures and eras. Every academic field today depends on writing for publication, peer review, and cumulative knowledge-building. The printing press (1440) and internet (1990s) were writing's great amplifiers."
  },
  {
    era: "~5,000 → 3,000 Years Ago",
    title: "Layer 13 — Engineering, Architecture & Craft",
    narrative: "Pyramids, ziggurats, aqueducts, roads — humans reshape geography itself. Engineering applies physics and math to transform the material world.",
    subjects: ["Civil Engineering","Mechanical Engineering","Architecture","Metallurgy","Textile Science","Urban Planning","Construction"],
    foundation: "Built on: Physics, Mathematics, Geology (materials), Geography (site selection)",
    detail: "Engineering is applied physics + applied mathematics + applied geology. The Egyptians' geometry built pyramids. Roman concrete (chemistry!) built the Pantheon. Iron smelting (metallurgy from chemistry + geology) created plows that transformed agriculture, and swords that transformed warfare. Architecture created cities — fundamentally reshaping human social organization. Urban planning emerged because dense populations needed sanitation, water supply, and fire management. Every modern STEM career in engineering traces back to these ancient builders."
  },
  {
    era: "~4,000 Years Ago",
    title: "Layer 14 — Trade, Economics & Finance",
    narrative: "Surplus creates trade. Trade creates money. Money creates banking. Geography determines trade routes. Economics — the study of scarcity — is born.",
    subjects: ["Economics","Commerce","Finance","Accounting","Banking","International Trade","Supply Chain","Actuarial Science"],
    foundation: "Built on: Geography (trade routes), Agriculture (surplus), Mathematics (accounting), Metallurgy (coinage)",
    detail: "Geography wrote the rules of economics: the Silk Road followed mountain passes and oases. Mediterranean trade followed coastlines. Rivers (Nile, Indus, Yangtze) were the first highways. Money evolved from barter → commodity money (grain, cattle) → metal coins (metallurgy!) → paper money → digital currency. Each step required more math and trust-systems. Economics studies how societies allocate scarce resources — a question that biology (ecology) has been solving since the Cambrian, just without conscious agents. Modern finance, stock markets, and global trade are descendants of a Sumerian farmer trading grain for obsidian."
  },
  {
    era: "~3,000 Years Ago",
    title: "Layer 15 — Philosophy, Religion & Ethics",
    narrative: "Surplus and leisure enable abstract thought. Humans ask: What is truth? What is good? What happens after death? Philosophy becomes the mother of all sciences.",
    subjects: ["Philosophy","Theology","Ethics","Metaphysics","Epistemology","Religious Studies","Mythology"],
    foundation: "Built on: Language, Agriculture (leisure), Social complexity, Writing",
    detail: "Philosophy literally means 'love of wisdom.' In Greece, India, and China simultaneously (~600-400 BCE, the Axial Age), thinkers like Socrates, Buddha, Confucius, and Laozi asked foundational questions. Philosophy BIRTHED nearly every academic discipline: Natural Philosophy → Physics + Chemistry. Moral Philosophy → Ethics + Political Science. Logic → Mathematics + Computer Science. Philosophy of Mind → Psychology + Cognitive Science. Every PhD is a 'Doctor of Philosophy' because philosophy was once the container for ALL systematic inquiry."
  },
  {
    era: "~2,500 Years Ago",
    title: "Layer 16 — Medicine & Health Sciences",
    narrative: "From shamanic healing to Hippocrates — medicine separates from magic. Understanding the human body requires biology, chemistry, and careful observation.",
    subjects: ["Medicine","Surgery","Pharmacology","Public Health","Epidemiology","Nursing","Dentistry","Ayurveda","Traditional Medicine"],
    foundation: "Built on: Biology, Chemistry, Botany (herbal medicine), Philosophy (observation method), Anatomy",
    detail: "Ancient medicine was botany + trial-and-error: which plants heal, which kill? Hippocrates (~400 BCE) shifted medicine from supernatural to natural explanations — applying philosophy's rational method to the body. Anatomy required dissection (overcoming religious/cultural taboos). Germ theory (1800s) married biology + chemistry. Modern medicine integrates nearly every science: physics (imaging, radiation therapy), chemistry (drugs), biology (genetics), engineering (prosthetics), statistics (clinical trials), psychology (mental health). Medicine is perhaps the most integrative field in existence."
  },
  {
    era: "~2,500 Years Ago",
    title: "Layer 17 — Political Science, Law & Governance",
    narrative: "Cities need rules. Empires need administration. Democracy, monarchy, republic — humans experiment with organizing power.",
    subjects: ["Political Science","Law","Jurisprudence","Public Administration","Diplomacy","International Relations","Criminology"],
    foundation: "Built on: Philosophy (ethics, justice), Agriculture (states), Economics (taxation), Writing (law codes), Geography (borders)",
    detail: "Governance is applied philosophy + applied geography. Hammurabi's Code (1754 BCE) was among the first written laws. Athenian democracy, Roman republicanism, Chinese bureaucracy — different geographies produced different governance models. Mountains isolate (Greek city-states), rivers unify (Egyptian pharaohs), steppes create empires (Mongols). Law evolved from religious codes → royal decrees → constitutional law → international law. Modern political science studies power — who has it, how it's used, and how it's checked — questions first asked by Plato and Aristotle."
  },
  {
    era: "~2,000 Years Ago",
    title: "Layer 18 — Education & Pedagogy",
    narrative: "Knowledge must be transmitted systematically. From Plato's Academy to medieval universities — education becomes a formal institution.",
    subjects: ["Education","Pedagogy","Curriculum Design","Library Science","Educational Psychology","Special Education"],
    foundation: "Built on: Philosophy, Writing, Mathematics, All prior knowledge fields",
    detail: "Education is the meta-subject — it's how ALL other subjects reproduce and evolve. Plato's Academy (~387 BCE), Nalanda University (~5th century CE), Al-Azhar (~970 CE), Bologna (~1088 CE) — each was a geography-specific response to accumulated knowledge needing systematic transmission. The printing press (1440) democratized education. Public schooling (1800s) created mass literacy. The modern university system with departments mirrors our subject taxonomy. Education studies how humans learn — connecting psychology, neuroscience, sociology, and every content domain."
  },
  {
    era: "~500 Years Ago",
    title: "Layer 19 — The Scientific Revolution & Modern Sciences",
    narrative: "Copernicus, Galileo, Newton — the scientific method emerges. Observation + mathematics + experimentation = a revolution in understanding reality.",
    subjects: ["Scientific Method","Modern Physics","Modern Chemistry","Modern Biology","Optics","Mechanics","Taxonomy"],
    foundation: "Built on: Philosophy (logic, empiricism), Mathematics, Ancient astronomy/physics/chemistry/biology",
    detail: "The Scientific Revolution (1500-1700) didn't create new subjects so much as transform HOW all subjects operated. The key innovation: systematic doubt + controlled experimentation + mathematical modeling. Galileo applied math to motion. Newton unified earthly and celestial physics. Lavoisier created modern chemistry by rigorous measurement. Linnaeus systematized biology through taxonomy. This method would eventually be applied to psychology, economics, sociology, and political science — transforming humanities into social sciences."
  },
  {
    era: "~250 Years Ago",
    title: "Layer 20 — Industrial Revolution & Applied Sciences",
    narrative: "Steam, steel, electricity — science becomes technology. Engineering scales up. New disciplines emerge at the intersection of theory and application.",
    subjects: ["Thermodynamics","Electrical Engineering","Chemical Engineering","Industrial Engineering","Mechanical Engineering","Textile Engineering","Transportation Engineering"],
    foundation: "Built on: Physics (thermodynamics, electromagnetism), Chemistry (materials), Mathematics, Economics (demand)",
    detail: "The Industrial Revolution is where physics and chemistry became engineering at scale. Watt's steam engine applied thermodynamics. Faraday's discoveries birthed electrical engineering. Bessemer's process made cheap steel (chemistry + metallurgy). This created entirely new economic structures: factories, wage labor, urbanization, the middle class. It spawned labor economics, sociology, urban planning, environmental science, and public health as mass problems. Geography again mattered: coal deposits determined which regions industrialized first (Britain, Ruhr Valley, Pennsylvania)."
  },
  {
    era: "~200 Years Ago",
    title: "Layer 21 — Social Sciences Formalize",
    narrative: "Humanity turns the scientific lens on itself. Psychology, sociology, and economics become rigorous disciplines studying human behavior and society.",
    subjects: ["Psychology","Sociology","Anthropology (modern)","Economics (modern)","Demographics","Social Work","Behavioral Science","Cognitive Science"],
    foundation: "Built on: Philosophy, Biology (evolution applied to behavior), Mathematics (statistics), Medicine (psychiatry)",
    detail: "The social sciences apply the scientific method to human behavior — a project philosophy began but couldn't complete without statistics and controlled experiments. Wundt's psychology lab (1879), Durkheim's sociology, Marx's economics, Darwin's influence on social thought — all attempted to find laws governing human societies. These fields bridge the STEM/humanities divide: they use mathematical tools (statistics) to study humanistic questions (why do people believe, organize, trade, fight?). Geography remains foundational: Durkheim studied suicide rates by region, economists study development by geography."
  },
  {
    era: "~150 Years Ago",
    title: "Layer 22 — Modern Medicine & Life Sciences Revolution",
    narrative: "Germ theory, genetics, X-rays — medicine and biology enter their modern era. Life sciences become increasingly molecular and mathematical.",
    subjects: ["Genetics","Immunology","Bacteriology","Virology","Radiology","Anesthesiology","Biotechnology","Pharmacology (modern)","Biostatistics"],
    foundation: "Built on: Biology, Chemistry, Physics (imaging), Mathematics (statistics), Engineering (instruments)",
    detail: "Pasteur and Koch prove germ theory (biology + chemistry). Mendel discovers genetics (biology + mathematics). Röntgen discovers X-rays (physics → medicine). Fleming discovers penicillin (microbiology + chemistry). Watson & Crick decode DNA (chemistry + biology + physics). Each breakthrough shows how medicine is the ultimate convergence discipline. Modern healthcare is impossible without physics (MRI, radiation), chemistry (drugs), biology (understanding disease), engineering (devices), statistics (clinical trials), and even computer science (genomics, health informatics)."
  },
  {
    era: "~80 Years Ago",
    title: "Layer 23 — Computer Science & Information Age",
    narrative: "Turing, von Neumann, and Shannon create the theoretical foundations. Computers transform every field — a new meta-tool as powerful as writing or mathematics.",
    subjects: ["Computer Science","Information Theory","Cybernetics","Software Engineering","Database Systems","Algorithms","Programming Languages","Information Systems"],
    foundation: "Built on: Mathematics (logic, algorithms), Physics (electronics), Engineering (hardware), Philosophy (logic)",
    detail: "Computer Science descends from mathematics (Turing, Gödel, Church) and electronic engineering (vacuum tubes, transistors — physics + materials science). It becomes the most transformative meta-tool since writing and mathematics. Computers don't just create a new field — they revolutionize EVERY existing field: computational physics, bioinformatics, digital humanities, algorithmic trading, computer-aided design. Just as writing externalized memory and math externalized reasoning, computers externalize computation — amplifying every intellectual endeavor by orders of magnitude."
  },
  {
    era: "~60 Years Ago",
    title: "Layer 24 — Space Age, Environment & Interdisciplinary Fields",
    narrative: "Humanity reaches space, sees Earth as one system, and confronts environmental limits. New fields emerge at the intersection of existing ones.",
    subjects: ["Aerospace Engineering","Environmental Science","Ecology (modern)","Climate Science","Remote Sensing","Oceanography (modern)","Sustainability Studies","Biomedical Engineering","Mechatronics"],
    foundation: "Built on: Physics, Chemistry, Biology, Engineering, Computer Science, Geography",
    detail: "The Space Age applied physics + engineering + computer science to leave Earth — and paradoxically, the greatest insight was looking BACK. Seeing Earth from space birthed the environmental movement. Climate science combines atmospheric physics + chemistry + oceanography + geology + biology + computer modeling. Biomedical engineering merges biology + engineering. Mechatronics merges mechanical + electrical + computer engineering. This era proves that the future of knowledge is INTERDISCIPLINARY — the most important problems sit at the boundaries between traditional fields."
  },
  {
    era: "~30 Years Ago",
    title: "Layer 25 — Digital Revolution & Information Society",
    narrative: "The Internet connects all human knowledge. New fields emerge around digital life: data science, cybersecurity, digital media, e-commerce.",
    subjects: ["Data Science","Cybersecurity","Web Development","Digital Marketing","E-Commerce","UX Design","Social Media Studies","Network Science","Cloud Computing"],
    foundation: "Built on: Computer Science, Mathematics (statistics), Psychology (UX), Economics (digital markets), Communication",
    detail: "The Internet (built on physics of fiber optics + computer science of TCP/IP + engineering of global infrastructure) creates an entirely new layer of human civilization — the digital layer. This spawns fields that would be unintelligible to someone from even 50 years ago: SEO, UX design, cloud architecture, influencer marketing, cryptocurrency. Data Science merges statistics + computer science + domain expertise. Cybersecurity combines CS + psychology (social engineering) + law + international relations. The digital revolution proves that new technologies don't just solve problems — they create entire new categories of knowledge."
  },
  {
    era: "Now & Near Future",
    title: "Layer 26 — Frontier Sciences & The Knowledge Singularity",
    narrative: "AI, quantum computing, genomics, nanotechnology — we approach a point where machines help generate new knowledge faster than humans alone ever could.",
    subjects: ["Artificial Intelligence","Machine Learning","Quantum Computing","Genomics/CRISPR","Nanotechnology","Blockchain","Neurotechnology","Synthetic Biology","Astrobiology","Space Mining"],
    foundation: "Built on: Everything before — these are the apex of cumulative knowledge",
    detail: "Every frontier science sits atop the ENTIRE knowledge tree. AI requires: mathematics (linear algebra, calculus, statistics) + computer science + philosophy (logic, ethics) + neuroscience (neural networks inspired by brains) + linguistics (NLP) + psychology (reinforcement learning) + domain knowledge. Quantum Computing needs: quantum physics + mathematics + engineering + computer science. CRISPR needs: molecular biology + genetics + chemistry + ethics + law. These fields prove the thesis: modern knowledge is DEEPLY layered, and every layer depends on the ones below it. We stand on 13.8 billion years of accumulated complexity."
  }
];
